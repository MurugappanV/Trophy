import React, { PureComponent } from "react";
import {
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	StyleSheet,
	ActivityIndicator,
	FlatList,
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors } from "../../asset";
import {
	GalleryDisplayOne,
	GalleryDisplayTwo,
	ProfileHeader,
	GalleryTitle,
	GalleryLogo,
	GalleryFooter,
} from "../../components";

type Props = {
	title: string,
	onPress: Function,
};

class GalleryView extends PureComponent<Props> {
	onImagePress = () => {
		const { navigation } = this.props;
		navigation.navigate("BigImage");
	};

	galleryHeader = () => {
		const { articleDisplay } = this.props;
		console.log("gallery", articleDisplay);
		return (
			<View style={styles.header}>
				<GalleryLogo />
				<GalleryTitle />
			</View>
		);
	};

	render() {
		const { navigation, articleDisplay } = this.props;
		console.log("gallerydetail", articleDisplay);
		// const galleryImages = articleDisplay.field_picture_ref.und;
		return (
			<View style={styles.container}>
				<ProfileHeader
					navigation={navigation}
					title=""
					isBottomBorder
					onBack={() => navigation.goBack()}
					isTransculent
					contentColor={Colors.bodyPrimaryLight}
				/>

				<ScrollView style={styles.subContainer}>
					<GalleryLogo />
					<GalleryTitle />
					<GalleryDisplayTwo onImagePress={this.onImagePress} />
					<GalleryDisplayOne onImagePress={this.onImagePress} />
				</ScrollView>

				{/* <FlatList
					data={galleryImages}
					renderItem={(item, index) => {
						if (index % 2 == 0) {
							return <GalleryDisplayTwo />;
						} else return <GalleryDisplayOne />;
					}}
					style={styles.subContainer}
					ListHeaderComponent={this.galleryHeader()}
				/> */}

				<GalleryFooter />
			</View>
		);
	}
}

function mapStateToProps(state) {
	return {
		articleDisplay: state.articleDisplay,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(GalleryView);

// export default withNavigation(GalleryView);

const styles = StyleSheet.create({
	container: {
		marginTop: 0,
		width: ScalePerctFullWidth(100),
		flex: 1,
	},
	subContainer: {
		flexDirection: "column",
		flex: 1,
	},
	header: {
		flexDirection: "column",
	},
});

// const tabStyles = StyleSheet.create({
// 	container: {},
// });

// let styles = Metrics.isTablet ? tabStyles : mobileStyles;
