import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SplashScreen from "react-native-splash-screen";
import { Actions } from "../../redux";
import ArticleListUI from "./ArticleListUI";
import { MyTroveApi } from "../../service";
import { Constants } from "../../asset";

type Props = {
	screenProps: any,
	navigation: any,
};

class ArticleListContainer extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = { loading: true, refresh: false, message: Constants.emptyMessages.noRecord };
		const { tid, user } = this.props;
		const topicId = tid === 0 ? user["topics"] : tid;
		MyTroveApi(
			topicId,
			user["brands"],
			this.onFetchSuccess,
			this.onFetchFailure,
			this.onFetchError,
		);
	}

	componentDidMount() {
		SplashScreen.hide();
		if (!this.props.isSplashScreenHide) {
			this.props.setStartUpAction(true);
		}
	}

	onFetchSuccess = (data: any) => {
		const { setMyTroveAction, tid } = this.props;
		this.setState({
			loading: false,
			refresh: false,
			message: Constants.emptyMessages.noRecord,
		});
		setMyTroveAction(tid, data);
	};

	onFetchFailure = () => {
		this.setState({
			loading: false,
			refresh: false,
			message: Constants.errorMessages.general,
		});
	};

	onFetchError = (error: any) => {
		let message = Constants.errorMessages.general;
		if (error.toString().includes(Constants.errorMessages.checkNetwork)) {
			message = Constants.errorMessages.network;
		}
		this.setState({ loading: false, refresh: false, message });
	};

	onItemPress = () => {
		const { screenProps } = this.props;
		screenProps.navigation.navigate("ArticleDisplayHomeScreen");
	};

	render() {
		const { loading, message, refresh } = this.state;
		const { data, tid } = this.props;
		return (
			<ArticleListUI
				loading={loading}
				message={message}
				refresh={refresh}
				{...this.props}
				onItemPress={this.onItemPress}
				data={data[tid] ? data[tid] : []}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.myTrove,
		user: state.user,
		isSplashScreenHide: state.isSplashScreenHide,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ArticleListContainer);
