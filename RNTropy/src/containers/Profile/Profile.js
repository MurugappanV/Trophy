import React, { Component } from "react";
import { View, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfilePageHeader from "./ProfilePageHeader";
import InputTextField from "./InputTextField";
import NormalTextField from "./normalTextField";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors, Images } from "../../asset";

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pickedImage: {
				uri: "https://facebook.github.io/react-native/docs/assets/favicon.png",
			},
			profileName: "Profile name",
			currentPassword: "",
			newPassword: "",
			confirmPassword: "",
			isChanged: false,
		};
	}

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

	onSave = () => {
		this.setState({ isChanged: false });
	};

	render() {
		const {
			imageUrl,
			isChanged,
			profileName,
			newPassword,
			confirmPassword,
			currentPassword,
		} = this.state;
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<ProfilePageHeader
					isChanged={isChanged}
					onBack={() => {
						navigation.goBack();
					}}
					onSave={this.onSave}
				/>
				<KeyboardAwareScrollView>
					<Image style={styles.image} source={this.state.pickedImage} />
					<TouchableOpacity style={styles.uploadIcon} onPress={this.pickImageHandler}>
						<Icon name="camera" size={25} color={Colors.bgPrimaryDark} />
					</TouchableOpacity>
					<NormalTextField label="Email" value={"solomon@itpshare.com"} />
					<View style={styles.separator} />
					<InputTextField
						isProfile
						key={"1"}
						label="Name"
						values={profileName}
						onChange={profileName => this.setState({ profileName, isChanged: true })}
					/>
					<View style={styles.separator} />
					<InputTextField
						key={"2"}
						label="Password"
						values={currentPassword}
						placeholder={"Enter the current password"}
						onChange={currentPassword =>
							this.setState({ currentPassword, isChanged: true })
						}
					/>
					<View style={styles.separator} />
					<InputTextField
						key={"3"}
						label="New Password"
						values={newPassword}
						placeholder={"Enter the new password"}
						onChange={newPassword => this.setState({ newPassword, isChanged: true })}
					/>
					<View style={styles.separator} />
					<InputTextField
						key={"4"}
						label="Confirm Password"
						values={confirmPassword}
						placeholder={"Enter the confirm password"}
						onChange={confirmPassword =>
							this.setState({ confirmPassword, isChanged: true })
						}
					/>
					<View style={styles.separator} />
				</KeyboardAwareScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
		top: ScalePerctFullHeight(15),
		height: ScalePerctFullWidth(12),
		width: ScalePerctFullWidth(12),
		justifyContent: "center",
		alignItems: "center",
		borderRadius: ScalePerctFullWidth(6),
		borderWidth: 0.5,
		borderColor: Colors.bgTertiaryLight,
		backgroundColor: "white",
	},
	separator: {
		color: Colors.bgPrimaryDark,
		width: ScalePerctFullWidth(90),
		marginLeft: ScalePerctFullWidth(5),
		borderBottomWidth: 2,
		borderBottomColor: Colors.borderSeparator,
	},
});

export default Profile;
