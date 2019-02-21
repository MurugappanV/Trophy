import React, { PureComponent } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
// import Svg, { Circle, Rect } from "react-native-svg";
// import Share, { ShareSheet, Button } from "react-native-share";
import { Actions } from "../../redux";
import {
	Colors,
	ScalePerctFullWidth,
	ScalePerctFullHeight,
	Strings,
	Metrics,
	Images,
} from "../../asset";
// import { Button, TextInput } from "../../components";

const image = require("../../asset/Images/login.png");

type Props = {
	navigation: any,
};

export default class BigImageFooter extends PureComponent<Props> {
	constructor(props) {
		super(props);
	}

	renderDescription = title => {
		console.log;
		return <Text style={styles.titleText}>{title}</Text>;
	};

	renderAuthor = author => {
		// const { dynamicColor, font } = this.props;
		return <Text style={[styles.authorText]}>{author}</Text>;
	};

	render() {
		// const { isBookMarked } = this.props;
		return (
			<View style={StyleSheet.flatten([styles.container])}>
				{this.renderDescription(
					"A young pro photographer, just living the movement and share what I love with people. Keep it simple ",
				)}
				{this.renderAuthor("GETTY IMAGESROY ROCHLIN")}
			</View>
		);
	}
}

BigImageFooter.defaultProps = {
	// isBookMarked: false,
	// onShare: () => {},
	// onBookMarkToggle: () => {},
};

const styles = StyleSheet.create({
	container: {
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(12.1),
		alignItems: "stretch",
		flexDirection: "column",
		justifyContent: "center",
		position: "absolute",
		backgroundColor: "black",
		bottom: 0,
	},
	titleText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		// paddingTop: ScalePerctFullWidth(1.6),
		letterSpacing: 0,
		textAlign: "left",
		alignSelf: "stretch",
		flexWrap: "wrap",
		alignItems: "flex-start",
		justifyContent: "space-between",
		lineHeight: Metrics.SMALL_LINE_HEIGHT,
		color: Colors.bgPrimaryLight,
		paddingLeft: ScalePerctFullWidth(5.6),
		paddingRight: ScalePerctFullWidth(5.3),
		fontFamily: "Lato-Bold",
		// marginTop: Metrics.DEFAULT_PADDING,
	},
	authorText: {
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		padding: ScalePerctFullWidth(0.9),
		lineHeight: 14,
		fontFamily: "Lato-Regular",
		color: Colors.bodyTertiaryLight,
		paddingLeft: ScalePerctFullWidth(6.1),
		paddingRight: ScalePerctFullWidth(5.3),
	},
});
