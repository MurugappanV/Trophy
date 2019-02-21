import React, { Component } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors, ScalePerctFullHeight } from "../../asset";

const Controls = ({
	paused,
	shuffleOn,
	repeatOn,
	onPressPlay,
	onPressPause,
	onBack,
	onForward,
	onPressShuffle,
	onPressRepeat,
	forwardDisabled,
}) => (
	<View style={styles.container}>
		{/* <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
			<Image
				style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
				source={require("../img/ic_shuffle_white.png")}
			/>
		</TouchableOpacity> */}
		{/* <View style={{ width: 40 }} />
		<TouchableOpacity onPress={onBack}>
			<Image source={require("../img/ic_skip_previous_white_36pt.png")} />
        </TouchableOpacity> */}
		<Icon name="backward" size={23} color={Colors.bgPrimaryVarient} />

		{!paused ? (
			<TouchableOpacity onPress={onPressPause}>
				<View style={styles.playButton}>
					<Icon name="pause-circle" size={52} color={Colors.bgPrimaryVarient} />
				</View>
			</TouchableOpacity>
		) : (
			<TouchableOpacity onPress={onPressPlay}>
				<View style={styles.playButton}>
					<Icon name="play-circle" size={52} color={Colors.bgPrimaryVarient} />
				</View>
			</TouchableOpacity>
		)}
		<Icon name="forward" size={23} color={Colors.bgPrimaryVarient} />

		{/* <Icon name="backward" size={23} color={Colors.bgPrimaryVarient} />
			<TouchableOpacity style={{ marginHorizontal: ScalePerctFullWidth(6) }}>
				<Icon name="play-circle" size={52} color={Colors.bgPrimaryVarient} />
			</TouchableOpacity>
			<Icon name="forward" size={23} color={Colors.bgPrimaryVarient} /> */}

		{/* <View style={{ width: 20 }} />
		<TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
			<Image
				style={[forwardDisabled && { opacity: 0.3 }]}
				source={require("../img/ic_skip_next_white_36pt.png")}
			/>
		</TouchableOpacity>
		<View style={{ width: 40 }} />
		<TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
			<Image
				style={[styles.secondaryControl, repeatOn ? [] : styles.off]}
				source={require("../img/ic_repeat_white.png")}
			/>
		</TouchableOpacity> */}
	</View>
);

export default Controls;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		paddingBottom: ScalePerctFullHeight(6),
		paddingTop: ScalePerctFullHeight(5.4),
		justifyContent: "space-around",
		alignItems: "center",
		flex: 0.5,
	},
	playButton: {
		height: 72,
		width: 72,
		borderWidth: 1,
		borderColor: "white",
		borderRadius: 72 / 2,
		alignItems: "center",
		justifyContent: "center",
	},
	secondaryControl: {
		height: 18,
		width: 18,
	},
	off: {
		opacity: 0.3,
	},
});
