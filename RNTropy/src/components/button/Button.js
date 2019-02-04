import React, { PureComponent } from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors } from "../../asset";

type Props = {
	title: string,
	onPress: Function,
	buttonStyle: Object,
	showLoader: boolean,
};

export default class Button extends PureComponent<Props> {
	render() {
		const { onPress, title = "click here", buttonStyle, showLoader } = this.props;

		return (
			<TouchableOpacity
				onPress={!showLoader ? onPress : null}
				style={[styles.container, buttonStyle && buttonStyle]}
			>
				{!showLoader ? (
					<Text style={styles.text}>{title}</Text>
				) : (
					<ActivityIndicator animating={showLoader} size="small" color="white" />
				)}
			</TouchableOpacity>
		);
	}
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
