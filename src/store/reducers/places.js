import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'
import placeImage from '../../assets/holiday.jpg';

const initialState = {
    selectedPlace: null,
    places: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                selectedPlace: null,
                places: state.places.concat({
                    key: state.places.reduce((prev, curr) => (prev.key > curr.key ? prev.key : curr.key), 0) + 1,
                    value: action.placeName,
                    image: placeImage || {
                        uri: "https://www.thelocal.fr//userdata/images/article/e7ed5c096c888a7290ac39275aa8998880137a8b43e58fa184f6296ffddc3b6b.jpg"
                    }
                })
            };

        case DELETE_PLACE:
            return {
                ...state,
                selectedPlace: null,
                places: state.places.filter(place => place.key !== state.selectedPlace.key)
            };

        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => place.key === action.placeKey)
            };

        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };

        default:
            return state;
    };
};

export default reducer;
