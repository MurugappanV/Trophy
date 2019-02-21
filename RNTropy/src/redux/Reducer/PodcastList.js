import Types from "../Types";
import createReducer from "./CreateReducer";

const initialList = {};

export const podcastList = createReducer(initialList, {
	[Types.podcast.SET_PODCAST_LIST](state, action) {
		return { ...action.data.list.data };
	},
});

export const podcastChaptor = createReducer(null, {
	[Types.podcast.SET_PODCAST_CHAPTOR](state, action) {
		return { ...action.data.chaptor.data };
	},
});

const initialViewList = {};

export const podcastView = createReducer(initialViewList, {
	[Types.podcast.SET_PODCAST_VIEW](state, action) {
		return { ...initialViewList, ...action.data.list.data };
	},
});

export const setPlay = createReducer(null, {
	[Types.podcast.SET_PLAY](state, action) {
		return action.data.value;
	},
});
