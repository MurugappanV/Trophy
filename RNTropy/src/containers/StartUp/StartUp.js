import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SplashScreen from "react-native-splash-screen";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight } from "../../asset";
import { LoadingComp } from "../../components";
// import { getCurrentUserIdStorage, getUserCredentialsRealm } from "../../storage";

type Props = {
	navigation: any,
};

class StartUp extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const { navigation } = this.props;
		// getCurrentUserIdStorage()
		// 	.then((userId: number) => {
		// 		console.log("userId", userId);
		// 		const userCred = getUserCredentialsRealm(userId);
		// 		if (!userCred.topics || userCred.topics.length < 1) {
		// 			navigation.navigate("TopicsAuthScreen");
		// 			SplashScreen.hide();
		// 		} else {
		// 			navigation.navigate("HomeDrawerScreen");
		// 			SplashScreen.hide();
		// 		}
		// 		console.log("user cred", userCred.topics);
		// 	})
		// 	.catch((error: any) => {
		// 		console.log("error", error);
		// 	});
	}

	render() {
		return (
			<View style={styles.container}>
				<LoadingComp title="Loading..." />
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
)(StartUp);

const styles = StyleSheet.create({
	header: {
		alignSelf: "flex-start",
	},
	container: {
		flexDirection: "column",
		alignItems: "center",
		alignContent: "center",
		backgroundColor: Colors.bgSecondaryLight,
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(100),
	},
});
