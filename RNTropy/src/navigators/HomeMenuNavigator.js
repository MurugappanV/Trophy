import React, { PureComponent } from "react";
import { createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../redux";
import { AuthLoading, ArticleList } from "../containers";
import { Colors, ScalePerctFullWidth, Metrics } from "../asset";

class HomeMenuNav extends PureComponent<Props> {
    tabs(categories) {
        const routes = {}
        categories.forEach((category) => {
            routes[category] = this.tab(category);

        });
        return routes;
    }

    tab(category) {
        // const screen = this.getTabForCategory(category);
        const screen = category == "Economics" ? AuthLoading : ArticleList;
        return {
            screen: screen
        }
    }

    // getTabForCategory (category){
    //     return () => (<ArticlesList category={category} />);
    // }

    render() {
        const { menuTopics } = this.props;
        const HomeMenuNavigator = createAppContainer(
            createMaterialTopTabNavigator(
                this.tabs(menuTopics),
                {
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
                },
            )
        );

        return (<HomeMenuNavigator />);
    }
}

function mapStateToProps(state: any) {
    return {
        menuTopics: state.menuTopics
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeMenuNav);