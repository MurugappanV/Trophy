import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { FollowList } from "../../components";
import { connect } from "react-redux";
import { StartUp } from "../../service";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";

class Brands extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
		};
		StartUp(props);
	}

	onSelected = (topics: array) => {
		const { setMenuTopicsAction } = this.props;
		setMenuTopicsAction(topics);
	};

	render() {
		// const data = [
		// 	{
		// 		title: "AD Middle East",
		// 		field_image:
		// 			"http://trove-drupal.itp.com/sites/default/files/logo/2019-01/vectorpaint.svg",
		// 		field_site_key: "adme_en",
		// 		nid: "3",
		// 		field_square_logo:
		// 			"http://trove-drupal.itp.com/sites/default/files/2019-01/AD.png",
		// 	},
		// 	{
		// 		title: "Arabian Business",
		// 		field_image:
		// 			"http://trove-drupal.itp.com/sites/default/files/logo/2019-01/ab_clr.svg",
		// 		field_site_key: "arabian_business",
		// 		nid: "1",
		// 		field_square_logo:
		// 			"http://trove-drupal.itp.com/sites/default/files/2019-01/Arabian%20business.png",
		// 	},
		// ];
		let { topics, selectedList } = this.props;
		console.log("Setelcted Topics: ", this.props);
		return (
			<FollowList
				isBrand
				data={topics}
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
)(Brands);
