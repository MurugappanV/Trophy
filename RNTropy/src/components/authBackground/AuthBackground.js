import React from "react";
import {
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	ImageBackground,
	StatusBar,
} from "react-native";
const image = require("../../asset/Images/login.png");

type Props = {
	children: any,
};

export default function AuthBackground(props: Props) {
	const { children } = props;
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<ImageBackground source={image} style={styles.container}>
				<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
				{children}
			</ImageBackground>
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
});
