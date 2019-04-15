import {
    FETCH_ANIME_SUCCESS,
    FETCH_ANIMES_SUCCESS,
    FETCH_DATA_REQUESTED,
    FETCH_ERROR
} from "../action-types/ActionTypes";

export const updateAnimeList = (state, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUESTED:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ANIMES_SUCCESS:
            return {
                ...state,
                animes: action.payload,
                loading: false,
                error: null
            };
        case FETCH_ANIME_SUCCESS:
            return {
                ...state,
                animes: [
                    action.payload
                ],
                loading: false,
                error: null
            };
        case FETCH_ERROR:
            return {
                ...state,
                animes: [],
                loading: false,
                error: action.payload
            };
    }
};