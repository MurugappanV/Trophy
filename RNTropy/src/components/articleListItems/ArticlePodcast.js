import React, { PureComponent } from "react";
import { View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
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
			<View style={styles.imageEditorialContainer}>
				<Image source={{ uri: url }} style={StyleSheet.flatten([styles.image])} />
				<View style={styles.symbolContainer}>
					<Icon name={Images.podcast} size={15} color={Colors.bgPrimaryLight} />
				</View>
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
				{/* <FlatList
					horizontal
					data={data}
					keyExtractor={(x, i) => i.toString()}
					renderItem={({ item }) => {
						console.log("list", item);
						return (
							<ArticleListBigImage
								height={300}
								width={ScalePerctFullWidth(84)}
								imageUrl={item.image}
								padded
								isNotopMargin
							/>
						);
					}}
				/> */}
				<Carousel
					ref={c => {
						this._carousel = c;
					}}
					data={data}
					firstItem={data.length > 1 ? 1 : 0}
					renderItem={({ item }) => this.renderImage(item)}
					sliderWidth={ScalePerctFullWidth(100)}
					itemWidth={ScalePerctFullWidth(84)}
					onSnapToItem={this.onItemChanged}
					inactiveSlideOpacity={1}
					inactiveSlideScale={1}
				/>
				<ArticleListTitleImage
					isCenter={false}
					isTitleImage={false}
					title={data[index].title}
					imageUrl={null}
				/>
				<ArticleListFooter
					isBookMarkNeeded={false}
					isCenter={false}
					time={data[index].field_total_duration}
					isBookMarked={false}
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
		width: ScalePerctFullWidth(100) - Metrics.DEFAULT_LIST_PADDING * 2,
		alignSelf: "center",
		borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
	},
	image: {
		width: ScalePerctFullWidth(84) - 16,
		height: ScalePerctFullWidth(55),
		borderRadius: 10,
		backgroundColor: Colors.bgSecondaryLight,
	},
	symbolContainer: {
		height: 30,
		borderRadius: 15,
		width: 30,
		position: "absolute",
		bottom: 20,
		right: 25,
		backgroundColor: Colors.bodySecondaryDark,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	imageEditorialContainer: {
		width: ScalePerctFullWidth(84),
		height: ScalePerctFullWidth(55),
		paddingHorizontal: 8,
		alignItems: "center",
		justifyContent: "center",
	},
});
