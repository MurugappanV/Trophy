import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Colors, ScalePerctFullHeight, ScalePerctFullWidth, Strings, Metrics } from "../../asset";
import { Button, TextInput, AuthBackground } from "../../components";

type Props = {
	handleLogin: Function,
	handleForgotPassword: Function,
	handleSignUp: Function,
};

export default class LoginUI extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = { email: "", Password: "" };
	}

	handleForm = () => {
		const { handleLogin, handleForgotPassword } = this.props;
		return (
			<View style={styles.formStyle}>
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
					onPress={handleForgotPassword}
					onSubmitEditing={handleLogin}
				/>
			</View>
		);
	};

	renderButton = () => {
		const { handleLogin } = this.props;
		return (
			<Button
				title={Strings.authentication.LOGIN}
				buttonStyle={{
					marginTop: ScalePerctFullHeight(8),
					marginBottom: ScalePerctFullHeight(4),
				}}
				onPress={handleLogin}
			/>
		);
	};

	render() {
		const { handleSignUp } = this.props;
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
				{this.renderButton()}
				<Text style={styles.createAccountText} onPress={handleSignUp}>
					{Strings.authentication.CREATE_AN_ACCOUNT}
				</Text>
			</AuthBackground>
		);
	}
}

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
	formStyle: {
		alignSelf: "stretch",
		paddingHorizontal: ScalePerctFullWidth(9),
	},
});