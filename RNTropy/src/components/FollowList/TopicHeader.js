import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { PagerHeader } from "../../components";
import { Colors } from "../../asset";

export default function TopciHeader(props: Props) {
	const { onBack } = props;
	return <PagerHeader style={style.pageHeader} onBack={() => {}} page={"1"} />;
}

const style = StyleSheet.create({
	pageHeader: {
		backgroundColor: Colors.bgLightBlack,
	},
});
