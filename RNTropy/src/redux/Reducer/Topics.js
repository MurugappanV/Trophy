import Types from "../Types";
import createReducer from "./CreateReducer";

const initialTopicMenu = [
	{
		name: "My trove",
		tid: "0",
		field_image: "",
	},
];

export const menuTopics = createReducer(initialTopicMenu, {
	[Types.topic.SET_MENU_TOPIC](state, action) {
		return initialTopicMenu.concat(action.data.topics);
	},
	[Types.topic.CLEAR_MENU_TOPIC]() {
		return initialTopicMenu;
	},
});

const initialTopics = [];

export const allTopics = createReducer(initialTopics, {
	[Types.topic.SET_ALL_TOPICS](state, action) {
		return action.data.topics;
	},
	[Types.topic.CLEAR_MENU_TOPIC]() {
		return initialTopics;
	},
});
