import React from "react";
import { StyleSheet, View, SectionList, Text } from "react-native";
import { Article } from "../../components";
import { TemplateConfig, Metrics } from "../../asset";

type Props = {
	data: any,
};

export default function ArticleListUI(props: Props) {
	const { data, onItemPress } = props;
	console.log("article data to render ", data);
	return (
		<SectionList
			sections={data}
			keyExtractor={(x, i) => i.toString()}
			// horizontal={false}
			// onEndReachedThreshold={0.5}
			// ItemSeparatorComponent={() => <View />}
			// ListHeaderComponent={() => <View style={styles.header} />}
			// ListFooterComponent={() => <View style={styles.footer} />}
			renderItem={({ item, index }) => (
				<Article
					onPress={onItemPress}
					key={index.toString()}
					order={TemplateConfig.articleTemplates[item.template || 2]}
					settings={TemplateConfig.articleTemplateSettings[item.template || 2]}
					data={item}
				/>
			)}
			renderSectionHeader={({ section: { title } }) => (
				<Text style={{ fontWeight: "bold", padding: Metrics.DEFAULT_LIST_PADDING }}>
					{title}
				</Text>
			)}
		/>
		// <Article {...props} key={index.toString()} data={item} />
		// <ScrollView style={styles.container}>
		// <Article {...props} />
		// </ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
