import React from "react";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import SvgUri from "react-native-svg-uri";
import { THEME } from "../../utilities/Colors";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors } from "../../asset";

type Props = {
	imageUrl: string,
	containerStyle: any,
	isFollowed: boolean,
	blur:boolean,
	onPress: function,
};

const follow = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="102px" height="32px" viewBox="0 0 102 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-2">
            <path d="M16,0.5 C7.43958638,0.5 0.5,7.43958638 0.5,16 C0.5,24.5604136 7.43958638,31.5 16,31.5 L86,31.5 C94.5604136,31.5 101.5,24.5604136 101.5,16 C101.5,7.43958638 94.5604136,0.5 86,0.5 L16,0.5 Z" id="Rectangle" stroke="#FFFFFF" fill-rule="nonzero"></path>
        </g>
    </g>
</svg>`;

const following = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="102px" height="32px" viewBox="0 0 102 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group-2-Copy">
            <path d="M16,0.5 C7.43958638,0.5 0.5,7.43958638 0.5,16 C0.5,24.5604136 7.43958638,31.5 16,31.5 L86,31.5 C94.5604136,31.5 101.5,24.5604136 101.5,16 C101.5,7.43958638 94.5604136,0.5 86,0.5 L16,0.5 Z" id="Rectangle" stroke="#FFFFFF" fill="#FFFFFF" fill-rule="nonzero"></path>
            
        </g>
    </g>
</svg>`;

export default function TopcisCard(props: Props) {
	const { imageUrl, containerStyle, isFollowed, onPress, blur } = props;
	console.log("render card ");
	return (
		<TouchableOpacity onPress={onPress}>
			<ImageBackground
				source={{
					uri:
						"https://www.the-star.co.ke/sites/default/files/styles/new_full_content/public/articles/2018/06/03/1481290.jpg?itok=tr_Wexxs",
				}}
				style={[style.container, containerStyle]}
			>
				<View style={style.emptyView} />
				<Text style={style.text}>Business</Text>
				{/* <View style={style.followButton} /> */}

				<View style={style.followView}>
					<SvgUri
						width={ScalePerctFullWidth(24)}
						height={ScalePerctFullHeight(5)}
						svgXmlData={isFollowed ? following : follow}
					/>
					<View
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{isFollowed ? (
							<Text> Following</Text>
						) : (
							<Text style={style.follow}>+ Follow</Text>
						)}
					</View>
				</View>
			</ImageBackground>
			{blur ? <View style={style.blur} /> : null}
		</TouchableOpacity>
	);
}

const style = StyleSheet.create({
	container: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 4,
		backgroundColor: THEME.bgSecondary,
		height: ScalePerctFullHeight(28),
		width: ScalePerctFullWidth(35),
		margin: 10,
	},
	emptyView: {
		flex: 1,
	},
	text: {
		fontFamily: "Lato-Bold",
		fontSize: 14,
		color: THEME.bgPrimary,
		marginBottom: 10,
	},
	followButton: {
		backgroundColor: THEME.brandPrimary,
		height: ScalePerctFullHeight(5),
		width: ScalePerctFullWidth(24),
		margin: 16,
		borderRadius: 17.5,
	},
	followView: {
		height: ScalePerctFullHeight(5),
		width: ScalePerctFullWidth(24),
		alignItems: "center",
		marginBottom: 16,
	},
	followText: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "red",
		alignSelf: "center",
	},
	follow: {
		color: THEME.bgPrimary,
	},
	blur: {
		backgroundColor: Colors.bgTransparent,
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
});