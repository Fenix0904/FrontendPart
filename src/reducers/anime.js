import {ADD_GENRE_TO_ANIME, REMOVE_GENRE_FROM_ANIME} from "../action-types/ActionTypes";

export const updateLocalAnime = (state, action) => {
    switch (action.type) {
        case ADD_GENRE_TO_ANIME:
            if (action.payload === 'default') {
                return {
                    ...state
                }
            }
            const genre = {
                id: state.genres.find(el => el.genre.toLowerCase() === action.payload.toLowerCase()).id,
                genre: action.payload
            };
            if (state.anime.genres.findIndex(el => el.id === genre.id) >= 0) {
                return {
                    ...state
                }
            }
            return {
                ...state,
                anime: {
                    ...state.anime,
                    genres: [
                        ...state.anime.genres,
                        genre
                    ]
                }
            };
        case REMOVE_GENRE_FROM_ANIME:
            return {
                ...state,
                anime: {
                    ...state.anime,
                    genres: [
                        ...state.anime.genres.slice(0, action.payload),
                        ...state.anime.genres.slice(action.payload + 1),
                    ]
                }
            };
    }
};