import React from "react";
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import SvgUri from "react-native-svg-uri";
import Icon from "../../asset/fonts/icons";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Metrics, Images } from "../../asset";

type Props = {
	onBack?: Function,
	onShare?: Function,
	title?: string,
	style?: number | Object | Array<number>,
};

const renderBackbtn = (onBack: Function) => {
	return onBack ? (
		<TouchableOpacity onPress={onBack} style={styles.buttonContainer}>
			<Icon name={Images.back} size={14} color={Colors.bgPrimaryDark} style={styles.icon} />
		</TouchableOpacity>
	) : (
		<View style={styles.emptyView} />
	);
};

const renderActionbtn = (onShare: Function, navigation: any) => {
	return onShare ? (
		<TouchableOpacity onPress={onShare} style={styles.shareContainer}>
			<Icon name={Images.share} size={20} color="black" />
		</TouchableOpacity>
	) : (
		<View style={styles.emptyView} />
	);
};

const renderTitle = (title: string) => {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default function ProfileHeader(props: Props) {
	const { style, onShare, onBack, title, navigation } = props;
	return (
		<View style={StyleSheet.flatten([styles.container, style])}>
			<StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
			<View style={[styles.headerContainer]}>
				{renderBackbtn(onBack)}
				{renderTitle(title)}
				{renderActionbtn(onShare)}
			</View>
		</View>
	);
}

ProfileHeader.defaultProps = {
	style: undefined,
	onBack: undefined,
	onShare: undefined,
	title: "",
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		width: ScalePerctFullWidth(100),
		height: Metrics.HEADER_HEIGHT,
		borderBottomWidth: Metrics.LINE_WIDTH,
		borderColor: Colors.linePrimary,
		backgroundColor: Colors.bgPrimaryLight,
	},
	headerContainer: {
		flex: 1,
		alignSelf: "stretch",
		marginTop: Metrics.STATUS_BAR_HEIGHT,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	buttonContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		paddingHorizontal: Metrics.DEFAULT_PADDING,
		paddingVertical: 8,
		tintColor: "white",
	},
	shareContainer: {
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		paddingHorizontal: Metrics.DEFAULT_PADDING,
		paddingVertical: 8,
	},
	actionPicContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		paddingHorizontal: Metrics.DEFAULT_PADDING,
		paddingVertical: 8,
	},
	actionPic: {
		borderRadius: 10,
		backgroundColor: Colors.bgPrimaryBlack,
		width: 20,
		height: 20,
	},
	emptyView: { padding: 18 },
	titleContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		padding: 8,
	},
	pageText: {
		color: Colors.bodyPrimaryLight,
		fontSize: Metrics.SMALL_TEXT_SIZE,
	},
	title: {
		color: Colors.bodyPrimaryDark,
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		fontWeight: "bold",
	},
	icon: {
		tintColor: "white",
	},
});
