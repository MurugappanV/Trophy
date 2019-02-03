import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

type Props = {
	description?: string,
	isCenter: boolean,
};

export default function ArticleListDescription(props: Props) {
	const { description, isCenter } = props;
	return (
		<View style={styles.container}>
			<Text style={[styles.descriptionText, isCenter ? { textAlign: "center" } : {}]}>
				{description}
			</Text>
		</View>
	);
}

ArticleListDescription.defaultProps = {
	description:
		"I’ ll be honest: I’ m getting tired of shows like Maniac.There was a time when a prestige drama starring Emma Stone and Jonah Hill, which plays like a three - way crossover between.Inception, Brazil, and FX’ s Legion, would have sounded unmissable.But as you’ ve probably noticed, there’ s a lot of prestige - y TV out there these days.', 'Much of it is good.Almost none of it is great.The bar has been raised, and there are too many TV shows that receive outsized praise when they barely manage to clear it.",
	isCenter: false,
};

const styles = StyleSheet.create({
	container: {
		borderBottomColor: Colors.bgPrimaryLight,
		borderBottomWidth: 1,
		width: ScalePerctFullWidth(100),
		flexDirection: "row",
		padding: Metrics.DEFAULT_LIST_PADDING,
		paddingBottom: 0
	},
	descriptionText: {
		color: Colors.textHeading,
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		flex: 1,
	},
});
