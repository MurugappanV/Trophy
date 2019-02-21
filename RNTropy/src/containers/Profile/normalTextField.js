import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors } from "../../asset";

export default function NormalTextField(props: any) {
	const { label, value } = props;
	return (
		<View style={styles.textContainer}>
			<Text style={styles.name}>{label}</Text>
			<Text style={styles.textStatic}>{value}</Text>
		</View>
	);
}

NormalTextField.defaultProps = {};

const styles = StyleSheet.create({
	textContainer: {
		height: ScalePerctFullWidth(12),
		width: ScalePerctFullWidth(90),
		marginTop: ScalePerctFullWidth(5),
		//marginLeft: ScalePerctFullWidth(5),
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "flex-start",
	},
	name: {
		color: Colors.bgPrimaryDark,
		fontSize: 12,
		//alignSelf: "center",
		marginTop: ScalePerctFullHeight(2),
		fontWeight: "bold",
		height: ScalePerctFullWidth(12),
		width: ScalePerctFullWidth(35),
		marginLeft: 35,
	},
	textStatic: {
		fontWeight: "bold",
		fontSize: 14,
		color: Colors.bgPrimaryBlack,
		height: ScalePerctFullWidth(12),
		width: ScalePerctFullWidth(50),
		marginTop: ScalePerctFullHeight(2),
		marginLeft: ScalePerctFullWidth(5),
	},
});
