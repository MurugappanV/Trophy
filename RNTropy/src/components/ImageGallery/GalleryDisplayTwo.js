import React, { PureComponent } from "react";
import { View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { withNavigation } from "react-navigation";
import { Colors, Metrics, ScalePerctFullWidth } from "../../asset";

const image = "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg";

class GalleryDisplayOne extends PureComponent {
	render() {
		const { navigation, onImagePress } = this.props;
		const length = 4;
		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>
					{length > 0 && (
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
						<TouchableOpacity
							onPress={onImagePress}
							style={styles.imageContainerThree}
						>
							<Image
								source={{
									uri: image,
								}}
								style={styles.imgOne}
								resizeMode="cover"
							/>
						</TouchableOpacity>
					)}
					{length > 3 && (
						<TouchableOpacity onPress={onImagePress} style={styles.imageContainerFour}>
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

export default withNavigation(GalleryDisplayOne);

const styles = StyleSheet.create({
	container: {
		height: ScalePerctFullWidth(90),
		width: ScalePerctFullWidth(100),
		// justifyContent: "center",
		// alignItems: "center",
	},
	subContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
	},
	imageContainerOne: {
		height: ScalePerctFullWidth(90) / 2,
		width: ScalePerctFullWidth(100) / 3,
		borderWidth: 1,
		borderColor: "snow",
		backgroundColor: "grey",
		borderRightWidth: 0,
	},
	imageContainerTwo: {
		height: ScalePerctFullWidth(90) / 2,
		width: (ScalePerctFullWidth(100) / 3) * 2,
		borderWidth: 1,
		borderColor: "snow",
		backgroundColor: "grey",
		borderLeftWidth: 0,
	},
	imageContainerThree: {
		height: ScalePerctFullWidth(90) / 2,
		width: ScalePerctFullWidth(100) / 3,
		borderWidth: 1,
		borderColor: "snow",
		backgroundColor: "grey",
		borderLeftWidth: 0,
	},
	imageContainerFour: {
		height: ScalePerctFullWidth(90) / 2,
		width: (ScalePerctFullWidth(100) / 3) * 2,
		borderWidth: 1,
		borderColor: "snow",
		backgroundColor: "grey",
		borderRightWidth: 0,
	},
	imgTwo: {
		height: ScalePerctFullWidth(90) / 2,
		width: (ScalePerctFullWidth(100) / 3) * 2,
	},
	imgOne: {
		height: ScalePerctFullWidth(90) / 2,
		width: ScalePerctFullWidth(100) / 3,
	},
});
