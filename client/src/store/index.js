import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import editorReducer from "./reducers/editorReducer";
const store = createStore(editorReducer, applyMiddleware(thunk));
export default store;
