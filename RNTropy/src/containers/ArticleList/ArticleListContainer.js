import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
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
		MyTroveApi(this.onFetchSuccess, this.onFetchFailure, this.onFetchError);
	}

	onFetchSuccess = (data: any) => {
		const { setMyTroveAction } = this.props;
		this.setState({
			loading: false,
			refresh: false,
			message: Constants.emptyMessages.noRecord,
		});
		setMyTroveAction(data);
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
		const { data } = this.props;
		return (
			<ArticleListUI
				loading={loading}
				message={message}
				refresh={refresh}
				{...this.props}
				onItemPress={this.onItemPress}
				data={data}
			/>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.myTrove,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ArticleListContainer);
