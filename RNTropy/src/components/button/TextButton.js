import React, { PureComponent } from "react";
import { TouchableOpacity, Text } from "react-native";

type Props = {
	title: string,
	onPress: Function,
	textStyle: Object,
	touchableStyle: Object,
};

export default class TextButton extends PureComponent<Props> {
	render() {
		const { onPress, title = "click here", touchableStyle, textStyle } = this.props;

		return (
			<TouchableOpacity onPress={onPress} style={touchableStyle}>
				<Text style={textStyle}>{title}</Text>
			</TouchableOpacity>
		);
	}
}
