import React, { PureComponent } from "react";
import { View, Image, StyleSheet } from "react-native";
import { getImageHeight } from "../../utilities";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

// const image = "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg";

export default class ArticleDisplayImage extends PureComponent<Props> {
	renderImage = image => {
		const height = getImageHeight(image);
		return (
			<Image
				source={{
					uri: image,
				}}
				resizeMode="cover"
				style={StyleSheet.flatten([
					styles.imageOne,
					{
						height,
						backgroundColor: Colors.bgSecondaryLight,
					},
				])}
			/>
		);
	};

	render() {
		const { dynamicColor, data } = this.props;
		const image = data.field_picture_ref.und[0].image_path;
		return (
			<View
				style={[
					styles.container,
					{
						backgroundColor: dynamicColor.bgColor,
					},
					{
						color: dynamicColor.fontColor,
					},
				]}
			>
				{image && this.renderImage(image)}
				{/* {this.renderImage(image)} */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: "100%",
		alignItems: "center",
		flex: 1,
		// marginBottom: 20,
	},
	imageOne: {
		width: ScalePerctFullWidth(100),
		// backgroundColor: "black",
	},
});
