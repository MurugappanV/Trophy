import { connect } from "react-redux";
import { BrandApi } from "./Brands";
import { bindActionCreators } from "redux";
import { Actions } from "../redux";
import { Store } from "../../src";

export const StartBrandsService = props => {
	console.log("props", props);
	BrandApi(response => onSuccess(response, props), onFailure, onError);
};

onSuccess = (response, props) => {
	console.log("succ", response);
	props.setAllBrands(response);
};

onFailure = message => {
	console.log("message", message);
	console.log(message);
};

onError = message => {
	console.log("err", message);
	console.log(message);
};
