import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors } from "../../asset";

type Props = {
	onPress: Function,
	margin: number,
	index: number,
	data: Object,
};

export default function PodcastListCard(props: Props) {
	const { onPress, margin, index, data } = props;
	return (
		<TouchableOpacity
			activeOpacity={1.0}
			style={[
				index === 0 && Metrics.isTablet ? style.containerIndex : style.container,
				margin && { margin, marginRight: null },
			]}
			onPress={onPress}
		>
			{!data.field_image ? (
				<View
					style={
						Metrics.isTablet && index === 0 ? style.imageIndexView : style.imageView
					}
				/>
			) : (
				<Image
					source={{
						uri: data.field_image,
					}}
					style={Metrics.isTablet && index === 0 ? style.imageIndex : style.image}
				/>
			)}
			<Text style={style.title} numberOfLines={2}>
				{data.title}
			</Text>
			<Text style={style.description}>{data.created}</Text>
		</TouchableOpacity>
	);
}

const mobileStyle = StyleSheet.create({
	container: {
		width: 131,
		marginRight: ScalePerctFullWidth(2.9),
	},
	image: {
		height: 131,
		width: 131,
		borderRadius: 4,
	},
	imageView: { height: 131, width: 131, borderRadius: 4, backgroundColor: Colors.linePrimary },
	imageTablet: {
		height: 454,
		width: 257,
		backgroundColor: Colors.linePrimary,
	},
	title: {
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		marginTop: ScalePerctFullHeight(1.7),
		color: Colors.bgPrimaryDark,
		lineHeight: 18,
		letterSpacing: 0,
		fontFamily: "Lato-Bold",
	},
	description: {
		marginTop: ScalePerctFullHeight(1.4),
		letterSpacing: 0,
		color: Colors.bodyTertiaryDark,
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		fontFamily: "Lato-Regular",
	},
});

const tabletStyle = StyleSheet.create({
	container: {
		width: 297,
		marginRight: ScalePerctFullWidth(1.7),
	},
	containerIndex: {
		width: 454,
		marginRight: ScalePerctFullWidth(1.7),
	},
	image: {
		height: 168,
		width: 297,
		backgroundColor: "red",
	},
	imageIndex: {
		height: 257,
		width: 454,
		backgroundColor: "red",
	},
	title: {
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		marginTop: ScalePerctFullHeight(1.7),
		color: Colors.bgPrimaryDark,
		lineHeight: 18,
		letterSpacing: 0,
		fontFamily: "Lato-Bold",
	},
	description: {
		marginTop: ScalePerctFullHeight(1.4),
		letterSpacing: 0,
		color: Colors.bodyTertiaryDark,
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		fontFamily: "Lato-Regular",
	},
});

const style = Metrics.isTablet ? tabletStyle : mobileStyle;
