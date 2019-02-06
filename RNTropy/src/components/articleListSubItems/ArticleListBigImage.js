import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

type Props = {
	imageUrl?: string,
	padded?: boolean,
	isNotopMargin?: boolean,
};

export default function ArticleListBigImage(props: Props) {
	const { imageUrl, padded, isNotopMargin, height } = props;
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
					{ height: height },
				])}
			/>
		</View>
	);
}

ArticleListBigImage.defaultProps = {
	imageUrl: "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg",
	padded: false,
	isNotopMargin: false,
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
