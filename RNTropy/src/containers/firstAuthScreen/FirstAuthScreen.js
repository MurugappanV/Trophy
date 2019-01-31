import React, { PureComponent } from "react";
import { View, StyleSheet, ImageBackground, StatusBar, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Strings, Metrics } from "../../asset";
import { AuthBackground, Button, Separator } from "../../components";
import SvgUri from "react-native-svg-uri";

const image = require("../../asset/Images/login.png");

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

class FirstAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleLoginEvent = () => {
		const { navigation } = this.props;
		navigation.navigate("MessageAuthScreen");
	};

	handleSignUp = () => {
		const { navigation } = this.props;
		navigation.navigate("SignUpAuthScreen");
	};

	renderButton = () => (
		<View>
			<Button
				title={Strings.authentication.LOGIN_WITH_YOUR_EMAIL_ID}
				buttonStyle={{
					marginTop: ScalePerctFullHeight(61),
					marginBottom: ScalePerctFullHeight(5),
				}}
				onPress={this.handleLoginEvent}
			/>
		</View>
	);

	renderSeparator = () => (
		<View style={styles.separatorContainer}>
			<Separator />
			<Text style={styles.orText}>{Strings.authentication.OR}</Text>
			<Separator />
		</View>
	);

	renderSocialLogin = () => (
		<View>
			<Text style={styles.socialLoginText}>
				{Strings.authentication.LOGIN_WITH_SOME_SOCIAL_NETWORKS}
			</Text>
			<View style={styles.iconContainer}>
				<SvgUri width="10" height="10" svgXmlData={small} />
				<SvgUri width="10" height="10" svgXmlData={small} />
				<SvgUri width="10" height="10" svgXmlData={small} />
			</View>
		</View>
	);

	render() {
		return (
			<ImageBackground source={image} style={styles.container}>
				<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
				{this.renderButton()}
				<Text style={styles.createAccountText} onPress={this.handleSignUp}>
					{Strings.authentication.CREATE_AN_ACCOUNT}
				</Text>
				{this.renderSeparator()}
				{this.renderSocialLogin()}
			</ImageBackground>
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
)(FirstAuthScreen);

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
		color: Colors.bgPrimaryLight,
	},
	separator: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		flex: 1,
		alignSelf: "center",
	},
	orText: {
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		color: Colors.bgPrimaryLight,
		flex: 0.25,
		textAlign: "center",
		letterSpacing: 0,
	},
	separatorContainer: {
		flexDirection: "row",
		margin: ScalePerctFullWidth(8),
		letterSpacing: 0,
	},
	socialLoginText: {
		fontSize: Metrics.V_SMALL_TEXT_SIZE,
		letterSpacing: 0.23,
		marginBottom: ScalePerctFullWidth(6),
		color: Colors.bgPrimaryLight,
	},
	iconContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
	},
});
