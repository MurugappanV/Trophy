import React from "react";
import { StyleSheet, View, Text, StatusBar, TouchableOpacity, Image } from "react-native";
import Icon from "../../asset/fonts/icons";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Metrics } from "../../asset";

type Props = {
	onBack?: Function,
	onAction?: Function,
	imageUrl?: string,
	title?: string,
	style?: number | Object | Array<number>,
	statusTheme?: string,
	isBottomBorder?: booleam,
};

const renderBackbtn = (onBack: Function) => {
	return onBack ? (
		<TouchableOpacity onPress={onBack} style={styles.buttonContainer}>
			<Icon name="filledBookmark" size={24} color="#bf1313" />
		</TouchableOpacity>
	) : (
		<View style={styles.emptyView} />
	);
};

const renderActionbtn = (onAction: Function, imageUrl: string) => {
	return (
		<TouchableOpacity onPress={onAction} style={styles.actionPic}>
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

export default function PagerHeader(props: Props) {
	const { style, onAction, onBack, imageUrl, title, statusTheme, isBottomBorder } = props;
	console.log("called", statusTheme);
	return (
		<View
			style={StyleSheet.flatten([
				styles.container,
				{ borderBottomWidth: isBottomBorder ? Metrics.LINE_WIDTH : 0 },
				style,
			])}
		>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle={statusTheme == "dark" ? "dark-content" : "light-content"}
			/>
			<View style={[styles.headerContainer]}>
				{renderBackbtn(onBack)}
				{renderTitle(title)}
				{renderActionbtn(onAction, imageUrl)}
			</View>
		</View>
	);
}

PagerHeader.defaultProps = {
	style: undefined,
	onBack: undefined,
	onAction: undefined,
	imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
	title: "",
	statusTheme: "dark",
	isBottomBorder: true,
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		width: ScalePerctFullWidth(100),
		height: Metrics.HEADER_HEIGHT,
		borderColor: Colors.linePrimary,
		backgroundColor: Colors.bgPrimaryLight,
		paddingHorizontal: 8,
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
		padding: 8,
	},
	actionPic: {
		borderRadius: ScalePerctFullHeight(1.5),
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		backgroundColor: Colors.bgPrimaryBlack,
		width: ScalePerctFullHeight(3),
		height: ScalePerctFullHeight(3),
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
		fontSize: 14,
	},
});