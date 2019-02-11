import React, { PureComponent } from "react";
import { ScrollView, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../redux";
import { Colors, Constants } from "../asset";
import { Line, AlertComp } from "../components";
import { setCurrentUserIdStorage } from "../storage";

type Props = {
	navigation: any,
	style: any,
	clearUserAction: Function,
};

class DrawerNavigator extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// onTabPress = (currentIndex, idx, navigation, route) => {
	// 	if (currentIndex !== idx) {
	// 		navigation.navigate(route.routeName);
	// 	}
	// };

	// renderTabBarButton(route: NavigationRoute, idx: any) {
	// 	const { activeTintColor, inactiveTintColor, navigation } = this.props;
	// 	const currentIndex = navigation.state.index;
	// 	const color = currentIndex === idx ? activeTintColor : inactiveTintColor;
	// 	const iconMap = NavigationIconMap.get(route.routeName);
	// 	return (
	// 		<TouchableOpacity
	// 			onPress={() => this.onTabPress(currentIndex, idx, navigation, route)}
	// 			style={styles.tabBarButton}
	// 			key={route.routeName}
	// 		>
	// 			<Icon name={iconMap.icon} size={iconMap.size} color={color} />
	// 		</TouchableOpacity>
	// 	);
	// }

	onPress = (routeName: string) => {
		const { clearUserAction, navigation } = this.props;
		if (routeName === "Logout") {
			AlertComp(
				"Confirmation",
				"Are you sure you want to log out?",
				() => {
					clearUserAction();
					setCurrentUserIdStorage(null);
					navigation.navigate("AuthNavigation");
				},
				true,
				"Logout",
			);
		} else {
			navigation.navigate(routeName);
		}
	};

	renderItem = (item: any) => {
		return (
			<TouchableOpacity
				style={styles.drawerButton}
				onPress={() => {
					this.onPress(item.routeName);
				}}
			>
				<Text style={styles.text}>{item.title}</Text>
			</TouchableOpacity>
		);
	};

	renderSeperator = () => {
		return <Line style={styles.seperator} />;
	};

	render() {
		const { style } = this.props;
		return (
			<ScrollView
				style={[styles.container, style]}
				contentContainerStyle={styles.contentContainerStyle}
			>
				<FlatList
					style={StyleSheet.flatten([styles.listContainer, this.props.style])}
					contentContainerStyle={styles.listContentContainerStyle}
					renderItem={({ item }) => this.renderItem(item)}
					data={Constants.drawerTopData}
					keyExtractor={item => item.routeName}
					ItemSeparatorComponent={this.renderSeperator}
				/>
				{this.renderItem(Constants.drawerMiddleData)}
				{this.renderSeperator()}
				{this.renderItem(Constants.drawerLogoutData)}
				{this.renderSeperator()}
				<FlatList
					style={StyleSheet.flatten([styles.listContainer, this.props.style])}
					contentContainerStyle={styles.listContentContainerStyle}
					renderItem={({ item }) => this.renderItem(item)}
					data={Constants.drawerBottomData}
					keyExtractor={item => item.routeName}
					ItemSeparatorComponent={this.renderSeperator}
				/>
			</ScrollView>
		);
	}
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Actions, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(DrawerNavigator);

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.bgDrawer,
		flex: 1,
		flexDirection: "column",
		width: 300,
	},
	contentContainerStyle: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "space-evenly",
	},
	listContainer: {
		flex: 1,
		alignSelf: "stretch",
		paddingVertical: 30,
	},
	listContentContainerStyle: {
		flex: 1,
		justifyContent: "center",
	},
	drawerButton: {
		paddingVertical: 20,
		alignSelf: "stretch",
		marginLeft: 46,
	},
	text: {
		color: Colors.bodyPrimaryLight,
		fontSize: 12,
	},
	tabBarButton: {
		justifyContent: "center",
		alignItems: "center",
	},
	seperator: {
		borderBottomWidth: 0.5,
		alignSelf: "stretch",
		marginLeft: 46,
	},
});
