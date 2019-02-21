import React, { PureComponent } from "react";
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ProfileHeader, Article, ListLoading } from "../../components";
import { Colors, ScalePerctFullWidth, ScalePerctFullHeight, TemplateConfig } from "../../asset";
import { SearchApi } from "../../service";

class Search extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			result: [],
			loading: true,
			refresh: false,
			searchKey: "",
			finishTyping: false,
		};
	}

	componentDidMount() {
		this.textInputRef.focus();
	}

	onSuccess = (result: array) => {
		this.setState({ result, loading: false });
	};

	onFailure = (message: string) => {
		console.log(message);
	};

	onError = (error: any) => {
		console.log("Error occured in BookmarkShow Api ", error);
	};

	beforeSearch = () => {
		const { navigation } = this.props;
		const { searchKey } = this.state;
		console.log("before search log");
		return (
			<View>
				<ProfileHeader onBack={() => navigation.goBack()} />
				<View style={style.textContainer}>
					<TextInput
						style={style.text}
						autoFocus={true}
						ref={ref => (this.textInputRef = ref)}
						placeholder={"Search your topic"}
						placeholderTextColor={Colors.bgPrimaryDark}
						onChangeText={(text: String) => {
							this.setState({ searchKey: text });
						}}
						onSubmitEditing={() => {
							this.setState({ finishTyping: true });
							SearchApi(searchKey, this.onSuccess, this.onFailure, this.onError);
						}}
					/>
				</View>
			</View>
		);
	};

	searchHeader = (searchKey: string) => {
		console.log("searchKey:", searchKey);
		return (
			<View style={style.searchHeader}>
				<TouchableOpacity
					style={style.touchable}
					onPress={() => this.setState({ finishTyping: false })}
				>
					<Icon
						name="search"
						size={20}
						style={style.searchIcon}
						color={Colors.searchIcon}
					/>
					<Text style={style.searchKey}>{searchKey}</Text>
				</TouchableOpacity>
			</View>
		);
	};

	afterSearch = (searchKey: string) => {
		const { result, loading } = this.state;
		console.log("Results of search:", result);
		return (
			<View style={style.ListItems}>
				{this.searchHeader(searchKey)}
				<FlatList
					data={result}
					style={style.ListItems}
					keyExtractor={(x, i) => i.toString()}
					ListFooterComponent={() => <ListLoading loading={loading} />}
					renderItem={({ item, index }) => (
						<Article
							onPress={() => {}}
							key={index.toString()}
							order={TemplateConfig.articleTemplates[12]}
							settings={TemplateConfig.articleTemplateSettings[12]}
							data={item}
						/>
					)}
				/>
			</View>
		);
	};

	render() {
		const { searchKey, finishTyping } = this.state;
		console.log("search key in render:", searchKey);
		return (
			<View style={style.container}>
				{finishTyping ? this.afterSearch(searchKey) : this.beforeSearch()}
			</View>
		);
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1,
	},
	searchHeader: {
		flexDirection: "row",
		backgroundColor: Colors.searchHeader,
		borderRadius: 20,
		height: ScalePerctFullHeight(6),
		width: ScalePerctFullWidth(94),
		alignSelf: "center",
		marginTop: 25,
	},
	searchIcon: {
		color: Colors.searchIcon,
		marginTop: ScalePerctFullHeight(1.5),
		marginLeft: 10,
	},
	searchKey: {
		marginTop: ScalePerctFullHeight(1.5),
		color: Colors.searchIcon,
		fontFamily: "Quicksand-Bold",
		fontSize: 14,
		marginLeft: 15,
	},
	textContainer: {
		marginTop: 38,
		marginLeft: 21,
	},
	touchable: {
		flexDirection: "row",
	},
	text: {
		fontFamily: "lato-regular",
		color: Colors.bgPrimaryDark,
		fontSize: 32,
	},
	ListItems: {
		flex: 1,
	},
});

export default Search;
