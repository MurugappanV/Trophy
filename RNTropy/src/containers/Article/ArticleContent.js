import React, { PureComponent } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Strings, Metrics } from "../../asset";
import { getImageHeight } from "./../../utilities";
const image = "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg";

type Props = {
	navigation: any,
};

export default class ArticleContent extends PureComponent<Props> {
	renderHeading = heading => {
		const { dynamicColor, font } = this.props;
		return (
			<Text
				style={[
					styles.imageHeading,
					{ color: dynamicColor.fontColor },
					{
						fontSize:
							font == "large"
								? Metrics.LARGE_TEXT_SIZE + 4
								: Metrics.LARGE_TEXT_SIZE,
					},
				]}
			>
				{heading}
			</Text>
		);
	};

	renderImage = image => {
		const height = getImageHeight(image);
		return (
			<Image
				source={{ uri: image }}
				style={StyleSheet.flatten([styles.imageOne, { height: height }])}
			/>
		);
	};

	renderTitle = title => {
		const { dynamicColor, font } = this.props;
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
				{this.renderHeading("Architectural digest")}
				{this.renderImage(image)}
				{this.renderTitle("Fashion Designer Alexis Mabille’s Paris Villa")}
				{this.renderDate("By Odovacar Golzar", "Jan 16,  2018,  3:44 PM")}
				<Text style={styles.lineSeperator} />
				{this.renderParagraph([
					"I’ ll be honest: I’ m getting tired of shows like Maniac.There was a time when a prestige drama starring Emma Stone and Jonah Hill, which plays like a three - way crossover between.Inception, Brazil, and FX’ s Legion, would have sounded unmissable.But as you’ ve probably noticed, there’ s a lot of prestige - y TV out there these days.",
					"Much of it is good.Almost none of it is great.The bar has been raised, and there are too many TV shows that receive outsized praise when they barely manage to clear it.",
				])}

				{this.renderImage(image)}
				{this.renderShortDescription(
					"Extending the genre of self-portraiture, Niemi is a visual storyteller. Her images are presented as a cinematic exploration of identity, gender roles and our relationship with ourselves. Photographed in meticulously crafted sets, Niemi’s face is often obscured from view.",
				)}
				<Text style={styles.lineSeperator} />
				{this.renderParagraph([
					" I’ ll be honest: I’ m getting tired of shows like Maniac.There was a time when a prestige drama starring Emma Stone and Jonah Hill, which plays like a three - way crossover between.Inception, Brazil, and FX’ s Legion, would have sounded unmissable.But as you’ ve probably noticed, there’ s a lot of prestige - y TV out there these days.",
					"Much of it is good.Almost none of it is great.The bar has been raised, and there are too many TV shows that receive outsized praise when they barely manage to clear it.",
				])}
				<Text style={styles.lineSeperator} />
				<Text style={styles.openionText}>Add your openion</Text>
				<Text style={styles.lineSeperator} />
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
		marginBottom: 80,
	},
	imageOne: {
		width: ScalePerctFullWidth(100),
	},
	titleText: {
		fontSize: Metrics.EXTRA_LARGE_TEXT_SIZE,
		padding: Metrics.DEFAULT_PADDING,
		lineHeight: Metrics.EXTRA_LARGE_LINE_HEIGHT,
	},
	imageHeading: {
		fontSize: Metrics.LARGE_TEXT_SIZE,
		letterSpacing: 0.3,
		fontWeight: "bold",
		padding: Metrics.DEFAULT_PADDING,
		textAlign: "left",
		alignSelf: "stretch",
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
	lineSeperator: {
		width: "100%",
		height: 1,
		paddingBottom: Metrics.DEFAULT_PADDING,
		paddingTop: 0,
		borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
		marginBottom: 10,
		marginTop: 0,
	},
	paragraphText: {
		fontSize: Metrics.EXTRA_MEDIUM_TEXT_SIZE,
		letterSpacing: 0.3,
		padding: Metrics.DEFAULT_PADDING,
		textAlign: "justify",
		lineHeight: Metrics.EXTRA_LARGE_LINE_HEIGHT,
	},
	dot: {
		padding: Metrics.DEFAULT_PADDING - 10,
		fontSize: 30,
	},
	openionText: {
		padding: Metrics.DEFAULT_PADDING - 10,
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		lineHeight: Metrics.SMALL_LINE_HEIGHT,
		fontWeight: "bold",
	},
});
