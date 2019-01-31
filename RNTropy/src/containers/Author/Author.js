import React, { PureComponent } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { ProfileHeader } from "../../components";
import { ScalePerctFullWidth, ScalePerctFullHeight, Colors } from "../../asset";
import { AuthorInfo, BuildFeedButton } from "../../components";

class Author extends PureComponent {
	state = {
		imageUrl: "https://facebook.github.io/react-native/docs/assets/favicon.png",
	};

	render() {
		const { imageUrl } = this.state;
		return (
			<View style={styles.container}>
				<ProfileHeader
					onAction={() => {}}
					actionLabel={"Skip"}
					onBack={() => {}}
					page={"1"}
				/>
				<View style={styles.authorDetails}>
					<Image
						style={styles.image}
						source={{
							uri: "https://facebook.github.io/react-native/docs/assets/favicon.png",
						}}
					/>
					<View style={styles.textInfo}>
						<AuthorInfo
							authorName={"Author name"}
							storyCount={"storyCount"}
							followers={"followers"}
						/>
						<View>
							<BuildFeedButton title={"Follow"} style={styles.followButton} />
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		//alignItems: "center",
		//justifyContent: "center",
	},
	authorDetails: {
		flexDirection: "row",
		width: ScalePerctFullWidth(100),
	},
	image: {
		height: ScalePerctFullWidth(32),
		width: ScalePerctFullWidth(32),
		marginLeft: ScalePerctFullWidth(6),
		marginTop: ScalePerctFullHeight(4),
		borderRadius: ScalePerctFullWidth(15),
	},
	textInfo: {
		backgroundColor: Colors.bgPrimaryLight,
		width: ScalePerctFullWidth(100),
	},
	followButton: {
		height: ScalePerctFullHeight(6),
		width: ScalePerctFullWidth(44),
		marginLeft: ScalePerctFullWidth(7),
		marginTop: ScalePerctFullHeight(4),
	},
});

export default Author;
