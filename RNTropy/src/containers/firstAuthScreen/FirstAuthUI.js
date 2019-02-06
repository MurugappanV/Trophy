import React from "react";
import { View, StyleSheet, ImageBackground, StatusBar, Text } from "react-native";
import Video from "react-native-video";
import SvgUri from "react-native-svg-uri";
import {
	Colors,
	ScalePerctFullWidth,
	ScalePerctFullHeight,
	Strings,
	Metrics,
	Images,
} from "../../asset";
import { AuthBackground, Button, Separator, TextButton } from "../../components";
import Icon from "../../asset/fonts/icons";

const image = require("../../asset/Images/login.png");

const small = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="18px" height="14px" viewBox="0 0 18 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="UI-KIT" transform="translate(-1526.000000, -5181.000000)" stroke="#FFFFFF" stroke-width="1.5">
            <g id="arrow-left" transform="translate(1527.000000, 5182.000000)">
                <path d="M16,6 L0,6" id="Shape"></path>
                <polyline id="Shape" points="6 12 0 6 6 0"></polyline>
            </g>
        </g>
    </g>
</svg>`;

const renderButton = (handleLoginEvent: Function) => (
	<View>
		<Button
			title={Strings.authentication.LOGIN_WITH_YOUR_EMAIL_ID}
			buttonStyle={{
				marginTop: ScalePerctFullHeight(61),
				marginBottom: ScalePerctFullHeight(5),
			}}
			onPress={() => handleLoginEvent()}
		/>
	</View>
);

const renderSeparator = () => (
	<View style={styles.separatorContainer}>
		<Separator />
		<Text style={styles.orText}>{Strings.authentication.OR}</Text>
		<Separator />
	</View>
);

const renderSocialLogin = () => (
	<View>
		<Text style={styles.socialLoginText}>
			{Strings.authentication.LOGIN_WITH_SOME_SOCIAL_NETWORKS}
		</Text>
		<View style={styles.iconContainer}>
			<Icon
				style={styles.icon}
				name={Images.twitter}
				size={16}
				color={Colors.bodyPrimaryLight}
			/>
			<Icon
				style={styles.icon}
				name={Images.facebook}
				size={16}
				color={Colors.bodyPrimaryLight}
			/>
			<Icon
				style={styles.icon}
				name={Images.googlePlus}
				size={16}
				color={Colors.bodyPrimaryLight}
			/>
		</View>
	</View>
);

type Props = {
	handleSignUp: Function,
	handleLoginEvent: Function,
};

export default function FirstAuthScreenUI(props: Props) {
	const { handleSignUp, handleLoginEvent } = props;
	return (
		<View style={styles.container}>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			{renderButton(handleLoginEvent)}
			{/* <Text style={styles.createAccountText} onPress={handleSignUp}>
				{Strings.authentication.CREATE_AN_ACCOUNT}
			</Text> */}
			<TextButton
				textStyle={styles.createAccountText}
				onPress={handleSignUp}
				title={Strings.authentication.CREATE_AN_ACCOUNT}
			/>
			{renderSeparator()}
			{renderSocialLogin()}
			<Video
				source={require("../../asset/Videos/login.mp4")} // Can be a URL or a local file.
				ref={ref => {
					this.player = ref;
				}} // Store reference
				onBuffer={() => {}} // Callback when remote video is buffering
				onError={() => {}} // Callback when video cannot be loaded
				style={styles.backgroundVideo}
				repeat
				muted
				resizeMode="cover"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
	},
	createAccountText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		color: Colors.bgPrimaryLight,
	},
	separator: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		flex: 1,
		alignSelf: "center",
	},
	orText: {
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		color: Colors.bgPrimaryLight,
		flex: 0.25,
		textAlign: "center",
		letterSpacing: 0,
	},
	separatorContainer: {
		flexDirection: "row",
		margin: ScalePerctFullWidth(8),
		letterSpacing: 0,
	},
	socialLoginText: {
		fontSize: Metrics.V_SMALL_TEXT_SIZE,
		letterSpacing: 0.23,
		marginBottom: ScalePerctFullWidth(6),
		color: Colors.bgPrimaryLight,
	},
	iconContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	backgroundVideo: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		zIndex: -1,
	},
	icon: { paddingHorizontal: Metrics.DEFAULT_LIST_PADDING },
});
