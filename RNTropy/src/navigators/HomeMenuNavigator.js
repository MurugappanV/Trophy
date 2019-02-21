import React, { PureComponent } from "react";
import { createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../redux";
import { AuthLoading, ArticleList } from "../containers";
import { Colors, ScalePerctFullWidth, Metrics, Constants } from "../asset";

type Props = {
	menuTopics: any,
	navigation: any,
};

class HomeMenuNav extends PureComponent<Props> {
	tab = (category: any) => {
		// const screen = this.getTabForCategory(category);
		const screen = props => <ArticleList tid={category.tid} {...props} />;
		return {
			screen,
		};
	};

	tabs(categories) {
		const routes = {};
		categories.forEach((category: any) => {
			routes[category.name] = this.tab(category);
		});
		return routes;
	}

	render() {
		const { menuTopics, navigation } = this.props;
		const topics = Constants.menuSections.defaultSection.concat(menuTopics);
		const HomeMenuNavigator = createAppContainer(
			createMaterialTopTabNavigator(this.tabs(topics), {
				tabBarPosition: "top",
				swipeEnabled: true,
				tabBarOptions: {
					activeTintColor: Colors.bodyPrimaryVarient,
					inactiveTintColor: Colors.bodySecondaryDark,
					style: {
						backgroundColor: Colors.bgPrimaryLight,
						height: 50,
						width: ScalePerctFullWidth(100),
					},
					labelStyle: {
						fontSize: Metrics.MEDIUM_TEXT_SIZE,
						fontFamily: "Lato-Regular",
					},
					scrollEnabled: true,
					upperCaseLabel: false,
					initialLayout: {
						height: 50,
						width: ScalePerctFullWidth(100),
					},
					indicatorStyle: {
						backgroundColor: Colors.bodyPrimaryVarient,
						width: ScalePerctFullWidth(20),
						marginLeft: ScalePerctFullWidth(5),
						height: 1.5,
					},
					tabStyle: {
						width: ScalePerctFullWidth(30),
					},
				},
			}),
		);

		return <HomeMenuNavigator screenProps={{ navigation }} />;
	}
}

function mapStateToProps(state: any) {
	return {
		menuTopics: state.allTopics,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(HomeMenuNav);

// getTabForCategory (category){
//     return () => (<ArticlesList category={category} />);
// }
