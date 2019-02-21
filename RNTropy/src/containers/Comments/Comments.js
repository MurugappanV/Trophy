import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { ProfileHeader } from "../../components";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors, TemplateConfig } from "../../asset";

class Comments extends PureComponent {
	constructor() {
		super();
		this.state = {
			profilePic: "sdfg",
		};
	}

	reader() {
		<View style={styles.container}>
			<ProfileHeader
				onAction={() => {}}
				onBack={() => {
					navigation.goBack();
				}}
				title={"Comments"}
			/>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		height: ScalePerctFullHeight(100),
		width: ScalePerctFullWidth(100),
	},
});

export default Comments;
