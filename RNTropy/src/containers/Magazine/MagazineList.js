import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import ArticleListUI from "./ArticleListUI";
import { MagazineIssueApi } from "../../service";
import { Constants } from "../../asset";

type Props = {
	screenProps: any,
	navigation: any,
};

class MagazineListContainer extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			refresh: false,
			message: Constants.emptyMessages.noRecord,
			data: [],
		};
	}

	componentDidMount() {
		this.setState({
			loading: true,
		});
		MagazineIssueApi(this.onFetchSuccess, this.onFetchFailure, this.onFetchError);
	}

	onFetchSuccess = (data: any) => {
		this.setState({
			loading: false,
			refresh: false,
			message: Constants.emptyMessages.noRecord,
			data,
		});
	};

	onFetchFailure = () => {
		this.setState({
			loading: false,
			refresh: false,
			message: Constants.errorMessages.general,
			data: [],
		});
	};

	onFetchError = (error: any) => {
		let message = Constants.errorMessages.general;
		if (error.toString().includes(Constants.errorMessages.checkNetwork)) {
			message = Constants.errorMessages.network;
		}
		this.setState({ loading: false, refresh: false, message });
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
)(MagazineListContainer);
