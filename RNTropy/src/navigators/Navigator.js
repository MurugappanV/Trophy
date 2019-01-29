import React, { PureComponent } from "react";
import {
	createSwitchNavigator,
	createBottomTabNavigator,
	createDrawerNavigator,
	createStackNavigator,
	createAppContainer,
} from "react-navigation";
import { AuthLoading } from "../containers";

const AuthStack = createStackNavigator(
	{
		FirstAuthScreen: { screen: AuthLoading },
		LoginAuthScreen: { screen: AuthLoading },
		SignUpAuthScreen: { screen: AuthLoading },
		ForgotAuthScreen: { screen: AuthLoading },
		BrandsTopicsAuthScreen: { screen: AuthLoading },
		SuccessAuthScreen: { screen: AuthLoading },
	},
	{
		defaultNavigationOptions: () => ({
			header: null,
		}),
	},
);

const ArticleStack = createStackNavigator(
	{
		ListArticleScreen: { screen: AuthLoading },
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

const HomeTab = createBottomTabNavigator(
	{
		HomeTabScreen: { screen: ArticleStack },
		VideoTabScreen: { screen: AuthLoading },
		PodcastTabScreen: { screen: PodcastStack },
		MagazineTabScreen: { screen: AuthLoading },
	},
	{
		// tabBarComponent: TXTabBar,
		tabBarPosition: "bottom",
	},
);

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
		ProfileDrawerScreen: { screen: AuthLoading },
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
			initialRouteName: "AuthNavigation",
		},
	),
);

export default class Navigator extends PureComponent {
	render() {
		return <NavContainer />;
	}
}
