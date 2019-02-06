import { Images } from "./Images";

export const NavigationIconMap = new Map([
	["HomeTabScreen", { icon: Images.home, size: 20 }],
	["VideoTabScreen", { icon: Images.play, size: 20 }],
	["PodcastTabScreen", { icon: Images.podcast, size: 18 }],
	["MagazineTabScreen", { icon: Images.book, size: 20 }],
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
	},
	articleTemplateSettings: {
		1: {
			isNoTopMargin: true,
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: false,
		},
		2: {
			isTitleImage: true,
			isFollow: false,
			isPadded: false,
			isCenter: false,
		},
		3: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: false,
		},
		4: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: true,
		},
		5: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: false,
		},
		6: {
			isTitleImage: true,
			isFollow: true,
			isPadded: false,
			isCenter: false,
		},
		7: {
			isTitleImage: true,
			isFollow: false,
			isPadded: false,
			isCenter: false,
		},
		8: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: false,
		},
		9: {
			isTitleImage: false,
			isFollow: false,
			isPadded: false,
			isCenter: true,
		},
		10: {
			isTitleImage: false,
			isFollow: false,
			isPadded: true,
			isCenter: false,
		},
		11: {
			isTitleImage: false,
			isFollow: true,
			isPadded: true,
			isCenter: false,
		},
		12: {
			isTitleImage: true,
			isFollow: false,
			isPadded: false,
			isCenter: false,
		},
	},
};
