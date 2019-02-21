import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ProfileHeader, Article, ListLoading } from "../../components";
import { connect } from "react-redux";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors, TemplateConfig } from "../../asset";
import { VideoHomeAPI } from "../../service";

class VideoHome extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			video: [],
			imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
		};
		VideoHomeAPI(
			props.user.topics,
			props.user.brands,
			this.onSuccess,
			this.onFailure,
			this.onError,
		);
	}

	onSuccess = (video: array) => {
		console.log("Video is comming:", video);
		this.setState({ video, loading: false });
	};

	onFailure = (message: string) => {
		console.log(message);
	};

	onError = (error: any) => {
		console.log("Error occured in VideoHomeAPI ", error);
	};

	render() {
		const { video, loading } = this.state;
		const { navigation, user } = this.props;
		console.log("VideoHome data inside the render: ", video);
		console.log("user data inside the VideoHome render: ", user);

		//const { data } = this.props;
		return (
			<View style={styles.container}>
				<FlatList
					data={video}
					style={styles.ListItems}
					contentContainerStyle={styles.contentContainerStyle}
					keyExtractor={(x, i) => i.toString()}
					ListFooterComponent={() => <ListLoading loading={loading} />}
					renderItem={({ item, index }) => (
						<Article
							onPress={() => {
								navigation.navigate("VideoDetail");
							}}
							key={index.toString()}
							order={TemplateConfig.articleTemplates[13]}
							settings={TemplateConfig.articleTemplateSettings[13]}
							data={item}
						/>
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	authorDetails: {
		flexDirection: "row",
		width: ScalePerctFullWidth(100),
	},
	footer: {
		marginBottom: ScalePerctFullHeight(20),
	},
	ListItems: {
		flex: 1,
	},
	contentContainerStyle: {
		flexGrow: 1,
		justifyContent: "center",
	},
	image: {
		height: ScalePerctFullWidth(32),
		width: ScalePerctFullWidth(32),
		marginLeft: ScalePerctFullWidth(6),
		marginTop: ScalePerctFullHeight(4),
		borderRadius: ScalePerctFullWidth(15),
	},
	textInfo: {
		backgroundColor: Colors.bgPrimaryLight,
		width: ScalePerctFullWidth(100),
	},
	followButton: {
		height: ScalePerctFullHeight(6),
		width: ScalePerctFullWidth(44),
		marginLeft: ScalePerctFullWidth(7),
		marginTop: ScalePerctFullHeight(4),
	},
});

const mapStateToProps = state => ({
	user: state.user,
	topics: state.user.topics,
	brands: state.user.brands,
});

export default connect(mapStateToProps)(VideoHome);
