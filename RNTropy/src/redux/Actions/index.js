import * as UserActions from "./User";
import * as TopicsActions from "./Topics";
import * as BrandsActions from "./Brands";
import * as MyTroveActions from "./MyTrove";

const Actions = Object.assign({}, UserActions, TopicsActions, BrandsActions, MyTroveActions);

export default Actions;
