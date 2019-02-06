import React, { Component } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { FollowList } from "../../components";
import { connect } from "react-redux";
import { StartBrandsService, BrandsPreferenceAPI } from "../../service";
import { bindActionCreators } from "redux";
import { Actions } from "../../redux";

type Props = {
	navigation: any,
	brands: array,
	selectedBrands: array,
};

class Brands extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
		};
		StartBrandsService(props);
	}

	onSelected = (brands: array) => {
		const { setSelectedBrands, user } = this.props;
		setSelectedBrands(brands);
		BrandsPreferenceAPI(user.id, brands, this.onSuccess, this.onFailure, this.onError);
	};

	onSuccess = (response: any) => {
		const { navigation } = this.props;
		navigation.navigate("HomeNavigation");
		console.log("OnSuccess of Preference Brands: ", response);
	};

	onFailure = (response: any) => {
		console.log("OnFailure of Preference Brands: ", response);
	};

	onError = (error: any) => {
		console.log("OnError of Preference Brands: ", error);
	};

	render() {
		let { brands, selectedBrands, navigation, user } = this.props;
		console.log("User details in Brands: ", user);
		return (
			<FollowList
				isBrand
				data={brands}
				onSelected={this.onSelected}
				selectedList={selectedBrands}
				navigation={navigation}
			/>
		);
	}
}

const mapStateToProps = state => ({
	brands: state.allBrands,
	selectedBrands: state.selectedBrands,
	user: state.user,
	// select top
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Brands);

/*
	const data = [
			{
				title: "AD Middle East",
				field_image:
					"http://trove-drupal.itp.com/sites/default/files/logo/2019-01/vectorpaint.svg",
				field_site_key: "adme_en",
				nid: "3",
				field_square_logo:
					"http://trove-drupal.itp.com/sites/default/files/2019-01/AD.png",
			},
			{
				title: "Arabian Business",
				field_image:
					"http://trove-drupal.itp.com/sites/default/files/logo/2019-01/ab_clr.svg",
				field_site_key: "arabian_business",
				nid: "1",
				field_square_logo:
					"http://trove-drupal.itp.com/sites/default/files/2019-01/Arabian%20business.png",
			},
		];
*/
