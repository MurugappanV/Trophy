import React from "react";
import { View, StyleSheet } from "react-native";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors, Strings } from "../../asset";

const FloatingLabel = require("../../lib/FloatingLabel");

type Props = {
	label: string,
};

export default function TextInputField(props: Props) {
	const { label } = props;
	return (
		<View>
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

const styles = StyleSheet.create({
	labelInput: {
		color: Colors.bgPrimaryLight,
		fontFamily: "Lato-Regular",
		marginBottom: ScalePerctFullHeight(1),
		letterSpacing: 0,
	},
	formInput: {
		borderBottomWidth: (StyleSheet.hairlineWidth = 0.5),
		width: ScalePerctFullWidth(82),
		borderColor: Colors.bgPrimaryLight,
		marginBottom: ScalePerctFullHeight(3),
	},
	input: {
		borderWidth: 0,
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		letterSpacing: 0,
	},
});
