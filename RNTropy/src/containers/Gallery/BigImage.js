import React, { PureComponent } from "react";
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors } from "../../asset";
import { BigImageHeader, BigImageFooter } from "../../components";

const image = "https://timedotcom.files.wordpress.com/2017/12/barack-obama.jpeg";

type Props = {
	title: string,
	onPress: Function,
};

export default class BigImage extends PureComponent<Props> {
	renderGalleryImage = () => {
		const { navigation } = this.props;

		return (
			<View style={styles.container}>
				<BigImageHeader
					isBottomBorder
					onBack={() => navigation.goBack()}
					title="ghffkh"
					style={styles.back}
					onShare={() => {}}
				/>
				<Image
					style={styles.image}
					source={{
						uri: image,
					}}
					resizeMode="cover"
				/>
				<BigImageFooter style={styles.footer} />
			</View>
		);
	};

	render() {
		const { data, navigation } = this.props;
		return (
			<View style={styles.container}>
				<BigImageHeader
					isBottomBorder
					onBack={() => navigation.goBack()}
					title=""
					style={styles.back}
				/>
				<Image
					style={styles.image}
					source={{
						uri: image,
					}}
					resizeMode="cover"
				/>
				<BigImageFooter style={styles.footer} />
			</View>

			// <View>
			// 	<Carousel
			// 		ref={c => {
			// 			this._carousel = c;
			// 		}}
			// 		data={data}
			// 		renderItem={({ item }) => this.renderGalleryImage(item)}
			// 		itemWidth={ScalePerctFullWidth(100)}
			// 		sliderWidth={ScalePerctFullWidth(100)}
			// 		inactiveSlideOpacity={1}
			// 		inactiveSlideScale={1}
			// 		layoutCardOffset={0}
			// 	/>
			// </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		// marginTop: 0,
		// width: ScalePerctFullWidth(100),
		// flex: 1,
		// flex: 1,
		// flexDirection: "column",
	},
	back: {
		// backgroundColor: "black",
	},
	image: {
		height: "100%",
		width: "100%",
	},
	// footer: {
	// 	justifyContent: "flex-end",
	// 	alignItems: "flex-end",
	// },
});

// const tabStyles = StyleSheet.create({
// 	container: {},
// });

// let styles = Metrics.isTablet ? tabStyles : mobileStyles;
