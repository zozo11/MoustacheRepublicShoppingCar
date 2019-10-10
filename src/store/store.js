import {applyMiddleware, compose, createStore} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const enhancers = [];
const middleware = [thunk];


const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);
const store = createStore(reducer, composedEnhancers); 

export default  store;