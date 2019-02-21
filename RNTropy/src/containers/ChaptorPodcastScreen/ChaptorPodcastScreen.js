import React, { PureComponent } from "react";
import { View, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import ChaptorPodcastScreenUI from "./ChaptorPodcastScreenUI";
import { PodcastChaptorApi, Subscribe } from "../../service";
import { Constants, Strings } from "../../asset";
import { AlertComp } from "../../components";

const small = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="18px" height="14px" viewBox="0 0 18 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="UI-KIT" transform="translate(-1526.000000, -5181.000000)" stroke="#FFFFFF" stroke-width="1.5">
            <g id="arrow-left" transform="translate(1527.000000, 5182.000000)">
                <path d="M16,6 L0,6" id="Shape"></path>
                <polyline id="Shape" points="6 12 0 6 6 0"></polyline>
            </g>
        </g>
    </g>
</svg>`;

type Props = {
	navigation: Function,
	podcastChaptor: any,
	user: Object,
	setUserSubscription: Function,
};

class ChaptorPodcastScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			play: false,
			showLoader: true,
		};
	}

	componentDidMount() {
		const { navigation } = this.props;
		const id = navigation.getParam("id");
		PodcastChaptorApi(id, this.onSuccess, this.onFailure, this.onError);
	}

	onSuccess = (response: Object) => {
		const { setPodcastChaptor } = this.props;
		console.log("podcast chaptor", response.data[0].title);
		setPodcastChaptor(response);
		this.setState({ showLoader: false });
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

	handleSubscribe = () => {
		const { user, navigation } = this.props;
		const brand = navigation.getParam("brand");
		this.props.setUserSubscription(brand);
		const flag = user.podcasts.indexOf(brand) > -1 ? "U" : "F";
		console.log("flag", flag);
		Subscribe(user.id, brand, flag);
	};

	handleTrackPlay = () => {
		const newState = !this.state.play;
		this.setState(prevState => ({ play: newState }));
		this.props.setPlay(newState);
	};

	handlePlay = () => {
		const { navigation } = this.props;
		navigation.navigate("PlayScreen");
	};

	render() {
		if (!this.state.showLoader) {
			console.log("data", this.props.podcastChaptor[0].title);
		}

		console.log("play", this.props.user);
		const { showLoader } = this.state;
		const { podcastChaptor, navigation, user } = this.props;
		const brand = navigation.getParam("brand");

		return (
			<View style={{ flex: 1 }}>
				{showLoader || !podcastChaptor ? (
					<View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
						<ActivityIndicator size="small" color="red" />
					</View>
				) : (
					<ChaptorPodcastScreenUI
						handleTrackPlay={this.handleTrackPlay}
						handlePlay={this.handlePlay}
						play={this.props.play}
						showLoader={this.state.showLoader}
						data={podcastChaptor[0]}
						flag={user.podcasts.indexOf(brand) > -1 ? "U" : "F"}
						onSubscribe={this.handleSubscribe}
					/>
				)}
			</View>
		);
	}
}

function mapStateToProps(state) {
	// state
	return {
		podcastChaptor: state.podcastChaptor,
		play: state.setPlay,
		user: state.user,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ChaptorPodcastScreen);
