import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getImageHeight } from "../../utilities";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

export default class GalleryLogo extends PureComponent<Props> {
	renderLogo = heading => {
		// const { dynamicColor, font } = this.props;
		return <Text style={styles.imageHeading}>{heading}</Text>;
	};

	render() {
		return <View style={styles.container}>{this.renderLogo("Architectural digest")}</View>;
	}
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		marginTop: Metrics.DEFAULT_PADDING,
		// paddingBottom: Metrics.DEFAULT_PADDING,
		flex: 1,
		// marginBottom: 10,
	},
	imageHeading: {
		fontSize: Metrics.LARGE_TEXT_SIZE,
		lineHeight: 2,
		letterSpacing: 0.3,
		fontWeight: "bold",
		paddingLeft: Metrics.DEFAULT_PADDING,
		paddingTop: Metrics.DEFAULT_PADDING,
		textAlign: "left",
		alignSelf: "stretch",
		// paddingTop: Metrics.DEFAULT_PADDING,
		// flex: 1,
	},
});
