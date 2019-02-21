import Types from "../Types";

export function setUserAction(user) {
	return (dispatch, getState) => {
		dispatch({ type: Types.user.SET_USER, user });
	};
}

export function setUserTopicAction(topics) {
	return (dispatch, getState) => {
		dispatch({ type: Types.user.SET_USER_TOPICS, topics });
	};
}

export function setUserBrandAction(brands) {
	return (dispatch, getState) => {
		dispatch({ type: Types.user.SET_USER_BRANDS, brands });
	};
}

export function clearUserAction() {
	return (dispatch, getState) => {
		dispatch({ type: Types.user.CLEAR_USER });
	};
}

export function setUserSubscription(brand) {
	return (dispatch, getState) => {
		dispatch({ type: Types.podcast.SET_USER_SUBSCRIPTION, brand });
	};
}
