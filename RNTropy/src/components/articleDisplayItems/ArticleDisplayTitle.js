import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth, ScalePerctFullHeight } from "../../asset";
import { Line } from "../common";

export default class ArticleDisplaytitle extends PureComponent<Props> {
	renderTitle = title => {
		const { dynamicColor, font } = this.props;
		console.log;
		return (
			<Text
				style={[
					styles.titleText,
					{ color: dynamicColor.fontColor },
					{
						fontSize:
							font == "large"
								? Metrics.EXTRA_LARGE_TEXT_SIZE + 4
								: Metrics.EXTRA_LARGE_TEXT_SIZE,
					},
					{
						lineHeight:
							font == "large"
								? Metrics.EXTRA_LARGE_LINE_HEIGHT + 4
								: Metrics.EXTRA_LARGE_LINE_HEIGHT,
					},
				]}
			>
				{title}
			</Text>
		);
	};

	renderDate = (author, date) => {
		const { dynamicColor, font } = this.props;
		return (
			<Text
				style={[
					styles.dateText,
					{ color: dynamicColor.fontColor },
					{
						fontSize:
							font == "large"
								? Metrics.SMALL_TEXT_SIZE + 4
								: Metrics.SMALL_TEXT_SIZE,
					},
					{
						lineHeight:
							font == "large"
								? Metrics.LARGE_LINE_HEIGHT + 4
								: Metrics.LARGE_LINE_HEIGHT,
					},
				]}
			>
				{author}
				<Text>
					<Text style={styles.dot}> . </Text> {date}
				</Text>
			</Text>
		);
	};
	render() {
		console.log("title called");
		const { dynamicColor } = this.props;
		return (
			<View
				style={[
					styles.container,
					{ backgroundColor: dynamicColor.bgColor },
					{ color: dynamicColor.fontColor },
				]}
			>
				{this.renderTitle("Fashion Designer Alexis Mabille’s Paris Villa")}
				{this.renderDate("By Odovacar Golzar", "Jan 16,  2018,  3:44 PM")}
				{/* <Text style={styles.lineSeperator} /> */}
				<Line style={styles.lineSeperator} />
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
		// marginBottom: 30,
	},
	dateText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		padding: Metrics.DEFAULT_PADDING,
		textAlign: "left",
		alignSelf: "stretch",
		flexWrap: "wrap",
		alignItems: "flex-start",
		flexDirection: "row",
		justifyContent: "space-between",
		lineHeight: Metrics.LARGE_LINE_HEIGHT,
	},
	titleText: {
		fontSize: Metrics.EXTRA_LARGE_TEXT_SIZE,
		padding: Metrics.DEFAULT_PADDING,
		lineHeight: Metrics.EXTRA_LARGE_LINE_HEIGHT,
		paddingLeft: 5,
	},
	lineSeperator: {
		width: "90%",
		height: 1,
		paddingBottom: Metrics.DEFAULT_PADDING,
		paddingTop: 0,
		borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
		// marginBottom: 10,
		// marginTop: Metrics.DEFAULT_PADDING,
		paddingHorizontal: Metrics.DEFAULT_PADDING,
	},
});
