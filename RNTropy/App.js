/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { PureComponent } from "react";
import SplashScreen from "react-native-splash-screen";
import Profile from "./src/screens/Profile";

type Props = {};

export default class App extends PureComponent<Props> {
	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return <Profile />;
	}
}
