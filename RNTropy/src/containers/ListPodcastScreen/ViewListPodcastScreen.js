import React, { PureComponent } from "react";
import { FlatList, View, Text, Image, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import { PodcastListCard, TextButton, PagerHeader, AlertComp } from "../../components";
import { PodcastViewListApi } from "../../service";
import { Constants, Strings } from "../../asset";
import data from "../../utilities/data.json";

type Props = {
	navigation: any,
	setPodcastView: Function,
};

class ViewListPodcastScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			showLoader: true,
			data,
		};
	}

	componentDidMount() {
		const { navigation } = this.props;
		const id = navigation.getParam("id");
		PodcastViewListApi(id, 0, this.onSuccess, this.onFailure, this.onError);
	}

	onSuccess = (response: Object) => {
		const { setPodcastView } = this.props;
		this.setState({ showLoader: false });
		setPodcastView(response);
		console.log("on view success", response);
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

	onEndReached = () => {
		const newData = {
			...this.state.data,
			podcasts: [...this.state.data.podcasts, ...data.podcasts],
		};
		this.setState({ data: newData });
	};

	render() {
		const { navigation, podcastList } = this.props;
		console.log("state", this.state.showLoader);
		if (!this.state.showLoader || podcastList) {
			console.log("response of view all", podcastList);
		}
		console.log("chaptor view", data);
		return (
			<View style={{ flex: 1, alignItems: "center" }}>
				{this.state.showLoader || !podcastList ? (
					<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
						<ActivityIndicator size="small" color="red" />
					</View>
				) : (
					<FlatList
						data={podcastList.podcasts}
						renderItem={({ item }) => (
							<PodcastListCard
								data={item}
								onPress={() =>
									navigation.navigate("ChaptorPodcastScreen", { id: item.nid })
								}
								margin={15}
							/>
						)}
						numColumns={2}
						keyExtractor={(item, index) => item.key}
						// onEndReachedThreshold={0.5}
						// onEndReached={this.onEndReached}
					/>
				)}
			</View>
		);
	}
}

function mapStateToProps(state) {
	// state
	return {
		podcastList: state.podcastView,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ViewListPodcastScreen);
