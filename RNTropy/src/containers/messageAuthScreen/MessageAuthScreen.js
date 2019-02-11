import React, { PureComponent } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Image } from "react-native";
import { connect } from "react-redux";
import SvgUri from "react-native-svg-uri";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import {
	Colors,
	ScalePerctFullWidth,
	ScalePerctFullHeight,
	Metrics,
	Strings,
	Constants,
	Images,
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
			{/* <Text style={styles.image}>Image</Text> */}
			<View style={styles.imageView}>
				<Image source={Images.mailBox} style={styles.image} resizeMode="stretch" />
			</View>
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
			<View style={[styles.container]}>
				{success ? this.renderSuccessMessage(message) : this.renderFailureMessage(message)}
				{this.state.showLoader ? (
					<View style={styles.indicator}>
						<ActivityIndicator size="small" color="white" />
					</View>
				) : null}
				<Button
					title={Strings.authentication.OK}
					buttonStyle={{
						marginTop: ScalePerctFullHeight(15),
						marginBottom: ScalePerctFullHeight(11),
					}}
					onPress={!this.state.showLoader ? this.handleLogin : null}
					button={Images.downloadButton}
					imageStyle={{
						width: ScalePerctFullWidth(82),
						height: 150,
					}}
					top={20}
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
	imageView: {
		marginTop: ScalePerctFullHeight(23),
		marginBottom: ScalePerctFullHeight(3),
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
	indicator: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00000080",
	},
	image: { height: ScalePerctFullWidth(31), width: ScalePerctFullWidth(31) },
});
