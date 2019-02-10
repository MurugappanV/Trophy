import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { FollowList } from "../../components";
import { connect } from "react-redux";
import { StartUp, TopicsPreferenceAPI } from "../../service";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";

type Props = {
	navigation: any,
	topics: array,
	selectedList: array,
	isNotStartUp?: boolean,
};

class Topics extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
		};
		console.log("topics const ", props);
		this.magnageTopics(props.topics);
		// new StartUp(props);
	}

	magnageTopics = (topics: array) => {
		const { user, setMenuTopicsAction } = this.props;
		if (user) {
			const alreadySelected = new Set(user["topics"].split("|"));
			const selectedTopics = [];
			topics.forEach(item => {
				if (alreadySelected.has(item.tid)) {
					selectedTopics.push(item);
				}
			});
			setMenuTopicsAction(selectedTopics);
			console.log("Selected topics in topics after login", selectedTopics);
		}
	};

	onSelected = (followTrack: array) => {
		const { setMenuTopicsAction, navigation, user, selectedTopics } = this.props;
		setMenuTopicsAction(followTrack);
		TopicsPreferenceAPI(user.id, followTrack, this.onSuccess, this.onFailure, this.onError);
	};

	onSuccess = (response: any) => {
		const { navigation, isNotStartUp } = this.props;
		navigation.navigate(isNotStartUp ? "BrandsStackScreen" : "BrandsAuthScreen");
		console.log("OnSuccess of Preference Topics: ", response);
	};

	onFailure = (response: any) => {
		console.log("OnFailure of Preference Topics: ", response);
	};

	onError = (error: any) => {
		console.log("OnError of Preference Topics: ", error);
	};

	render() {
		const { topics, selectedTopics, user, navigation, isNotStartUp } = this.props;
		const isBack = isNotStartUp;
		console.log("topics navigation", navigation);
		// console.log("Selected Topics inside render: ", selectedTopics);
		// console.log("User id details in Topics: ", user);
		return (
			<FollowList
				data={topics}
				userId={user.id}
				isBack={isBack}
				navigation={navigation}
				isTopic
				onSelected={followTrack => this.onSelected(followTrack)}
				selectedTopicList={selectedTopics}
			/>
		);
	}
}

Topics.defaultProps = {
	isNotStartUp: false,
};

const mapStateToProps = state => ({
	topics: state.allTopics,
	selectedTopics: state.menuTopics,
	user: state.user,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Topics);
