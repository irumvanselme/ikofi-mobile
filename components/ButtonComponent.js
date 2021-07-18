import React from "react";
import { Text, TouchableNativeFeedback, View, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

export default function ButtonComponent({ children, style = {} }) {
    return (
        <View style={styles.container}>
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple("white", false)} style={style}>
                <View style={{...styles.touchable, ...style}}>
                    <Text style={styles.text}>{children}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 30
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