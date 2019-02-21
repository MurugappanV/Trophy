import React, { PureComponent } from "react";
import { View, Image, Dimensions, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors, TemplateConfig } from "../../asset";
import {
	AuthorInfo,
	ProfileHeader,
	BuildFeedButton,
	Article,
	ListLoading,
} from "../../components";
import { AuthorDetails } from "../../service";

type Props = {
	authorId?: any,
	authorName?: any,
	navigation: any,
	site?: any,
};

class Author extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			items: [],
			authorName: "Author",
			storyCount: 0,
			followers: 0,
			imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
		};
		AuthorDetails(props.authorId, props.site, this.onSuccess, this.onFailure, this.onError);
	}

	onSuccess = (response: Object) => {
		this.setState({
			items: response.items,
			authorName: response.author_name,
			storyCount: response.count,
			followers: response.follower_count,
			imageUrl: response.field_picture_ref,
			loading: false,
		});
	};

	renderAuthorDetails = (items: any) => {
		const { imageUrl, loading, storyCount, followers } = this.state;
		const { data, navigation, author, authorName } = this.props;
		return (
			<View style={styles.ListItems}>
				<FlatList
					data={items}
					keyExtractor={(x, i) => i.toString()}
					style={styles.ListItems}
					ListHeaderComponent={() => (
						<View style={styles.authorDetails}>
							<Image
								style={styles.image}
								source={{
									uri:
										"https://facebook.github.io/react-native/docs/assets/favicon.png",
								}}
							/>
							<View style={styles.textInfo}>
								<AuthorInfo
									authorName={authorName}
									storyCount={storyCount}
									followers={followers}
								/>
								<View style={styles.followButton}>
									<BuildFeedButton title={"Follow"} style={styles.follow} />
								</View>
							</View>
						</View>
					)}
					ListFooterComponent={() => <ListLoading loading={loading} />}
					renderItem={({ item, index }) => (
						<Article
							onPress={() => {}}
							key={index.toString()}
							order={TemplateConfig.articleTemplates[12]}
							settings={TemplateConfig.articleTemplateSettings[12]}
							data={item}
						/>
					)}
				/>
			</View>
		);
	};

	loadingIndicator = () => {
		return (
			<View style={styles.indicator}>
				<ActivityIndicator size="small" color="white" />
			</View>
		);
	};

	onFailure = () => {
		alert("Something went wrong, Try again later.");
	};

	onError = (error: error) => {
		alert("Error occured in fetching Author details, please try again later", error);
	};

	render() {
		const { imageUrl, loading, items, authorName, storyCount, followers } = this.state;
		const { data, navigation, author } = this.props;
		console.log("Author name:", this.props);
		return (
			<View style={styles.container}>
				<ProfileHeader
					onAction={() => {}}
					actionLabel={"Skip"}
					onBack={() => {
						navigation.goBack();
					}}
					page={"1"}
					navigation={navigation}
				/>
				{loading ? this.loadingIndicator() : this.renderAuthorDetails(items)}
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
		borderBottomWidth: 2,
		borderColor: Colors.borderLine,
		flexDirection: "row",
		width: ScalePerctFullWidth(100),
		marginBottom: 15,
	},
	image: {
		height: ScalePerctFullWidth(32),
		width: ScalePerctFullWidth(32),
		marginLeft: ScalePerctFullWidth(6),
		marginTop: ScalePerctFullHeight(4),
		marginBottom: ScalePerctFullHeight(4),
		borderRadius: ScalePerctFullWidth(16),
	},
	ListItems: {
		flex: 1,
	},
	textInfo: {
		backgroundColor: Colors.bgPrimaryLight,
		marginBottom: ScalePerctFullHeight(4),
		width: ScalePerctFullWidth(100),
	},
	followButton: {
		height: ScalePerctFullHeight(6),
		width: ScalePerctFullWidth(44),
		marginLeft: ScalePerctFullWidth(7),
		marginTop: ScalePerctFullHeight(4),
	},
	follow: {
		height: ScalePerctFullHeight(6),
		width: ScalePerctFullWidth(44),
	},
	header: {
		marginTop: 20,
	},
	footer: {
		marginBottom: 150,
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

export default Author;

Author.defaultProps = {
	authorName: "Solomon",
	authorId: "181957",
	site: "msl_en",
	data: [
		{
			nid: 275542,
			title:
				"Good News! Rishi Kapoor’s Treatment is going on Well, Will Return to India Soon ",
			site: "msl_en",
			brand_logo: "",
			content_type: "article_listing",
			lead_text:
				"Rishi Kapoor has been in New York for the last few months undergoing treatment ",
			pubDate: 1548579018,
			image_url: "public://images/2019/01/27/Rishi-Neetu.jpg",
			story_rel: [
				{
					name: "The Kapoor Family Rallies Around Rishi Kapoor as He Begins Treatment ",
					id: 271310,
				},
				{
					name:
						"Randhir Kapoor Reacts to Stories of Rishi Kapoor Suffering From Cancer ",
					id: 270634,
				},
				{
					name:
						"Rishi Kapoor and Son Ranbir Kapoor Missed Krishna Raj Kapoor’s Funeral Here’s Why ",
					id: 270624,
				},
			],
			gallery_rel: "",
			video_rel: "",
			author: "",
			video: "",
			image: "https://www.masala.com/sites/default/files/images/2019/01/27/Rishi-Neetu.jpg",
			image_crop:
				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/27/Rishi-Neetu.jpg",
			template: 1,
		},
		{
			nid: 275540,
			title: "Sorry Sara Ali Khan Fans, She is NOT Doing a Film with Dad Saif Ali Khan",
			site: "msl_en",
			brand_logo: "",
			content_type: "article_listing",
			lead_text:
				"Rumours had suggested that Sara Ali Khan was going to star with Saif in Imtiaz Ali’s film ",
			pubDate: 1548578514,
			image_url: "public://images/2019/01/27/09ac028a344370630310f6c7f16e3f10.jpg",
			story_rel: [
				{
					name:
						"Saif Ali Khan Asks Daughter Sara Ali Khan to Slow Down on her Media Coverage",
					id: 275478,
				},
				{
					name:
						"EXCLUSIVE: Sara Ali Khan, Kartik Aaryan and Saif Ali Khan Roped In for Imtiaz Ali's Next Venture ",
					id: 275410,
				},
				{
					name:
						"Kriti Sanon or Sara Ali Khan? What’s Happening in Sushant Singh Rajput’s Love life?",
					id: 275374,
				},
			],
			gallery_rel: "",
			video_rel: "",
			author: "",
			video: "",
			image:
				"https://www.masala.com/sites/default/files/images/2019/01/27/09ac028a344370630310f6c7f16e3f10.jpg",
			image_crop:
				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/27/09ac028a344370630310f6c7f16e3f10.jpg",
			template: 2,
		},
		{
			nid: 275538,
			title: "Shocking! Fallout Between Producer and Director Of the Film Thackeray",
			site: "msl_en",
			brand_logo: "",
			content_type: "article_listing",
			lead_text: "Director Walks Out Of Premiere",
			pubDate: 1548577848,
			image_url: "public://images/2019/01/27/Thackeray-trailer-1.jpg",
			story_rel: [
				{
					name: "Surprise!  Nawazuddin Siddiqui's 'Thackeray' NOT Released in the UAE ",
					id: 275509,
				},
				{
					name:
						"Thursday Box Office Battle: What would you Watch – ‘Manikarnika’ or ‘Thackeray’?",
					id: 275395,
				},
				{
					name: "Manmohan Singh Versus Bal Thackeray",
					id: 274321,
				},
			],
			gallery_rel: "",
			video_rel: "",
			author: "",
			video: "",
			image:
				"https://www.masala.com/sites/default/files/images/2019/01/27/Thackeray-trailer-1.jpg",
			image_crop:
				"https://www.masala.com/sites/default/filesstyles/2_columns_gutter_size_358px_wide_landscape/public/images/2019/01/27/Thackeray-trailer-1.jpg",
			template: 2,
		},
	],
};
