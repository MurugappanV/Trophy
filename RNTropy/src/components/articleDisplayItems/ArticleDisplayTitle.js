import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import {
	Colors,
	Metrics,
	ScalePerctFullWidth,
	ScalePerctFullHeight,
	Constants,
} from "../../asset";
import { Line } from "../common";

class ArticleDisplaytitle extends PureComponent<Props> {
	onItemPress = (authorName: string, authorId: number, site: string) => {
		const { navigation } = this.props;
		navigation.navigate("SettingsDrawerScreen", { authorName, authorId, site });
	};
	renderTitle = title => {
		const { dynamicColor, font, titles } = this.props;
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

	renderDate = (author, date, authorName: string, authorId: number, site: string) => {
		const { dynamicColor, font } = this.props;
		return (
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity onPress={() => this.onItemPress(authorName, authorId, site)}>
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
					</Text>
				</TouchableOpacity>
				<Text style={styles.dot}>{Constants.articleDisplay.blackCircle}</Text>
				<Text
					style={[
						styles.date,
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
					{date}
				</Text>
			</View>
		);
	};
	render() {
		console.log("title called");

		const { dynamicColor, data } = this.props;

		console.log("titleData", data);
		// array.length < 1 || array == undefined
		const author = !data.author
			? "author"
			: data.author.und[0].name
			? data.author.und[0].name
			: data.byline;
		const title = data.title;
		console.log("author", author);
		// const author = data.author.und[0].name ? data.author.und[0].name : data.byline;
		const date = data.published_date ? data.published_date : data.created_date;
		const articleTemplate = data.article_template;
		return (
			<View
				style={[
					styles.container,
					{ backgroundColor: dynamicColor.bgColor },
					{ color: dynamicColor.fontColor },
				]}
			>
				{this.renderTitle(title)}
				{this.renderDate(author, date)}
				{(articleTemplate === "1" || articleTemplate === "2") && (
					<Line style={styles.lineSeperator} />
				)}
			</View>
		);
	}
}
export default withNavigation(ArticleDisplaytitle);

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "flex-start",
		flex: 1,
		padding: Metrics.DEFAULT_LIST_PADDING,
	},
	titleText: {
		fontSize: Metrics.EXTRA_LARGE_TEXT_SIZE,
		// padding: Metrics.DEFAULT_PADDING,
		lineHeight: Metrics.EXTRA_LARGE_LINE_HEIGHT,
		fontFamily: "Lato-Bold",
		// paddingLeft: Metrics.DEFAULT_LIST_PADDING,
	},
	lineSeperator: {
		width: ScalePerctFullWidth(90),
		height: 1,
		paddingBottom: Metrics.DEFAULT_PADDING,
		paddingTop: 0,
		borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
		paddingHorizontal: Metrics.DEFAULT_PADDING,
	},
	date: {
		// paddingLeft: Metrics.DEFAULT_PADDING,
		fontSize: Metrics.SMALL_TEXT_SIZE,
		lineHeight: Metrics.LARGE_LINE_HEIGHT,
		fontFamily: "Lato-Regular",
	},
	dot: {
		paddingLeft: Metrics.DEFAULT_PADDING,
		paddingRight: Metrics.DEFAULT_PADDING,
		paddingTop: 2,
	},
});
