import {ANIMES_LOADED, DATA_REQUESTED, FETCHING_ERROR} from "../action-types/ActionTypes";

const initialState = {
    animes: [],
    loading: true,
    error: null
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA_REQUESTED:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ANIMES_LOADED:
            return {
                animes: action.payload,
                loading: false,
                error: null
            };
        case FETCHING_ERROR:
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