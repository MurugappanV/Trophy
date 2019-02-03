import { Platform } from "react-native";
const isTablet = DeviceInfo.isTablet();
console.log("is tablet - ", isTablet);
import DeviceInfo from "react-native-device-info";
import { ScalePerctFullWidth, ScalePerctFullHeight } from "./Scale";
// text sizes
const VVVV_SMALL_TEXT_SIZE = 8;
const VVV_SMALL_TEXT_SIZE = 9;
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
const LARGE_RADIUS = 25;

const LINE_WIDTH = 1;

const HEADER_HEIGHT_PERT = 65;
const HEADER_HEIGHT =
	(Platform.OS === "android" && Platform.Version < 21)
		? HEADER_HEIGHT_PERT - 24
		: HEADER_HEIGHT_PERT;
const STATUS_BAR_HEIGHT = Platform.OS === "android" && Platform.Version < 21 ? 0 : 24;

const DEFAULT_PADDING = ScalePerctFullWidth(4);
const DEFAULT_LIST_PADDING = ScalePerctFullWidth(3);
// line height
const SMALL_LINE_HEIGHT = 18;
const LARGE_LINE_HEIGHT = 23;
const EXTRA_LARGE_LINE_HEIGHT = 30;

const Metrics = {
	SMALL_TEXT_SIZE,
	MEDIUM_TEXT_SIZE,
	LARGE_TEXT_SIZE,
	EXTRA_LARGE_TEXT_SIZE,
	VVVV_SMALL_TEXT_SIZE,
	VVV_SMALL_TEXT_SIZE,
	VV_SMALL_TEXT_SIZE,
	V_SMALL_TEXT_SIZE,
	EXTRA_MEDIUM_TEXT_SIZE,

	SMOOTH_CORNER,
	SMALL_RADIUS,
	MEDIUM_RADIUS,
	LARGE_RADIUS,

	DEFAULT_PADDING,
	DEFAULT_LIST_PADDING,

	LINE_WIDTH,

	HEADER_HEIGHT,
	STATUS_BAR_HEIGHT,
	EXTRA_LARGE_LINE_HEIGHT,
	LARGE_LINE_HEIGHT,
	SMALL_LINE_HEIGHT,
	isTablet,
};

export default Metrics;
