import { combineReducers } from "redux";
import * as HandleException from "./HandleException";
import * as User from "./User";
import * as Topics from "./Topics";
import * as Brands from "./Brands";
import * as MyTrove from "./MyTrove";

const reducer = combineReducers(Object.assign(HandleException, User, Topics, Brands, MyTrove));
export default reducer;
