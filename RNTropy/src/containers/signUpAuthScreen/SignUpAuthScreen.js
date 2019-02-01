import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import SignUpUI from "./SignUpUI";
import { AlertComp } from "../../components";

type Props = {
	navigation: any,
};

class SignUpAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleReturnToSignIn = () => {
		const { navigation } = this.props;
		navigation.navigate("LoginAuthScreen");
	};

	handleSignUp = (checked: boolean) => {
		const { navigation } = this.props;
		if (checked) {
			navigation.navigate("MessageAuthScreen");
		} else {
			AlertComp((title = "Alert"), (msg = "Please agree Terms and Condition to proceed"));
		}
	};

	render() {
		return (
			<SignUpUI
				handleReturnToSignIn={this.handleReturnToSignIn}
				handleSignUp={this.handleSignUp}
			/>
		);
	}
}

function mapStateToProps() {
	// state
	return {};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignUpAuthScreen);
