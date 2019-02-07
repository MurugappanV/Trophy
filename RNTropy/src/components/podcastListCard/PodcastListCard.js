import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors } from "../../asset";

type Props = {
	title: string,
	description: Function,
	imageURL: string,
};

export default function PodcastListCard(props: Props) {
	const { title, description, imageURL } = props;
	return (
		<View style={style.container}>
			<Image
				source={{
					uri: imageURL,
				}}
				style={style.image}
			/>
			<Text style={style.title}>{title}</Text>
			<Text style={style.description}>{description}</Text>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		width: 131,

		marginRight: ScalePerctFullWidth(2.9),
	},
	image: {
		height: 131,
		width: 131,
		backgroundColor: "red",
	},
	title: {
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		marginTop: ScalePerctFullHeight(1.7),
		color: Colors.bgPrimaryDark,
		lineHeight: 18,
		letterSpacing: 0,
	},
	description: {
		marginTop: ScalePerctFullHeight(1.4),
		letterSpacing: 0,
		color: Colors.bodyTertiaryDark,
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
	},
});
