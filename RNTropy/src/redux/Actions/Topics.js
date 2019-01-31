import Types from "../Types";

export function setMenuTopicsAction(topics) {
    return (dispatch, getState) => {
        dispatch({ type: Types.topic.SET_MENU_TOPIC, data: { topics } });
    };
}

export function clearMenuTopicsAction() {
    return (dispatch, getState) => {
        dispatch({ type: Types.user.CLEAR_USER_ID });
    };
}
