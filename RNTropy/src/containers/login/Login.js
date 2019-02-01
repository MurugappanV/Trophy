import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import LoginUI from "./LoginUI";
import LoginTabletUI from "./LoginTabletUI";
import { Metrics } from "../../asset";

type Props = {
	navigation: any,
	setUserIdAction: Function,
};

class Login extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleSignUp = () => {
		const { navigation } = this.props;
		navigation.navigate("SignUpAuthScreen");
	};

	handleForgotPassword = () => {
		const { navigation } = this.props;
		navigation.navigate("ForgotAuthScreen");
	};

	handleLogin = () => {
		this.onSuccess();
	};

	onSuccess = () => {
		const { setUserIdAction, navigation } = this.props;
		const userId = 123;
		setUserIdAction(userId);
		navigation.navigate("TopicsAuthScreen");
	};

	onFailure = () => {};

	onError = () => {};

	renderItem = () => {
		return Metrics.isTablet ? (
			<LoginTabletUI
				handleSignUp={this.handleSignUp}
				handleForgotPassword={this.handleForgotPassword}
				handleLogin={this.handleLogin}
			/>
		) : (
			<LoginUI
				handleSignUp={this.handleSignUp}
				handleForgotPassword={this.handleForgotPassword}
				handleLogin={this.handleLogin}
			/>
		);
	};

	render() {
		return this.renderItem();
	}
}

function mapStateToProps(state) {
	// state
	return {};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
