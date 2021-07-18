import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";

export default function ({ children }){
    return (
        <View style={styles.container}>
            {children}
        </View>
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