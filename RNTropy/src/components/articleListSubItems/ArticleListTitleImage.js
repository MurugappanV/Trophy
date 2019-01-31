import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "../../asset";

export default function ArticleListTitleImage() {
    return <View style={styles.container} >
        <Text>{"title"}</Text>
    </View>;
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: Colors.bgPrimaryLight,
        borderBottomWidth: 1,
        flex: 1,
        alignSelf: "center",
    },
});
