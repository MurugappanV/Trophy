import Types from "../Types";
import createReducer from "./CreateReducer";

export const user = createReducer(null, {
	[Types.user.SET_USER](state, action) {
		return { ...action.user, podcasts: action.user["podcasts"].split("|") };
	},
	[Types.user.SET_USER_TOPICS](state, action) {
		return {
			...state,
			topic: action.topics,
		};
	},
	[Types.user.SET_USER_BRANDS](state, action) {
		return {
			...state,
			brands: action.brands,
		};
	},
	[Types.user.CLEAR_USER]() {
		return null;
	},
	[Types.podcast.SET_USER_SUBSCRIPTION](state, action) {
		const podcast =
			state.podcasts.indexOf(action.brand) > -1
				? state.podcasts.filter(item => item !== action.brand)
				: [...state.podcasts, action.brand];
		return { ...state, podcasts: podcast };
	},
});
