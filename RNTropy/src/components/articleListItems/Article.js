import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";
import {
	ArticleListTitleImage,
	ArticleListLogo,
	ArticleListFooter,
	ArticleListBigImage,
	ArticleListDescription,
} from "../articleListSubItems";

type Props = {
	order?: object,
};

renderItem = (type: string) => {
	if (type == "logo") {
		return <ArticleListLogo isFollow={false} />;
	} else if (type == "followLogo") {
		return <ArticleListLogo isFollow={true} />;
	} else if (type == "bigImage") {
		return <ArticleListBigImage />;
	} else if (type == "bigImagePadded") {
		return <ArticleListBigImage padded={true} />;
	} else if (type == "title") {
		return <ArticleListTitleImage />;
	} else if (type == "titleImage") {
		return <ArticleListTitleImage imageUrl={require("../../asset/Images/logo.png")} />;
	} else if (type == "footer") {
		return <ArticleListFooter />;
	} else if (type == "description") {
		return <ArticleListDescription />;
	} else if (type == "titleCenter") {
		return <ArticleListTitleImage isCenter={true} />;
	} else if (type == "descriptionCenter") {
		return <ArticleListDescription isCenter={true} />;
	} else if (type == "footerCenter") {
		return <ArticleListFooter isCenter={true} />;
	}
	return null;
};

renderArticle = (order: array) => {
	return order.map(item => renderItem(item));
};

export default function ArticleListItem(props: Props) {
	const { order } = props;
	return (
		<View style={styles.container}>
			{renderArticle(order)}
			<View style={styles.lineSeperator} />
		</View>
	);
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
		width: ScalePerctFullWidth(100) - Metrics.DEFAULT_PADDING * 2,
		margin: Metrics.DEFAULT_PADDING,
		borderBottomWidth: 1,
		borderColor: Colors.linePrimary,
	},
});
