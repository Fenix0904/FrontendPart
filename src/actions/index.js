import {
    FETCH_ANIME_SUCCESS,
    FETCH_ANIMES_SUCCESS,
    FETCH_DATA_REQUESTED,
    FETCH_ERROR
} from "../action-types/ActionTypes";

const animesLoaded = (newAnimes) => {
    return {
        type: FETCH_ANIMES_SUCCESS,
        payload: newAnimes
    }
};

const animeLoaded = (newAnime) => {
    return {
        type: FETCH_ANIME_SUCCESS,
        payload: newAnime
    }
};

const dataRequested = () => {
    return {
        type: FETCH_DATA_REQUESTED
    }
};

const fetchingError = (error) => {
    return {
        type: FETCH_ERROR,
        payload: error
    }
};

const fetchAnimes = (service, dispatch) => () => {
    dispatch(dataRequested());
    service.getAllAnimes()
        .then((data) => dispatch(animesLoaded(data)))
        .catch((error) => dispatch(fetchingError(error)));
};

const fetchAnimeById = (service, dispatch, id) => {
    dispatch(dataRequested());
    service.getAnimeById(id)
        .then((data) => dispatch(animeLoaded(data)))
        .catch((error) => dispatch(fetchingError(error)));
};

export {
    fetchAnimes,
    fetchAnimeById
};