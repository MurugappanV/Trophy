import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

type Props = {
	imageUrl?: string,
	isFollow?: boolean,
};

export default function ArticleListLogo(props: Props) {
	const { imageUrl, isFollow } = props;
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image source={imageUrl} style={StyleSheet.flatten([styles.imageOne])} />
			</View>
			{isFollow && (
				<Image source={imageUrl} style={StyleSheet.flatten([styles.followImage])} />
			)}
		</View>
	);
}

ArticleListLogo.defaultProps = {
	imageUrl: require("../../asset/Images/articleLogo.png"),
	isFollow: true,
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		flexDirection: "row",
		padding: Metrics.DEFAULT_LIST_PADDING,
		width: ScalePerctFullWidth(100),
		paddingBottom: 0
	},
	imageContainer: {
		flex: 1,
	},
	imageOne: {
		height: ScalePerctFullWidth(8),
	},
	followImage: {
		height: ScalePerctFullWidth(8),
		paddingLeft: Metrics.DEFAULT_LIST_PADDING,
	},
});
