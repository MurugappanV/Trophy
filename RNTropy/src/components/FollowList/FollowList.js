import React, { PureComponent } from "react";
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from "react-native";
import { TopicsCard } from "../common";
import {
	Colors,
	ScalePerctFullHeight,
	Metrics,
	ScalePerctFullWidth,
	Constants,
} from "../../asset";
import { BuildFeedButton, PagerHeader } from "..";

type Props = {
	data: array,
	selectedList:array,
	isTopic: boolean,
	onSelected: function,

};

class FollowList extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			followBrandTrack: [],
			followTrack: props.selectedList,
		};
		this.lastItems = [];
	}

	onFollowTopics = (topic: object) => {
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

	onFollowBrand = (topic: object) => {
		const newFollowTrack = [];
		let isChanged = false;
		this.state.followTrack.forEach((item: object) => {
			if (item.nid !== topic.nid) {
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

	checkFollowStatusTopics = (topicId: number) => {
		const { followTrack } = this.state;
		let found = false;
		followTrack.forEach((item: object) => {
			if (item.tid === topicId) {
				found = true;
			}
		});
		return found;
	};

	checkFollowStatusBrands = (topicId: number) => {
		const { followTrack } = this.state;
		let found = false;
		followTrack.forEach((item: object) => {
			if (item.nid === topicId) {
				found = true;
			}
		});
		return found;
	};

	render() {
		const { data, navigation, isTopic, onSelected, selectedList } = this.props;
		const { followTrack } = this.state;
		const noOfColumn = Metrics.isTablet ? 4 : 2;
		console.log("flatlist data", data  )
		return (
			<View style={style.container}>
				<View>
					{Metrics.isTablet ? (
						!isTopic ? (
							<TouchableOpacity onPress= {()=>navigation.navigate("HomeNavigation")}>
									<Text style={style.skip} >Skip</Text>
							</TouchableOpacity>
							
						) : null
					) : null}
				</View>
				<View>
					{Metrics.isTablet ? (
						<View>
							<Text
								style={[
									style.askQuestion,
									Metrics.isTablet && !isTopic && style.brand,
								]}
							>
								Which {isTopic ? "News" : "brand"} you want to read?
							</Text>
							<Text style={style.pickInfo}>
								Pick the topics that interest you. add more at anytime.
							</Text>
						</View>
					) : isTopic ? (
						<PagerHeader style={style.pageHeader} page={"1"} />
					) : (
						<PagerHeader
							style={style.pageHeader}
							actionLabel={"Skip"}
							onAction={() => {
								navigation.navigate("HomeNavigation");
							}}
							onBack={() => {
								navigation.goBack();
							}}
							page={"2"}
						/>
					)}
				</View>
				<View>
					{isTopic ? (
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
							renderItem={({ item }) => (
								<TopicsCard
									isTopic={true}
									containerStyle={style.items}
									isFollowed={this.checkFollowStatusTopics(item.tid)}
									onPress={() => this.onFollowTopics(item)}
									name={item.name}
									field_image={item.field_image}
								/>
							)}
						/>
					) : (
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
							renderItem={({ item }) => (
								<TopicsCard
									isTopic={false}
									containerStyle={style.items}
									isFollowed={this.checkFollowStatusBrands(item.nid)}
									onPress={() => this.onFollowBrand(item)}
									name={item.title}
									field_image={item.field_square_logo}
								/>
							)}
						/>
					)}
				</View>

				{(!isTopic || this.state.followTrack.length >= Constants.topics.minimumTopics) && (
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
		paddingHorizontal: ScalePerctFullWidth(10),
	},
	item: {
		margin: 5,
	},
	header: {
		marginTop: 20,
	},
	footer: {
		padding: ScalePerctFullHeight(13),
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
		marginBottom: ScalePerctFullHeight(10),
		backgroundColor: "#00000000",
	},
});

const style = Metrics.isTablet ? tabStyles : normalStyles;

export default FollowList;
