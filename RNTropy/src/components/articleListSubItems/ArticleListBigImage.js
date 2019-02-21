import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

type Props = {
	imageUrl?: string,
	padded?: boolean,
	isNotopMargin?: boolean,
	isVideo?: boolean,
};

export default function ArticleListBigImage(props: Props) {
	const { imageUrl, padded, isNotopMargin, height, width, isVideo } = props;
	const url =
		!imageUrl || imageUrl.includes("public://")
			? "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg"
			: imageUrl;
	return (
		<View
			style={[
				styles.container,
				padded
					? { padding: Metrics.DEFAULT_LIST_PADDING }
					: { paddingTop: Metrics.DEFAULT_LIST_PADDING },
				width && { width },
			]}
		>
			<Image
				source={{ uri: url }}
				style={StyleSheet.flatten([
					styles.image,
					padded
						? {
								borderRadius: Metrics.SMALL_RADIUS,
								width: ScalePerctFullWidth(100) - Metrics.DEFAULT_LIST_PADDING * 2,
						  }
						: { width: ScalePerctFullWidth(100) },
					{ height: height },
					width && { width },
				])}
			/>
			{isVideo && (
				<View style={styles.timeContainer}>
					<Icon name="play" size={10} color={Colors.bgPrimaryLight} />
					<Text style={styles.timeText}>{"0:00"}</Text>
				</View>
			)}
		</View>
	);
}

ArticleListBigImage.defaultProps = {
	imageUrl: "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg",
	padded: false,
	isNotopMargin: false,
	isVideo: false,
};

const styles = StyleSheet.create({
	container: {
		width: ScalePerctFullWidth(100),
	},
	image: {
		width: ScalePerctFullWidth(100),
		backgroundColor: Colors.bgSecondaryLight,
	},
	timeContainer: {
		height: 30,
		borderRadius: 15,
		width: 70,
		position: "absolute",
		bottom: 20,
		right: 20,
		backgroundColor: Colors.bodySecondaryDark,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	timeText: {
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		color: Colors.bodyPrimaryLight,
		paddingLeft: 4,
	},
});
