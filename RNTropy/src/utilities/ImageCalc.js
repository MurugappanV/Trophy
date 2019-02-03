import { ScalePerctFullWidth, ScalePerctFullHeight } from "../asset";
import { Image } from "react-native";
const fullWidth = ScalePerctFullWidth(100);
export function getImageHeight(url) {
	let imageHeight = 400;
	Image.getSize(url, (width, height) => {
		const ratio = width / fullWidth;
		imageHeight = height / ratio;
	});
	return imageHeight;
}

export const getImageDisplayHeight = (width, height) => {
	const ratio = width / fullWidth;
	imageHeight = height / ratio;
	return imageHeight;
}
