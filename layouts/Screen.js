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
        backgroundColor: "red",
        marginTop: StatusBar.currentHeight,
        minHeight: "100%"
    }
})