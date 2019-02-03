import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { FollowList } from "../../components";
import { connect } from "react-redux";
import { StartUp } from "../../service";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";

class Topics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
		};
		StartUp(props);
	}

	onSelected = (topics: array) => {
		const { setMenuTopicsAction, navigation } = this.props;
		setMenuTopicsAction(topics);
		navigation.navigate("BrandsAuthScreen");
	};

	render() {
		let { topics, selectedList, navigation } = this.props;
		console.log("Setelcted Topics: ", this.props);
		return (
			<FollowList
				navigation={navigation}
				nextPage={"BrandsAuthScreen"}
				data={topics}
				topic
				onSelected={this.onSelected}
				selectedList={selectedList}
			/>
		); // passs method
	}
}

const mapStateToProps = state => ({
	topics: state.allTopics,
	selectedList: state.menuTopics,
	// select top
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Topics);
