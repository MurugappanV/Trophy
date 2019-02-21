import React, { PureComponent } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

const image = "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg";

export default class GalleryDisplayOne extends PureComponent {
	render() {
		const length = 5;
		const { navigation, onImagePress } = this.props;
		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>
					{length > 0 && (
						<TouchableOpacity onPress={onImagePress} style={styles.imageContainerOne}>
							<Image
								source={{
									uri: image,
								}}
								style={styles.imgOne}
								resizeMode="cover"
							/>
						</TouchableOpacity>
					)}
					{length > 1 && (
						<TouchableOpacity onPress={onImagePress} style={styles.imageContainerOne}>
							<Image
								source={{
									uri: image,
								}}
								style={styles.imgOne}
								resizeMode="cover"
							/>
						</TouchableOpacity>
					)}
				</View>
				<View style={styles.subContainer}>
					{length > 2 && (
						<TouchableOpacity onPress={onImagePress} style={styles.imageContainerTwo}>
							<Image
								source={{
									uri: image,
								}}
								style={styles.imgTwo}
								resizeMode="cover"
							/>
						</TouchableOpacity>
					)}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: ScalePerctFullWidth(67),
		width: ScalePerctFullWidth(100),
		flexDirection: "row",
		// justifyContent: "center",
		// alignItems: "center",
	},
	subContainer: {
		flex: 1,
		justifyContent: "center",
	},
	imageContainerOne: {
		flex: 1,
		borderWidth: 1,
		borderColor: "snow",
		borderLeftWidth: 0,
		backgroundColor: "grey",
		height: ScalePerctFullWidth(67) / 2,
		width: ScalePerctFullWidth(50),
	},
	imageContainerTwo: {
		flex: 1,
		borderWidth: 1,
		borderColor: "snow",
		borderRightWidth: 0,
		backgroundColor: "grey",
		height: ScalePerctFullWidth(67),
		width: ScalePerctFullWidth(50),
	},
	imgOne: {
		height: ScalePerctFullWidth(67) / 2,
		width: ScalePerctFullWidth(50),
	},
	imgTwo: {
		height: ScalePerctFullWidth(67),
		width: ScalePerctFullWidth(50),
	},
});
