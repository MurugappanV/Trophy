import { Dimensions } from "react-native";

const designSampleTotalWidth = 0;
const designSampleTotalHeight = 0;
const gFullHeight = Dimensions.get("window").height;
const gFullWidth = Dimensions.get("window").width;

export const ScalePerctFullHeight = (height: number) => {
	return (gFullHeight * height) / 100;
};

export const ScalePerctFullWidth = (width: number) => {
	return (gFullWidth * width) / 100;
};

export const ScaleSampDesgHeight = (height: number) => {
	return (gFullHeight * height) / designSampleTotalHeight;
};

export const ScaleSampDesgWidth = (width: number) => {
	return (gFullWidth * width) / designSampleTotalWidth;
};

export const ScaleMinSampleDesg = (height: number, width: number) => {
	if (gFullHeight > gFullWidth) {
		return ScaleSampDesgWidth(width);
	}
	return ScaleSampDesgHeight(height);
};
