import React from "react";
import { StyleSheet, View, ActivityIndicator, SectionList, Text } from "react-native";
import {
	Article,
	ArticleEditorial,
	ArticlePodcast,
	ArticleVideo,
	ListLoading,
} from "../../components";
import { TemplateConfig, Metrics, Constants, Colors } from "../../asset";

type Props = {
	data: any,
	loading: boolean,
	refresh: boolean,
};

export default function ArticleListUI(props: Props) {
	const { data, onItemPress, loading, refresh } = props;
	// console.log("article data to render ", data);
	return (
		<SectionList
			sections={data}
			keyExtractor={(x, i) => i.toString()}
			stickySectionHeadersEnabled={false}
			// horizontal={false}
			// onEndReachedThreshold={0.5}
			// ItemSeparatorComponent={() => <View />}
			// ListHeaderComponent={() => <View style={styles.header} />}
			ListFooterComponent={() => <ListLoading loading={loading} refresh={refresh} />}
			renderItem={({ item, index, section }) => {
				if (section.title === Constants.articleListSections.editorial) {
					return (
						<ArticleEditorial
							onPress={() => onItemPress(item.nid, item.site)}
							key={index.toString()}
							order={TemplateConfig.articleTemplates[item.template || 2]}
							settings={TemplateConfig.articleTemplateSettings[item.template || 2]}
							data={item}
						/>
					);
				}
				if (section.title === Constants.articleListSections.podcast) {
					return (
						<ArticlePodcast
							onPress={() => onItemPress(item.nid, item.site)}
							key={index.toString()}
							order={TemplateConfig.articleTemplates[item.template || 2]}
							settings={TemplateConfig.articleTemplateSettings[item.template || 2]}
							data={item}
						/>
					);
				}
				if (section.title === Constants.articleListSections.videos) {
					return (
						<ArticleVideo
							onPress={() => onItemPress(item.nid, item.site)}
							key={index.toString()}
							order={TemplateConfig.articleTemplates[item.template || 2]}
							settings={TemplateConfig.articleTemplateSettings[item.template || 2]}
							data={item}
						/>
					);
				}
				if (item.content_type === "video") {
					return (
						<Article
							onPress={() => onItemPress(item.nid, item.site)}
							key={index.toString()}
							order={TemplateConfig.articleTemplates[13]}
							settings={TemplateConfig.articleTemplateSettings[13]}
							data={item}
						/>
					);
				}
				return (
					<Article
						onPress={() => onItemPress(item.nid, item.site)}
						key={index.toString()}
						order={TemplateConfig.articleTemplates[item.template || 2]}
						settings={TemplateConfig.articleTemplateSettings[item.template || 2]}
						data={item}
					/>
				);
			}}
			renderSectionHeader={({ section: { title } }) => {
				if (title !== Constants.articleListSections.empty) {
					return (
						<Text
							style={{
								padding: Metrics.DEFAULT_LIST_PADDING,
								fontFamily: "Merriweather-Bold",
								color: Colors.bgSecondaryVarient,
							}}
						>
							{title}
						</Text>
					);
				}
				return null;
			}}
		/>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
