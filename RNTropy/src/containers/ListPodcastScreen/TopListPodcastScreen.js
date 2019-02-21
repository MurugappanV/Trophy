import React, { PureComponent } from "react";
import { View, Text, FlatList } from "react-native";
import ListPodcastScreen from "./ListPodcastScreen";
import data from "../../utilities/data.json";

type Props = {
	navigation: any,
};

export default class TopListPodcastScreen extends PureComponent<Props> {
	state = {};

	render() {
		const { navigation } = this.props;
		return (
			<FlatList
				data={data}
				renderItem={({ item, index }) => (
					<ListPodcastScreen data={item} navigation={navigation} index={index} />
				)}
				keyExtractor={(item, index) => index.toString()}
			/>
		);
	}
}
