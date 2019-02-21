import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth, ScalePerctFullHeight } from "../../asset";
import { Line } from "../common";

export default class GalleryTitle extends PureComponent<Props> {
	renderTitle = title => {
		return <Text style={styles.titleText}>{title}</Text>;
	};

	renderDate = author => {
		// const { dynamicColor, font } = this.props;
		return <Text style={[styles.authorText]}>{author}</Text>;
	};

	render() {
		console.log("title called");
		return (
			<View style={styles.container}>
				{this.renderTitle("Fashion Designer Alexis Mabille’s Paris Villa")}
				{this.renderDate("By Odovacar Golzar")}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
		marginBottom: 0,
		padding: Metrics.DEFAULT_PADDING,
	},
	authorText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		paddingTop: Metrics.DEFAULT_PADDING,
		// padding: Metrics.DEFAULT_PADDING,
		textAlign: "left",
		alignSelf: "stretch",
		flexWrap: "wrap",
		alignItems: "flex-start",
		flexDirection: "row",
		justifyContent: "space-between",
		lineHeight: Metrics.LARGE_LINE_HEIGHT,
		fontFamily: "Lato-Regular",
		// flex: 1,
	},
	titleText: {
		fontSize: Metrics.EXTRA_LARGE_TEXT_SIZE,
		// padding: Metrics.DEFAULT_PADDING,
		lineHeight: Metrics.EXTRA_LARGE_LINE_HEIGHT,
		fontFamily: "Merriweather-Bold",
		// paddingLeft: 5,
		// flex: 1,
	},
});
