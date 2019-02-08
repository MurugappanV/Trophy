import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth, Images } from "../../asset";
import Icon from "../../asset/fonts/icons";

type Props = {
	time?: string,
	isCenter?: boolean,
	isBookMarked?: boolean,
	isBookMarkNeeded?: boolean,
	onShare?: Function,
	onBookMarkToggle?: Function,
};

export default function ArticleListFooter(props: Props) {
	const { time, isCenter, isBookMarked, isBookMarkNeeded, onShare, onBookMarkToggle } = props;
	return (
		<View style={styles.container}>
			{!isCenter && <Text style={styles.hours}>{time}</Text>}
			<TouchableOpacity onPress={onShare}>
				<Icon
					style={styles.icon}
					name={Images.share}
					size={16}
					color={Colors.bodySecondaryLight}
				/>
			</TouchableOpacity>
			{isBookMarkNeeded && (
				<TouchableOpacity onPress={onBookMarkToggle}>
					<Icon
						style={styles.icon}
						name={isBookMarked ? Images.selectedBookmark : Images.selectedBookmark}
						size={16}
						color={isBookMarked ? Colors.bodyPrimaryDark : Colors.bodySecondaryLight}
					/>
				</TouchableOpacity>
			)}
		</View>
	);
}

ArticleListFooter.defaultProps = {
	time: "3 hours ago",
	isCenter: false,
	isBookMarked: false,
	isBookMarkNeeded: true,
	onShare: () => {},
	onBookMarkToggle: () => {},
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		alignSelf: "center",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: Metrics.DEFAULT_LIST_PADDING,
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
	icon: { paddingHorizontal: Metrics.DEFAULT_LIST_PADDING },
});
