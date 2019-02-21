import React, { PureComponent } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	Text,
	ImageBackground,
	StatusBar,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";
import Icon from "./../../asset/fonts/icons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
// import Share, { ShareSheet, Button } from "react-native-share";
import { Actions } from "../../redux";
import {
	Colors,
	ScalePerctFullWidth,
	ScalePerctFullHeight,
	Strings,
	Metrics,
	Images,
} from "../../asset";
// import { Button, TextInput } from "../../components";

const image = require("../../asset/Images/login.png");

type Props = {
	navigation: any,
};

export default class GalleryFooter extends PureComponent<Props> {
	constructor(props) {
		super(props);
	}

	render() {
		const { isBookMarked } = this.props;
		return (
			<View style={StyleSheet.flatten([styles.container])}>
				<TouchableOpacity
					// onPress={() => {
					// }}
					style={styles.icons}
				>
					<Icon name={Images.share} size={14} color={Colors.bodySecondaryLight} />
				</TouchableOpacity>
				<TouchableOpacity
					// onPress={() => ()}
					style={styles.icons}
				>
					<Icon
						name={Images.selectedBookmark}
						size={14}
						color={isBookMarked ? Colors.bodyPrimaryDark : Colors.bodySecondaryLight}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

GalleryFooter.defaultProps = {
	isBookMarked: false,
	onShare: () => {},
	onBookMarkToggle: () => {},
};

const styles = StyleSheet.create({
	container: {
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(7),
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
		// position: "absolute",
		// borderColor: "black",
		// borderWidth: 1,
	},
	icons: {
		padding: 10,
		paddingHorizontal: Metrics.DEFAULT_PADDING * 2,
	},
});
