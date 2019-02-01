import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../asset";
import Article from "./Article";

type Props = {
	list?: object,
};

const templates = {
	"1": ["logo", "bigImage", "title", "footer"],
	"2": ["logo", "titleImage", "footer"],
	"3": ["logo", "bigImage", "title", "description", "footer"],
	"4": ["followLogo", "titleImage", "description", "footer"],
	"5": ["titleImage", "description", "footer"],
	"6": ["title", "footer"],
	"7": ["titleImage", "description", "footer"],
	"8": ["logo", "bigImagePadded", "title", "description", "footer"],
	"9": ["followLogo", "bigImagePadded", "title", "description", "footer"],
	"10": ["followLogo", "bigImagePadded", "titleCenter", "descriptionCenter", "footerCenter"],
	"11": ["logo", "bigImagePadded", "titleCenter", "descriptionCenter", "footerCenter"],
};

// renderArticle = (order: array) => {
// 	return order.map(item => renderItem(item));
// };

export default function ArticleListItems(props: Props) {
	const { list } = props;
	return list.map(id => <Article order={templates[id]} />);
}

ArticleListItems.defaultProps = {
	list: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		flex: 1,
		alignSelf: "center",
	},
});
