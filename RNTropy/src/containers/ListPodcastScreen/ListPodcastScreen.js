import React, { PureComponent } from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	Image,
	ScrollView,
	ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import SvgUri from "react-native-svg-uri";
import {
	PodcastListCard,
	TextButton,
	Separator,
	Line,
	AlertComp,
	PodcastPlayView,
} from "../../components";
import {
	ScalePerctFullHeight,
	ScalePerctFullWidth,
	Metrics,
	Colors,
	Strings,
	Constants,
} from "../../asset";
import data from "../../utilities/data.json";
import { PodcastListApi } from "../../service";

type Props = {
	navigation: Function,
	index: number,
	setPodcastList: Function,
	podcastList: Object,
};

class ListPodcastScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			showLoader: true,
		};
	}

	componentDidMount() {
		PodcastListApi(this.onSuccess, this.onFailure, this.onError);
	}

	onSuccess = (response: Object) => {
		const { setPodcastList } = this.props;
		this.setState({ showLoader: false });
		setPodcastList(response);
	};

	onFailure = () => {
		this.setState({ showLoader: false });
		const message = Constants.errorMessages.general;
		AlertComp(Strings.authentication.ALERT, message);
	};

	onError = (error: any) => {
		this.setState({ showLoader: false });
		let message = Constants.errorMessages.general;
		if (error.toString().includes(Constants.errorMessages.checkNetwork)) {
			message = Constants.errorMessages.network;
		}
		AlertComp(Strings.authentication.ALERT, message);
	};

	renderHeader = (logo, id) => {
		const { navigation } = this.props;
		return (
			<View style={style.header}>
				<Image
					source={{
						uri: logo,
					}}
					style={style.logo}
				/>

				{/* <View>
					{logo ? <SvgUri source={{ uri: logo }} width="90" height="18" /> : null}
				</View> */}
				<TextButton
					textStyle={style.viewButton}
					title={Strings.podCast.VIEW_ALL}
					touchableStyle={style.touchableStyle}
					onPress={() => navigation.navigate("ViewListPodcastScreen", { id })}
				/>
			</View>
		);
	};

	renderList = (listData: Array, brand) => {
		const { navigation, index } = this.props;
		return (
			<View>
				<FlatList
					showsHorizontalScrollIndicator={false}
					horizontal
					data={listData}
					renderItem={({ item }) => (
						<PodcastListCard
							data={item}
							onPress={() =>
								navigation.navigate("ChaptorPodcastScreen", {
									id: item.nid,
									brand,
								})
							}
							index={index}
						/>
					)}
					keyExtractor={(item, index) => item.nid}
				/>
			</View>
		);
	};

	handlePlay = () => {
		const { navigation } = this.props;
		navigation.navigate("PlayScreen");
	};

	render() {
		const { podcastList } = this.props;

		const list = Object.keys(podcastList).map((item: any, index) => {
			console.log("index", index);
			return (
				<View key={podcastList[item].brand_id}>
					{this.renderHeader(podcastList[item].logo, podcastList[item].brand_id)}
					{this.renderList(podcastList[item].podcasts, item)}
					<Line style={style.separator} />
				</View>
			);
		});

		return (
			<View>
				{this.props.play && <PodcastPlayView onPress={this.handlePlay} />}
				<ScrollView style={style.container}>
					{this.state.showLoader || !podcastList ? (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								height: ScalePerctFullHeight(100),
							}}
						>
							<ActivityIndicator size="small" color="red" />
						</View>
					) : (
						list
					)}
				</ScrollView>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		paddingTop: Metrics.DEFAULT_PADDING,
		paddingLeft: Metrics.DEFAULT_PADDING,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginRight: Metrics.DEFAULT_PADDING,
		marginBottom: Metrics.DEFAULT_PADDING,
	},
	viewButton: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		color: Colors.bgPrimaryVarient,
		fontFamily: "Lato-Regular",
	},
	touchableStyle: {
		justifyContent: "center",
	},
	logo: {
		height: 18,
		width: 90,
	},
	separator: {
		marginTop: Metrics.DEFAULT_PADDING,
		marginRight: Metrics.DEFAULT_PADDING,
		marginBottom: Metrics.DEFAULT_PADDING,
	},
});

function mapStateToProps(state) {
	// state
	return {
		podcastList: state.podcastList,
		play: state.setPlay,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ListPodcastScreen);
