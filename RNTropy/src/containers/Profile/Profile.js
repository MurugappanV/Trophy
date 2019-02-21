import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet, ToastAndroid } from "react-native";
import SvgUri from "react-native-svg-uri";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImagePicker from "react-native-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import ProfilePageHeader from "./ProfilePageHeader";
import { ProfilePicUpload, ChangePasswordAPI, updatenameAPI } from "../../service";
import InputTextField from "./InputTextField";
import NormalTextField from "./normalTextField";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors, passwordValidator } from "../../asset";

const userPic = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="16px" height="18px" viewBox="0 0 16 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="Home-page" transform="translate(-333.000000, -33.000000)" stroke="#000000" stroke-width="1.8">
            <g id="Group-25" transform="translate(0.000000, 1.000000)">
                <g id="Group-17" transform="translate(0.000000, 19.000000)">
                    <g id="user" transform="translate(334.000000, 14.000000)">
                        <path d="M14,16 L14,14.2222222 C14,12.2585431 12.4329966,10.6666667 10.5,10.6666667 L3.5,10.6666667 C1.56700338,10.6666667 0,12.2585431 0,14.2222222 L0,16" id="Shape"></path>
                        <ellipse id="Oval" cx="7" cy="3.55555556" rx="3.5" ry="3.55555556"></ellipse>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;

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
					alert("Error occured in Profile pic upload. Please try again later.");
				} else {
					ProfilePicUpload("1", res.uri, res.fileName, res.type, res.path);
					this.setState({
						pickedImage: { uri: res.uri },
					});
				}
			},
		);
	};

	renderDefaultImage = () => {
		return (
			<SvgUri
				height={ScalePerctFullWidth(16)}
				width={ScalePerctFullWidth(16)}
				svgXmlData={userPic}
			/>
		);
	};

	onSave = () => {
		const { profileName, currentPassword, newPassword, confirmPassword } = this.state;
		if (!currentPassword && !newPassword && !confirmPassword && profileName) {
			updatenameAPI("1", profileName);
			this.setState({ isChanged: false });
		} else if (!currentPassword || !newPassword || !confirmPassword) {
			alert("Please fill all the required fields.");
		} else if (newPassword !== confirmPassword) {
			alert("New password and confirm password should be same.");
		} else if (!passwordValidator(newPassword)) {
			alert(
				"Enter a valid password with minimum 6 characters, one special character and one number",
			);
		} else {
			ChangePasswordAPI("1", currentPassword, newPassword, profileName);
			this.setState({ isChanged: false, newPassword: "", confirmPassword: "" });
		}
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
					{/* <View style={styles.image}>{this.renderDefaultImage()}</View> */}
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
		justifyContent: "center",
		alignItems: "center",
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
