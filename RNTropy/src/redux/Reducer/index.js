import { combineReducers } from "redux";
import * as HandleException from "./HandleException";
import * as User from "./User";
import * as Topics from "./Topics";

const reducer = combineReducers(Object.assign(HandleException, User, Topics));
export default reducer;
