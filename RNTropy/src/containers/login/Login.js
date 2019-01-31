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

class Login extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = { email: "", Password: "" };
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
		alert("Login");
	};

	handleForm = () => (
		<View>
			<TextInput
				label={Strings.authentication.EMAIL}
				reference={(component: any) => {
					this.email = component;
				}}
				onSubmitEditing={() => this.password.focus()}
				returnKeyType="next"
				keyboardType="email-address"
				onChangeText={text => this.setState({ email: text })}
			/>
			<TextInput
				label={Strings.authentication.PASSWORD}
				secureTextEntry
				reference={(component: any) => {
					this.password = component;
				}}
				onChangeText={text => this.setState({ Password: text })}
				buttonLabel="HELP"
				onPress={this.handleForgotPassword}
				onSubmitEditing={this.handleLogin}
			/>
			<Button
				title={Strings.authentication.LOGIN}
				buttonStyle={{
					marginTop: ScalePerctFullHeight(8),
					marginBottom: ScalePerctFullHeight(4),
				}}
				onPress={this.handleLogin}
			/>
		</View>
	);

	render() {
		return (
			<AuthBackground>
				<View
					style={{
						flex: 1,
						margin: 100,
						alignItems: "center",
						paddingTop: ScalePerctFullHeight(1),
					}}
				>
					<Text>LOGO</Text>
				</View>
				{this.handleForm()}
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
)(Login);

const styles = StyleSheet.create({
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
});
