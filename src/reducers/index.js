import {ANIMES_LOADED} from "../action-types/ActionTypes";

const initialState = {
    animes: [],
    loading: true
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ANIMES_LOADED:
            return {
                animes: action.payload,
                loading: false
            };
        default:
            return state;
    }
};

export default reducer;