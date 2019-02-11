import Types from "../Types";
import createReducer from "./CreateReducer";

export const user = createReducer(null, {
	[Types.user.SET_USER](state, action) {
		return action.user;
	},
	[Types.user.CLEAR_USER]() {
		return null;
	},
});
