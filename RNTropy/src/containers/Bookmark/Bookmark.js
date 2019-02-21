import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, Text } from "react-native";
import { connect } from "react-redux";
import { ProfileHeader, Article, ListLoading } from "../../components";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors, TemplateConfig } from "../../asset";
import { ShowBoookmarkApi, ManageBoookmarkApi } from "../../service";

class Bookmark extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			bookmarks: [],
			loading: true,
			manageBookmarkLoad: false,
			imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
		};
	}

	componentDidMount() {
		const { user } = this.props;
		ShowBoookmarkApi(user.id, this.onSuccess, this.onFailure, this.onError);
	}

	onManageBookmark = async (nId: string, siteKey: string) => {
		const { user } = this.props;
		this.setState({ manageBookmarkLoad: true });
		ManageBoookmarkApi(user.id, nId, siteKey, "U");
		ShowBoookmarkApi(user.id, this.onSuccess, this.onFailure, this.onError);
		this.setState({ manageBookmarkLoad: false });
	};

	renderLoading = () => {
		console.log("Render Loading called in Bookmark");
		return (
			<View style={styles.indicator}>
				<ActivityIndicator size="small" color="black" />
			</View>
		);
	};

	onSuccess = (bookmarks: any) => {
		this.setState({ bookmarks, loading: false });
	};

	onFailure = (message: string) => {
		alert("Something went wrong, Please Try again later.");
	};

	onError = (error: any) => {
		alert("Error occured in BookmarkShow Api ", error);
	};

	onRefresh = async () => {
		const { user } = this.props;
		this.setState({ manageBookmarkLoad: true });
		ShowBoookmarkApi(user.id, this.onSuccess, this.onFailure, this.onError);
		this.setState({ manageBookmarkLoad: false });
	};

	isEmpty = (bookmarks: any) => {
		const { isloading } = this.state;
		return !bookmarks && !isloading ? (
			<View style={styles.emptyContainer}>
				<Text style={styles.emptymessageText}> There is no item to show in bookmarks</Text>
			</View>
		) : null;
	};

	onItemPress = (nid: number, site: string) => {
		const { navigation } = this.props;
		navigation.navigate("ArticleDisplayHomeScreen", { nid, site });
	};

	componentDidUnMount() {
		this.setState({ loading: true });
	}

	render() {
		const { imageUrl, bookmarks, loading, manageBookmarkLoad, preferenceLoading } = this.state;
		const { navigation, user } = this.props;
		const { data } = this.props;
		return (
			<View style={styles.container}>
				<ProfileHeader
					onAction={() => {}}
					onBack={() => {
						navigation.goBack();
					}}
					title={"Bookmark"}
				/>
				{manageBookmarkLoad && this.renderLoading()}
				<View style={styles.ListItems}>
					{this.isEmpty(bookmarks)}
					<FlatList
						data={bookmarks}
						onRefresh={() => this.onRefresh()}
						refreshing={manageBookmarkLoad}
						style={styles.ListItems}
						keyExtractor={(x, i) => i.toString()}
						ListFooterComponent={() => <ListLoading loading={loading} />}
						renderItem={({ item, index }) => (
							<Article
								onPress={() => {
									this.onItemPress(item.nid, item.site);
									//this.onManageBookmark(item.nid, item.site);
								}}
								onPressBookmark={() => this.onManageBookmark(item.nid, item.site)}
								key={index.toString()}
								order={TemplateConfig.articleTemplates[12]}
								settings={TemplateConfig.articleTemplateSettings[12]}
								data={item}
							/>
						)}
					/>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user,
});

const styles = StyleSheet.create({
	container: {
		height: ScalePerctFullHeight(100),
		width: ScalePerctFullWidth(100),
	},
	onLoad: {
		position: "absolute",
		alignSelf: "center",
	},
	emptyContainer: {
		height: ScalePerctFullHeight(40),
		width: ScalePerctFullWidth(100),
		justifyContent: "flex-end",
		alignItems: "center",
	},
	emptymessageText: {
		fontFamily: "Lato-Regular",
		color: Colors.bgPrimaryDark,
		fontSize: 14,
	},
	authorDetails: {
		flexDirection: "row",
		width: ScalePerctFullWidth(100),
	},
	contentContainerStyle: {
		flexGrow: 1,
		justifyContent: "center",
	},
	ListItems: {
		flex: 1,
	},
	footer: {
		marginBottom: ScalePerctFullHeight(20),
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
	indicator: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#00000080",
	},
});

export default connect(mapStateToProps)(Bookmark);

Bookmark.defaultProps = {};
