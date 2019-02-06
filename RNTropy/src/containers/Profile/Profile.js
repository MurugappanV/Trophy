import React, { Component } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import { ProfileHeader } from "../../components";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors, Icon, Images } from "../../asset";
import ImagePicker from "react-native-image-picker";
//import EStyleSheet from "react-native-extended-stylesheet";

class Profile extends Component {
	state = {
		pickedImage: null,
	};

	pickImageHandler = () => {
		ImagePicker.showImagePicker(
			{ title: "Pick an Image", maxWidth: 800, maxHeight: 600 },
			(res: any) => {
				if (res.didCancel) {
					console.log("User cancelled!");
				} else if (res.error) {
					console.log("Error", res.error);
				} else {
					this.setState({
						pickedImage: { uri: res.uri },
					});
				}
			},
		);
	};

	render() {
		const { imageUrl } = this.state;
		return (
			<View style={styles.container}>
				<ProfileHeader />
				<TouchableOpacity onPress={this.pickImageHandler}>
					<Image
						style={styles.image}
						// source={{
						// 	uri: "https://facebook.github.io/react-native/docs/assets/favicon.png",
						// }}
						source={this.state.pickedImage}
					/>
				</TouchableOpacity>

				<View style={styles.uploadIcon} />
				<View style={styles.textContainer}>
					<Text style={styles.name}>Name</Text>
					<View style={styles.separator} />
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.name}>Password</Text>
					<View style={styles.separator} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		//alignItems: "center",
		//justifyContent: "center",
	},
	image: {
		marginLeft: ScalePerctFullWidth(35),
		height: ScalePerctFullWidth(30),
		width: ScalePerctFullWidth(30),
		borderRadius: ScalePerctFullWidth(15),
		marginTop: ScalePerctFullHeight(4),
		borderWidth: 3,
		borderColor: Colors.bodySecondaryVarient,
	},
	uploadIcon: {
		position: "absolute",
		left: ScalePerctFullWidth(54),
		top: ScalePerctFullHeight(25),
		height: ScalePerctFullHeight(7),
		width: ScalePerctFullWidth(12),
		borderRadius: ScalePerctFullWidth(6),
		borderWidth: 0.5,
		borderColor: Colors.bgTertiaryLight,
		backgroundColor: "white",
	},
	name: {
		color: Colors.bgPrimaryDark,
		fontSize: 12,
		marginTop: ScalePerctFullHeight(9),
		marginLeft: ScalePerctFullWidth(6),
		fontWeight: "bold",
	},
	separator: {
		color: Colors.bgPrimaryDark,
		width: ScalePerctFullWidth(90),
		marginLeft: ScalePerctFullWidth(6),
		marginTop: ScalePerctFullHeight(3),
		borderBottomWidth: 2,
		borderBottomColor: Colors.borderSeparator,
	},
	textContainer: {},
});

export default Profile;
