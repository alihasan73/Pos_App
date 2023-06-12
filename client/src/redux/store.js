import { combineReducers } from "redux";
import userReducer from "./auth";
import casherReducer from "./history";

const rootReducer = combineReducers({
	auth: userReducer,
	history: casherReducer,
});

export default rootReducer;
