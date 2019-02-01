import React, { PureComponent } from "react";
import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Strings, Metrics } from "../../asset";
import { TextInput, Button, AuthBackground } from "../../components";

type Props = {
	handleReturnToSignIn: Function,
	handleSignUp: Function,
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

export default class SignUpUI extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = { form: { email: "", password: "", name: "" }, checked: false };
	}

	handleCheckbox = () => {
		this.setState(prevState => ({ checked: !prevState.checked }));
	};

	renderButton = () => {
		const { handleSignUp } = this.props;
		const { checked } = this.state;
		return (
			<Button
				title={Strings.authentication.SIGN_UP}
				buttonStyle={{
					marginTop: ScalePerctFullHeight(4),
					marginBottom: ScalePerctFullHeight(4),
				}}
				onPress={() => handleSignUp(checked)}
			/>
		);
	};

	renderForm = () => {
		return (
			<View style={styleUI.formStyle}>
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
					onSubmitEditing={() => Keyboard.dismiss()}
				/>
			</View>
		);
	};

	renderPolicyText = () => (
		<View style={styleUI.viewStyle}>
			<TouchableOpacity onPress={this.handleCheckbox}>
				<SvgUri width="18" height="18" svgXmlData={small} />
			</TouchableOpacity>

			<View style={styleUI.textContainer}>
				<View style={styleUI.flexDirection}>
					<Text style={styleUI.text}>
						{`${Strings.authentication.I_AGREE_WITH_TROVE} `}
						<Text style={styleUI.privacy} onPress={() => alert("Privacy")}>
							{Strings.authentication.PRIVACY}
						</Text>
						{` `}
						<Text style={styleUI.privacy} onPress={() => alert("Policy")}>
							{Strings.authentication.POLICY}
						</Text>
						{`\n`}
						<Text style={styleUI.textTerms} numberOfLines={2}>
							{`${Strings.authentication.BY_CLICKING_ON} "${
								Strings.authentication.SIGN_UP
							}" ${Strings.authentication.I_AGREE_WITH_TROVE} `}
							<Text
								style={styleUI.privacy}
								onPress={() => alert("Terms and condition")}
							>
								{Strings.authentication.TERMS_AND_CONDITION}
							</Text>
						</Text>
					</Text>
				</View>
			</View>
		</View>
	);

	render() {
		const { handleReturnToSignIn } = this.props;
		return (
			<AuthBackground>
				<View
					style={{
						flex: 1,
						margin: 60,
						alignItems: "center",
						paddingTop: ScalePerctFullHeight(1),
					}}
				>
					<Text>LOGO</Text>
				</View>
				<View style={styleUI.paddingHorizontal}>
					{this.renderForm()}
					{this.renderPolicyText()}
				</View>
				{this.renderButton()}

				<Text style={styleUI.returnToSignIn} onPress={handleReturnToSignIn}>
					{Strings.authentication.RETURN_TO_SIGN_IN}
				</Text>
			</AuthBackground>
		);
	}
}

const styles = StyleSheet.create({
	returnToSignIn: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		marginBottom: ScalePerctFullHeight(8),
		color: Colors.bgPrimaryLight,
		fontFamily: "Lato-Regular",
	},
	viewStyle: {
		flexDirection: "row",
		marginTop: ScalePerctFullHeight(1),
		alignSelf: "flex-start",
	},
	text: {
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		lineHeight: 18,
		fontFamily: "Lato-Regular",
	},
	privacy: {
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		textDecorationLine: "underline",
		color: Colors.bgPrimaryLight,
		fontFamily: "Lato-Regular",
	},
	textTerms: {
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		fontFamily: "Lato-Regular",
	},
	textContainer: {
		flexDirection: "column",
		flex: 1,
		marginLeft: ScalePerctFullWidth(1),
	},
	formStyle: {
		alignSelf: "stretch",
	},
	flexDirection: {
		flexDirection: "row",
	},
	paddingHorizontal: {
		paddingHorizontal: ScalePerctFullWidth(9),
	},
});

const tabStyles = StyleSheet.create({
	returnToSignIn: {
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		letterSpacing: 0,
		marginBottom: 150,
		color: Colors.bgPrimaryLight,
		fontFamily: "AkzidenzGrotesk-Roman",
	},
	viewStyle: {
		flexDirection: "row",
		marginTop: 10,
		alignSelf: "flex-start",
	},
	text: {
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.VVV_SMALL_TEXT_SIZE,
		fontFamily: "AkzidenzGrotesk-Roman",
		lineHeight: 18,
	},
	privacy: {
		fontSize: Metrics.VVV_SMALL_TEXT_SIZE,
		textDecorationLine: "underline",
		color: Colors.bgPrimaryLight,
		fontFamily: "AkzidenzGrotesk-Roman",
	},
	textTerms: {
		color: Colors.bgPrimaryLight,
		fontSize: Metrics.VVV_SMALL_TEXT_SIZE,
		fontFamily: "AkzidenzGrotesk-Roman",
	},
	textContainer: {
		flexDirection: "column",
		flex: 1,
		marginLeft: 12,
	},
	formStyle: {
		alignSelf: "stretch",
	},
	flexDirection: {
		flexDirection: "row",
	},
	paddingHorizontal: {
		paddingHorizontal: 352,
	},
});

const styleUI = Metrics.isTablet ? tabStyles : styles;
