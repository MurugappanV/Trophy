// RAW COLORS
const COLOR = {
	yellow: "#feee00",
	blue: "#3866df",
	offBlack: "#404553",
	offWhite: "#fafbfe",
	transparentBlack: "#00000074",
	greyDark: "#7e859b",
	greyMedium: "#b2bbd2",
	greyLight: "#e2e5f1",
	greyLightest: "#f4f4f9",
	white: "#ffffff",
	paleBlue: "#F7F9FE",
	coral: "#ff5c5f",
	pink: "#f7e6e9",
	squash: "#f5a623",
	green: "#0bb953",
	orangeL: "#ff744e",
	orangeM: "#ff476c",
};

export const THEME = {
	// BRANDING, THESE COLORS CAN BE USED AS BG OR BODY
	brandPrimary: COLOR.yellow,
	brandSecondary: COLOR.blue,

	// BACKGROUND COLORS
	bgPrimary: COLOR.white,
	bgSecondary: COLOR.greyLightest,
	bgSecondaryAlt: COLOR.offBlack,
	bgTertiary: COLOR.offWhite,
	bgSupport: COLOR.paleBlue,
	bgOverlay: COLOR.transparentBlack,
	bgError: COLOR.pink,

	// BODY COLORS
	body: COLOR.offBlack,
	bodyLight: COLOR.greyDark,
	bodyLightest: COLOR.greyMedium,
	bodyAlt: COLOR.white,
	bodyError: COLOR.coral,
	bodySuccess: COLOR.green,
	bodyRating: COLOR.squash,

	// BORDERS
	border: COLOR.greyLight,
	boxShadow: COLOR.transparentBlack,
};
