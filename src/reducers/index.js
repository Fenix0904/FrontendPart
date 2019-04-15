import {
    ADD_GENRE_TO_ANIME,
    CLOSE_MODAL,
    FETCH_ANIME_SUCCESS,
    FETCH_ANIMES_SUCCESS,
    FETCH_DATA_REQUESTED,
    FETCH_ERROR, OPEN_MODAL, REMOVE_GENRE_FROM_ANIME
} from "../action-types/ActionTypes";
import {updateLocalAnime} from "./anime";
import {updateAnimeList} from "./animeList";

const initialState = {
    isModalOpen: false,
    animes: [],
    loading: true,
    error: null,
    genres: [
        {id: 1, genre: "Action"},
        {id: 2, genre: "Romance"},
        {id: 3, genre: "Isekai"},
        {id: 4, genre: "Horror"},
        {id: 5, genre: "Drama"},
        {id: 6, genre: "Fantasy"}
    ],
    anime: {
        genres: []
    }
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUESTED:
        case FETCH_ANIMES_SUCCESS:
        case FETCH_ANIME_SUCCESS:
        case FETCH_ERROR:
            return updateAnimeList(state, action);
        case ADD_GENRE_TO_ANIME:
        case REMOVE_GENRE_FROM_ANIME:
            return updateLocalAnime(state, action);
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
        default:
            return state;
    }
};

export default reducer;