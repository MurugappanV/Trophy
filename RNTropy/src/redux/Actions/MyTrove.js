import Types from "../Types";

export function setMyTroveAction(tid, list) {
	return (dispatch, getState) => {
		dispatch({ type: Types.myTrove.SET_MY_TROVE, data: { tid, list } });
	};
}

export function clearMyTroveAction(tid) {
	return (dispatch, getState) => {
		dispatch({ type: Types.myTrove.CLEAR_MY_TROVE, data: { tid } });
	};
}
