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

export default class ArticleFooter extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	// onCancel() {
	// 	console.log("CANCEL");
	// 	this.setState({ visible: false });
	// }

	// onShare() {
	// 	console.log("OPEN");
	// 	this.setState({ visible: true });
	// }

	renderAlphaContainer = color => {
		const { selectFont, isOpen, dynamicColor, themeId } = this.props;
		// const color = "black";
		console.log("themeId", themeId);
		return (
			<View style={StyleSheet.flatten([styles.expandAlphaView])}>
				<TouchableOpacity
					onPress={() => selectFont("small")}
					style={[styles.icons, { flex: 0.5, alignItems: "center" }]}
				>
					<Icon name={Images.aA} size={12} color={color} />
				</TouchableOpacity>
				<View
					style={{
						alignSelf: "stretch",
						borderRightWidth: 0.5,
						borderColor: Colors.bodyTertiaryDark,
					}}
				/>

				<TouchableOpacity
					style={[styles.icons, { flex: 0.5, alignItems: "center" }]}
					onPress={() => selectFont("large")}
				>
					<Icon name={Images.aA} size={20} color={color} />
				</TouchableOpacity>
			</View>
		);
	};

	renderThemeColor = (themeId, color, selectId) => {
		const { selectTheme } = this.props;
		return (
			<TouchableOpacity onPress={() => selectTheme(themeId)}>
				<View
					style={StyleSheet.flatten([
						styles.colorPanel,
						{ backgroundColor: color },
						themeId === selectId ? styles.focusedTheme : {},
					])}
				/>
			</TouchableOpacity>
		);
	};

	renderThemeColors = (list, selectId) => {
		return list.map(item => {
			return this.renderThemeColor(item.themeId, item.color, selectId);
		});
	};

	renderThemeContainer = selectId => {
		const list = [
			{
				themeId: "1",
				color: Colors.bgPrimaryLight,
			},
			{
				themeId: "2",
				color: Colors.bgSecondaryLight,
			},
			{
				themeId: "3",
				color: Colors.bgPrimaryDark,
			},
			{
				themeId: "4",
				color: Colors.bgTertiaryDark,
			},
			{
				themeId: "5",
				color: Colors.bgSecondaryDark,
			},
		];
		return (
			<View style={StyleSheet.flatten([styles.expandThameView])}>
				{this.renderThemeColors(list, selectId)}
			</View>
		);
	};

	render() {
		// let shareOptions = {
		// 	title: "React Native",
		// 	message: "Hola mundo",
		// 	url: "http://facebook.github.io/react-native/",
		// 	subject: "Share Link", //  for email
		// 	social: Share.Social.WHATSAPP
		// };
		const {
			isOpen,
			themeId,
			selectTheme,
			toggleFooter,
			dynamicColor,
			selectFont,
		} = this.props;
		const color = isOpen
			? themeId == 1 || themeId == 2
				? Colors.bgSecondaryLight
				: "black"
			: dynamicColor.fontColor;
		return (
			<View
				style={StyleSheet.flatten([
					styles.footerContainer,
					dynamicStyles(isOpen).footerContainer,
					{
						backgroundColor: isOpen
							? themeId == 3 || themeId == 4 || themeId == 5
								? Colors.bgSecondaryLight
								: Colors.bgTertiaryDark
							: dynamicColor.bgColor,
					},
				])}
			>
				<View style={StyleSheet.flatten([styles.collapseView])}>
					<TouchableOpacity
						// onPress={() => {
						// 	Share.open(shareOptions);
						// }}
						style={styles.icons}
					>
						<Icon name={Images.share} size={14} color={color} />
					</TouchableOpacity>
					<TouchableOpacity
						// onPress={() => ()}
						style={styles.icons}
					>
						<Icon name={Images.selectedBookmark} size={14} color={color} />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => toggleFooter()} style={styles.icons}>
						<Icon name={Images.aA} size={14} color={color} />
					</TouchableOpacity>
				</View>
				{this.renderAlphaContainer(color)}
				{this.renderThemeContainer(themeId)}
			</View>
		);
	}
}

const dynamicStyles = isOpen => {
	return isOpen
		? StyleSheet.create({
				footerContainer: {
					bottom: 0,
					backgroundColor: "black",
					borderTopRightRadius: 10,
					borderTopLeftRadius: 10,
					borderTopWidth: 0,
				},
		  })
		: StyleSheet.create({
				footerContainer: {
					bottom: ScalePerctFullHeight(30) * -1,
				},
		  });
};

const styles = StyleSheet.create({
	footerContainer: {
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(37),
		backgroundColor: "white",
		alignItems: "stretch",
		flexDirection: "column",
		left: 0,
		right: 0,
		position: "absolute",
		justifyContent: "flex-end",
		borderTopWidth: 1,
		borderColor: Colors.linePrimary,
	},
	collapseView: {
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(7),
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "center",
	},
	expandAlphaView: {
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(15),
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-around",
		alignContent: "stretch",
		borderTopWidth: 0.5,
	},
	expandThameView: {
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(15),
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "stretch",
		borderTopWidth: 0.5,
		paddingTop: 20,
	},
	colorPanel: {
		width: ScalePerctFullWidth(100) / 8,
		height: ScalePerctFullWidth(100) / 8,
		borderRadius: 50,
		borderColor: Colors.borderlight,
		borderWidth: 0.5,
	},
	icons: {
		padding: 10,
		paddingHorizontal: Metrics.DEFAULT_PADDING * 2,
	},
	focusedTheme: {
		borderColor: Colors.bgPrimaryVarient,
		borderWidth: 3,
		borderRadius: 50,
	},
});
