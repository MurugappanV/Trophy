import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

type Props = {
	imageUrl?: string,
	isFollow?: boolean,
};

export default function ArticleListLogo(props: Props) {
	const { imageUrl, isFollow } = props;
	const url =
		!imageUrl || imageUrl.includes("public://")
			? "http://www.matcheyewear.com/images/BrandImages/Cosmopolitan-Logo.jpg"
			: imageUrl;
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: url }}
					resizeMode={"contain"}
					style={StyleSheet.flatten([styles.imageOne])}
				/>
			</View>
			{isFollow && (
				<Image
					source={require("../../asset/Images/follow.png")}
					resizeMode={"stretch"}
					style={StyleSheet.flatten([styles.followImage])}
				/>
			)}
		</View>
	);
}

ArticleListLogo.defaultProps = {
	imageUrl: "http://www.matcheyewear.com/images/BrandImages/Cosmopolitan-Logo.jpg",
	isFollow: true,
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: Metrics.DEFAULT_LIST_PADDING,
		width: ScalePerctFullWidth(100),
		paddingBottom: 0,
	},
	imageContainer: {
		flex: 1,
		alignItems: "flex-start",
	},
	imageOne: {
		height: ScalePerctFullWidth(8),
		width: ScalePerctFullWidth(40),
	},
	followImage: {
		height: ScalePerctFullWidth(8),
		width: ScalePerctFullWidth(25),
		paddingLeft: Metrics.DEFAULT_LIST_PADDING,
	},
});
