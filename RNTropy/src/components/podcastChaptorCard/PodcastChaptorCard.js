import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Metrics, Colors, ScalePerctFullHeight, ScalePerctFullWidth } from "../../asset";
import SvgUri from "react-native-svg-uri";
import { Separator } from "../separator";

const play = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g id="UI-KIT" transform="translate(-1178.000000, -5178.000000)" stroke="#FFFFFF" stroke-width="1.5">
            <g id="play-circle" transform="translate(1179.000000, 5179.000000)">
                <circle id="Oval" cx="7.5" cy="7.5" r="7.5"></circle>
                <polygon id="Shape" points="6 4.5 10.5 7.5 6 10.5"></polygon>
            </g>
        </g>
    </g>
</svg>`;

type Props = {
	onPress: Function,
	data: Object,
};

export default function PodcastChaptorCard(props: Props) {
	const { onPress, data } = props;
	return (
		<View style={{ flexDirection: "column" }}>
			<View style={styles.container}>
				<TouchableOpacity style={styles.iconStyle} onPress={onPress}>
					<Icon name="play-circle" size={23} color={Colors.bgPrimaryVarient} />
				</TouchableOpacity>

				<View style={{ flex: 1 }}>
					<View
						style={
							Metrics.isTablet
								? { width: ScalePerctFullWidth(23) }
								: { width: ScalePerctFullWidth(58) }
						}
					>
						<Text style={styles.listTitle} numberOfLines={1}>
							{data.podcast_title}
						</Text>
					</View>
					<View style={styles.innerListView}>
						<Text style={styles.date}>{data.podcast_by}</Text>
						<Text style={styles.time}>{data.podcast_duration}</Text>
					</View>
				</View>
			</View>
			<View style={{ height: 2, backgroundColor: Colors.linePrimary }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingBottom: Metrics.DEFAULT_PADDING,
		paddingTop: ScalePerctFullHeight(2),
		//backgroundColor: "red",
	},
	iconStyle: { flex: 0.2, justifyContent: "center" },
	listTitle: {
		fontFamily: "Lato-Bold",
		fontSize: Metrics.EXTRA_MEDIUM_TEXT_SIZE,
		letterSpacing: 0,
		color: Colors.bgPrimaryDark,
	},
	date: {
		fontFamily: "Lato-Regular",
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		color: Colors.textHeading,
	},
	time: {
		fontFamily: "Lato-Regular",
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		color: Colors.bgPrimaryVarient,
	},
	innerListView: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: ScalePerctFullHeight(1.7),
	},
});
