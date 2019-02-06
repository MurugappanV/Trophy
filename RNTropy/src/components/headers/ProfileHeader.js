import React from "react";
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import Icon from "../../asset/fonts/icons";
import { Colors, ScalePerctFullWidth, Metrics, Images } from "../../asset";

type Props = {
	onBack?: Function,
	onGrid?: Function,
	onAction?: Function,
	title?: string,
	imageUrl?: string,
	style?: number | Object | Array<number>,
};

const renderBackbtn = (onBack: Function, onGrid: Function) => {
	return onBack ? (
		<TouchableOpacity onPress={onBack} style={styles.buttonContainer}>
			<Icon name={Images.back} size={14} color={Colors.bgPrimaryDark} />
		</TouchableOpacity>
	) : (
		<TouchableOpacity onPress={onGrid} style={styles.buttonContainer}>
			<Icon name={Images.grid} size={14} color={Colors.bgPrimaryDark} />
		</TouchableOpacity>
	);
};

const renderActionbtn = (onAction: Function, imageUrl: string, navigation: any) => {
	return (
		<TouchableOpacity
			onPress={onAction || (() => navigation.navigate("ProfileDrawerScreen"))}
			style={styles.actionPicContainer}
		>
			<Image
				style={styles.actionPic}
				source={{
					uri: imageUrl,
				}}
			/>
		</TouchableOpacity>
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
	const { style, onAction, onBack, onGrid, imageUrl, title, navigation } = props;
	return (
		<View style={StyleSheet.flatten([styles.container, style])}>
			<StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
			<View style={[styles.headerContainer]}>
				{renderBackbtn(onBack, onGrid)}
				{renderTitle(title)}
				{renderActionbtn(onAction, imageUrl, navigation)}
			</View>
		</View>
	);
}

ProfileHeader.defaultProps = {
	style: undefined,
	onBack: undefined,
	onAction: undefined,
	onGrid: undefined,
	imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
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
		fontSize: Metrics.SMALL_TEXT_SIZE,
		fontWeight: "bold",
	},
});
