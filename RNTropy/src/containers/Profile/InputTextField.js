import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors, Icon, Images } from "../../asset";

export default function InputTextField(props: Props) {
	const { label, values, onChange, placeholder, isProfile } = props;
	return (
		<View style={styles.textContainer}>
			<Text style={styles.name}>{label}</Text>
			{isProfile ? (
				<TextInput style={styles.textInput} onChangeText={onChange} value={values} />
			) : (
				<TextInput
					style={styles.textInput}
					onChangeText={onChange}
					placeholder={placeholder}
					value={values}
					secureTextEntry
				/>
			)}
		</View>
	);
}

InputTextField.defaultProps = {};

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
	textInput: {
		fontSize: 14,
		fontWeight: "bold",
		height: ScalePerctFullWidth(12),
		width: ScalePerctFullWidth(50),
		marginLeft: ScalePerctFullWidth(4),
	},
	name: {
		color: Colors.bgPrimaryDark,
		fontSize: 12,
		//alignSelf: "center",
		marginTop: ScalePerctFullHeight(2),
		fontWeight: "bold",
		height: ScalePerctFullWidth(12),
		width: ScalePerctFullWidth(26),
	},
	separator: {
		color: Colors.bgPrimaryDark,
		width: ScalePerctFullWidth(70),
		borderBottomWidth: 2,
		borderBottomColor: Colors.borderSeparator,
	},
});
