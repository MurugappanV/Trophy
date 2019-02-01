import React, { PureComponent } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationRoute } from "react-navigation";
import Icon from "../asset/fonts/icons";
import { Metrics, Colors } from "../asset";

type Props = {
	activeTintColor: string,
	inactiveTintColor: string,
	navigation: any,
};

export default class TabBarNavigator extends PureComponent<Props> {
	constructor(props) {
		super(props);
		this.state = {};
	}

	onTabPress = (currentIndex, idx, navigation, route) => {
		if (currentIndex !== idx) {
			navigation.navigate(route.routeName);
		}
	};

	renderTabBarButton(route: NavigationRoute, idx: any) {
		const { activeTintColor, inactiveTintColor, navigation } = this.props;
		const currentIndex = navigation.state.index;
		const color = currentIndex === idx ? activeTintColor : inactiveTintColor;
		return (
			<TouchableOpacity
				onPress={() => this.onTabPress(currentIndex, idx, navigation, route)}
				style={styles.tabBarButton}
				key={route.routeName}
			>
				<Icon name="filledBookmark" size={20} color={color} />
			</TouchableOpacity>
		);
	}

	render() {
		const { inactiveTintColor, navigation, style } = this.props;
		const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton.bind(this));
		return (
			<View style={[styles.container, style]}>
				{tabBarButtons}
				<TouchableOpacity onPress={() => {}} style={styles.tabBarButton} key="berguer">
					<Icon name="filledBookmark" size={20} color={inactiveTintColor} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 50,
		backgroundColor: Colors.bgPrimaryLight,
		flexDirection: "row",
		alignItems: "stretch",
		borderTopWidth: Metrics.LINE_WIDTH,
		borderColor: Colors.linePrimary,
	},
	tabBarButton: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
