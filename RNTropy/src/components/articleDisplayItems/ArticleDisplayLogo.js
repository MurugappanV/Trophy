import React, { PureComponent } from "react";
import { View, Image, StyleSheet } from "react-native";
import { getImageHeight } from "../../utilities";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

export default class ArticleDisplayLogo extends PureComponent<Props> {
	renderLogo = logo => {
		const { dynamicColor, font, articleDisplay, data } = this.props;
		return (
			<Image
				source={{ uri: logo }}
				resizeMode="contain"
				style={StyleSheet.flatten([styles.imageOne])}
			/>
		);
	};

	render() {
		const { dynamicColor, articleDisplay, data } = this.props;
		console.log("Article Logo", articleDisplay);
		const logo = data.brand_logo;
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
				{this.renderLogo(logo)}
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flex: 1,
		padding: Metrics.DEFAULT_LIST_PADDING,
		// marginBottom: 10,
	},
	// imageHeading: {
	// 	fontSize: Metrics.LARGE_TEXT_SIZE,
	// 	letterSpacing: 0.3,
	// 	fontWeight: "bold",
	// 	padding: Metrics.DEFAULT_PADDING,
	// 	textAlign: "left",
	// 	alignSelf: "stretch",
	// 	paddingLeft: 5,
	// 	// alignItems: "flex-start"
	// 	flex: 1,
	// },
	imageOne: {
		height: ScalePerctFullWidth(12),
		width: ScalePerctFullWidth(40),
		backgroundColor: Colors.bgSecondaryLight,
	},
});
