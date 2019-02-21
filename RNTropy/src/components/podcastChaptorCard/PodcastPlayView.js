import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Metrics, Colors, ScalePerctFullHeight, ScalePerctFullWidth } from "../../asset";
import SvgUri from "react-native-svg-uri";

type Props = {
	onPress: Function,
};
export default function PodcastPlayView(props: Props) {
	const { onPress, style } = props;
	console.log("style", style);
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={{
						uri: "https://facebook.github.io/react-native/docs/assets/favicon.png",
					}}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.text}>Walking in the Victoria Street Fashion Show</Text>
			</View>
			<TouchableOpacity style={styles.buttonContainer}>
				<Text>Ply</Text>
			</TouchableOpacity>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		position: "absolute",
		bottom: 0,
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(10),
		backgroundColor: "red",
		zIndex: 1,
	},
	image: {
		width: ScalePerctFullWidth(12.5),
		height: ScalePerctFullWidth(12.5),
		borderRadius: ScalePerctFullWidth(6),
	},
	text: {
		fontFamily: "Lato-Bold",
		fontSize: Metrics.SMALL_TEXT_SIZE,
		lineHeight: 18,
		letterSpacing: 0,
		color: Colors.bgPrimaryLight,
	},
	imageContainer: {
		flex: 0.2,
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		flex: 0.6,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonContainer: {
		flex: 0.2,
		justifyContent: "center",
		alignItems: "center",
	},
});
