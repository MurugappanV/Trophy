import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getImageHeight } from "../../utilities";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

export default class ArticleDisplayLogo extends PureComponent<Props> {
	renderLogo = heading => {
		const { dynamicColor, font } = this.props;
		return (
			<Text
				style={[
					styles.imageHeading,
					{
						color: dynamicColor.fontColor,
					},
					{
						fontSize:
							font === "large"
								? Metrics.LARGE_TEXT_SIZE + 4
								: Metrics.LARGE_TEXT_SIZE,
					},
				]}
			>
				{heading}
			</Text>
		);
	};

	render() {
		const { dynamicColor } = this.props;
		return (
			<View
				style={[
					styles.container,
					{
						backgroundColor: dynamicColor.bgColor,
					},
					{
						color: dynamicColor.fontColor,
					},
				]}
			>
				{this.renderLogo("Architectural digest")}
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
		// marginBottom: 10,
	},
	imageHeading: {
		fontSize: Metrics.LARGE_TEXT_SIZE,
		letterSpacing: 0.3,
		fontWeight: "bold",
		padding: Metrics.DEFAULT_PADDING,
		textAlign: "left",
		alignSelf: "stretch",
	},
});
