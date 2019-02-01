import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

type Props = {
	heading?: string,
	imageUrl?: string,
	isCenter?: boolean,
};

renderImage = image => {
	return <Image source={image} style={StyleSheet.flatten([styles.imageOne])} />;
};

export default function ArticleListTitleImage(props: Props) {
	const { heading, imageUrl, isCenter } = props;
	return (
		<View style={styles.container}>
			<Text style={[styles.titleText, isCenter ? { textAlign: "center" } : {}]}>
				{heading}
			</Text>
			{imageUrl && renderImage(imageUrl)}
		</View>
	);
}

ArticleListTitleImage.defaultProps = {
	heading: "Fashion Designer Alexis Mabille’s Paris Villa",
	imageUrl: undefined,
	isCenter: false,
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		width: ScalePerctFullWidth(100),
		flexDirection: "row",
		padding: Metrics.DEFAULT_PADDING,
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
		paddingLeft: Metrics.DEFAULT_PADDING,
	},
});
