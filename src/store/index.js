import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { photoReducer } from "./reducers/photoReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  photoModule: photoReducer,
});

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

window.store = store;
