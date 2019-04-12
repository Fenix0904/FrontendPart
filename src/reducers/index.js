import {
    CLOSE_MODAL,
    FETCH_ANIME_SUCCESS,
    FETCH_ANIMES_SUCCESS,
    FETCH_DATA_REQUESTED,
    FETCH_ERROR, OPEN_MODAL
} from "../action-types/ActionTypes";

const initialState = {
    isModalOpen: false,
    animes: [],
    loading: true,
    error: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUESTED:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ANIMES_SUCCESS:
            return {
                animes: action.payload,
                loading: false,
                error: null
            };
        case FETCH_ANIME_SUCCESS:
            return {
                animes: [
                    action.payload
                ],
                loading: false,
                error: null
            };
        case FETCH_ERROR:
            return {
                animes: [],
                loading: false,
                error: action.payload
            };
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