import { Images } from "./Images";
import { ScalePerctFullWidth } from "./Scale";

export const NavigationIconMap = new Map([
	[
		"HomeTabScreen",
		{
			icon: Images.home,
			size: 20,
		},
	],
	[
		"VideoTabScreen",
		{
			icon: Images.play,
			size: 20,
		},
	],
	[
		"PodcastTabScreen",
		{
			icon: Images.podcast,
			size: 18,
		},
	],
	[
		"MagazineTabScreen",
		{
			icon: Images.book,
			size: 20,
		},
	],
]);

export const Constants = {
	topics: {
		minimumTopics: 3,
	},
	menuSections: {
		defaultSection: [
			{
				name: "My trove",
				tid: "0",
				field_image: "",
			},
		],
	},
	articleListSections: {
		topStories: "Top Stories",
		editorial: "Editorial Highlights",
		empty: "",
		podcast: "Latest podcast",
		videos: "Latest videos",
	},
	errorMessages: {
		checkNetwork: "Network error",
		network: "Please check your internet connection and try again",
		general: "Some error occured, Please try again later",
	},
	emptyMessages: {
		noRecord: "No articles found",
	},
	myTrove: {
		first: 8,
		second: 10,
		third: 15,
	},
	drawerTopData: [
		{ routeName: "HistoryDrawerScreen", title: "History" },
		{ routeName: "BookmarkDrawerScreen", title: "Bookmark" },
		{ routeName: "CustomizeInterestDrawerScreen", title: "Customize your interests" },
	],
	drawerBottomData: [
		{ routeName: "SettingsDrawerScreen", title: "Settings" },
		{ routeName: "HelpDrawerScreen", title: "Help" },
		{ routeName: "TosDrawerScreen", title: "Terms of service" },
	],
	drawerMiddleData: { routeName: "ProfileDrawerScreen", title: "Profile" },
	drawerLogoutData: { routeName: "Logout", title: "Logout" },
};

export const TemplateConfig = {
	articleTemplates: {
		1: ["bigImage", "logo", "title", "footer"],
		2: ["logo", "title", "footer"],
		3: ["logo", "bigImage", "title", "footer"],
		4: ["logo", "bigImage", "title", "description", "footer"],
		5: ["logo", "bigImage", "title", "description", "footer"],
		6: ["logo", "title", "description", "footer"],
		7: ["title", "description", "footer"],
		8: ["title", "footer"],
		9: ["logo", "bigImage", "title", "description", "footer"],
		10: ["logo", "bigImage", "title", "description", "footer"],
		11: ["logo", "bigImage", "title", "description", "footer"],
		12: ["logo", "title", "description", "footer"],
		13: ["logo", "bigImage", "title", "footer"],
	},
	articleTemplateSettings: {
		1: {
			isNoTopMargin: true,
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: false,
			height: ScalePerctFullWidth(68),
		},
		2: {
			isTitleImage: true,
			isFollow: false,
			isPadded: false,
			isCenter: false,
			height: ScalePerctFullWidth(68),
		},
		3: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: false,
			height: ScalePerctFullWidth(68),
		},
		4: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: true,
			height: ScalePerctFullWidth(110),
		},
		5: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: false,
			height: ScalePerctFullWidth(58),
		},
		6: {
			isTitleImage: true,
			isFollow: true,
			isPadded: false,
			isCenter: false,
			height: ScalePerctFullWidth(68),
		},
		7: {
			isTitleImage: true,
			isFollow: false,
			isPadded: false,
			isCenter: false,
			height: ScalePerctFullWidth(68),
		},
		8: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: false,
			height: ScalePerctFullWidth(68),
		},
		9: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: true,
			height: ScalePerctFullWidth(58),
		},
		10: {
			isTitleImage: false,
			isFollow: false,
			isPadded: true,
			isCenter: false,
			height: ScalePerctFullWidth(68),
		},
		11: {
			isTitleImage: false,
			isFollow: true,
			isPadded: true,
			isCenter: false,
			height: ScalePerctFullWidth(68),
		},
		12: {
			isTitleImage: true,
			isFollow: false,
			isPadded: false,
			isCenter: false,
			height: ScalePerctFullWidth(68),
		},
		13: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: false,
			height: ScalePerctFullWidth(68),
			isVideo: true,
		},
	},
	articleDisplayTemplates: {
		1: ["logo", "image", "title", "description"],
		2: ["image", "logo", "title", "description"],
		3: ["logo", "title", "image", "description"],
	},
	articleDisplayTemplateSettings: {
		1: {
			// isNoTopMargin: true,
			// isTitleImage: false,
			// isFollow: false,
			// isPadded: false,
			isCenter: false,
		},
		2: {
			// isTitleImage: true,
			// isFollow: false,
			// isPadded: false,
			isCenter: false,
		},
		3: {
			// isTitleImage: false,
			// isFollow: false,
			// isPadded: false,
			isCenter: false,
		},
	},
};
