import React, { PureComponent } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors } from "../../asset";

export default class ChaptorPodcastScreen extends PureComponent {
	state = {};

	renderProgressImage = () => (
		<View style={styles.progressImageContainer}>
			<Progress.Pie
				progress={0.8}
				size={ScalePerctFullWidth(40)}
				indeterminate={false}
				borderWidth={0}
			/>
			<Image
				style={styles.image}
				source={{
					uri: "https://facebook.github.io/react-native/docs/assets/favicon.png",
				}}
			/>
		</View>
	);

	render() {
		return (
			<View>
				<Image
					source={{
						uri:
							"http://www.matcheyewear.com/images/BrandImages/Cosmopolitan-Logo.jpg",
					}}
					style={styles.logo}
				/>
				<Text style={styles.title}>Walking in the Victoria street</Text>
				{this.renderProgressImage()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	progressImageContainer: {
		justifyContent: "center",
		alignItems: "center",
	},
	image: {
		width: ScalePerctFullWidth(37),
		height: ScalePerctFullWidth(37),
		borderRadius: ScalePerctFullWidth(18),
		position: "absolute",
	},
	logo: {
		height: 18,
		backgroundColor: "pink",
		width: 90,
	},
	title: {
		fontSize: Metrics.LARGE_TEXT_SIZE,
		lineHeight: 25,
		letterSpacing: 0,
		color: Colors.bgPrimaryBlack,
		fontFamily: "Lato-Regular",
	},
});
