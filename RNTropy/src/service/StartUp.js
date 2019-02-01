import { connect } from "react-redux";
import { TopicApi } from "./Topics";
import { bindActionCreators } from "redux";
import { Actions } from "../redux";
import { Store } from "../../src";

export const StartUp = props => {
	console.log("props", props);
	TopicApi(response => onSuccuss(response, props), onFailure, onError);
};

onSuccuss = (response, props) => {
	console.log("succ", response);
	props.setAllTopics(response);
};

onFailure = message => {
	console.log("message", message);
	console.log(message);
};

onError = message => {
	console.log("err", message);
	console.log(message);
};

// function mapStateToProps() {
// 	// state
// 	return {};
// }

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(Actions, dispatch);
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps,
// )(StartUp);
