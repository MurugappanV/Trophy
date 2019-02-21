import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, ImageBackground } from "react-native";
import { ScalePerctFullWidth, ScalePerctFullHeight } from "../../asset";
import { Colors, Metrics } from "../../asset";

export default class BuildFeedButton extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		let { onPress, title, style, ...props } = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={[styles.container, style]}
				activeOpacity={0.4}
			>
				<ImageBackground
					source={require("../../asset/Images/subscribe.png")}
					resizeMode={"stretch"}
					style={[styles.container, style]}
				>
					<Text style={styles.text}>{title ? title : "Build My Feed"}</Text>
				</ImageBackground>
			</TouchableOpacity>
		);
	}
}

const tabStyles = StyleSheet.create({
	container: {
		height: ScalePerctFullHeight(6),
		width: ScalePerctFullWidth(25),
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
		borderRadius: ScalePerctFullWidth(23),
	},
	text: {
		color: Colors.bgPrimaryLight,
		fontSize: 12,
		fontWeight: "bold",
		alignItems: "center",
		justifyContent: "center",
	},
	linearGradient: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
	},
});

const normalStyles = StyleSheet.create({
	container: {
		//position: "absolute",
		height: ScalePerctFullHeight(8),
		width: ScalePerctFullWidth(46),
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "red",
		borderRadius: ScalePerctFullWidth(23),
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

const styles = Metrics.isTablet ? tabStyles : normalStyles;
