import {
    FETCH_ANIME_SUCCESS,
    FETCH_ANIMES_SUCCESS,
    FETCH_DATA_REQUESTED,
    FETCH_ERROR
} from "../action-types/ActionTypes";

const initialState = {
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
                    ...action.payload
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
        default:
            return state;
    }
};

export default reducer;