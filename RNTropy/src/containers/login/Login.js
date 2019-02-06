import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import LoginUI from "./LoginUI";
import LoginTabletUI from "./LoginTabletUI";
import { Metrics, emailValidator, Strings } from "../../asset";
import { LoginApi } from "../../service";
import { AlertComp } from "../../components";
import { addUserCredentialsRealm } from "../../storage";

type Props = {
	navigation: any,
	setUserAction: Function,
};

class Login extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			showLoader: false,
		};
	}

	handleSignUp = () => {
		const { navigation } = this.props;
		navigation.navigate("SignUpAuthScreen");
	};

	handleForgotPassword = () => {
		const { navigation } = this.props;
		navigation.navigate("ForgotAuthScreen");
	};

	handleLogin = (email, password) => {
		if (!email || !password) {
			AlertComp(Strings.authentication.ALERT, "Enter the required fields");
		} else if (!emailValidator(email)) {
			AlertComp(Strings.authentication.ALERT, Strings.authentication.ENTER_VALID_EMAIL);
		} else {
			this.setState({ showLoader: true });
			LoginApi(email, password, this.onSuccess, this.onFailure, this.onError);
		}
	};

	onSuccess = (data: Object) => {
		const { setUserAction, navigation } = this.props;
		this.setState({ showLoader: false });
		console.log("success");
		setUserAction(data);
		//addUserCredentialsRealm(data);
		if (data.topics === null) {
			navigation.navigate("TopicsAuthScreen");
		} else {
			navigation.navigate("TopicsAuthScreen");
		}
	};

	onFailure = (response: Object) => {
		const { navigation } = this.props;
		this.setState({ showLoader: false });
		if (response.error_code !== "101") {
			alert(response.message);
		} else {
			navigation.navigate("MessageAuthScreen", {
				message: response.message,
				resend: true,
				id: response.id,
			});
			console.log("fail", response.message);
		}
	};

	onError = (error: any) => {
		this.setState({ showLoader: false });
		console.log("error", error);
		AlertComp(Strings.authentication.ALERT, error.toString());
	};

	renderItem = () => {
		return Metrics.isTablet ? (
			<LoginTabletUI
				handleSignUp={this.handleSignUp}
				handleForgotPassword={this.handleForgotPassword}
				handleLogin={this.handleLogin}
				showLoader={this.state.showLoader}
			/>
		) : (
			<LoginUI
				handleSignUp={this.handleSignUp}
				handleForgotPassword={this.handleForgotPassword}
				handleLogin={this.handleLogin}
				showLoader={this.state.showLoader}
			/>
		);
	};

	render() {
		return this.renderItem();
	}
}

function mapStateToProps(state) {
	// state
	return {
		user: state.User,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Login);
