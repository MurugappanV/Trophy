import React, { PureComponent } from "react";
import {
	createSwitchNavigator,
	createMaterialTopTabNavigator,
	createDrawerNavigator,
	createStackNavigator,
	createAppContainer,
} from "react-navigation";
import {
	AuthLoading,
	FirstAuthScreen,
	Login,
	SignUpAuthScreen,
	ForgotAuthScreen,
	MessageAuthScreen,
	Profile,
	Topics,
	Brands,
	ArticleView,
	ListPodcastScreen,
	StartUp,
	Bookmark,
	History,
	Author,
	ChaptorPodcastScreen,
} from "../containers";
import TabBarNavigator from "./TabBarNavigator";
import { Colors, Metrics } from "../asset";
import { ProfileHeader } from "../components";
import HomeMenuNavigator from "./HomeMenuNavigator";
// import AuthNavigator from "./AuthNavigator";

const LoginScreen = Metrics.isTablet ? Login : FirstAuthScreen;

const AuthStack = createStackNavigator(
	{
		FirstAuthScreen: { screen: LoginScreen },
		LoginAuthScreen: { screen: Login },
		SignUpAuthScreen: { screen: SignUpAuthScreen },
		ForgotAuthScreen: { screen: ForgotAuthScreen },
		SuccessAuthScreen: { screen: AuthLoading },
		MessageAuthScreen: { screen: MessageAuthScreen },
	},
	{
		defaultNavigationOptions: () => ({
			header: null,
		}),
	},
);

const NewUserStack = createStackNavigator(
	{
		TopicsAuthScreen: { screen: Topics },
		BrandsAuthScreen: { screen: Brands },
	},
	{
		defaultNavigationOptions: () => ({
			header: null,
		}),
	},
);

// const HomeMenuNavigator = createMaterialTopTabNavigator(
// 	{
// 		MyTrove: { screen: AuthLoading },
// 		Economic: { screen: AuthLoading },
// 		Tech: { screen: AuthLoading },
// 		Politics: { screen: AuthLoading },
// 	},
// 	{
// 		tabBarPosition: "top",
// 		swipeEnabled: true,
// 		tabBarOptions: {
// 			activeTintColor: Colors.bodyPrimaryVarient,
// 			inactiveTintColor: Colors.bodySecondaryDark,
// 			style: {
// 				backgroundColor: Colors.bgPrimaryLight,
// 				height: 50,
// 				width: ScalePerctFullWidth(100),
// 			},
// 			labelStyle: {
// 				fontSize: Metrics.MEDIUM_TEXT_SIZE,
// 			},
// 			scrollEnabled: true,
// 			upperCaseLabel: false,
// 			initialLayout: {
// 				height: 50,
// 				width: ScalePerctFullWidth(100),
// 			},
// 			indicatorStyle: {
// 				backgroundColor: Colors.bodyPrimaryVarient,
// 				width: ScalePerctFullWidth(20),
// 				marginLeft: ScalePerctFullWidth(5),
// 				height: 1.5,
// 			},
// 			tabStyle: {
// 				width: ScalePerctFullWidth(30),
// 			},
// 		},
// 	},
// );

const ArticleStack = createStackNavigator(
	{
		ListArticleScreen: { screen: HomeMenuNavigator },
		AuthorArticleScreen: { screen: AuthLoading },
	},
	{
		defaultNavigationOptions: () => ({
			header: null,
		}),
	},
);

const PodcastStack = createStackNavigator(
	{
		ListPoscastScreen: { screen: ListPodcastScreen },
		ChaptorPodcastScreen: { screen: ChaptorPodcastScreen },
	},
	{
		defaultNavigationOptions: () => ({
			header: null,
		}),
	},
);

const HomeTab = createMaterialTopTabNavigator(
	{
		HomeTabScreen: { screen: ArticleStack },
		VideoTabScreen: { screen: AuthLoading },
		PodcastTabScreen: { screen: PodcastStack },
		MagazineTabScreen: { screen: AuthLoading },
	},
	{
		tabBarComponent: TabBarNavigator,
		swipeEnabled: true,
		tabBarPosition: "bottom",
		tabBarOptions: {
			activeTintColor: Colors.bodyPrimaryVarient,
			inactiveTintColor: Colors.bodySecondaryDark,
		},
	},
);

HomeTab.navigationOptions = ({ navigation }) => ({
	header: () => (
		<ProfileHeader
			navigation={navigation}
			onGrid={() => navigation.navigate("NewUserNavigation", { isBack: true })}
			title="T R O V E"
			isBottomBorder={false}
		/>
	),
});
const HomeStack = createStackNavigator(
	{
		TabHomeScreen: { screen: HomeTab },
		ArticleDisplayHomeScreen: { screen: ArticleView },
		PlayPodcastHomeScreen: { screen: AuthLoading },
		PlayVideoHomeScreen: { screen: AuthLoading },
		VideoCommentsHomeScreen: { screen: AuthLoading },
		MagazineIssueHomeScreen: { screen: AuthLoading },
		MagazineSubscriptionHomeScreen: { screen: AuthLoading },
	},
	{
		defaultNavigationOptions: () => ({
			header: null,
		}),
	},
);

const HomeDrawer = createDrawerNavigator(
	{
		HomeDrawerScreen: { screen: HomeStack },
		HistoryDrawerScreen: { screen: History },
		BookmarkDrawerScreen: { screen: Bookmark },
		CustomizeInterestDrawerScreen: { screen: AuthLoading },
		ProfileDrawerScreen: { screen: Profile },
		SettingsDrawerScreen: { screen: AuthLoading },
		HelpDrawerScreen: { screen: AuthLoading },
		TosDrawerScreen: { screen: AuthLoading },
	},
	{
		// tabBarComponent: TXTabBar,
		drawerPosition: "right",
		drawerType: "slide",
	},
);

const NavContainer = createAppContainer(
	createSwitchNavigator(
		{
			StartUp,
			HomeNavigation: HomeDrawer,
			AuthNavigation: AuthStack,
			NewUserNavigation: NewUserStack,
		},
		{
			initialRouteName: "HomeNavigation",
		},
	),
);

export default class Navigator extends PureComponent {
	render() {
		return <NavContainer />;
	}
}
