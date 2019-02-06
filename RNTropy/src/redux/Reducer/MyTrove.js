import Types from "../Types";
import createReducer from "./CreateReducer";
import { Constants } from "../../asset";

const initialMyTrove = [];

export const myTrove = createReducer(initialMyTrove, {
	[Types.myTrove.SET_MY_TROVE](state, action) {
		return manipulateMyTrove(action.data.list);
	},
	[Types.myTrove.CLEAR_MY_TROVE]() {
		return initialMyTrove;
	},
});

const manipulateMyTrove = (list: any) => {
	const myTroveArray = [];
	if (list.stories_list != null) {
		myTroveArray.push({
			title: Constants.articleListSections.topStories,
			data: list.stories_list.slice(0, Constants.myTrove.first),
		});
	}
	if (list.editors_choice.items != null) {
		myTroveArray.push({
			title: Constants.articleListSections.editorial,
			data: list.editors_choice.items,
		});
	}
	if (list.stories_list != null) {
		myTroveArray.push({
			title: Constants.articleListSections.empty,
			data: list.stories_list.slice(Constants.myTrove.first, Constants.myTrove.second),
		});
	}
	if (list.podcast != null) {
		myTroveArray.push({
			title: Constants.articleListSections.podcast,
			data: list.podcast,
		});
	}
	if (list.stories_list != null) {
		myTroveArray.push({
			title: Constants.articleListSections.empty,
			data: list.stories_list.slice(Constants.myTrove.second, Constants.myTrove.third),
		});
	}
	if (list.videos != null) {
		myTroveArray.push({
			title: Constants.articleListSections.videos,
			data: list.videos,
		});
	}
	if (list.stories_list != null) {
		myTroveArray.push({
			title: Constants.articleListSections.empty,
			data: list.stories_list.slice(Constants.myTrove.third),
		});
	}

	return myTroveArray;
};
