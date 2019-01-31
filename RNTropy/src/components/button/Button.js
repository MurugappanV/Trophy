import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors } from "../../asset";

type Props = {
	title: string,
	onPress: Function,
	buttonStyle: Object,
};

export default function Button(props: Props) {
	const { onPress, title = "click here", buttonStyle } = props;
	return (
		<TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle && buttonStyle]}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		height: ScalePerctFullHeight(7),
		width: ScalePerctFullWidth(82),
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
		borderRadius: Metrics.LARGE_RADIUS,
	},
	text: {
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.SMALL_TEXT_SIZE,
	},
});
