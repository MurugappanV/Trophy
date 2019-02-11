import * as UserActions from "./User";
import * as TopicsActions from "./Topics";
import * as BrandsActions from "./Brands";
import * as MyTroveActions from "./MyTrove";
import * as ArticleDisplayActions from "./ArticleDisplay";
import * as StartUpActions from "./StartUp";

const Actions = Object.assign(
	{},
	UserActions,
	TopicsActions,
	BrandsActions,
	MyTroveActions,
	StartUpActions,
	ArticleDisplayActions,

export default Actions;
