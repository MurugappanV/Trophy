import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import SignUpUI from "./SignUpUI";
import { AlertComp } from "../../components";
import { SignUpApi } from "../../service";
import { emailValidator, Strings, Constants, passwordValidator } from "../../asset";

type Props = {
	navigation: any,
};

class SignUpAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			showLoader: false,
			clear: false,
		};
	}

	onClear = () => {
		this.setState({ clear: false });
	};

	handleReturnToSignIn = () => {
		const { navigation } = this.props;
		this.setState({ clear: true });
		navigation.navigate("LoginAuthScreen");
	};

	handleSignUp = (name, email, password, deviceId, checked: boolean) => {
		if (!name || !email || !password) {
			AlertComp(Strings.authentication.ALERT, "Enter the required fields");
		} else if (!emailValidator(email)) {
			AlertComp(Strings.authentication.ALERT, Strings.authentication.ENTER_VALID_EMAIL);
		} else if (!passwordValidator(password)) {
			AlertComp(Strings.authentication.ALERT, Strings.authentication.ENTER_VALID_PASSWORD);
		} else if (checked) {
			this.setState({ showLoader: true });
			SignUpApi(
				name,
				email,
				password,
				deviceId,
				this.onSuccess,
				this.onFailure,
				this.onError,
			);
		} else {
			AlertComp(
				Strings.authentication.ALERT,
				Strings.authentication.AGREE_TERMS_AND_CONDITION,
			);
		}
	};

	onSuccess = (message: "string") => {
		const { navigation } = this.props;
		this.setState({ showLoader: false, clear: true });
		navigation.navigate("MessageAuthScreen", {
			message,
			success: true,
		});
	};

	onFailure = (message: "string") => {
		const { navigation } = this.props;
		this.setState({ showLoader: false, clear: true });
		navigation.navigate("MessageAuthScreen", { message });
	};

	onError = (error: any) => {
		this.setState({ showLoader: false });
		//AlertComp(Strings.authentication.ALERT, error.toString());
		let message = Constants.errorMessages.general;
		if (error.toString().includes(Constants.errorMessages.checkNetwork)) {
			message = Constants.errorMessages.network;
		}
		AlertComp(Strings.authentication.ALERT, message);
	};

	render() {
		return (
			<SignUpUI
				handleReturnToSignIn={this.handleReturnToSignIn}
				handleSignUp={this.handleSignUp}
				showLoader={this.state.showLoader}
				clear={this.state.clear}
				onClear={this.onClear}
			/>
		);
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
)(SignUpAuthScreen);
