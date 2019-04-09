import {ANIMES_LOADED} from "../action-types/ActionTypes";

const animesLoaded = (newAnimes) => {
    return {
        type: ANIMES_LOADED,
        payload: newAnimes
    }
};

export {
    animesLoaded
};