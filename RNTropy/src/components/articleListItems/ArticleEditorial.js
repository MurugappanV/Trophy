import React, { PureComponent } from "react";
import { View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";
import {
	ArticleListTitleImage,
	ArticleListFooter,
	ArticleListDescription,
} from "../articleListSubItems";

type Props = {};

export default class ArticleEditorial extends PureComponent<Props> {
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
				<ArticleListDescription description={data[index].lead_text} isCenter={false} />
				<ArticleListFooter isCenter={false} time={"3 days ago"} isBookMarked={false} />
				<View style={styles.lineSeperator} />
			</View>
			// </TouchableOpacity>
		);
	}
}

ArticleEditorial.defaultProps = {
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
	imageEditorialContainer: {
		width: ScalePerctFullWidth(84),
		height: ScalePerctFullWidth(55),
		paddingHorizontal: 8,
		alignItems: "center",
		justifyContent: "center",
	},
});
