import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import {
	Colors,
	ScalePerctFullWidth,
	ScalePerctFullHeight,
	Strings,
	Metrics,
	emailValidator,
} from "../../asset";
import { Button, TextInput, AuthBackground, AlertComp } from "../../components";
import { ResetPasswordApi } from "../../service";

type Props = {
	navigation: any,
};

class ForgotAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = { email: "", showLoader: false };
	}

	handleSignUp = () => {
		const { navigation } = this.props;
		navigation.navigate("SignUpAuthScreen");
	};

	handleLoginEvent = () => {
		if (!emailValidator(this.state.email)) {
			AlertComp(Strings.authentication.ALERT, Strings.authentication.ENTER_VALID_EMAIL);
		} else {
			this.setState({ showLoader: true });
			ResetPasswordApi(this.state.email, this.onSuccess, this.onFaliure, this.onError);
		}
	};

	onSuccess = (message: string) => {
		const { navigation } = this.props;
		this.setState({ showLoader: false });
		navigation.navigate("MessageAuthScreen", { message });
	};

	onFaliure = (message: string) => {
		const { navigation } = this.props;
		this.setState({ showLoader: false });
		navigation.navigate("MessageAuthScreen", { message });
	};

	onError = (error: any) => {
		this.setState({ showLoader: false });
		AlertComp(Strings.authentication.ALERT, error.toString());
	};

	renderForm = () => (
		<View style={styles.formStyle}>
			<TextInput
				label={Strings.authentication.EMAIL}
				reference={(component: any) => {
					this.email = component;
				}}
				onSubmitEditing={this.handleLogin}
				returnKeyType="next"
				keyboardType="email-address"
				onChangeText={text => this.setState({ email: text })}
			/>
		</View>
	);

	renderButton = () => (
		<Button
			title={Strings.authentication.SUBMIT}
			buttonStyle={{
				marginTop: ScalePerctFullHeight(8),
				marginBottom: ScalePerctFullHeight(4),
			}}
			showLoader={this.state.showLoader}
			onPress={this.handleLoginEvent}
		/>
	);

	render() {
		return (
			<AuthBackground>
				<KeyboardAwareScrollView>
					<View
						style={{
							width: ScalePerctFullWidth(100),
							height: ScalePerctFullHeight(100),
						}}
					>
						<View style={styles.logoContainer}>
							<Text>LOGO</Text>
						</View>
						<View style={styles.paddingHorizontal}>
							{this.renderForm()}
							{this.renderButton()}
							<Text style={styles.createAccountText} onPress={this.handleSignUp}>
								{Strings.authentication.CREATE_AN_ACCOUNT}
							</Text>
						</View>
					</View>
				</KeyboardAwareScrollView>
			</AuthBackground>
		);
	}
}

function mapStateToProps() {
	// state
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ForgotAuthScreen);

const mobileStyles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
	},
	logoContainer: {
		flex: 1,
		margin: ScalePerctFullHeight(10),
		alignItems: "center",
	},
	createAccountText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		marginBottom: ScalePerctFullHeight(8),
		color: Colors.bgPrimaryLight,
	},
	formStyle: {
		alignSelf: "stretch",
	},
	paddingHorizontal: {
		paddingHorizontal: ScalePerctFullWidth(9),
		alignItems: "center",
	},
});

const tabStyles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
	},
	logoContainer: {
		flex: 1,
		margin: ScalePerctFullHeight(20),
		alignItems: "center",
	},
	createAccountText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		marginBottom: ScalePerctFullHeight(10.9),
		color: Colors.bgPrimaryLight,
	},
	formStyle: {
		alignSelf: "stretch",
	},
	paddingHorizontal: {
		paddingHorizontal: ScalePerctFullWidth(35),
		alignItems: "center",
	},
});

let styles = Metrics.isTablet ? tabStyles : mobileStyles;
