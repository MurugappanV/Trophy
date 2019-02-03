import React, { PureComponent } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationRoute } from "react-navigation";
import Icon from "../asset/fonts/icons";
import { Metrics, Colors, NavigationIconMap, Images } from "../asset";

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
		const iconMap = NavigationIconMap.get(route.routeName);
		return (
			<TouchableOpacity
				onPress={() => this.onTabPress(currentIndex, idx, navigation, route)}
				style={styles.tabBarButton}
				key={route.routeName}
			>
				<Icon name={iconMap.icon} size={iconMap.size} color={color} />
			</TouchableOpacity>
		);
	}

	render() {
		const { inactiveTintColor, navigation, style } = this.props;
		const tabBarButtons = navigation.state.routes.map(this.renderTabBarButton.bind(this));
		return (
			<View style={[styles.container, style]}>
				{tabBarButtons}
				<TouchableOpacity onPress={() => { navigation.toggleDrawer() }} style={styles.tabBarButton} key="berguer">
					<Icon name={Images.menu} size={18} color={inactiveTintColor} />
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
		justifyContent: "space-evenly",
		borderTopWidth: Metrics.LINE_WIDTH,
		borderColor: Colors.linePrimary,
	},
	tabBarButton: {
		justifyContent: "center",
		alignItems: "center",
	},
});
