import React, { PureComponent } from "react";
import {
	createSwitchNavigator,
	createBottomTabNavigator,
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
} from "../containers";
import TabBarNavigator from "./TabBarNavigator";
import { Colors, ScalePerctFullWidth, Metrics } from "../asset";
import { PagerHeader, ProfileHeader } from "../components";
import HomeMenuNavigator from "./HomeMenuNavigator";

const AuthStack = createStackNavigator(
	{
		FirstAuthScreen: { screen: FirstAuthScreen },
		LoginAuthScreen: { screen: Login },
		SignUpAuthScreen: { screen: SignUpAuthScreen },
		ForgotAuthScreen: { screen: ForgotAuthScreen },
		BrandsTopicsAuthScreen: { screen: AuthLoading },
		SuccessAuthScreen: { screen: AuthLoading },
		MessageAuthScreen: { screen: MessageAuthScreen },
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
		ListPoscastScreen: { screen: AuthLoading },
		chaptorPodcastScreen: { screen: AuthLoading },
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
	header: () => <ProfileHeader title={"T R O V E"} isBottomBorder={false} />,
});
const HomeStack = createStackNavigator(
	{
		TabHomeScreen: { screen: HomeTab },
		ArticleDisplayHomeScreen: { screen: AuthLoading },
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
		HistoryDrawerScreen: { screen: AuthLoading }, // 1
		BookmarkDrawerScreen: { screen: AuthLoading }, // 2
		CustomizeInterestDrawerScreen: { screen: AuthLoading },
		ProfileDrawerScreen: { screen: Profile },
		SettingsDrawerScreen: { screen: AuthLoading },
		HelpDrawerScreen: { screen: AuthLoading },
		TosDrawerScreen: { screen: AuthLoading },
	},
	{
		// tabBarComponent: TXTabBar,
		drawerPosition: "right",
	},
);

const NavContainer = createAppContainer(
	createSwitchNavigator(
		{
			AuthLoading,
			HomeNavigation: HomeDrawer,
			AuthNavigation: AuthStack,
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
