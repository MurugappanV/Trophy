import React, { PureComponent } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import { ProfileHeader, Article, ListLoading } from "../../components";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors, TemplateConfig } from "../../asset";
import { ShowHistoryApi, ManageBoookmarkApi } from "../../service";

class History extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			history: [],
			loading: true,
			manageBookmarkLoad: false,
			imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
		};
		ShowHistoryApi(props.user.id, this.onSuccess, this.onFailure, this.onError);
	}

	onSuccess = (history: any) => {
		this.setState({ history, loading: false });
	};

	onManageBookmark = (nId: string, siteKey: string) => {
		const { user } = this.props;
		this.setState({ manageBookmarkLoad: true });
		ManageBoookmarkApi(user.id, nId, siteKey, "F");
		this.setState({ manageBookmarkLoad: false });
	};

	onFailure = (message: string) => {
		console.log(message);
	};

	onError = (error: any) => {
		console.log("Something went wrong, Please try again later. ");
	};

	onRefresh = async () => {
		const { user } = this.props;
		this.setState({ manageBookmarkLoad: true });
		ShowHistoryApi(user.id, this.onSuccess, this.onFailure, this.onError);
		this.setState({ manageBookmarkLoad: false });
	};

	onItemPress = (nid: number, site: string) => {
		const { screenProps, navigation } = this.props;
		navigation.navigate("ArticleDisplayHomeScreen", { nid, site });
	};

	render() {
		const { history, loading, manageBookmarkLoad } = this.state;
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<ProfileHeader
					onAction={() => {}}
					onBack={() => {
						navigation.goBack();
					}}
					title="History"
				/>
				<View style={styles.ListItems}>
					<FlatList
						data={history}
						style={styles.ListItems}
						onRefresh={() => this.onRefresh()}
						refreshing={manageBookmarkLoad}
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

const styles = StyleSheet.create({
	container: {
		height: ScalePerctFullHeight(100),
		width: ScalePerctFullWidth(100),
	},
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
});

export default connect(mapStateToProps)(History);

History.defaultProps = {};
