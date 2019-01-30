import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
// import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "../../asset/fonts/icons";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight } from "../../asset";
import { LoadingComp, PagerHeader } from "../../components";
// const small = require("./small.svg") as string ;
// var fs = require("fs");

// function readModuleFile(path, callback) {
// 	try {
// 		var filename = require.resolve(path);
// 		fs.readFile(filename, "utf8", callback);
// 	} catch (e) {
// 		callback(e);
// 	}
// }

// readModuleFile("./small.svg", function(err, words) {
// 	console.log(words);
// 	small = words;
// 	console.log(err);
// });
const small = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="244px" height="120px" viewBox="0 0 244 120" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient x1="11.8326869%" y1="0%" x2="86.8295126%" y2="100%" id="linearGradient-1">
            <stop stop-color="#FF744E" offset="0%"></stop>
            <stop stop-color="#FF476C" offset="100%"></stop>
        </linearGradient>
        <path d="M25,-3.55271368e-15 L151,-3.55271368e-15 C164.807119,-6.08904025e-15 176,11.1928813 176,25 L176,25 C176,38.8071187 164.807119,50 151,50 L25,50 C11.1928813,50 1.69088438e-15,38.8071187 0,25 L3.55271368e-15,25 C1.8618293e-15,11.1928813 11.1928813,-1.01638711e-15 25,-3.55271368e-15 Z" id="path-2"></path>
        <filter x="-39.8%" y="-70.0%" width="179.5%" height="380.0%" filterUnits="objectBoundingBox" id="filter-3">
            <feOffset dx="0" dy="35" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="17.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" opacity="0.99">
        <g id="UI-KIT" transform="translate(-34.000000, -4831.000000)">
            <g id="Group" transform="translate(68.000000, 4831.000000)">
                <g id="Rectangle">
                    <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlink:href="#path-2"></use>
                    <use fill="url(#linearGradient-1)" fill-rule="evenodd" xlink:href="#path-2"></use>
                </g>
            </g>
        </g>
    </g>
</svg>`;
// var RNFS = require("react-native-fs");
// RNFS.readFile("./small.svg", "utf8").then(contents => {
// 	console.warn(contents);
// 	small = contents;
// });

type Props = {
	navigation: any,
};

class AuthLoadContainer extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<PagerHeader
					page={1}
					totalPage={2}
					onAction={() => {}}
					onBack={() => {}}
					actionLabel={"Skip"}
					style={styles.header}
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
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(AuthLoadContainer);

const styles = StyleSheet.create({
	header: {
		alignSelf: "flex-start",
	},
	container: {
		flexDirection: "column",
		alignItems: "center",
		alignContent: "center",
		backgroundColor: Colors.bgSecondaryLight,
		width: ScalePerctFullWidth(100),
		height: ScalePerctFullHeight(100),
	},
});
