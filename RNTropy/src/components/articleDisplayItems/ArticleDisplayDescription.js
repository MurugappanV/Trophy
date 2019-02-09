import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";
import { getImageHeight } from "../../utilities";
import { Line } from "../common";

const image = "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg";

type Props = {
	isCenter: boolean,
};

export default class ArticleDisplayDescription extends PureComponent<Props> {
	renderImage = image => {
		const height = getImageHeight(image);
		return (
			<Image
				source={{
					uri: image,
				}}
				style={StyleSheet.flatten([
					styles.imageOne,
					{
						height,
					},
				])}
			/>
		);
	};

	renderParagraph = paragraphArray => {
		const { dynamicColor, font } = this.props;
		return paragraphArray.map(eachPara => {
			return (
				<Text
					style={[
						styles.paragraphText,
						{ color: dynamicColor.fontColor },
						{ fontSize: font === "large" ? 29 : 15 },
						{
							lineHeight:
								font == "large"
									? Metrics.EXTRA_LARGE_LINE_HEIGHT + 4
									: Metrics.EXTRA_LARGE_LINE_HEIGHT,
						},
						{
							fontSize:
								font == "large"
									? Metrics.EXTRA_MEDIUM_TEXT_SIZE + 4
									: Metrics.EXTRA_MEDIUM_TEXT_SIZE,
						},
					]}
				>
					{eachPara}
				</Text>
			);
		});
	};

	renderShortDescription = description => {
		const { dynamicColor, font } = this.props;
		console.log("font", this.props.font);
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
				{description}
			</Text>
		);
	};

	render() {
		const { dynamicColor } = this.props;
		return (
			<View
				style={[
					styles.container,
					{ backgroundColor: dynamicColor.bgColor },
					{ color: dynamicColor.fontColor },
				]}
			>
				{this.renderParagraph([
					"I’ll be honest: I’m getting tired of shows like Maniac.There was a time when a prestige drama starring Emma Stone and Jonah Hill, which plays like a three - way crossover between.Inception, Brazil, and FX’ s Legion, would have sounded unmissable.But as you’ ve probably noticed, there’ s a lot of prestige - y TV out there these days.",
					"Much of it is good.Almost none of it is great.The bar has been raised, and there are too many TV shows that receive outsized praise when they barely manage to clear it.",
				])}

				{this.renderImage(image)}
				{this.renderShortDescription(
					"Extending the genre of self-portraiture, Niemi is a visual storyteller. Her images are presented as a cinematic exploration of identity, gender roles and our relationship with ourselves. Photographed in meticulously crafted sets, Niemi’s face is often obscured from view.",
				)}
				<Line style={styles.smallLineSeperator} />
				<Text style={styles.lineSeperator} />
				{this.renderParagraph([
					"I’ll be honest: I’m getting tired of shows like Maniac.There was a time when a prestige drama starring Emma Stone and Jonah Hill, which plays like a three - way crossover between.Inception, Brazil, and FX’ s Legion, would have sounded unmissable.But as you’ ve probably noticed, there’ s a lot of prestige - y TV out there these days.",
					"Much of it is good.Almost none of it is great.The bar has been raised, and there are too many TV shows that receive outsized praise when they barely manage to clear it.",
				])}
				<Line style={styles.lineSeperator} />
				<Text
					style={StyleSheet.flatten([
						styles.openionText,
						{ backgroundColor: dynamicColor.bgColor },
						{ color: dynamicColor.fontColor },
					])}
				>
					Add your openion
				</Text>
				<Line style={styles.lineSeperator} />
			</View>
		);
	}
}

ArticleDisplayDescription.defaultProps = {
	// isCenter: false,
};

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
		marginBottom: 80,
	},
	imageOne: {
		width: ScalePerctFullWidth(100),
	},
	// titleText: {
	// 	fontSize: Metrics.EXTRA_LARGE_TEXT_SIZE,
	// 	padding: Metrics.DEFAULT_PADDING,
	// 	lineHeight: Metrics.EXTRA_LARGE_LINE_HEIGHT,
	// },
	// imageHeading: {
	// 	fontSize: Metrics.LARGE_TEXT_SIZE,
	// 	letterSpacing: 0.3,
	// 	fontWeight: "bold",
	// 	padding: Metrics.DEFAULT_PADDING,
	// 	textAlign: "left",
	// 	alignSelf: "stretch",
	// },
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
	lineSeperator: {
		width: "90%",
		height: 1,
		paddingBottom: Metrics.DEFAULT_PADDING,
		paddingTop: 0,
		borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
		marginBottom: 10,
		marginTop: 0,
		paddingHorizontal: Metrics.DEFAULT_PADDING,
	},
	smallLineSeperator: {
		width: "30%",
		height: 1,
		// paddingBottom: Metrics.DEFAULT_PADDING,
		paddingTop: 0,
		borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
		// padding: Metrics.DEFAULT_PADDING,
		// marginBottom: 10,
		marginTop: 40,
		marginRight: 250,
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	paragraphText: {
		fontSize: Metrics.EXTRA_MEDIUM_TEXT_SIZE,
		letterSpacing: 0.3,
		padding: Metrics.DEFAULT_PADDING,
		textAlign: "justify",
		lineHeight: Metrics.EXTRA_LARGE_LINE_HEIGHT,
	},
	// dot: {
	// 	padding: Metrics.DEFAULT_PADDING - 10,
	// 	fontSize: 30,
	// },
	openionText: {
		padding: Metrics.DEFAULT_PADDING - 10,
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		lineHeight: Metrics.SMALL_LINE_HEIGHT,
		fontWeight: "bold",
	},
});
