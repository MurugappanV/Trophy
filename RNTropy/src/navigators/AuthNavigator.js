import React from "react";
import { View, StyleSheet } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Video from "react-native-video";
import { Actions } from "../redux";
import {
	AuthLoading,
	FirstAuthScreen,
	Login,
	SignUpAuthScreen,
	ForgotAuthScreen,
	MessageAuthScreen,
} from "../containers";
import { Metrics, ScalePerctFullWidth, ScalePerctFullHeight, Colors } from "../asset";

type Props = {
	navigation: any,
};

const LoginScreen = Metrics.isTablet ? Login : FirstAuthScreen;
const AuthStackNavigator = createStackNavigator(
	{
		FirstAuthScreen: { screen: LoginScreen },
		LoginAuthScreen: { screen: Login },
		SignUpAuthScreen: { screen: SignUpAuthScreen },
		ForgotAuthScreen: { screen: ForgotAuthScreen },
		SuccessAuthScreen: { screen: AuthLoading },
		MessageAuthScreen: { screen: MessageAuthScreen },
	},
	{
		cardStyle: { shadowColor: "transparent", backgroundColor: "transparent" },
		transitionConfig: () => ({
			containerStyle: {
				backgroundColor: "red",
			},
		}),
		defaultNavigationOptions: () => ({
			header: null,
		}),
	},
);

class AuthNavigator extends React.Component {
	static router = AuthStackNavigator.router;

	render() {
		return (
			<View
				style={{
					width: ScalePerctFullWidth(100),
					height: ScalePerctFullHeight(100),
					backgroundColor: "red",
				}}
			>
				<AuthStackNavigator
					style={{ backgroundColor: "red" }}
					navigation={this.props.navigation}
				/>
				{/* <Video
					source={require("../asset/Videos/login.mp4")} // Can be a URL or a local file.
					ref={ref => {
						this.player = ref;
					}} // Store reference
					onBuffer={() => {}} // Callback when remote video is buffering
					onError={() => {}} // Callback when video cannot be loaded
					style={styles.backgroundVideo}
					repeat
					muted
					resizeMode="cover"
				/> */}
			</View>
		);
	}
}

// function mapStateToProps(state: any) {
// 	return {};
// }

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(Actions, dispatch);
// }

export default AuthNavigator;

// getTabForCategory (category){
//     return () => (<ArticlesList category={category} />);
// }

const styles = StyleSheet.create({
	backgroundVideo: {
		position: "absolute",
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(100),
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		zIndex: -1,
	},
});
