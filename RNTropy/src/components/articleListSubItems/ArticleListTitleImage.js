import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

type Props = {
	title?: string,
	imageUrl?: string,
	isCenter?: boolean,
};

renderImage = image => {
	return <Image source={{ uri: image }} style={StyleSheet.flatten([styles.imageOne])} />;
};

export default function ArticleListTitleImage(props: Props) {
	const { title, imageUrl, isCenter } = props;
	return (
		<View style={styles.container}>
			<Text style={[styles.titleText, isCenter ? { textAlign: "center" } : {}]}>
				{title}
			</Text>
			{imageUrl && renderImage(imageUrl)}
		</View>
	);
}

ArticleListTitleImage.defaultProps = {
	title: "Fashion Designer Alexis Mabille’s Paris Villa",
	imageUrl: undefined,
	isCenter: false,
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		width: ScalePerctFullWidth(100),
		flexDirection: "row",
		padding: Metrics.DEFAULT_LIST_PADDING,
		paddingBottom: 0,
	},
	titleText: {
		color: Colors.textHeading,
		fontSize: Metrics.EXTRA_LARGE_TEXT_SIZE,
		flex: 1,
	},
	imageOne: {
		width: ScalePerctFullWidth(25),
		height: ScalePerctFullWidth(15),
		borderRadius: Metrics.SMALL_RADIUS,
		paddingLeft: Metrics.DEFAULT_LIST_PADDING,
	},
});
