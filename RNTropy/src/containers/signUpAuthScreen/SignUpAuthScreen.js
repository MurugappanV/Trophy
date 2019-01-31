import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Strings, Metrics } from "../../asset";
import { TextInput, Button, AuthBackground } from "../../components";

type Props = {
	navigation: any,
};

const small = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="18px" height="14px" viewBox="0 0 18 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="UI-KIT" transform="translate(-1526.000000, -5181.000000)" stroke="#FFFFFF" stroke-width="1.5">
            <g id="arrow-left" transform="translate(1527.000000, 5182.000000)">
                <path d="M16,6 L0,6" id="Shape"></path>
                <polyline id="Shape" points="6 12 0 6 6 0"></polyline>
            </g>
        </g>
    </g>
</svg>`;

class SignUpAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = { email: "", password: "", name: "" };
	}

	handleReturnToSignIn = () => {
		const { navigation } = this.props;
		navigation.navigate("LoginAuthScreen");
	};

	renderButton = () => (
		<Button
			title={Strings.authentication.SIGN_UP}
			buttonStyle={{
				marginTop: ScalePerctFullHeight(4),
				marginBottom: ScalePerctFullHeight(4),
			}}
		/>
	);

	renderForm = () => (
		<View>
			<TextInput
				label={Strings.authentication.NAME}
				reference={(component: any) => {
					this.name = component;
				}}
				onSubmitEditing={() => this.email.focus()}
				returnKeyType="next"
				onChangeText={text => this.setState({ name: text })}
			/>
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
			/>
		</View>
	);

	renderPolicyText = () => (
		<View style={styles.viewStyle}>
			<View>
				<SvgUri width="18" height="18" svgXmlData={small} />
			</View>

			<View style={styles.textContainer}>
				<View style={{ flexDirection: "row" }}>
					<Text style={styles.text}>{Strings.authentication.I_AGREE_WITH_TROVE}</Text>

					<Text style={styles.privacy} onPress={() => alert("Privacy")}>
						{Strings.authentication.PRIVACY}
					</Text>
					<Text style={styles.privacy} onPress={() => alert("Policy")}>
						{Strings.authentication.POLICY}
					</Text>
				</View>
				<View style={{ flexDirection: "row" }}>
					<Text style={styles.textTerms}>
						{`${Strings.authentication.BY_CLICKING_ON} "${
							Strings.authentication.SIGN_UP
						}" ${Strings.authentication.I_AGREE_WITH_TROVE}`}
					</Text>
					<Text style={styles.privacy} onPress={() => alert("Terms and condition")}>
						{Strings.authentication.TERMS_AND_CONDITION}
					</Text>
				</View>
			</View>
		</View>
	);

	render() {
		return (
			<AuthBackground>
				<View
					style={{
						flex: 1,
						margin: 80,
						alignItems: "center",
						paddingTop: ScalePerctFullHeight(1),
					}}
				>
					<Text>LOGO</Text>
				</View>
				{this.renderForm()}
				{this.renderPolicyText()}
				{this.renderButton()}
				<Text style={styles.createAccountText} onPress={this.handleReturnToSignIn}>
					{Strings.authentication.RETURN_TO_SIGN_IN}
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
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SignUpAuthScreen);

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
	viewStyle: {
		flexDirection: "row",
		marginTop: ScalePerctFullHeight(1),
		alignSelf: "flex-start",
		marginLeft: ScalePerctFullWidth(9),
	},
	text: {
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.SMALL_TEXT_SIZE,
		marginBottom: ScalePerctFullWidth(1),
	},
	privacy: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		marginHorizontal: ScalePerctFullWidth(1),
		textDecorationLine: "underline",
		color: Colors.bgPrimaryLight,
	},
	textTerms: {
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.SMALL_TEXT_SIZE,
	},
	textContainer: {
		flexDirection: "column",
		flex: 1,
		marginLeft: ScalePerctFullWidth(1),
	},
});
