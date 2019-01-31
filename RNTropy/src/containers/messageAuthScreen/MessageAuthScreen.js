import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SvgUri from "react-native-svg-uri";
import Svg, { Circle, Rect } from "react-native-svg";
import { Actions } from "../../redux";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, Metrics, Strings } from "../../asset";
import { LoadingComp, Button } from "../../components";

type Props = {
	navigation: any,
};

class MessageAuthScreen extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	handleLogin = () => {
		const { navigation } = this.props;
		navigation.navigate("LoginAuthScreen");
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.image}>Image</Text>
				<Text style={styles.title}>{Strings.authentication.MESSAGE_TITLE}</Text>
				<Text style={styles.description}>
					{Strings.authentication.MESSAGE_DESCRIPTION}
				</Text>
				<Button
					title={Strings.authentication.OK}
					buttonStyle={{
						marginTop: ScalePerctFullHeight(25),
					}}
					onPress={this.handleLogin}
				/>
			</View>
		);
	}
}

function mapStateToProps() {
	// state
	return {};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(MessageAuthScreen);

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.bgPrimaryBlack,
		flex: 1,
		alignItems: "center",
	},
	image: {
		marginTop: ScalePerctFullHeight(23),
		height: ScalePerctFullHeight(17),
		marginBottom: ScalePerctFullHeight(3),
		color: "white",
	},
	title: {
		fontSize: Metrics.LARGE_TEXT_SIZE,
		lineHeight: 25,
		letterSpacing: 0,
		color: Colors.bgPrimaryLight,
		marginBottom: ScalePerctFullHeight(3),
	},
	description: {
		fontSize: Metrics.MEDIUM_TEXT_SIZE,
		lineHeight: 23,
		letterSpacing: 0,
		color: Colors.bodySecondaryLight,
		textAlign: "center",
		marginLeft: ScalePerctFullWidth(13),
		marginRight: ScalePerctFullWidth(13),
	},
});
