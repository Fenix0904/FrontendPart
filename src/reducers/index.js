import {
    CLOSE_MODAL,
    FETCH_ANIME_SUCCESS,
    FETCH_ANIMES_SUCCESS,
    FETCH_DATA_REQUESTED,
    FETCH_ERROR, FETCH_ANIME_SUB_DATA, OPEN_MODAL, ADD_NEW_ANIME, EDIT_ANIME
} from "../action-types/ActionTypes";
import {updateAnimeList} from "./animeList";

const initialState = {
    isModalOpen: false,
    animes: [],
    loading: true,
    error: null,
    genres: [],
    seasons: [],
    types: [],
    isEditingAnime: false
};

// TODO crear reducer code add/remove actions for better usability.
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUESTED:
        case FETCH_ANIMES_SUCCESS:
        case FETCH_ANIME_SUCCESS:
        case FETCH_ERROR:
            return updateAnimeList(state, action);
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false
            };
        case FETCH_ANIME_SUB_DATA:
            return {
                ...state,
                [action.payload.field]: action.payload.data,
                loading: false
            };
        case ADD_NEW_ANIME:
            return {
                ...state,
                loading: true
            };
        case EDIT_ANIME:
            return {
                ...state,
                isEditingAnime: true
            };
        default:
            return state;
    }
};

export default reducer;