import React, { PureComponent } from "react";
import { ScrollView, FlatList, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { NavigationRoute } from "react-navigation";
import Icon from "../asset/fonts/icons";
import { Metrics, Colors, NavigationIconMap, Images, Constants } from "../asset";
import { Separator, Line } from "../components";

type Props = {
	activeTintColor: string,
	inactiveTintColor: string,
	navigation: any,
};

export default class DrawerNavigator extends PureComponent<Props> {
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

	renderItem = (item: object, navigation: object) => {
		return (
			<TouchableOpacity
				style={styles.drawerButton}
				onPress={() => {
					navigation.navigate(item.routeName);
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
		const { navigation, style } = this.props;
		return (
			<ScrollView
				style={[styles.container, style]}
				contentContainerStyle={styles.contentContainerStyle}
			>
				<FlatList
					style={StyleSheet.flatten([styles.listContainer, this.props.style])}
					contentContainerStyle={styles.listContentContainerStyle}
					renderItem={({ item }) => this.renderItem(item, navigation)}
					data={Constants.drawerTopData}
					keyExtractor={(item, index) => item.routeName}
					ItemSeparatorComponent={this.renderSeperator}
				/>
				{this.renderItem(Constants.drawerMiddleData, navigation)}
				{this.renderSeperator()}
				<FlatList
					style={StyleSheet.flatten([styles.listContainer, this.props.style])}
					contentContainerStyle={styles.listContentContainerStyle}
					renderItem={({ item }) => this.renderItem(item, navigation)}
					data={Constants.drawerBottomData}
					keyExtractor={(item, index) => item.routeName}
					ItemSeparatorComponent={this.renderSeperator}
				/>
			</ScrollView>
		);
	}
}

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
