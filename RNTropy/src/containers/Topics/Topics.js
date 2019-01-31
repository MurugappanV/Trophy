import React, { PureComponent } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { TopicsCard } from "../../components/common";
import { Colors, ScalePerctFullHeight } from "../../asset";
import { BuildFeedButton, PagerHeader } from "../../components";

class Topics extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			followTrack: [],
			lastTwoVisibleItems: [],
		};
		this.lastItems = [];
	}

	onFollow = (id: number) => {
		const newFollowTrack = [];
		let isChanged = false;
		this.state.followTrack.forEach((item: number) => {
			if (item !== id) {
				newFollowTrack.push(item);
			} else {
				isChanged = true;
			}
		});
		if (!isChanged) {
			newFollowTrack.push(id);
		}
		this.setState({ followTrack: newFollowTrack });
	};

	checkFollowStatus = (id: number) => {
		const { followTrack } = this.state;
		if (followTrack.indexOf(id) !== -1) {
			return true;
		}
		return false;
	};

	isBlurRequired = (id: number) => {
		console.log("View Blur Changed: ", id);
		if (this.lastItems.indexOf(id) !== -1) {
			return true;
		}
		return false;
	};

	viewItemsChanged = (items: any) => {
		const newItems = [...items.viewableItems];
		const lastTwoVisibleItems = [
			newItems[newItems.length - 1].key,
			newItems[newItems.length - 2].key,
		];
		this.lastItems = lastTwoVisibleItems;
		console.log("View Items Changed: ", this.lastItems);
	};

	render() {
		const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
		return (
			<View style={style.container}>
				<PagerHeader
					style={style.pageHeader}
					onAction={() => {}}
					actionLabel={"Skip"}
					onBack={() => {}}
					page={"1"}
				/>
				<FlatList
					contentContainerStyle={style.contentContainer}
					numColumns={2}
					data={data}
					extraData={[this.state.followTrack, this.lastItems]}
					keyExtractor={(x, i) => i.toString()}
					horizontal={false}
					onEndReachedThreshold={0.5}
					ItemSeparatorComponent={() => <View />}
					ListHeaderComponent={() => <View style={style.header} />}
					onViewableItemsChanged={(items: any) => {
						console.log(items);
						this.viewItemsChanged(items);
					}}
					renderItem={({ item }) => (
						<TopicsCard
							containerStyle={style.items}
							isFollowed={this.checkFollowStatus(item)}
							onPress={() => this.onFollow(item)}
							blur={this.isBlurRequired(item)}
						/>
					)}
				/>
				<View style={style.BuildFeedButton}>
					<BuildFeedButton />
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bgLightBlack,
		alignItems: "center",
	},
	pageHeader: {
		backgroundColor: Colors.bgLightBlack,
	},
	BuildFeedButton: {
		position: "absolute",
		bottom: ScalePerctFullHeight(12),
	},
	contentContainer: {
		alignItems: "center",
	},
	item: {
		margin: 5,
	},
	header: {
		marginTop: 20,
	},
});
export default Topics;
