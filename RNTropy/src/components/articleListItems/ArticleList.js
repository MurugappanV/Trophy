import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Colors } from "../../asset";
import Article from "./Article";

type Props = {
	list?: object,
};

const templates = {
	"1": ["bigImage", "logo", "title", "footer"],
	"2": ["logo", "title", "footer"],
	"3": ["logo", "bigImage", "title", "footer"],
	"4": ["logo", "bigImage", "title", "description", "footer"],
	"5": ["logo", "bigImage", "title", "description", "footer"],
	"6": ["logo", "title", "description", "footer"],
	"7": ["title", "description", "footer"],
	"8": ["title", "footer"],
	"9": ["logo", "bigImage", "title", "description", "footer"],
	"10": ["logo", "bigImage", "title", "description", "footer"],
	"11": ["logo", "bigImage", "title", "description", "footer"],
};

// renderArticle = (order: array) => {
// 	return order.map(item => renderItem(item));
// };

export default function ArticleListItems(props: Props) {
	const { list, onItemPress } = props;
	// return list.map(item => );
	return (
		<FlatList
			data={list}
			keyExtractor={(x, i) => i.toString()}
			horizontal={false}
			onEndReachedThreshold={0.5}
			ItemSeparatorComponent={() => <View />}
			ListHeaderComponent={() => <View style={styles.header} />}
			ListFooterComponent={() => <View style={styles.footer} />}
			// onViewableItemsChanged={(items: any) => {
			// 	console.log(items);
			// 	this.viewItemsChanged(items);
			// }}
			renderItem={({ item }) => (
				<Article
					onPress={onItemPress}
					key={item.templateId}
					order={templates[item.templateId]}
					data={item}
				/>
			)}
		/>
	);
}
const imageUrl = "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg";
const logoUrl = "http://www.matcheyewear.com/images/BrandImages/Cosmopolitan-Logo.jpg";
const description =
	"I’ ll be honest: I’ m getting tired of shows like Maniac.There was a time when a prestige drama starring Emma Stone and Jonah Hill, which plays like a three - way crossover between.Inception, Brazil, and FX’ s Legion, would have sounded unmissable.But as you’ ve probably noticed, there’ s a lot of prestige - y TV out there these days.', 'Much of it is good.Almost none of it is great.The bar has been raised, and there are too many TV shows that receive outsized praise when they barely manage to clear it.";
const smallDescription =
	"I’ ll be honest: I’ m getting tired of shows like Maniac.There was a time.";
const title = "Fashion Designer Alexis Mabille’s Paris Villa";
ArticleListItems.defaultProps = {
	list: [
		{
			templateId: "1",
			title: title,
			description: null,
			titleImageUrl: null,
			bigImageUrl: imageUrl,
			isFollow: false,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: logoUrl,
			isPadded: false,
			isCenter: false,
		},
		{
			templateId: "2",
			title: title,
			description: null,
			titleImageUrl: imageUrl,
			bigImageUrl: null,
			isFollow: false,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: logoUrl,
			isPadded: false,
			isCenter: false,
		},
		{
			templateId: "3",
			title: title,
			description: null,
			titleImageUrl: null,
			bigImageUrl: imageUrl,
			isFollow: false,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: logoUrl,
			isPadded: false,
			isCenter: false,
		},
		{
			templateId: "4",
			title: title,
			description: smallDescription,
			titleImageUrl: null,
			bigImageUrl: imageUrl,
			isFollow: false,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: logoUrl,
			isPadded: false,
			isCenter: true,
		},
		{
			templateId: "5",
			title: title,
			description: description,
			titleImageUrl: null,
			bigImageUrl: imageUrl,
			isFollow: false,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: logoUrl,
			isPadded: false,
			isCenter: false,
		},
		{
			templateId: "6",
			title: title,
			description: description,
			titleImageUrl: imageUrl,
			bigImageUrl: null,
			isFollow: true,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: logoUrl,
			isPadded: false,
			isCenter: false,
		},
		{
			templateId: "7",
			title: title,
			description: description,
			titleImageUrl: imageUrl,
			bigImageUrl: null,
			isFollow: false,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: null,
			isPadded: false,
			isCenter: false,
		},
		{
			templateId: "8",
			title: title,
			description: null,
			titleImageUrl: null,
			bigImageUrl: null,
			isFollow: false,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: null,
			isPadded: false,
			isCenter: false,
		},
		{
			templateId: "9",
			title: title,
			description: smallDescription,
			titleImageUrl: null,
			bigImageUrl: imageUrl,
			isFollow: false,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: logoUrl,
			isPadded: false,
			isCenter: true,
		},
		{
			templateId: "10",
			title: title,
			description: description,
			titleImageUrl: null,
			bigImageUrl: imageUrl,
			isFollow: false,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: logoUrl,
			isPadded: true,
			isCenter: false,
		},
		{
			templateId: "11",
			title: title,
			description: description,
			titleImageUrl: null,
			bigImageUrl: imageUrl,
			isFollow: true,
			isBookMarked: false,
			time: "3 hours ago",
			logoUrl: logoUrl,
			isPadded: true,
			isCenter: false,
		},
	],
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		flex: 1,
		alignSelf: "center",
	},
	header: {
		marginTop: 20,
	},
	footer: {
		marginBottom: 20,
		backgroundColor: "#00000000",
	},
});
