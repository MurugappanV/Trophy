import React from "react";
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Metrics } from "../../asset";

type Props = {
	authorName: string,
	followers: number,
	storyCount: number,
};

export default function AuthorInfo(props: Props) {
	const { authorName, followers, storyCount } = props;
	console.log("called");
	return (
		<View>
			<Text style={styles.authorName}>{authorName}</Text>
			<View style={styles.storyContainer}>
				<Text style={styles.story}>{storyCount} Stories</Text>
				<Text style={styles.followers}>{followers} Followers</Text>
			</View>
		</View>
	);
}

AuthorInfo.defaultProps = {
	authorName: "Odovacar Golzar",
	followers: 120,
	storyCount: 40,
};

const styles = StyleSheet.create({
	authorName: {
		fontSize: 20,
		marginLeft: ScalePerctFullWidth(7),
		marginTop: ScalePerctFullHeight(4),
		fontWeight: "bold",
		color: Colors.bgPrimaryBlack,
	},
	storyContainer: {
		flexDirection: "row",
	},
	story: {
		marginLeft: ScalePerctFullWidth(7),
		marginTop: ScalePerctFullHeight(2),
		color: Colors.bgPrimaryBlack,
	},
	followers: {
		marginLeft: ScalePerctFullWidth(3),
		marginTop: ScalePerctFullHeight(2),
		color: Colors.bgPrimaryBlack,
	},
});
