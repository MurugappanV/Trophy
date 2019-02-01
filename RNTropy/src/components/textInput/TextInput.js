import React from "react";
import { View, StyleSheet } from "react-native";
import { ScalePerctFullHeight, Metrics, Colors, Strings } from "../../asset";

const FloatingLabel = require("../../lib/FloatingLabel");

type Props = {
	label: string,
};

export default function TextInputField(props: Props) {
	const { label } = props;
	return (
		<View style={styles.formContainer}>
			<FloatingLabel
				{...props}
				labelStyle={styles.labelInput}
				inputStyle={styles.input}
				style={styles.formInput}
			>
				{label}
			</FloatingLabel>
		</View>
	);
}

const mobileStyles = StyleSheet.create({
	labelInput: {
		color: Colors.bgPrimaryLight,
		fontFamily: "Lato-Regular",
		marginBottom: ScalePerctFullHeight(1),
		letterSpacing: 0,
	},
	formContainer: {
		alignSelf: "stretch",
	},
	formInput: {
		borderBottomWidth: (StyleSheet.hairlineWidth = 0.5),
		alignSelf: "stretch",
		borderColor: Colors.bgPrimaryLight,
		marginBottom: ScalePerctFullHeight(2),
	},
	input: {
		borderWidth: 0,
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		letterSpacing: 0,
	},
});

const tabStyles = StyleSheet.create({
	labelInput: {
		color: Colors.bgPrimaryLight,
		fontFamily: "Lato-Regular",
		marginBottom: 10,
		letterSpacing: 0,
	},
	formContainer: {
		alignSelf: "stretch",
	},
	formInput: {
		borderBottomWidth: (StyleSheet.hairlineWidth = 0.5),
		alignSelf: "stretch",
		borderColor: Colors.bgPrimaryLight,
		marginBottom: 30,
	},
	input: {
		borderWidth: 0,
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		letterSpacing: 0,
	},
});

const styles = Metrics.isTablet ? tabStyles : mobileStyles;
