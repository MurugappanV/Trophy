import { Platform } from "react-native";
import { ScalePerctFullWidth } from "./Scale";
// text sizes
const VVV_SMALL_TEXT_SIZE = 8;
const VV_SMALL_TEXT_SIZE = 10;
const V_SMALL_TEXT_SIZE = 11;
const SMALL_TEXT_SIZE = 12;
const MEDIUM_TEXT_SIZE = 14;
const EXTRA_MEDIUM_TEXT_SIZE = 15;
const LARGE_TEXT_SIZE = 20;
const EXTRA_LARGE_TEXT_SIZE = 22;

// border radius
const SMOOTH_CORNER = 3;
const SMALL_RADIUS = 5;
const MEDIUM_RADIUS = 10;
const LARGE_RADIUS = 20;

const LINE_WIDTH = 0.5;

const HEADER_HEIGHT = Platform.OS === "android" && Platform.Version < 21 ? 46 : 60;
const STATUS_BAR_HEIGHT = Platform.OS === "android" && Platform.Version < 21 ? 0 : 24;

const DEFAULT_PADDING = ScalePerctFullWidth(4);

const Metrics = {
	SMALL_TEXT_SIZE,
	MEDIUM_TEXT_SIZE,
	LARGE_TEXT_SIZE,
	EXTRA_LARGE_TEXT_SIZE,
	VVV_SMALL_TEXT_SIZE,
	VV_SMALL_TEXT_SIZE,
	V_SMALL_TEXT_SIZE,
	EXTRA_MEDIUM_TEXT_SIZE,

	SMOOTH_CORNER,
	SMALL_RADIUS,
	MEDIUM_RADIUS,
	LARGE_RADIUS,

	DEFAULT_PADDING,

	LINE_WIDTH,

	HEADER_HEIGHT,
	STATUS_BAR_HEIGHT,
};

export default Metrics;
