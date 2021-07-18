import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";

export default function ({ children }){
    return (
        <ScrollView style={styles.container}>
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        minHeight: "100%",
        display: "flex",
        padding: 10,
        backgroundColor: "#fafafa"
    }
})