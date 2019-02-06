import React, { PureComponent } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	Text,
	ImageBackground,
	StatusBar,
	TouchableOpacity,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Strings, Metrics } from "../../asset";
import { Button, TextInput } from "../../components";
import ArticleContent from "./ArticleContent";
import ArticleFooter from "./ArticleFooter";

const image = require("../../asset/Images/login.png");

type Props = {
	navigation: any,
};

const theme = {
	"1": {
		bgColor: Colors.bgPrimaryLight,
		fontColor: Colors.bodyTertiaryDark,
	},
	"2": {
		bgColor: Colors.bgSecondaryLight,
		fontColor: Colors.bodyTertiaryDark,
	},
	"3": {
		bgColor: Colors.bgPrimaryDark,
		fontColor: Colors.bgPrimaryLight,
	},
	"4": {
		bgColor: Colors.bgTertiaryDark,
		fontColor: Colors.bgPrimaryLight,
	},
	"5": {
		bgColor: Colors.bgSecondaryDark,
		fontColor: Colors.bgPrimaryLight,
	},
};

const font = {
	small: "small",
	large: "large",
};

class ArticleView extends PureComponent<Props> {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			themeId: "1",
			size: "small",
		};
	}

	toggleFooter = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	closeFooter = () => {
		this.setState({
			isOpen: false,
		});
	};

	selectTheme = (themeId: number) => {
		this.setState({
			themeId: themeId,
		});
	};

	selectFont = (size: string) => {
		this.setState({
			size: size,
		});
	};

	render() {
		const { isOpen, themeId, size } = this.state;
		return (
			<View style={styles.container}>
				<ScrollView style={styles.container} contentContainerStyle={styles.containerStyle}>
					<ArticleContent dynamicColor={theme[themeId]} font={font[size]} />
				</ScrollView>
				{isOpen && (
					<TouchableOpacity
						style={styles.absoluteContainer}
						onPress={() => this.closeFooter()}
					/>
				)}
				<ArticleFooter
					isOpen={isOpen}
					themeId={themeId}
					selectTheme={this.selectTheme}
					toggleFooter={this.toggleFooter}
					dynamicColor={theme[themeId]}
					selectFont={this.selectFont}
				/>
			</View>
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
		width: ScalePerctFullWidth(100),
		flex: 1,
	},
	absoluteContainer: {
		width: ScalePerctFullWidth(100),
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		position: "absolute",
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
