import React, { Component } from "react";
import Slider from "react-native-slider";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Colors, ScalePerctFullHeight, ScalePerctFullWidth, Metrics } from "../../asset";

function pad(n, width, z = 0) {
	n = n + "";
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = position => [pad(Math.floor(position / 60), 2), pad(position % 60, 2)];

const SeekBar = ({ trackLength, currentPosition, onSeek, onSlidingStart }) => {
	const elapsed = minutesAndSeconds(currentPosition);
	const remaining = minutesAndSeconds(trackLength - currentPosition);
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row" }}>
				<Text style={styles.text}>
					{trackLength > 1 && remaining[0] + ":" + remaining[1]}
				</Text>
				<View style={styles.trackView}>
					<Slider
						maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
						onSlidingStart={onSlidingStart}
						onSlidingComplete={onSeek}
						value={currentPosition}
						style={styles.slider}
						minimumTrackTintColor={Colors.bgPrimaryVarient}
						maximumTrackTintColor={Colors.lineSecondary}
						thumbStyle={styles.thumb}
						trackStyle={styles.track}
					/>
				</View>
				<View style={{ flex: 1 }} />
				<Text style={[styles.text]}>{elapsed[0] + ":" + elapsed[1]}</Text>
			</View>
		</View>
	);
};

export default SeekBar;

const styles = StyleSheet.create({
	slider: {
		marginTop: -12,
	},
	container: {
		paddingLeft: 16,
		paddingRight: 16,
	},
	trackView: {
		marginHorizontal: ScalePerctFullWidth(5.9),
	},
	track: {
		height: ScalePerctFullHeight(0.6),
		borderRadius: 1,
		width: ScalePerctFullWidth(64),
	},
	thumb: {
		width: 10,
		height: 10,
		borderRadius: 5,
		backgroundColor: "red",
	},
	text: {
		color: Colors.searchIcon,
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		textAlign: "center",
		fontFamily: "Lato-Regular",
	},
});
