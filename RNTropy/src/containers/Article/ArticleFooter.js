import React, { PureComponent } from "react";
import {
	View,
	StyleSheet,
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

const image = require("../../asset/Images/login.png");

type Props = {
	navigation: any,
};


export default class ArticleFooter extends PureComponent<Props> {
	constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
	}
	
    render() {
		return (
			<TouchableOpacity
				onPress={() => this.onTabPress(currentIndex, idx, navigation, route)}
				style={styles.tabBarButton}
				key={route.routeName}
			>
				<Icon name="filledBookmark" size={20} color={color} />
			</TouchableOpacity>
		);
    }
    
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
	},
	createAccountText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		marginBottom: ScalePerctFullHeight(8),
	},
});
