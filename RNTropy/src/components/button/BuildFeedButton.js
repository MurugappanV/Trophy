import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ScalePerctFullWidth, ScalePerctFullHeight } from "../../asset";
import { Colors } from "../../asset";

export default class BuildFeedButton extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		let { onPress, title, style, ...props } = this.props;
		return (
			<TouchableOpacity onPress={onPress} style={[styles.container, style]}>
				<Text style={styles.text}>{title ? title : "Build My Feed"}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		//position: "absolute",
		height: ScalePerctFullHeight(8),
		width: ScalePerctFullWidth(46),
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
		borderRadius: 25,
	},
	text: {
		color: Colors.bgPrimaryLight,
		fontSize: 12,
		fontWeight: "bold",
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
	},
});
