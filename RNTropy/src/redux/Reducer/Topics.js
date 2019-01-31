import Types from "../Types";
import createReducer from "./CreateReducer";

const initialTopicMenu = [
    "MyTrove",
    "Economics",
    "Tech",
    "Business"
]

export const menuTopics = createReducer(initialTopicMenu, {
    [Types.topic.SET_MENU_TOPIC](state, action) {
        return action.data.topics;
    },
    [Types.topic.CLEAR_MENU_TOPIC]() {
        return initialTopicMenu;
    },
});
