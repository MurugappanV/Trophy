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

type Props = {};

export default class ArticleListItem extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
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
					height={height}
					imageUrl={data.image}
					padded={settings.isPadded}
					isNotopMargin={settings.isNoTopMargin}
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
				horizontal
				data={order}
				keyExtractor={(x, i) => i.toString()}
				renderItem={({ item }) => (
					<ArticleListBigImage height={300} imageUrl={item.image} padded isNotopMargin />
				)}
			/>
		);
	};

	render() {
		const { order, data, settings, onPress } = this.props;
		const { height } = this.state;
		console.log("data", data);
		return (
			// <TouchableOpacity onPress={() => onPress()} style={styles.container}>
			// {this.renderArticle(order, data, settings, height)}
			<View>
				<FlatList
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
				/>
				<ArticleListTitleImage
					isCenter={false}
					isTitleImage={false}
					title={"data.title"}
					imageUrl={null}
				/>
				<ArticleListDescription description={"data.description"} isCenter={false} />
				<ArticleListFooter isCenter={false} time={"data.time"} isBookMarked={false} />
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
});
