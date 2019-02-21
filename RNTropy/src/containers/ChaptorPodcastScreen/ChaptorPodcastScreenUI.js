import React, { PureComponent } from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import * as Progress from "react-native-progress";
import SvgUri from "react-native-svg-uri";
import { Button, PodcastChaptorCard, PodcastPlayView } from "../../components";
import {
	ScalePerctFullHeight,
	ScalePerctFullWidth,
	Metrics,
	Colors,
	Strings,
	Images,
} from "../../asset";

const small = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="18px" height="14px" viewBox="0 0 18 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="UI-KIT" transform="translate(-1526.000000, -5181.000000)" stroke="#FFFFFF" stroke-width="1.5">
            <g id="arrow-left" transform="translate(1527.000000, 5182.000000)">
                <path d="M16,6 L0,6" id="Shape"></path>
                <polyline id="Shape" points="6 12 0 6 6 0"></polyline>
            </g>
        </g>
    </g>
</svg>`;

type Props = {
	handleTrackPlay: Function,
	handlePlay: Function,
	play: boolean,
	data: any,
	onSubscribe: Function,
	flag: "string",
};

export default class ChaptorPodcastScreenUI extends PureComponent<Props> {
	renderHeaderView = (data: any) => {
		const { onSubscribe, flag } = this.props;
		return (
			<View style={{ width: ScalePerctFullWidth(49) }}>
				<Text style={styles.title}>{data.title}</Text>
				<Text style={styles.chapter}>Chapter 6</Text>

				<Button
					title={flag === "F" ? Strings.podCast.SUBSCRIBE : Strings.podCast.UNSUBSCRIBE}
					button={Images.subscribeButton}
					buttonStyle={{
						alignSelf: "flex-start",
						marginRight: ScalePerctFullWidth(17.5),
					}}
					top={11}
					onPress={onSubscribe}
					//width={ScalePerctFullWidth(31)}
				/>
			</View>
		);
	};

	renderImage = data => (
		<Image
			style={styles.image}
			source={{
				uri: data,
			}}
		/>
	);

	renderTabletHeader = () => (
		<View style={{ flex: 0.5 }}>
			<View style={{ width: ScalePerctFullWidth(32.7) }}>
				<Text style={styles.title}>Walking in the Victoria street Fashion show</Text>
				<Text style={styles.chapter}>Chapter 6</Text>
			</View>
			<View style={{ alignItems: "center" }}>
				{this.renderImage()}
				<Button
					title={Strings.podCast.SUBSCRIBE}
					button={Images.subscribeButton}
					buttonStyle={{ alignItems: "center", marginTop: ScalePerctFullHeight(2.5) }}
					top={11}
					width={ScalePerctFullWidth(34)}
				/>
			</View>
		</View>
	);

	renderList = (list: Array) => {
		const { handleTrackPlay } = this.props;
		return (
			<FlatList
				data={list}
				renderItem={({ item }) => (
					<PodcastChaptorCard onPress={handleTrackPlay} data={item} />
				)}
				style={styles.listStyle}
				ListHeaderComponent={() => <Text style={styles.listHeader}>Related Episodes</Text>}
				keyExtractor={(item, index) => index.toString()}
			/>
		);
	};

	render() {
		const { handlePlay, play, data } = this.props;
		return (
			<View style={styles.mainContainer}>
				{play && <PodcastPlayView onPress={handlePlay} />}

				{Metrics.isTablet ? (
					this.renderTabletHeader()
				) : (
					<View style={styles.container}>
						{this.renderHeaderView(data)}

						{!data.field_image ? (
							<View style={styles.imageView} />
						) : (
							this.renderImage(data.field_image)
						)}
					</View>
				)}

				{/* <View style={Metrics.isTablet && { flex: 0.5, height: ScalePerctFullHeight(100) }}> */}
				{this.renderList(data.field_podcast_details)}
				{/* s</View> */}
			</View>
		);
	}
}

const mobileStyle = StyleSheet.create({
	mainContainer: { flex: 1 },
	container: {
		flexDirection: "row",
		paddingHorizontal: Metrics.DEFAULT_PADDING,
		paddingTop: Metrics.DEFAULT_PADDING,
		paddingBottom: ScalePerctFullHeight(6),
		justifyContent: "space-between",
	},
	image: {
		width: ScalePerctFullWidth(40),
		height: ScalePerctFullWidth(40),
		borderRadius: ScalePerctFullWidth(20),
	},
	imageView: {
		width: ScalePerctFullWidth(40),
		height: ScalePerctFullWidth(40),
		borderRadius: ScalePerctFullWidth(20),
		backgroundColor: Colors.linePrimary,
	},
	logo: {
		height: 18,
		backgroundColor: "pink",
		width: 90,
	},
	title: {
		fontSize: Metrics.EXTRA_MEDIUM_TEXT,
		lineHeight: 25,
		letterSpacing: 0,
		color: Colors.bgPrimaryBlack,
		fontFamily: "Lato-Bold",
		marginBottom: ScalePerctFullHeight(2),
	},
	chapter: {
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		fontFamily: "Lato-Regular",
		color: Colors.bodySecondaryDark,
		marginBottom: ScalePerctFullHeight(3),
	},
	listStyle: {
		paddingHorizontal: Metrics.DEFAULT_PADDING,
		flex: 1,
	},
	listHeader: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		color: Colors.bodySecondaryDark,
		marginBottom: ScalePerctFullHeight(2),
		fontFamily: "Merriweather-Bold",
	},
});

const tabletStyle = StyleSheet.create({
	mainContainer: {
		flexDirection: "row",
		paddingTop: ScalePerctFullHeight(5.4),
		paddingHorizontal: ScalePerctFullWidth(4.8),
	},
	container: {
		flexDirection: "row",
		paddingHorizontal: Metrics.DEFAULT_PADDING,
		paddingTop: Metrics.DEFAULT_PADDING,
		paddingBottom: ScalePerctFullHeight(6),
		justifyContent: "space-between",
	},
	image: {
		width: ScalePerctFullWidth(28),
		height: ScalePerctFullWidth(28),
		borderRadius: ScalePerctFullWidth(14),
	},
	logo: {
		height: 18,
		backgroundColor: "pink",
		width: 90,
	},
	title: {
		fontSize: Metrics.EXTRA_MEDIUM_TEXT,
		lineHeight: 25,
		letterSpacing: 0,
		color: Colors.bgPrimaryBlack,
		fontFamily: "Lato-Bold",
		marginBottom: ScalePerctFullHeight(2),
	},
	chapter: {
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		fontFamily: "Lato-Regular",
		color: Colors.bodySecondaryDark,
		marginBottom: ScalePerctFullHeight(3),
	},
	listStyle: {
		// paddingHorizontal: Metrics.DEFAULT_PADDING,
		flex: 1,
	},
	listHeader: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		color: Colors.bodySecondaryDark,
		marginBottom: ScalePerctFullHeight(2),
	},
});

const styles = Metrics.isTablet ? tabletStyle : mobileStyle;
