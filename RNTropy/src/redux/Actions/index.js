import * as UserActions from "./User";
import * as TopicsActions from "./Topics";
import * as BrandsActions from "./Brands";
import * as MyTroveActions from "./MyTrove";
import * as ArticleDisplayActions from "./ArticleDisplay";
import * as StartUpActions from "./StartUp";
import * as SetPodcastList from "./PodcastList";

const Actions = Object.assign(
	{},
	UserActions,
	TopicsActions,
	BrandsActions,
	MyTroveActions,
	StartUpActions,
	SetPodcastList,
	ArticleDisplayActions,
);
export default Actions;
