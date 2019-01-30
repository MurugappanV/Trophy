import React from "react";
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from "react-native";
import Icon from "../../asset/fonts/icons";
import { Colors, ScalePerctFullWidth, Metrics } from "../../asset";

type Props = {
	page?: number,
	totalPage?: number,
	onBack?: Function,
	onAction?: Function,
	actionLabel?: string,
	style?: number | Object | Array<number>,
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

const renderActionbtn = (onAction: Function, actionLabel: string) => {
	return onAction ? (
		<TouchableOpacity onPress={onAction} style={styles.buttonContainer}>
			<Text style={styles.actionText}>{actionLabel}</Text>
		</TouchableOpacity>
	) : (
		<View style={styles.emptyView} />
	);
};

const renderTitle = (page: number, totalPage: number) => {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.pageText}>
				{`${page}/`}
				<Text style={styles.totalPageText}>{totalPage}</Text>
			</Text>
		</View>
	);
};

export default function PagerHeader(props: Props) {
	const { style, page, totalPage, onAction, onBack, actionLabel } = props;
	return (
		<View style={StyleSheet.flatten([styles.container, style])}>
			<StatusBar translucent barStyle="light-content" />
			<View style={[styles.headerContainer]}>
				{renderBackbtn(onBack)}
				{renderTitle(page, totalPage)}
				{renderActionbtn(onAction, actionLabel)}
			</View>
		</View>
	);
}

PagerHeader.defaultProps = {
	style: undefined,
	onBack: undefined,
	onAction: undefined,
	actionLabel: "Action",
	page: 1,
	totalPage: 2,
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
		backgroundColor: Colors.bodySecondaryDark,
		paddingHorizontal: 8,
	},
	headerContainer: {
		flex: 1,
		alignSelf: "stretch",
		marginTop: Metrics.STATUS_BAR_HEIGHT,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "stretch",
	},
	buttonContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		alignContent: "center",
		padding: 8,
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
	totalPageText: {
		color: Colors.bodySecondaryLight,
		fontSize: Metrics.SMALL_TEXT_SIZE,
	},
	actionText: {
		color: Colors.bodyPrimaryVarient,
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
	},
});
