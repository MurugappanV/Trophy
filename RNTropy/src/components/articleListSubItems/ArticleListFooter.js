import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";
import Icon from "../../asset/fonts/icons";

type Props = {
	time?: string,
	isFollow?: boolean,
	isCenter: boolean,
};

export default function ArticleListFooter(props: Props) {
	const { time, isCenter } = props;
	return (
		<View style={styles.container}>
			{!isCenter && <Text style={styles.hours}>{time}</Text>}
			<Icon
				style={styles.icon}
				name="filledBookmark"
				size={20}
				color={Colors.bodySecondaryLight}
			/>
			<Icon
				style={styles.icon}
				name="filledBookmark"
				size={20}
				color={Colors.bodySecondaryLight}
			/>
		</View>
	);
}

ArticleListFooter.defaultProps = {
	time: "3 hours ago",
	isFollow: true,
	isCenter: false,
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "center",
		padding: Metrics.DEFAULT_PADDING,
		width: ScalePerctFullWidth(100),
	},
	hours: {
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		letterSpacing: 0.3,
		textAlign: "left",
		alignSelf: "stretch",
		flexWrap: "wrap",
		alignItems: "flex-start",
		lineHeight: Metrics.LARGE_LINE_HEIGHT,
		flex: 1,
	},
	icon: { paddingHorizontal: Metrics.DEFAULT_PADDING },
});
