import React, { PureComponent } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { PodcastListCard, TextButton } from "../../components";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors, Strings } from "../../asset";

export default class ListPodcastScreen extends PureComponent {
	state = {};

	render() {
		const { data, navigation } = this.props;
		return (
			<View style={style.container}>
				<View style={style.header}>
					<Image
						source={{
							uri:
								"http://www.matcheyewear.com/images/BrandImages/Cosmopolitan-Logo.jpg",
						}}
						style={style.logo}
					/>
					<TextButton
						textStyle={style.viewButton}
						title={Strings.podCast.VIEW_ALL}
						touchableStyle={style.touchableStyle}
					/>
				</View>

				<View>
					<FlatList
						showsHorizontalScrollIndicator={false}
						horizontal
						data={data}
						renderItem={({ item }) => (
							<PodcastListCard
								title="Heading"
								description="Description"
								imageURL="https://firebasestorage.googleapis.com/v0/b/tastewithme-1.appspot.com/o/images.jpg?alt=media&token=ed152fde-8690-434b-afa5-7fbedecbf401"
								onPress={() => navigation.navigate("ChaptorPodcastScreen")}
							/>
						)}
						keyExtractor={(item, index) => item.key}
					/>
				</View>
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		paddingTop: Metrics.DEFAULT_PADDING,
		paddingBottom: Metrics.DEFAULT_PADDING,
		paddingLeft: Metrics.DEFAULT_PADDING,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginRight: Metrics.DEFAULT_PADDING,
		marginBottom: Metrics.DEFAULT_PADDING,
	},
	viewButton: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		color: Colors.bgPrimaryVarient,
	},
	touchableStyle: {
		justifyContent: "center",
	},
	logo: {
		height: 18,
		backgroundColor: "pink",
		width: 90,
	},
});
