import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import SignUpUI from "./SignUpUI";
import { AlertComp } from "../../components";
import { SignUpApi } from "../../service";
import { emailValidator, Strings } from "../../asset";

type Props = {
	navigation: any,
};

class SignUpAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			showLoader: false,
		};
	}

	handleReturnToSignIn = () => {
		const { navigation } = this.props;
		navigation.navigate("LoginAuthScreen");
	};

	handleSignUp = (name, email, password, deviceId, checked: boolean) => {
		if (!name || !email || !password) {
			AlertComp(Strings.authentication.ALERT, "Enter the required fields");
		} else if (!emailValidator(email)) {
			AlertComp(Strings.authentication.ALERT, Strings.authentication.ENTER_VALID_EMAIL);
		} else if (checked) {
			this.setState({ showLoader: true });
			SignUpApi(name, email, password, deviceId, this.onSuccess, this.onFailure);
		} else {
			AlertComp(
				Strings.authentication.ALERT,
				Strings.authentication.AGREE_TERMS_AND_CONDITION,
			);
		}
	};

	onSuccess = (message: "string") => {
		const { navigation } = this.props;
		this.setState({ showLoader: false });
		navigation.navigate("MessageAuthScreen", {
			message,
		});
	};

	onFailure = (message: "string") => {
		const { navigation } = this.props;
		this.setState({ showLoader: false });
		navigation.navigate("MessageAuthScreen", { message });
	};

	render() {
		return (
			<SignUpUI
				handleReturnToSignIn={this.handleReturnToSignIn}
				handleSignUp={this.handleSignUp}
				showLoader={this.state.showLoader}
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
