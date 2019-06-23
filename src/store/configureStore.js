import { createStore, combineReducers } from 'redux';
import placesRedcer from './reducers/places'

const rootReducer = combineReducers({
    places: placesRedcer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
