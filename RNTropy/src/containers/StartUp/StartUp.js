import React, { PureComponent } from "react";
import { View, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SplashScreen from "react-native-splash-screen";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight } from "../../asset";
import { LoadingComp } from "../../components";
import { getCurrentUserIdStorage, getUserStorage } from "../../storage";
import { StartUp, StartBrandsService } from "../../service";

type Props = {
	navigation: any,
	setUserAction: Function,
};

class StartUpScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		new StartUp(props);
		StartBrandsService(props);
		this.state = {};
	}

	componentDidMount() {
		const { setUserAction, navigation } = this.props;
		getCurrentUserIdStorage()
			.then((userId: number) => {
				if (userId) {
					getUserStorage(userId)
						.then((userString: string) => {
							if (userString) {
								const user = JSON.parse(userString);
								setUserAction(user.user);
								if (user.topics === null) {
									navigation.navigate("TopicsAuthScreen");
									// SplashScreen.hide();
								} else {
									navigation.navigate("HomeNavigation");
									// SplashScreen.hide();
								}
							} else {
								navigation.navigate("AuthNavigation");
								// SplashScreen.hide();
							}
						})
						.catch((error: any) => {
							console.log("error", error);
							navigation.navigate("AuthNavigation");
							// SplashScreen.hide();
						});
				} else {
					navigation.navigate("AuthNavigation");
					// SplashScreen.hide();
				}
			})
			.catch((error: any) => {
				console.log("error", error);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<Image
					resizeMode={"cover"}
					source={require("../../asset/Images/splashscreen.png")}
					style={styles.image}
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
)(StartUpScreen);

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
	image: {
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(100),
	},
});
