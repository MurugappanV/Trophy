import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Article } from "../../components";

export default function ArticleListUI(props: Props) {
    return (
        <ScrollView style={styles.container}>
            <Article />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})