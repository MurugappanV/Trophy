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
	ActivityIndicator,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import {
	Colors,
	ScalePerctFullWidth,
	ScalePerctFullHeight,
	Strings,
	Metrics,
	TemplateConfig,
} from "../../asset";
// import ArticleContent from "./ArticleContent";
import ArticleFooter from "./ArticleFooter";
import {
	ArticleDisplayDescription,
	ArticleDisplayImage,
	ArticleDisplayLogo,
	ArticleDisplaytitle,
	ProfileHeader,
	Article,
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
			bookmarks: [],
		};
		console.log("this.props");
		this.onDocumentDisplay();
	}

	onDocumentDisplay = () => {
		// const id = "16456~aviation_en";
		console.log(this.props);
		this.props.clearDisplayArticleAction();
		const itemId = this.props.navigation.getParam("nid");
		const site = this.props.navigation.getParam("site");
		ArticleDisplayApi(`${itemId}~${site}`, this.onSuccess, this.onFailure, this.onError);
		console.log("nid", itemId, "Site", site);
	};

	onSuccess = response => {
		this.setState({ loading: false });
		this.props.setDisplayArticleAction(response);
	};

	onFailure = () => {
		this.setState({ loading: false });
	};

	onError = () => {
		this.setState({ loading: false });
	};

	renderDisplayItem = (type: string, data: any, settings: any) => {
		const { themeId, size } = this.state;
		const { articleDisplay } = this.props;
		console.log("type", type);
		// console.log("articleDisplay", articleDisplay);
		// console.log("Article display ====", this.props.articleDisplay.title);
		if (type === "logo") {
			return (
				<ArticleDisplayLogo
					dynamicColor={theme[themeId]}
					font={font[size]}
					data={articleDisplay}
				/>
			);
		}
		if (type === "image") {
			return (
				<ArticleDisplayImage
					dynamicColor={theme[themeId]}
					font={font[size]}
					data={articleDisplay}
				/>
			);
		}
		if (type === "title") {
			return (
				<ArticleDisplaytitle
					dynamicColor={theme[themeId]}
					font={font[size]}
					data={articleDisplay}
					// isCenter={settings.isCenter}
				/>
			);
		}
		if (type === "description") {
			return (
				<ArticleDisplayDescription
					dynamicColor={theme[themeId]}
					font={font[size]}
					data={articleDisplay}
					// isCenter={settings.isCenter}
				/>
			);
		}
	};

	displayOrder = () => {
		const { articleDisplay } = this.props;
		const articleTemplate = articleDisplay.article_template;
		console.log("articleTemplate", articleTemplate);
		if (articleTemplate === "1") {
			return ["logo", "image", "title", "description"];
		} else if (articleTemplate === "2") {
			return ["image", "logo", "title", "description"];
		} else {
			return ["logo", "title", "image", "description"];
		}
	};

	renderDisplayArticle = (
		order: any,
		data: any,
		settings: any,
		size: string,
		themeId: string,
		articleDisplay: any,
	) => {
		const dynamicColor = theme[themeId];
		return (
			<FlatList
				data={this.displayOrder()}
				extraData={[size, themeId]}
				// keyExtractor={(item, index) => item.id}
				renderItem={({ item }) =>
					this.renderDisplayItem(item, articleDisplay, data, settings)
				}
				style={{ backgroundColor: dynamicColor.bgColor }}
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
		console.log("Display1", this.props.articleDisplay);
		console.log("loading", this.state.loading);
		// console.log("aaa", this.state.size);
		const { isOpen, themeId, size, loading, bookmarks } = this.state;
		const { order, data, settings, navigation, articleDisplay } = this.props;

		const relatedArticles =
			articleDisplay &&
			!Array.isArray(articleDisplay) &&
			((articleDisplay.hasOwnProperty("story_relation") &&
				articleDisplay.story_relation.und) ||
				(articleDisplay.hasOwnProperty("gallery_relation") &&
					articleDisplay.gallery_relation.und) ||
				(articleDisplay.hasOwnProperty("video_relation") &&
					articleDisplay.video_relation.und));
		const dynamicColor = theme[themeId];
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
				{loading || !articleDisplay ? (
					<View style={styles.indicator}>
						<ActivityIndicator size="small" color="grey" />
					</View>
				) : (
					<View style={StyleSheet.flatten([styles.container])}>
						{!relatedArticles ? (
							alert("No data found")
						) : (
							<FlatList
								data={relatedArticles}
								keyExtractor={(x, i) => i.toString()}
								style={{
									backgroundColor: dynamicColor.bgColor,
									color: dynamicColor.fontColor,
								}}
								// ListFooterComponent={() => <View style={styles.footer} />}
								renderItem={({ item, index }) => (
									<Article
										onPress={() => {}}
										key={index.toString()}
										order={TemplateConfig.articleTemplates[12]}
										settings={TemplateConfig.articleTemplateSettings[12]}
										data={item}
									/>
								)}
								ListHeaderComponent={this.renderDisplayArticle(
									order,
									data,
									settings,
									size,
									themeId,
									articleDisplay,
								)}
							/>
						)}
					</View>
				)}
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

// ArticleView.defaultProps = {
// 	order: ["logo", "image", "title", "description"],
// };
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
	console.log("state1", state.articleDisplay && state.articleDisplay.title);
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
		// flexDirection: "column",
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
	indicator: {
		// position: "absolute",
		// top: 0,
		// bottom: 0,
		// right: 0,
		// left: 0,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
		// backgroundColor: "red",
	},
	// articleList: {
	// 	backgroundColor: "grey",
	// },
});
// ArticleView.defaultProps = {
// 	data: [
// 		{
// 			nid: 275542,
// 			title:
// 				"Good News! Rishi Kapoor’s Treatment is going on Well, Will Return to India Soon ",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text:
// 				"Rishi Kapoor has been in New York for the last few months undergoing treatment ",
// 			pubDate: 1548579018,
// 			image_url: "public://images/2019/01/27/Rishi-Neetu.jpg",
// 			story_rel: [
// 				{
// 					name: "The Kapoor Family Rallies Around Rishi Kapoor as He Begins Treatment ",
// 					id: 271310,
// 				},
// 				{
// 					name:
// 						"Randhir Kapoor Reacts to Stories of Rishi Kapoor Suffering From Cancer ",
// 					id: 270634,
// 				},
// 				{
// 					name:
// 						"Rishi Kapoor and Son Ranbir Kapoor Missed Krishna Raj Kapoor’s Funeral Here’s Why ",
// 					id: 270624,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image: "https://www.masala.com/sites/default/files/images/2019/01/27/Rishi-Neetu.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/27/Rishi-Neetu.jpg",
// 			template: 1,
// 		},
// 		{
// 			nid: 275540,
// 			title: "Sorry Sara Ali Khan Fans, She is NOT Doing a Film with Dad Saif Ali Khan",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text:
// 				"Rumours had suggested that Sara Ali Khan was going to star with Saif in Imtiaz Ali’s film ",
// 			pubDate: 1548578514,
// 			image_url: "public://images/2019/01/27/09ac028a344370630310f6c7f16e3f10.jpg",
// 			story_rel: [
// 				{
// 					name:
// 						"Saif Ali Khan Asks Daughter Sara Ali Khan to Slow Down on her Media Coverage",
// 					id: 275478,
// 				},
// 				{
// 					name:
// 						"EXCLUSIVE: Sara Ali Khan, Kartik Aaryan and Saif Ali Khan Roped In for Imtiaz Ali's Next Venture ",
// 					id: 275410,
// 				},
// 				{
// 					name:
// 						"Kriti Sanon or Sara Ali Khan? What’s Happening in Sushant Singh Rajput’s Love life?",
// 					id: 275374,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image:
// 				"https://www.masala.com/sites/default/files/images/2019/01/27/09ac028a344370630310f6c7f16e3f10.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/27/09ac028a344370630310f6c7f16e3f10.jpg",
// 			template: 2,
// 		},
// 		{
// 			nid: 275538,
// 			title: "Shocking! Fallout Between Producer and Director Of the Film Thackeray",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text: "Director Walks Out Of Premiere",
// 			pubDate: 1548577848,
// 			image_url: "public://images/2019/01/27/Thackeray-trailer-1.jpg",
// 			story_rel: [
// 				{
// 					name: "Surprise!  Nawazuddin Siddiqui's 'Thackeray' NOT Released in the UAE ",
// 					id: 275509,
// 				},
// 				{
// 					name:
// 						"Thursday Box Office Battle: What would you Watch – ‘Manikarnika’ or ‘Thackeray’?",
// 					id: 275395,
// 				},
// 				{
// 					name: "Manmohan Singh Versus Bal Thackeray",
// 					id: 274321,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image:
// 				"https://www.masala.com/sites/default/files/images/2019/01/27/Thackeray-trailer-1.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/27/Thackeray-trailer-1.jpg",
// 			template: 2,
// 		},
// 		{
// 			nid: 275531,
// 			title: "Death of Govinda’s Nephew Brings Him Closer to Estranged Brother",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text:
// 				"Govinda’s nephew Janmendra died of a heart attack in Mumbai at a young age",
// 			pubDate: 1548576570,
// 			image_url: "public://images/2019/01/27/54738f388348c.image.jpg",
// 			story_rel: [
// 				{
// 					name:
// 						"Ishaan Khattar Denies Being In Hindi Remake Of Vijay Devarakonda's 'Geetha Govindam'",
// 					id: 275107,
// 				},
// 				{
// 					name:
// 						" ‘Has Govinda Bothered to Call us Even Once’? Asks Kader Khan’s Son Sarfaraz",
// 					id: 274456,
// 				},
// 				{
// 					name: "Govinda's Son, Yashvardhan Ahuja All Set To Make His Bollywood Debut",
// 					id: 274144,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image:
// 				"https://www.masala.com/sites/default/files/images/2019/01/27/54738f388348c.image.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/27/54738f388348c.image.jpg",
// 			template: 2,
// 		},
// 		{
// 			nid: 275478,
// 			title: "Saif Ali Khan Asks Daughter Sara Ali Khan to Slow Down on her Media Coverage",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text:
// 				"Sara Ali Khan has been extensively covered ever since her debut and this has made her father worried. Find out why",
// 			pubDate: 1548320180,
// 			image_url: "public://images/2019/01/24/Saif-Ali-Khan-Sara-Ali-Khan-1900x.jpg",
// 			story_rel: [
// 				{
// 					name:
// 						"EXCLUSIVE: Sara Ali Khan, Kartik Aaryan and Saif Ali Khan Roped In for Imtiaz Ali's Next Venture ",
// 					id: 275410,
// 				},
// 				{
// 					name:
// 						"Kriti Sanon or Sara Ali Khan? What’s Happening in Sushant Singh Rajput’s Love life?",
// 					id: 275374,
// 				},
// 				{
// 					name:
// 						"Say What? Is Kartik Aaryan Dating Ananya Panday and not Sara Ali Khan? ",
// 					id: 274743,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image:
// 				"https://www.masala.com/sites/default/files/images/2019/01/24/Saif-Ali-Khan-Sara-Ali-Khan-1900x.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/24/Saif-Ali-Khan-Sara-Ali-Khan-1900x.jpg",
// 			template: 2,
// 		},
// 		{
// 			nid: 275401,
// 			title: " Is Shah Rukh Khan Really Doing Don 3? ",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text:
// 				"After the massive failure of 'Zero', seems like Shah Rukh Khan definitely wants some time off from films",
// 			pubDate: 1548226934,
// 			image_url: "public://images/2019/01/23/-201611-825269.jpg",
// 			story_rel: [
// 				{
// 					name: "Shocking! Shah Rukh Khan and Aamir Khan Will Have NO Releases in 2019",
// 					id: 275363,
// 				},
// 				{
// 					name: "Shah Rukh Khan Steps Away from Rakesh Sharma's Bio-Pic for Don 3?",
// 					id: 275058,
// 				},
// 				{
// 					name: "Shah Rukh Khan’s 10 Biggest Flops",
// 					id: 274555,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image:
// 				"https://www.masala.com/sites/default/files/images/2019/01/23/-201611-825269.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/23/-201611-825269.jpg",
// 			template: 2,
// 		},
// 		{
// 			nid: 275399,
// 			title:
// 				"'No Fathers In Kashmir' Director, Ashvin Kumar In a Sticky Situation With The Censor Board Again! ",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text: "It’s an all-out war between the film on Kashmir & the CBFC",
// 			pubDate: 1548226310,
// 			image_url: "public://images/2019/01/23/pjimage-(1).jpg",
// 			story_rel: [
// 				{
// 					name: "Kangana Steals ‘Friend’ Ankita Lokhande’s Moment Of Glory",
// 					id: 275397,
// 				},
// 				{
// 					name:
// 						"Heard This? Salman Khan will Bring his Da-Bangg Tour to Dubai this March!",
// 					id: 275393,
// 				},
// 				{
// 					name:
// 						"Thursday Box Office Battle: What would you Watch – ‘Manikarnika’ or ‘Thackeray’?",
// 					id: 275395,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image: "https://www.masala.com/sites/default/files/images/2019/01/23/pjimage-(1).jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/23/pjimage-(1).jpg",
// 			template: 3,
// 		},
// 		{
// 			nid: 275397,
// 			title: "Kangana Steals ‘Friend’ Ankita Lokhande’s Moment Of Glory",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text: "Will Kangana Ranaut steal the limelight completely in the film too? ",
// 			pubDate: 1548225406,
// 			image_url: "public://images/2019/01/23/778945-000-ankita-kangana.jpg",
// 			story_rel: [
// 				{
// 					name:
// 						"Thursday Box Office Battle: What would you Watch – ‘Manikarnika’ or ‘Thackeray’?",
// 					id: 275395,
// 				},
// 				{
// 					name:
// 						"Ankita Lokhande Has Truly Moved on from Sushant Singh Rajput. She’s In Love Again! ",
// 					id: 275080,
// 				},
// 				{
// 					name: "Is Sushant Singh Rajput Trying to Mend Bridges with Ex Ankita Lokhande",
// 					id: 273851,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image:
// 				"https://www.masala.com/sites/default/files/images/2019/01/23/778945-000-ankita-kangana.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/23/778945-000-ankita-kangana.jpg",
// 			template: 3,
// 		},
// 		{
// 			nid: 275395,
// 			title:
// 				"Thursday Box Office Battle: What would you Watch – ‘Manikarnika’ or ‘Thackeray’?",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text:
// 				"Kangana Ranaut will battle Nawazuddin Siddiqui at the box office this week. Who will emerge victoriously?\r\n",
// 			pubDate: 1548224927,
// 			image_url: "public://images/2019/01/23/pjimage.jpg",
// 			story_rel: [
// 				{
// 					name:
// 						"‘This Isn’t the ‘Manikarnika’ We Shot For’, An Actor from Kangana Ranaut’s Film Speaks Up",
// 					id: 275371,
// 				},
// 				{
// 					name:
// 						"What is the Truth Behind ‘Manikarnika’ Producer Kamal Jain’s Hospitalisation",
// 					id: 275361,
// 				},
// 				{
// 					name:
// 						"Nawazuddin Siddiqui's 'Thackeray' In Trouble Within The Industry Itself! ",
// 					id: 274292,
// 				},
// 				{
// 					name:
// 						"Thackeray Trailer Review: Thackeray Looks Like An Exercise In Unconcealed Gush",
// 					id: 274265,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image: "https://www.masala.com/sites/default/files/images/2019/01/23/pjimage.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/23/pjimage.jpg",
// 			template: 3,
// 		},
// 		{
// 			nid: 275390,
// 			title: "Mahesh Babu Misses Wife Namrata Shirodkar’s Birthday for the First Time",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text:
// 				"Find out why Telugu superstar Mahesh Babu had to miss his dear wife’s birthday for the first time in 14 years of their marriage",
// 			pubDate: 1548154630,
// 			image_url: "public://images/2019/01/22/maxresdefault.jpg",
// 			story_rel: [
// 				{
// 					name: "Mahesh Babu Clears His Pending Dues To The Tax Department",
// 					id: 274299,
// 				},
// 				{
// 					name: "Mahesh Babu On Shooting His New Cola ad In Kuala Lampur",
// 					id: 273070,
// 				},
// 				{
// 					name: "Mahesh Babu’s  Multiplex Theatre  To Open With  Rajinikanth’s 2.0",
// 					id: 272624,
// 				},
// 			],
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image:
// 				"https://www.masala.com/sites/default/files/images/2019/01/22/maxresdefault.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/22/maxresdefault.jpg",
// 			template: 3,
// 		},
// 		{
// 			nid: 275371,
// 			title:
// 				"‘This Isn’t the ‘Manikarnika’ We Shot For’, An Actor from Kangana Ranaut’s Film Speaks Up",
// 			site: "msl_en",
// 			brand_logo: "",
// 			content_type: "article_listing",
// 			lead_text:
// 				"Kangana Ranaut’s ‘Manikarnika’ has been facing some controversy or the other for a long time. The film releases this Thursday in the UAE",
// 			pubDate: 1548146515,
// 			image_url:
// 				"public://images/2019/01/22/MV5BMjEyYjg5ZWEtY2EyMC00ODMxLWI5ZTctODg5OTY3NGY2ZmZlXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1__0.jpg",
// 			story_rel: "",
// 			gallery_rel: "",
// 			video_rel: "",
// 			author: "",
// 			video: "",
// 			image:
// 				"https://www.masala.com/sites/default/files/images/2019/01/22/MV5BMjEyYjg5ZWEtY2EyMC00ODMxLWI5ZTctODg5OTY3NGY2ZmZlXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1__0.jpg",
// 			image_crop:
// 				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/22/MV5BMjEyYjg5ZWEtY2EyMC00ODMxLWI5ZTctODg5OTY3NGY2ZmZlXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1__0.jpg",
// 			template: 3,
// 		},
// 	],
// };
