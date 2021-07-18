import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from "../constants/colors";

export default function AuthScreenLayout({ children, title, linkText }){
    return (
        <Screen>
            <MaterialIcons name="navigate-before" size={40} color="black" />
            <View style={styles.container}>
                <Text style={styles.header}>{title}</Text>
                <View style={{margin: 20}}>
                    {children}
                </View>
            </View>
            <View>
                <Text style={styles.linkText}>{linkText}</Text>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    header: {
        fontSize: 30,
        fontWeight: "700",
        color: colors.primary,
        textAlign: "center"
    },
    linkText: {
        color: colors.primary,
        textAlign: "center",
        fontSize: 16
    }
})