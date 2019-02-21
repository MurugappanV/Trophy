// /**
//  * Trove React Native App
//  *
//  * @format
//  * @flow
//  */

import React, { PureComponent } from "react";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { Store, Navigator } from "./src";

type Props = {};

export default class App extends PureComponent<Props> {
	componentDidMount() {
		// getCurrentUserIdStorage()
		// 	.then((userId: number) => {
		// 		console.log("userId", userId);
		// 		const userCred = getUserCredentialsRealm(userId);
		// 		if (!userCred.topics || userCred.topics.length < 1) {
		// 		}
		// 		console.log("user cred", userCred.topics);
		// 	})
		// 	.catch((error: any) => {
		// 		console.log("error", error);
		// 	});
		// SplashScreen.hide();
	}

	render() {
		return (
			<Provider store={Store}>
				<Navigator />
			</Provider>
		);
	}
}

// import React, { PureComponent } from "react";
// import {
// 	View,
// 	FlatList,
// 	Image,
// 	Text,
// 	Platform,
// 	TouchableNativeFeedback,
// 	TouchableHighlight,
// 	StyleSheet,
// } from "react-native";
// import { WebView } from "react-native-webview";

// export default class App extends PureComponent<Props> {
// 	render() {
// 		return (
// 			<WebView
// 				originWhitelist={["*"]}
// 				source={{ html: "<h1>This is a static HTML source!</h1>" }}
// 			/>
// 		);
// 	}
// }
