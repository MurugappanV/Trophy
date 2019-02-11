import React, { PureComponent } from "react";
import { connect } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import FirstAuthScreenUI from "./FirstAuthUI";

type Props = {
	navigation: any,
};

class FirstAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		SplashScreen.hide();
		if (!this.props.isSplashScreenHide) {
			this.props.setStartUpAction(true);
		}
	}

	handleLoginEvent = () => {
		const { navigation } = this.props;
		navigation.navigate("LoginAuthScreen");
	};

	handleSignUp = () => {
		const { navigation } = this.props;
		navigation.navigate("SignUpAuthScreen");
	};

	render() {
		return (
			<FirstAuthScreenUI
				handleLoginEvent={this.handleLoginEvent}
				handleSignUp={this.handleSignUp}
			/>
		);
	}
}

function mapStateToProps(state: any) {
	// state
	return {
		isSplashScreenHide: state.isSplashScreenHide,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(FirstAuthScreen);
