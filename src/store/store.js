// Pure magic ahead! Creates the store and applies middleware.
import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk))
);

export default store;