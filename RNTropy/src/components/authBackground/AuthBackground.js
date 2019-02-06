import React from "react";
import { StyleSheet, TouchableWithoutFeedback, Keyboard, View, StatusBar } from "react-native";
import Video from "react-native-video";
import { ScalePerctFullHeight } from "../../asset";

type Props = {
	children: any,
};

export default function AuthBackground(props: Props) {
	const { children } = props;
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
				{children}
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
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
	},
	backgroundVideo: {
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		zIndex: -1,
		height: ScalePerctFullHeight(100),
	},
});
