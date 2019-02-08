import React, { PureComponent } from "react";
import { View, FlatList, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";
import {
	ArticleListTitleImage,
	ArticleListLogo,
	ArticleListFooter,
	ArticleListBigImage,
	ArticleListDescription,
} from "../articleListSubItems";
import { getImageDisplayHeight } from "../../utilities";

type Props = {
	order?: object,
};

// else if (type == "titleImage") {
// 	return <ArticleListTitleImage imageUrl={"https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg"} />;
// }
// else if (type == "bigImagePadded") {
// 	return <ArticleListBigImage padded={true} />;
// }
// else if (type == "titleCenter") {
// 	return <ArticleListTitleImage isCenter={true} />;
// } else if (type == "descriptionCenter") {
// 	return <ArticleListDescription isCenter={true} />;
// } else if (type == "footerCenter") {
// 	return <ArticleListFooter isCenter={true} />;
// }
// else if (type == "followLogo") {
// 	return <ArticleListLogo isFollow={true} />;
// }

export default class ArticleListItem extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = { height: 400 };
	}

	componentDidMount() {
		// if (!!this.props.data.bigImageUrl) {
		// 	Image.getSize(this.props.data.bigImageUrl, (width, height) => { this.setState({ height: getImageDisplayHeight(width, height), loading: false }) })
		// }
	}

	renderItem = (type: string, data: any, settings: any, height: number) => {
		if (type === "logo") {
			return (
				<ArticleListLogo
					imageUrl={
						data.brand_logo && data.brand_logo.length > 0 ? data.brand_logo : undefined
					}
					isFollow={settings.isFollow}
				/>
			);
		}
		if (type === "bigImage") {
			return (
				<ArticleListBigImage
					height={settings.height}
					imageUrl={data.image}
					padded={settings.isPadded}
					isNotopMargin={settings.isNoTopMargin}
					isVideo={settings.isVideo}
				/>
			);
		}
		if (type === "title") {
			return (
				<ArticleListTitleImage
					isCenter={settings.isCenter}
					isTitleImage={settings.isTitleImage}
					title={data.title}
					imageUrl={data.image_crop}
				/>
			);
		}
		if (type === "footer") {
			return (
				<ArticleListFooter
					isCenter={settings.isCenter}
					time={data.time}
					isBookMarked={data.isBookMarked}
				/>
			);
		}
		if (type === "description") {
			return (
				<ArticleListDescription
					description={data.description}
					isCenter={settings.isCenter}
				/>
			);
		}
		return null;
	};

	renderArticle = (order: any, data: any, settings: any, height: number) => {
		// console.log("jsx ", order.map(item => renderItem(item, data, height)));
		// return order.map(item => this.renderItem(item, data, height));
		return (
			<FlatList
				data={order}
				keyExtractor={(x, i) => i.toString()}
				renderItem={({ item }) => this.renderItem(item, data, settings, height)}
			/>
		);
	};

	render() {
		const { order, data, settings, onPress } = this.props;
		const { height } = this.state;
		return (
			<TouchableOpacity onPress={() => onPress()} style={styles.container}>
				{this.renderArticle(order, data, settings, height)}
				<View style={styles.lineSeperator} />
			</TouchableOpacity>
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
});
