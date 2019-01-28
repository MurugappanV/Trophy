import React, { PureComponent } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { verticalScale, moderateScale } from "../utilities/Scale";
import { THEME } from "../utilities/Colors";

export default class Header extends PureComponent {
	render() {
		const { openDrawer } = this.props;
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
