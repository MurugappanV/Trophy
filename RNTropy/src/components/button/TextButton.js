import React, { PureComponent } from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors } from "../../asset";

type Props = {
	title: string,
	onPress: Function,
	buttonStyle: Object,
	showLoader: boolean,
};

export default class TextButton extends PureComponent<Props> {
	render() {
		const { onPress, title = "click here", touchableStyle, textStyle } = this.props;

		return (
			<TouchableOpacity
				onPress={onPress}
				style={touchableStyle}
			>

				<Text style={textStyle}>{title}</Text>
			</TouchableOpacity>
		);
	}
}

