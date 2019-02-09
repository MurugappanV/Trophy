import React, { PureComponent } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Colors, Metrics, ScalePerctFullWidth, Images } from "../../asset";
import {
	ArticleListTitleImage,
	ArticleListFooter,
	ArticleListDescription,
} from "../articleListSubItems";
import Icon from "../../asset/fonts/icons";

type Props = {};

export default class ArticleListItem extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = { index: 0 };
	}

	renderImage = (item: any) => {
		const url =
			!item.image || item.image.includes("public://")
				? "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg"
				: item.image;
		return (
			<View>
				<Image source={{ uri: url }} style={StyleSheet.flatten([styles.image])} />
				<Text style={[styles.titleText]}>
					{item.video && item.video.length > 0 && item.video[0].filename}
				</Text>
			</View>
		);
	};

	onItemChanged = (index: number) => {
		this.setState({ index });
	};

	render() {
		const { data, onPress } = this.props;
		const { index } = this.state;
		return (
			<View>
				<Carousel
					ref={c => {
						this._carousel = c;
					}}
					data={data}
					renderItem={({ item }) => this.renderImage(item)}
					sliderWidth={ScalePerctFullWidth(100)}
					itemWidth={ScalePerctFullWidth(100)}
					onSnapToItem={this.onItemChanged}
					inactiveSlideOpacity={1}
					inactiveSlideScale={1}
					layoutCardOffset={0}
				/>
				<Pagination
					dotsLength={data.length}
					activeDotIndex={index}
					containerStyle={styles.paginationContainer}
					dotStyle={{
						width: 30,
						height: 3,
						borderRadius: 5,
						marginHorizontal: 0,
						backgroundColor: "rgba(255, 255, 255, 0.92)",
					}}
					inactiveDotStyle={
						{
							// Define styles for inactive dots here
						}
					}
					inactiveDotOpacity={0.3}
					inactiveDotScale={1}
				/>
				<View style={styles.lineSeperator} />
			</View>
			// </TouchableOpacity>
		);
	}
}

ArticleListItem.defaultProps = {
	order: ["logo", "bigImage", "title", "footer"],
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		flex: 1,
		alignSelf: "center",
	},
	lineSeperator: {
		paddingTop: Metrics.DEFAULT_PADDING,
		width: ScalePerctFullWidth(100) - Metrics.DEFAULT_LIST_PADDING * 2,
		alignSelf: "center",
		borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
	},
	image: {
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullWidth(90),
		backgroundColor: Colors.bgSecondaryLight,
	},
	symbolContainer: {
		height: 30,
		borderRadius: 15,
		width: 30,
		position: "absolute",
		bottom: 20,
		right: 15,
		backgroundColor: Colors.bodySecondaryDark,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	paginationContainer: {
		bottom: 0,
		left: 0,
		right: 0,
		position: "absolute",
	},
	titleText: {
		color: Colors.bodyPrimaryLight,
		fontSize: Metrics.EXTRA_LARGE_TEXT_SIZE,
		flex: 1,
		position: "absolute",
		bottom: 30,
		left: 30,
		right: 30,
	},
});
