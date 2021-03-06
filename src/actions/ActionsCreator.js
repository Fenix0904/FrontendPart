import {
    CLOSE_MODAL,
    FETCH_ANIME_SUCCESS,
    FETCH_ANIMES_SUCCESS,
    FETCH_DATA_REQUESTED,
    FETCH_ERROR, FETCH_ANIME_SUB_DATA, OPEN_MODAL, ADD_NEW_ANIME, EDIT_ANIME, UPDATE_ANIME, CLEAR_EDIT_FORM
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

const openModal = () => {
    return {
        type: OPEN_MODAL
    }
};

const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
};

const fetchGenreList = (service, dispatch) => {
    dispatch(dataRequested());
    service.getGenresList()
        .then((genres) => dispatch(fetchGenresSuccess(genres)));
};

const fetchSeasonList = (service, dispatch) => {
    dispatch(dataRequested());
    service.getSeasonsList()
        .then((seasons) => dispatch(fetchSeasonsSuccess(seasons)));
};

const fetchAnimeTypeList = (service, dispatch) => {
    dispatch(dataRequested());
    service.getTypesList()
        .then((types) => dispatch(fetchAnimeTypesSuccess(types)));
};

const fetchGenresSuccess = (genres) => {
    return {
        type: FETCH_ANIME_SUB_DATA,
        payload: {
            field: 'genres',
            data: genres
        }
    }
};

const fetchSeasonsSuccess = (seasons) => {
    return {
        type: FETCH_ANIME_SUB_DATA,
        payload: {
            field: 'seasons',
            data: seasons
        }
    }
};

const fetchAnimeTypesSuccess = (types) => {
    return {
        type: FETCH_ANIME_SUB_DATA,
        payload: {
            field: 'types',
            data: types
        }
    }
};

const createNewAnime = (service, dispatch, anime) => {
    dispatch(addNewAnime());
    return service.addNewAnime(anime)
};

const updateAnime = (service, dispatch, anime) => {
    const action = {
        type: UPDATE_ANIME
    };
    dispatch(action);
    return service.updateAnime(anime)
};

const addNewAnime = () => {
    return {
        type: ADD_NEW_ANIME,
    }
};

const deleteAnime = (id, service) => {
    return service.deleteAnime(id);
};

const editAnime = (id) => {
    return {
        type: EDIT_ANIME
    }
};

const clearState = (dispatch) => {
    dispatch({
        type: CLEAR_EDIT_FORM
    });
};

export {
    fetchAnimes,
    fetchAnimeById,
    openModal,
    closeModal,
    fetchGenreList,
    fetchSeasonList,
    fetchAnimeTypeList,
    createNewAnime,
    deleteAnime,
    editAnime,
    updateAnime,
    clearState
};