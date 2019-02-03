import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";
import { getImageHeight } from "../../utilities";

type Props = {
	imageUrl?: string,
	padded?: boolean,
};

export default function ArticleListBigImage(props: Props) {
	const { imageUrl, padded, height } = props;
	console.log("height", height)
	console.log("width", ScalePerctFullWidth(100))
	return (
		<View
			style={[
				styles.container,
				padded
					? { padding: Metrics.DEFAULT_LIST_PADDING }
					: { paddingTop: Metrics.DEFAULT_LIST_PADDING },
			]}
		>
			<Image
				source={{ uri: imageUrl }}
				style={StyleSheet.flatten([
					styles.image,
					padded
						? {
							borderRadius: Metrics.SMALL_RADIUS,
							width: ScalePerctFullWidth(100) - Metrics.DEFAULT_LIST_PADDING * 2,
						}
						: { width: ScalePerctFullWidth(100) },
					{ height: height }
				])}
			/>
		</View>
	);
}

ArticleListBigImage.defaultProps = {
	imageUrl: "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg",
	padded: false,
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		width: ScalePerctFullWidth(100),
	},
	image: {
		width: ScalePerctFullWidth(100)
	},
});
