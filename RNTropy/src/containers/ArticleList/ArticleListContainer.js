import React, { PureComponent } from "react";
import { createAppContainer, createMaterialTopTabNavigator } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";
import ArticleListUI from "./ArticleListUI";
import { Colors, ScalePerctFullWidth, Metrics } from "../../asset";

class ArticleListContainer extends PureComponent<Props> {

    render() {
        return (<ArticleListUI />);
    }
}

function mapStateToProps(state: any) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ArticleListContainer);