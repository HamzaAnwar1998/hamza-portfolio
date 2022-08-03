import { combineReducers } from "redux";
import operationsReducer from "./reducers/operations";
import youtubeReducer from "./reducers/YoutubeReducer";

const rootReducer = combineReducers({
    operationsReducer,
    youtubeReducer
})

export default rootReducer;