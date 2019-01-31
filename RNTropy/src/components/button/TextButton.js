import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Colors } from "../../asset";

type Props = {
	label: string,
	onPress: Function,
	style: Object,
	textStyle: Object,
};

export default function TextButton(props: Props) {
	const { onPress, label, style, textStyle } = props;
	return (
		<TouchableOpacity onPress={onPress} style={style}>
			<Text style={[styles.text, textStyle && textStyle]}>{label}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	text: {
		color: Colors.bgPrimaryLight,
	},
});
