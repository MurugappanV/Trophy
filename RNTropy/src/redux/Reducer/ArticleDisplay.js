import Types from "../Types";
import createReducer from "./CreateReducer";

const initialSelectedBrands = [];

export const articleDisplay = createReducer(null, {
	[Types.articleDisplay.SET_ARTICLE_DISPLAY](state, action) {
		console.log("data", action.data.articles.data);
		return { ...action.data.articles.data };
	},
	[Types.articleDisplay.CLEAR_ARTICLE_DISPLAY]() {
		return null;
	},
});
