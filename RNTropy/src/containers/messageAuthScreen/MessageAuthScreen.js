import React, { PureComponent } from "react";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import {
	Colors,
	ScalePerctFullWidth,
	ScalePerctFullHeight,
	Metrics,
	Strings,
	Constants,
} from "../../asset";
import { Button, AlertComp, TextButton } from "../../components";
import { ResendApi } from "../../service";

type Props = {
	navigation: any,
};

class MessageAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			showLoader: false,
		};
	}

	handleLogin = () => {
		const { navigation } = this.props;
		navigation.navigate("LoginAuthScreen");
	};

	handleResend = () => {
		const { navigation } = this.props;
		const id = navigation.getParam("id");
		this.setState({ showLoader: true });
		ResendApi(id, this.onSuccess, this.onError);
	};

	onSuccess = (message: "string") => {
		this.setState({ showLoader: false });
		console.log("message", message);
		AlertComp(Strings.authentication.ALERT, message.message, () => this.handleLogin());
		//alert("Activation link has been sent to your email");
	};

	onError = (error: any) => {
		this.setState({ showLoader: false });
		let message = Constants.errorMessages.general;
		if (error.toString().includes(Constants.errorMessages.checkNetwork)) {
			message = Constants.errorMessages.network;
		}
		AlertComp(Strings.authentication.ALERT, message);
	};

	renderSuccessMessage = message => (
		<View style={{ alignItems: "center" }}>
			<Text style={styles.image}>Image</Text>
			<Text style={styles.title}>{message}</Text>
		</View>
	);

	renderFailureMessage = (message: string) => {
		const { navigation } = this.props;
		const resend = navigation.getParam("resend");
		return (
			<View style={{ marginTop: ScalePerctFullHeight(38) }}>
				<Text style={styles.title}>{message}</Text>
				{resend && (
					<Text style={styles.description}>
						<Text onPress={() => this.handleResend()} style={styles.touchableText}>
							{Strings.authentication.CLICK_HERE}{" "}
						</Text>
						<Text>{Strings.authentication.TO_RESEND_MAIL}</Text>
					</Text>
				)}
			</View>
		);
	};

	render() {
		const { navigation } = this.props;
		const message = navigation.getParam("message");
		const success = navigation.getParam("success");
		console.log("loader", this.state.showLoader);

		return (
			<View style={styles.container}>
				{success ? this.renderSuccessMessage(message) : this.renderFailureMessage(message)}
				{this.state.showLoader ? <ActivityIndicator size="small" color="white" /> : null}
				<Button
					title={Strings.authentication.OK}
					buttonStyle={{
						marginTop: ScalePerctFullHeight(25),
						marginBottom: ScalePerctFullHeight(11),
					}}
					onPress={this.handleLogin}
				/>
			</View>
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
)(MessageAuthScreen);

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.bgPrimaryBlack,
		flex: 1,
		alignItems: "center",
	},
	image: {
		marginTop: ScalePerctFullHeight(23),
		height: ScalePerctFullHeight(17),
		marginBottom: ScalePerctFullHeight(3),
		color: "white",
	},
	title: {
		fontSize: Metrics.LARGE_TEXT_SIZE,
		lineHeight: 25,
		letterSpacing: 0,
		color: Colors.bgPrimaryLight,
		marginBottom: ScalePerctFullHeight(3),
		marginHorizontal: ScalePerctFullWidth(24),
		textAlign: "center",
	},
	description: {
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		lineHeight: 23,
		letterSpacing: 0,
		color: Colors.bodySecondaryLight,
		textAlign: "center",
		marginLeft: ScalePerctFullWidth(13),
		marginRight: ScalePerctFullWidth(13),
	},
	touchableText: {
		textDecorationLine: "underline",
	},
});
