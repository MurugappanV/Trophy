import React, { PureComponent } from "react";
import { View, Text, FlatList } from "react-native";
import ListPodcastScreen from "./ListPodcastScreen";

export default class TopListPodcastScreen extends PureComponent {
	state = {};

	render() {
		const { navigation } = this.props;
		return (
			<FlatList
				data={[
					[{ key: "a" }, { key: "b" }, { key: "c" }],
					[{ key: "a" }, { key: "b" }, { key: "c" }],
					[{ key: "a" }, { key: "b" }, { key: "c" }],
				]}
				renderItem={({ item }) => (
					<ListPodcastScreen data={item} navigation={navigation} />
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		);
	}
}
