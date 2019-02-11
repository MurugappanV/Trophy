import { combineReducers } from "redux";
import * as HandleException from "./HandleException";
import * as User from "./User";
import * as Topics from "./Topics";
import * as Brands from "./Brands";
import * as MyTrove from "./MyTrove";
import * as ArticleDisplay from "./ArticleDisplay";
import * as StartUp from "./StartUp";

const reducer = combineReducers(
	Object.assign(HandleException, User, Topics, Brands, MyTrove, StartUp),
);
	Object.assign(HandleException, User, Topics, Brands, MyTrove, ArticleDisplay),
export default reducer;
