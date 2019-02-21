import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import HTMLView from "react-native-htmlview";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";
import { getImageHeight } from "../../utilities";
import { Line } from "../common";

const image = "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg";

type Props = {
	isCenter: boolean,
};

export default class ArticleDisplayDescription extends PureComponent<Props> {
	render() {
		const { data, dynamicColor, font } = this.props;
		const description = data.body;
		const webViewStyle = StyleSheet.flatten([
			{
				p: {
					color: dynamicColor.fontColor,
					fontfamily: "Merriweather-Regular",
					lineHeight:
						font == "large"
							? Metrics.EXTRA_LARGE_LINE_HEIGHT + 4
							: Metrics.EXTRA_LARGE_LINE_HEIGHT,
					fontSize:
						font == "large"
							? Metrics.EXTRA_MEDIUM_TEXT_SIZE + 4
							: Metrics.EXTRA_MEDIUM_TEXT_SIZE,
				},
				h2: {
					color: dynamicColor.fontColor,
					fontfamily: "Merriweather-Bold",
					fontSize:
						font == "large"
							? Metrics.EXTRA_LARGE_TEXT_SIZE + 4
							: Metrics.EXTRA_LARGE_TEXT_SIZE,
					lineHeight:
						font == "large"
							? Metrics.EXTRA_LARGE_LINE_HEIGHT + 4
							: Metrics.EXTRA_LARGE_LINE_HEIGHT,
				},
			},
		]);
		return (
			<View
				style={{ padding: Metrics.DEFAULT_PADDING, marginBottom: Metrics.DEFAULT_PADDING }}
			>
				<HTMLView value={description} stylesheet={webViewStyle} />
				<Line style={styles.lineSeperator} />
				<TouchableOpacity style={styles.openion}>
					<Text
						style={StyleSheet.flatten([
							styles.openionText,
							{ backgroundColor: dynamicColor.bgColor },
							{ color: dynamicColor.fontColor },
						])}
					>
						Add your openion
					</Text>
				</TouchableOpacity>
				<Line style={styles.lineSeperator} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	lineSeperator: {
		width: ScalePerctFullWidth(90),
		height: 1,
		paddingBottom: Metrics.DEFAULT_PADDING,
		paddingTop: 0,
		borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
		marginBottom: 10,
		marginTop: 0,
		paddingHorizontal: Metrics.DEFAULT_PADDING,
	},
	openion: {
		alignItems: "center",
		justifyContent: "center",
	},
	openionText: {
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		lineHeight: Metrics.SMALL_LINE_HEIGHT,
		fontWeight: "bold",
	},
});
