import React, { PureComponent } from "react";
import { FlatList, View, Image, Text, StyleSheet } from "react-native";

type props = {
	data: string,
};

export default class RelatedVideos extends PureComponent {
	_keyExtractor = (item, index) => item.id;

	renderVideoItem = ({ item }) => {
		// const { imageURL, title, videoLength } = this.props;
		return (
			<View style={styles.container}>
				<Image
					style={styles.image}
					source={{
						uri: item.imageURL,
					}}
				/>
				<View style={styles.subContainer}>
					<Text numberOfLines={3} style={styles.videoName}>
						{item.title}
					</Text>

					<Text style={styles.videoLength}>{item.videoLength}</Text>
				</View>
			</View>
		);
	};

	render() {
		const { data } = this.props;

		return (
			<FlatList
				data={data}
				keyExtractor={this._keyExtractor}
				renderItem={
					this.renderVideoItem
					// ({ item }) => this.renderVideoItem(item)
					// <Card
					// 	title={item.title}
					// 	videoLength={item.videoLength}
					// 	imageURL={item.image}
					// renderItem={({ item }) =>
					// this.renderDisplayItem(item, articleDisplay, data, settings)
					// />
				}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 80,
		flexDirection: "row",
		// backgroundColor: "red",
		marginBottom: 21.5,
	},
	subContainer: {
		marginLeft: 22.5,
		width: 162.5,
		height: 75,
	},
	image: {
		height: 80,
		width: 128,
		resizeMode: "cover",
	},

	videoName: {
		paddingBottom: 12,
		color: "rgb(108,108,108)",
		fontSize: 12,
		fontWeight: "bold",
		lineHeight: 18,
	},
	videoLength: { color: "rgb(255, 255, 255)", fontSize: 10 },
	menuIcon: {},
});
