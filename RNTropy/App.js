/**
 * Trove React Native App
 *
 * @format
 * @flow
 */

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
		SplashScreen.hide();
	}

	render() {
		return (
			<Provider store={Store}>
				<Navigator />
			</Provider>
		);
	}
}
