import {ANIMES_LOADED, DATA_REQUESTED, FETCHING_ERROR} from "../action-types/ActionTypes";

const animesLoaded = (newAnimes) => {
    return {
        type: ANIMES_LOADED,
        payload: newAnimes
    }
};

const dataRequested = () => {
    return {
        type: DATA_REQUESTED
    }
};

const fetchingError = (error) => {
    return {
        type: FETCHING_ERROR,
        payload: error
    }
};

export {
    animesLoaded,
    dataRequested,
    fetchingError
};