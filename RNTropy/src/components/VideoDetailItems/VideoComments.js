import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

export default class VideoComments extends PureComponent {
	render() {
		return <View style={styles.container} />;
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "17.5%",
		backgroundColor: "black",
	},
});
