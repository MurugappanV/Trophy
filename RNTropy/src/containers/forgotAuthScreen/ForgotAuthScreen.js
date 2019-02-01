import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Strings, Metrics } from "../../asset";
import { Button, TextInput, AuthBackground } from "../../components";

type Props = {
	navigation: any,
};

class ForgotAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = { email: "", Password: "" };
	}

	handleSignUp = () => {
		const { navigation } = this.props;
		navigation.navigate("SignUpAuthScreen");
	};

	handleLoginEvent = () => {
		this.onSuccess();
	};

	onSuccess = () => {
		const { navigation } = this.props;
		navigation.navigate("MessageAuthScreen");
	};

	onFaliure = () => {};

	onError = () => {};

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
			onPress={this.handleLoginEvent}
		/>
	);

	render() {
		return (
			<AuthBackground>
				<View style={{ flex: 1, margin: 100 }} />
				{this.renderForm()}
				{this.renderButton()}
				<Text style={styles.createAccountText} onPress={this.handleSignUp}>
					{Strings.authentication.CREATE_AN_ACCOUNT}
				</Text>
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
	createAccountText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		marginBottom: ScalePerctFullHeight(8),
		color: Colors.bgPrimaryLight,
	},
	formStyle: {
		alignSelf: "stretch",
		paddingHorizontal: ScalePerctFullWidth(9),
	},
});

const tabStyles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
	},
	createAccountText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		marginBottom: 150,
		color: Colors.bgPrimaryLight,
	},
	formStyle: {
		alignSelf: "stretch",
		paddingHorizontal: 352,
	},
});

let styles = Metrics.isTablet ? tabStyles : mobileStyles;
