import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import DATA from "../../components/VideoDetailItems/data";
import { VideoPlay, VideoComments, RelatedVideos } from "../../components";

class VideoDetail extends PureComponent {
	render() {
		return (
			<View style={style.container}>
				<VideoPlay />
				<VideoComments />
				<View style={styles.subContainer}>
					<Text style={styles.text}>Related article</Text>
					<RelatedVideos data={DATA} />
				</View>
			</View>
		);
	}
}

export default VideoDetail;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	subContainer: {
		width: "100%",
		height: "100%",
		backgroundColor: "rgb(27, 27, 27)",
		paddingLeft: 18,
		paddingRight: 12.3,
	},
	text: {
		fontSize: 11,
		paddingBottom: 32,
		paddingTop: 20,
		fontWeight: "bold",
		color: "rgb(255,255,255)",
	},
});
