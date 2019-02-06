import Types from "../Types";

export function setMyTroveAction(list) {
	return (dispatch, getState) => {
		dispatch({ type: Types.myTrove.SET_MY_TROVE, data: { list } });
	};
}

export function clearMyTroveAction() {
	return (dispatch, getState) => {
		dispatch({ type: Types.myTrove.CLEAR_MY_TROVE });
	};
}
