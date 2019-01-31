import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { Header } from "../../components";
import { ScalePerctFullWidth } from "../../asset";
//import EStyleSheet from "react-native-extended-stylesheet";

class Profile extends Component {
	state = {
		imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
	};

	render() {
		const { imageUrl } = this.state;
		return (
			<View style={styles.container}>
				<Header />
				<Image
					style={styles.image}
					source={{
						uri: "https://facebook.github.io/react-native/docs/assets/favicon.png",
					}}
				/>
				<Text>hii</Text>
			</View>
		);
	}
}

// let { height, width } = Dimensions.get("window");

// const imageWidth = width * 0.3;
// const imageHeight = width * 0.3;
// const imageRadius = imageWidth * 0.5;

// const cameraIcon = width * 0.3;
// const camRadius = cameraIcon * 0.5;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		height: ScalePerctFullWidth(30),
		width: ScalePerctFullWidth(30),
		borderRadius: ScalePerctFullWidth(15),
	},
});

export default Profile;
