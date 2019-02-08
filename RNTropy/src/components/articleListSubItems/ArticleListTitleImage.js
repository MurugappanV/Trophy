import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

type Props = {
	title?: string,
	imageUrl?: string,
	isCenter?: boolean,
	isTitleImage?: boolean,
};

const renderImage = (image: string) => {
	return <Image source={{ uri: image }} style={StyleSheet.flatten([styles.imageOne])} />;
};

export default function ArticleListTitleImage(props: Props) {
	const { title, imageUrl, isTitleImage, isCenter } = props;
	const url =
		!imageUrl || imageUrl.includes("public://")
			? "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg"
			: imageUrl;
	return (
		<View style={styles.container}>
			<Text style={[styles.titleText, isCenter ? { textAlign: "center" } : {}]}>
				{title}
			</Text>
			{isTitleImage && renderImage(url)}
		</View>
	);
}

ArticleListTitleImage.defaultProps = {
	title: "Fashion Designer Alexis Mabille’s Paris Villa",
	imageUrl: undefined,
	isCenter: false,
	isTitleImage: false,
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
		marginLeft: Metrics.DEFAULT_LIST_PADDING,
		marginTop: 4,
		backgroundColor: "black",
	},
});
