import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { verticalScale, moderateScale } from "../utilities/Scale";
import { THEME } from "../utilities/Colors";
import SvgUri from "react-native-svg-uri";

export default class Header extends PureComponent {
	render() {
		return (
			<View style={style.header}>
				<View style={style.textContainer}>
					<Text style={style.text}> Movies </Text>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	text: {
		color: THEME.bgPrimary,
		fontSize: moderateScale(20),
	},
	header: {
		flexDirection: "row",
		backgroundColor: THEME.bgBlack,
		height: verticalScale(65),
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
		borderBottomWidth: 2,
		borderColor: THEME.header,
	},
	iconContainer: {
		flex: 2,
		alignItems: "center",
		justifyContent: "center",
	},
	textContainer: {
		flex: 8,
		alignItems: "flex-start",
		justifyContent: "center",
	},
});
