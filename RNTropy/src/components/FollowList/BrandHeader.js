import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { PagerHeader } from "../../components";
import { Colors } from "../../asset";

export default function BrandHeader(props: Props) {
	const { onBack } = props;
	return (
		<PagerHeader
			style={style.pageHeader}
			onAction={() => {}}
			actionLabel={"Skip"}
			onBack={() => {}}
			page={"2"}
		/>
	);
}

const style = StyleSheet.create({
	pageHeader: {
		backgroundColor: Colors.bgLightBlack,
	},
});
