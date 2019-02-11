import React, { PureComponent } from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, Image, View } from "react-native";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors, Images } from "../../asset";

type Props = {
	title: string,
	onPress: Function,
	buttonStyle: Object,
	showLoader: boolean,
	top: number,
	imageStyle: Object,
};

export default class Button extends PureComponent<Props> {
	render() {
		const {
			onPress,
			title = "click here",
			buttonStyle,
			showLoader,
			button,
			imageStyle,
			top,
		} = this.props;

		return (
			<TouchableOpacity
				onPress={!showLoader ? onPress : null}
				style={[styles.container, buttonStyle && buttonStyle]}
			>
				<Image source={button} style={imageStyle} resizeMode="stretch" />
				<View style={[styles.innerContainer, top && { top: top }]}>
					{!showLoader ? (
						<Text style={styles.text}>{title}</Text>
					) : (
						<ActivityIndicator animating={showLoader} size="small" color="white" />
					)}
				</View>
			</TouchableOpacity>
		);
	}
}

const mobileStyles = StyleSheet.create({
	container: {
		height: 50,
	},
	text: {
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.SMALL_TEXT_SIZE,
	},
	imageStyle: {
		width: ScalePerctFullWidth(100),
		height: 100,
	},
	innerContainer: {
		position: "absolute",
		top: 11,
		left: 0,
		right: 0,
		justifyContent: "center",
		alignItems: "center",
	},
});

const tabStyles = StyleSheet.create({
	container: {
		height: ScalePerctFullHeight(3.4),
		// width: ScalePerctFullWidth(31),
		// justifyContent: "center",
		// alignItems: "center",
		// backgroundColor: "red",
		// borderRadius: Metrics.LARGE_RADIUS,
	},
	text: {
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.SMALL_TEXT_SIZE,
	},
	innerContainer: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: "center",
		alignItems: "center",
	},
});

let styles = Metrics.isTablet ? tabStyles : mobileStyles;
