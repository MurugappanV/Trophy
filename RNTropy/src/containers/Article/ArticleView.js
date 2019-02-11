import React, { PureComponent } from "react";
import {
	View,
	StyleSheet,
	ScrollView,
	Text,
	ImageBackground,
	StatusBar,
	TouchableOpacity,
	Keyboard,
	KeyboardAvoidingView,
	FlatList,
	Image,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Strings, Metrics } from "../../asset";
import ArticleContent from "./ArticleContent";
import ArticleFooter from "./ArticleFooter";
import {
	ArticleDisplayDescription,
	ArticleDisplayImage,
	ArticleDisplayLogo,
	ArticleDisplaytitle,
	ProfileHeader,
} from "../../components";
import { ArticleDisplayApi } from "../../service";

const image = require("../../asset/Images/login.png");

type Props = {
	navigation: any,
	order?: object,
};

const theme = {
	1: {
		bgColor: Colors.bgPrimaryLight,
		fontColor: Colors.bodyTertiaryDark,
	},
	2: {
		bgColor: Colors.bgSecondaryLight,
		fontColor: Colors.bodyTertiaryDark,
	},
	3: {
		bgColor: Colors.bgPrimaryDark,
		fontColor: Colors.bgPrimaryLight,
	},
	4: {
		bgColor: Colors.bgTertiaryDark,
		fontColor: Colors.bgPrimaryLight,
	},
	5: {
		bgColor: Colors.bgSecondaryDark,
		fontColor: Colors.bgPrimaryLight,
	},
};

const font = {
	small: "small",
	large: "large",
};

class ArticleView extends PureComponent<Props> {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			themeId: "1",
			size: "small",
			loading: true,
		};
		this.onDocumentDisplay();
	}

	onDocumentDisplay = () => {
		// const id = "16456~aviation_en";
		this.props.clearDisplayArticleAction();
		ArticleDisplayApi("16456~aviation_en", this.onSuccess, this.onFailure, this.onError);
	};

	onSuccess = response => {
		this.setState({ loading: false });
		this.props.setDisplayArticleAction(response);
	};

	onFailure = response => {
		this.setState({ loading: false });
	};

	onError = response => {
		this.setState({ loading: false });
	};

	renderDisplayItem = (type: string, data: any, settings: any) => {
		const { themeId, size } = this.state;
		const { articleDisplay } = this.props;
		console.log("Article display ====", this.props.articleDisplay.data.title);
		if (type === "logo") {
			return <ArticleDisplayLogo dynamicColor={theme[themeId]} font={font[size]} />;
		}
		if (type === "image") {
			return <ArticleDisplayImage dynamicColor={theme[themeId]} font={font[size]} />;
		}
		if (type === "title") {
			return (
				<ArticleDisplaytitle
					dynamicColor={theme[themeId]}
					font={font[size]}
					// data={articleDisplay.data.title}
					// isCenter={settings.isCenter}
				/>
			);
		}
		if (type === "description") {
			return (
				<ArticleDisplayDescription
					dynamicColor={theme[themeId]}
					font={font[size]}
					// isCenter={settings.isCenter}
				/>
			);
		}
	};

	renderDisplayArticle = (
		order: any,
		data: any,
		settings: any,
		size: string,
		themeId: string,
	) => {
		const dynamicColors = theme[themeId];
		return (
			<FlatList
				data={order}
				extraData={[size, themeId]}
				// keyExtractor={(item, index) => item.id}
				renderItem={({ item }) => this.renderDisplayItem(item, data, settings)}
				style={{ backgroundColor: dynamicColors.bgColor }}
			/>
		);
	};

	toggleFooter = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	closeFooter = () => {
		this.setState({
			isOpen: false,
		});
	};

	selectTheme = (themeId: number) => {
		this.setState({
			themeId,
		});
	};

	selectFont = (size: string) => {
		this.setState({
			size,
		});
	};

	render() {
		console.log("Display", this.props.articleDisplay);
		// console.log("aaa", this.state.size);
		const { isOpen, themeId, size } = this.state;
		const { order, data, settings, navigation, articleDisplay } = this.props;
		return (
			<View style={styles.container}>
				<ProfileHeader
					navigation={navigation}
					title=""
					isBottomBorder
					onBack={() => navigation.goBack()}
					isTransculent
					dynamicColor={theme[themeId]}
				/>
				<View
					style={StyleSheet.flatten([
						styles.container,
						// (contentContainerStyle = styles.containerStyle),
						// { backgroundcolor: "black" },
					])}
				>
					{/* <ArticleContent
						dynamicColor={
							theme[
								themeId
							]
						}
						font={
							font[
								size
							]
						}
					/> */}
					{this.renderDisplayArticle(
						order,
						data,
						settings,
						size,
						themeId,
						articleDisplay,
					)}
				</View>
				{isOpen && (
					<TouchableOpacity
						style={styles.absoluteContainer}
						onPress={() => this.closeFooter()}
					/>
				)}
				<ArticleFooter
					isOpen={isOpen}
					themeId={themeId}
					selectTheme={this.selectTheme}
					toggleFooter={this.toggleFooter}
					dynamicColor={theme[themeId]}
					selectFont={this.selectFont}
				/>
			</View>
		);
	}
}

ArticleView.defaultProps = {
	order: ["logo", "image", "title", "description"],
};
// ["logo", "image", "title", "description"]
// ["image", "logo", "title", "description"]
// ["logo", "title", "image", "description"]

// function mapStateToProps(state) {
// 	// state
// 	console.log("data_display", state.ArticleDisplay);
// 	return {
// 		articleDisplay: state.ArticleDisplay,
// 	};
// }
const mapStateToProps = state => {
	console.log("state", state.articleDisplay);
	return {
		articleDisplay: state.articleDisplay,
	};
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ArticleView);

const styles = StyleSheet.create({
	container: {
		width: ScalePerctFullWidth(100),
		flex: 1,
	},
	absoluteContainer: {
		width: ScalePerctFullWidth(100),
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		position: "absolute",
	},
	containerStyle: {
		alignItems: "center",
	},
	createAccountText: {
		fontSize: Metrics.SMALL_TEXT_SIZE,
		letterSpacing: 0.3,
		marginBottom: ScalePerctFullHeight(8),
	},
});
