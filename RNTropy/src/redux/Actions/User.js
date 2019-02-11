import Types from "../Types";

export function setUserAction(user) {
	return (dispatch, getState) => {
		dispatch({ type: Types.user.SET_USER, user });
	};
}

export function clearUserAction() {
	return (dispatch, getState) => {
		dispatch({ type: Types.user.CLEAR_USER });
	};
}
