import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "../layouts/Screen";
import Logo from "../components/logo/Logo";
import { colors } from "../constants/colors";
import ButtonComponent from "../components/ButtonComponent";

export default function () {
    return (
        <Screen>
            <View style={styles.container}>
                <Logo/>
                <View  style={styles.texts}>
                    <Text style={styles.header}>IKOFI</Text>
                    <Text style={styles.header}>Welcome back !</Text>
                    <Text style={styles.slogan}>Send Money without tears</Text>
                </View>
                <View>
                    <ButtonComponent>Click me</ButtonComponent>
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 100
    },
    texts: {
        marginTop: 50
    },
    header: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30
    },
    slogan: {
        textAlign: "center",
        marginTop: 30,
        color: colors.primary
    }
})