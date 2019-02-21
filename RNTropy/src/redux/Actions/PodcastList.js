import Types from "../Types";

export function setPodcastList(list) {
	return (dispatch, getState) => {
		dispatch({ type: Types.podcast.SET_PODCAST_LIST, data: { list } });
	};
}

export function clearPodcastList() {
	return (dispatch, getState) => {
		dispatch({ type: Types.podcast.CLEAR_PODCAST_LIST });
	};
}

export function setPodcastChaptor(chaptor) {
	return (dispatch, getState) => {
		dispatch({ type: Types.podcast.SET_PODCAST_CHAPTOR, data: { chaptor } });
	};
}

export function clearPodcastChaptor() {
	return (dispatch, getState) => {
		dispatch({ type: Types.podcast.CLEAR_PODCAST_CHAPTOR });
	};
}

export function setPodcastView(list) {
	return (dispatch, getState) => {
		dispatch({ type: Types.podcast.SET_PODCAST_VIEW, data: { list } });
	};
}

export function setPlay(value) {
	return (dispatch, getState) => {
		dispatch({ type: Types.podcast.SET_PLAY, data: { value } });
	};
}
