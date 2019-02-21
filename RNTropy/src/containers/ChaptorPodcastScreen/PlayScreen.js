import React, { PureComponent } from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, Image, View } from "react-native";
import * as Progress from "react-native-progress";
import Icon from "react-native-vector-icons/FontAwesome";
import Video from "react-native-video";
import { ScalePerctFullHeight, ScalePerctFullWidth, Metrics, Colors, Images } from "../../asset";
import { SeekBar } from "../../components";
import { Controls } from "../../components/podcastPlayControl";

type Props = {
	title: string,
	onPress: Function,
	buttonStyle: Object,
	showLoader: boolean,
	top: number,
	imageStyle: Object,
};

export default class PlayScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);

		this.state = {
			paused: true,
			totalLength: 1,
			currentPosition: 0,
			selectedTrack: 0,
		};
	}

	onBack() {
		if (this.state.currentPosition < 10 && this.state.selectedTrack > 0) {
			this.refs.audioElement && this.refs.audioElement.seek(0);
			this.setState({ isChanging: true });
			setTimeout(
				() =>
					this.setState({
						currentPosition: 0,
						paused: false,
						totalLength: 1,
						isChanging: false,
						selectedTrack: this.state.selectedTrack - 1,
					}),
				0,
			);
		} else {
			this.refs.audioElement.seek(0);
			this.setState({
				currentPosition: 0,
			});
		}
	}

	onForward() {
		if (this.state.selectedTrack < this.props.tracks.length - 1) {
			this.refs.audioElement && this.refs.audioElement.seek(0);
			this.setState({ isChanging: true });
			setTimeout(
				() =>
					this.setState({
						currentPosition: 0,
						totalLength: 1,
						paused: false,
						isChanging: false,
						selectedTrack: this.state.selectedTrack + 1,
					}),
				0,
			);
		}
	}

	setDuration(data) {
		this.setState({ totalLength: Math.floor(data.seekableDuration) });
	}

	setTime(data) {
		this.setDuration(data);
		this.setState({ currentPosition: Math.floor(data.currentTime) });
	}

	seek(time) {
		time = Math.round(time);
		this.refs.audioElement && this.refs.audioElement.seek(time);
		this.setState({
			currentPosition: time,
			paused: false,
		});
	}

	renderProgress = () => (
		<View style={{ paddingTop: ScalePerctFullHeight(6) }}>
			<SeekBar
				onSeek={this.seek.bind(this)}
				trackLength={this.state.totalLength}
				onSlidingStart={() => this.setState({ paused: true })}
				currentPosition={this.state.currentPosition}
			/>
		</View>
	);

	renderPlayField = () => (
		<Controls
			onPressPlay={() => this.setState({ paused: false })}
			onPressPause={() => this.setState({ paused: true })}
			paused={this.state.paused}
		/>
	);

	render() {
		const {} = this.props;
		//const track = this.props.tracks[this.state.selectedTrack];
		const video = (
			<Video
				source={{
					uri:
						"https://api.soundcloud.com/tracks/565764102/stream?client_id=iGbpgb5l4aNHCP8BcSxvJBGe7D9Q6pWQ",
				}}
				ref="audioElement"
				volume={1.0}
				repeat={true}
				playInBackground={true}
				playWhenInactive={true}
				onEnd={error => console.log("v end", error)}
				repeat={true}
				audioOnly={true}
				paused={this.state.paused}
				onError={error => console.log("v error", error)}
				onLoadStart={error => console.log("v start", error)}
				onBuffer={error => console.log("v buffer", error)}
				onLoad={error => console.log("v load", error)}
				onProgress={data => this.setTime(data)}
				style={styles.audioElement}
			/>
		);

		return (
			<View style={styles.container}>
				<View style={styles.textView}>
					<Text style={styles.title}>Walking in the Victoria Secret Fashion show</Text>
					<Text style={styles.chapter}> Chapter 16</Text>
				</View>
				{video}
				<Image
					style={styles.image}
					source={{
						uri: "https://facebook.github.io/react-native/docs/assets/favicon.png",
					}}
				/>
				{this.renderProgress()}
				{this.renderPlayField()}
				{/* <Video
					source={{
						uri:
							"https://api.soundcloud.com/tracks/565764102/stream?client_id=iGbpgb5l4aNHCP8BcSxvJBGe7D9Q6pWQ",
					}}
					ref="audio"
					volume={1.0}
					muted={false}
					//paused={paused}
					playInBackground
					playWhenInactive
					onProgress={this.onPlayProgress}
					onEnd={this.onPlayEnd}
					resizeMode="cover"
					repeat={false}
				/> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingTop: ScalePerctFullHeight(3.9),
	},
	image: {
		width: ScalePerctFullWidth(60),
		height: ScalePerctFullWidth(60),
		borderRadius: ScalePerctFullWidth(30),
	},
	title: {
		fontFamily: "Lato-Bold",
		fontSize: Metrics.LARGE_TEXT_SIZE,
		lineHeight: 25,
		letterSpacing: 0,
		color: Colors.bgPrimaryDark,
		textAlign: "center",
		marginBottom: ScalePerctFullHeight(1.2),
	},
	chapter: {
		fontFamily: "Lato-Regular",
		fontSize: Metrics.VV_SMALL_TEXT_SIZE,
		lineHeight: 10,
		letterSpacing: 0,
		color: Colors.bodySecondaryDark,
	},
	playIcon: {
		flexDirection: "row",
		paddingBottom: ScalePerctFullHeight(6),
		paddingTop: ScalePerctFullHeight(5.4),
		justifyContent: "space-around",
		alignItems: "center",
		flex: 0.5,
	},
	textView: {
		flex: 1,
		alignItems: "center",
		paddingHorizontal: ScalePerctFullWidth(12),
	},
	audioElement: {
		height: 0,
		width: 0,
	},
});
