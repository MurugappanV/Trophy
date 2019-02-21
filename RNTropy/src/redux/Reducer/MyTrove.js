import Types from "../Types";
import createReducer from "./CreateReducer";
import { Constants } from "../../asset";

const initialMyTrove = {};

export const myTrove = createReducer(initialMyTrove, {
	[Types.myTrove.SET_MY_TROVE](state, action) {
		return {
			...state,
			[action.data.tid]: manipulateMyTrove(action.data.tid, action.data.list),
		};
	},
	[Types.myTrove.CLEAR_MY_TROVE](state, action) {
		return {
			[action.data.tid]: [],
		};
	},
});

const manipulateMyTrove = (tid: number, list: any) => {
	const myTroveArray = [];
	if (tid != 0) {
		myTroveArray.push({
			title: Constants.articleListSections.empty,
			data: list,
		});
	} else if (list) {
		if (list.stories_list != null && list.stories_list.length > 0) {
			myTroveArray.push({
				title: Constants.articleListSections.topStories,
				data: list.stories_list.slice(0, Constants.myTrove.first),
			});
		}
		if (list.editors_choice != null && list.editors_choice.length > 0) {
			myTroveArray.push({
				title: Constants.articleListSections.editorial,
				data: [list.editors_choice],
			});
		}
		if (list.stories_list != null && list.stories_list.length > Constants.myTrove.first) {
			myTroveArray.push({
				title: Constants.articleListSections.empty,
				data: list.stories_list.slice(Constants.myTrove.first, Constants.myTrove.second),
			});
		}
		if (list.podcast != null && list.podcast.length > 0) {
			myTroveArray.push({
				title: Constants.articleListSections.podcast,
				data: [list.podcast],
			});
		}
		if (list.stories_list != null && list.stories_list.length > Constants.myTrove.second) {
			myTroveArray.push({
				title: Constants.articleListSections.empty,
				data: list.stories_list.slice(Constants.myTrove.second, Constants.myTrove.third),
			});
		}
		if (list.videos != null && list.videos.length > 0) {
			myTroveArray.push({
				title: Constants.articleListSections.videos,
				data: [list.videos],
			});
		}
		if (list.stories_list != null && list.stories_list.length > Constants.myTrove.third) {
			myTroveArray.push({
				title: Constants.articleListSections.empty,
				data: list.stories_list.slice(Constants.myTrove.third),
			});
		}
	}
	return myTroveArray;
};
