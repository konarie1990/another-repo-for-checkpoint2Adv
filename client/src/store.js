import state from "./state";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default createStore(reducers, state, applyMiddleware(thunk));
