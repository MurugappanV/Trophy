import React, { PureComponent } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { TopicsCard } from "../common";
import { Colors, ScalePerctFullHeight, Metrics, ScalePerctFullWidth } from "../../asset";
import { BuildFeedButton, PagerHeader } from "..";

class FollowList extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			followTrack: props.selectedList,
			lastTwoVisibleItems: [],
		};
		this.lastItems = [];
	}

	onFollow = (topic: object) => {
		const newFollowTrack = [];
		let isChanged = false;
		this.state.followTrack.forEach((item: object) => {
			if (item.tid !== topic.tid) {
				newFollowTrack.push(item);
			} else {
				isChanged = true;
			}
		});
		if (!isChanged) {
			newFollowTrack.push(topic);
		}
		this.setState({ followTrack: newFollowTrack });
	};

	checkFollowStatus = (topicId: number) => {
		const { followTrack } = this.state;
		let found = false;
		followTrack.forEach((item: object) => {
			if (item.tid === topicId) {
				found = true;
			}
		});
		return found;
	};

	isBlurRequired = (id: number) => {
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
	};

	render() {
		const { data, navigation } = this.props;
		const { onSelected, topic } = this.props;
		const { followTrack } = this.state;
		const noOfColumn = Metrics.isTablet ? 4 : 2;
		return (
			<View style={style.container}>
				<View>
					{Metrics.isTablet ? (
						!topic ? (
							<Text style={style.skip}>Skip</Text>
						) : null
					) : null}
				</View>
				<View>
					{Metrics.isTablet ? (
						<View>
							<Text
								style={[
									style.askQuestion,
									Metrics.isTablet && !topic && style.brand,
								]}
							>
								Which {topic ? "News" : "brand"} you want to read?
							</Text>
							<Text style={style.pickInfo}>
								Pick the topics that interest you. add more at anytime.
							</Text>
						</View>
					) : topic ? (
						<PagerHeader />
					) : (
						<PagerHeader
							onAction={() => {
								navigation.navigate("HomeNavigation");
							}}
							onBack={() => {
								navigation.goBack();
							}}
						/>
					)}
				</View>

				<FlatList
					contentContainerStyle={style.contentContainer}
					numColumns={noOfColumn}
					data={data}
					extraData={[this.state.followTrack, this.lastItems]}
					keyExtractor={(x, i) => i.toString()}
					horizontal={false}
					onEndReachedThreshold={0.5}
					ItemSeparatorComponent={() => <View />}
					ListHeaderComponent={() => <View style={style.header} />}
					ListFooterComponent={() => <View style={style.footer} />}
					// onViewableItemsChanged={(items: any) => {
					// 	console.log(items);
					// 	this.viewItemsChanged(items);
					// }}
					renderItem={({ item }) => (
						<TopicsCard
							isTopic={false}
							containerStyle={style.items}
							isFollowed={this.checkFollowStatus(item.tid)}
							onPress={() => this.onFollow(item)}
							blur={this.isBlurRequired(item)}
							name={item.name}
							field_image={item.field_image}
						/>
					)}
				/>
				{(!topic || this.state.followTrack.length >= 3) && (
					<View style={style.BuildFeedButton}>
						<BuildFeedButton onPress={() => onSelected(followTrack)} />
					</View>
				)}
			</View>
		);
	}
}

const normalStyles = StyleSheet.create({
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
		bottom: ScalePerctFullHeight(6),
	},
	contentContainer: {
		alignItems: "flex-start",
	},
	item: {
		margin: 5,
	},
	header: {
		marginTop: 20,
	},
	footer: {
		marginBottom: 100,
		backgroundColor: "#00000000",
	},
});

const tabStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bgLightBlack,
		alignItems: "center",
	},
	skip: {
		color: Colors.bodySecondaryVarient,
		marginTop: ScalePerctFullHeight(4),
		marginLeft: ScalePerctFullWidth(90),
	},
	pageHeader: {
		backgroundColor: Colors.bgLightBlack,
	},
	askQuestion: {
		marginTop: ScalePerctFullHeight(8),
		fontSize: 36,
		color: Colors.bgPrimaryLight,
	},
	pickInfo: {
		marginTop: ScalePerctFullHeight(1),
		fontSize: 12,
		color: Colors.bgPrimaryLight,
		alignSelf: "center",
	},
	brand: {
		marginTop: ScalePerctFullHeight(4),
	},
	BuildFeedButton: {
		position: "absolute",
		bottom: ScalePerctFullHeight(6),
	},
	contentContainer: {
		alignItems: "flex-start",
	},
	item: {
		margin: 5,
	},
	header: {
		marginTop: 20,
	},
	footer: {
		marginBottom: 100,
		backgroundColor: "#00000000",
	},
});

const style = Metrics.isTablet ? tabStyles : normalStyles;

export default FollowList;
