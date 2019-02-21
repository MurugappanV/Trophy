import React, { PureComponent } from "react";
import { StyleSheet, View, FlatList, Text, TouchableOpacity, ActivityIndicator} from "react-native";
import { TopicsCard } from "../common";
import {
	Colors,
	ScalePerctFullHeight,
	Metrics,
	ScalePerctFullWidth,
	Constants,
} from "../../asset";
import { BuildFeedButton, PagerHeader } from "../../components";

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
			showLoader: props.loading,
			followBrandTrack: props.selectedBrandsList,
			followTrack: props.selectedTopicList,
			selectedTopicList: props.selectedTopicList,
			selectedBrandsList: props.selectedBrandsList,
		};
		this.lastItems = [];
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		let newState = {};
		let changed = false;
		if (prevState.selectedTopicList !== nextProps.selectedTopicList) {
			newState.followTrack = nextProps.selectedTopicList;
			newState.selectedTopicList = nextProps.selectedTopicList;
			changed = true;
		}
		if (prevState.selectedBrandsList !== nextProps.selectedBrandsList) {
			newState.followBrandTrack = nextProps.selectedBrandsList;
			newState.selectedBrandsList = nextProps.selectedBrandsList;
			changed = true;
		}
		return changed ? newState : null;
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
		this.state.followBrandTrack.forEach((item: object) => {
			if (item.nid !== topic.nid) {
				newFollowTrack.push(item);
			} else {
				isChanged = true;
			}
		});
		if (!isChanged) {
			newFollowTrack.push(topic);
		}
		this.setState({ followBrandTrack: newFollowTrack });
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
		const { followBrandTrack } = this.state;
		let found = false;
		followBrandTrack.forEach((item: object) => {
			if (item.nid === topicId) {
				found = true;
			}
		});
		return found;
	};

	renderBrandHeaderForTab = () => {
		const { navigation } = this.props;
		return (
			<TouchableOpacity onPress={() => navigation.navigate("HomeDrawerScreen")}>
				<Text style={style.skip}>Skip</Text>
			</TouchableOpacity>
		)
	}

	topicsHeaderForTab = () => {
		const { isTopic } = this.props;
		return (
			<View>
				<Text style={[style.askQuestion, Metrics.isTablet && !isTopic && style.brand]}>
					Which {isTopic ? "News" : "brand"} you want to read?
				</Text>
				<Text style={style.pickInfo}>
					Pick the topics that interest you. add more at anytime.
				</Text>
			</View>
		);
	}

	normalHeadersForTopsAndBrands = (isTopic) => {
		const {navigation, isBack, selectedBrandsList, selectedTopicList } = this.props;
		return (
			isTopic ? (
				<PagerHeader onBack={ isBack ? () => {
					this.setState({ followBrandTrack:selectedBrandsList,
						followTrack: selectedTopicList });
					navigation.navigate("HomeDrawerScreen")} : null } 
					style={style.pageHeader} page={"1"} />
			) : (
				<PagerHeader
					style={style.pageHeader}
					actionLabel={"Skip"}
					onAction={() => {
						this.setState({followBrandTrack: selectedBrandsList,
							followTrack: selectedTopicList });
						navigation.navigate("HomeDrawerScreen");
					}}
					onBack={() => {
						this.setState({followBrandTrack: selectedBrandsList,
							followTrack: selectedTopicList });
						navigation.goBack();
					}}
					page={"2"}
				/>
			)
		)
	}

	topicsList = (data:any) => {
		const noOfColumn = Metrics.isTablet ? 4 : 2;
		const { followTrack } = this.state;
		return (
			<FlatList
				contentContainerStyle={style.contentContainer}
				numColumns={noOfColumn}
				data={data}
				extraData={[followTrack]}
				keyExtractor={(x, i) => i.toString()}
				horizontal={false}
				onEndReachedThreshold={0.5}
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
		);
	}

	brandsList = ( data:any ) => {
		const noOfColumn = Metrics.isTablet ? 4 : 2;
		return ( 
			<FlatList
				contentContainerStyle={style.contentContainer}
				numColumns={noOfColumn}
				data={data}
				extraData={[this.state.followBrandTrack]}
				keyExtractor={(x, i) => i.toString()}
				horizontal={false}
				onEndReachedThreshold={0.5}
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
		);
	}

	render() {
		const { data, isTopic, isBrand, onSelected, preferenceLoading } = this.props;
		const { followTrack, followBrandTrack, showLoader } = this.state;
		return (
			<View style={style.container}>
				<View>
					{Metrics.isTablet && isBrand && this.renderBrandHeaderForTab()}
				</View>
				<View>
					{Metrics.isTablet ? this.topicsHeaderForTab() : this.normalHeadersForTopsAndBrands(isTopic)}
				</View>
				<View>
					{isTopic ? this.topicsList(data) : this.brandsList(data) }
					{preferenceLoading ? (
						<View style={style.indicator}>
							<ActivityIndicator size="small" color="white" />
						</View>
					) : null}
				</View>
				{ isTopic ? (this.state.followTrack.length >= Constants.topics.minimumTopics
					&& (
						<View style={style.BuildFeedButton}>
							<BuildFeedButton onPress={() => {
								this.setState({ showLoader: true });
								onSelected(followTrack);
							}}
							/>
						</View>
					)) : (
					<View style={style.BuildFeedButton} >
						<BuildFeedButton onPress={() => {
							this.setState({ showLoader: true });
							onSelected(followBrandTrack);
						}}
						/>
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
	indicator: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00000080",
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
	indicator: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00000080",
	},
});

const style = Metrics.isTablet ? tabStyles : normalStyles;

export default FollowList;
