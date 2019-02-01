import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { Colors, ScalePerctFullHeight, Metrics, ScalePerctFullWidth } from "../../asset";

export default function IntroText(props: Props) {
	const { onBack, isTopic } = props;
	return (
		<View>
			<Text style={[style.askQuestion, Metrics.isTablet && !isTopic && style.brand]}>
				Which {isTopic ? "News" : "brand"} you want to read?
			</Text>
			<Text style={style.pickInfo}>
				Pick the topics that interest you. add more at anytime.
			</Text>
		</View>
	);
}

const style = StyleSheet.create({
	pageHeader: {
		backgroundColor: Colors.bgLightBlack,
	},
	askQuestion: {
		marginTop: ScalePerctFullHeight(8),
		fontSize: 36,
		color: Colors.bgPrimaryLight,
	},
	brand: {
		marginTop: ScalePerctFullHeight(4),
	},
	pickInfo: {
		marginTop: ScalePerctFullHeight(1),
		fontSize: 12,
		color: Colors.bgPrimaryLight,
		alignSelf: "center",
	},
});
