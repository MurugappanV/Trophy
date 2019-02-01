import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

type Props = {
	imageUrl?: string,
	padded?: boolean,
};

export default function ArticleListBigImage(props: Props) {
	const { imageUrl, padded } = props;
	return (
		<View
			style={[
				styles.container,
				padded
					? { padding: Metrics.DEFAULT_PADDING }
					: { paddingVertical: Metrics.DEFAULT_PADDING },
			]}
		>
			<Image
				source={imageUrl}
				style={StyleSheet.flatten([
					styles.image,
					padded
						? {
								borderRadius: Metrics.SMALL_RADIUS,
								width: ScalePerctFullWidth(100) - Metrics.DEFAULT_PADDING * 2,
						  }
						: { width: ScalePerctFullWidth(100) },
				])}
			/>
		</View>
	);
}

ArticleListBigImage.defaultProps = {
	imageUrl: require("../../asset/Images/article.png"),
	padded: false,
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		width: ScalePerctFullWidth(100),
	},
	image: {
		width: ScalePerctFullWidth(100),
	},
});
