import React, { useState } from "react";
import { Text, TouchableNativeFeedback, View, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export default function ButtonComponent({ children }) {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback>
                <View style={styles.touchable}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    touchable: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        elevation: 4,
        borderRadius: 3
    },
    text: {
        alignSelf: "center",
        color: colors.white,
        fontSize: 16,
        textTransform: "uppercase"
    }
});