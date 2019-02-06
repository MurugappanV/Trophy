/**
 * Trove React Native App
 *
 * @format
 * @flow
 */

import React, { PureComponent } from "react";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { Store, Navigator, Author } from "./src";

type Props = {};

export default class App extends PureComponent<Props> {
	componentDidMount() {
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
