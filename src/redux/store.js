import { createStore, combineReducers } from 'redux';
import userReducer from "./user/reducer";


const rootReducer = combineReducers({
    userReducer,
});

const store = createStore(rootReducer);

export { store }