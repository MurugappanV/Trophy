import React, { PureComponent } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	Text,
	ImageBackground,
	StatusBar,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Strings, Metrics } from "../../asset";
import { Button, TextInput, TextButton } from "../../components";
import ArticleContent from "./ArticleContent";
import ArticleFooter from "./ArticleFooter";

const image = require("../../asset/Images/login.png");

type Props = {
	navigation: any,
};

class ArticleView extends PureComponent<Props> {

	render() {
		return (
            <ScrollView style={styles.container} contentContainerStyle={styles.containerStyle}>
				<ArticleContent/>
				{/* <ArticleFooter/> */}
            </ScrollView>
		);
    }
    
}

function mapStateToProps() {
	// state
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ArticleView);

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		flex: 1,
	},
	containerStyle: {
		alignItems: "center",

	},
	createAccountText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		marginBottom: ScalePerctFullHeight(8),
	},
});
