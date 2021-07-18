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
                <View>
                    <Logo/>
                    <View  style={styles.texts}>
                        <Text style={{ ...styles.header, color: colors.primary, fontSize: 40 }}>IKOFI</Text>
                        <Text style={styles.header}>Welcome back !</Text>
                        <Text style={styles.slogan}>Send Money without tears</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <ButtonComponent style={{borderRadius: 40, elevation: 0}}>get started</ButtonComponent>
                </View>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "red"
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
        marginTop: 20,
        color: colors.primary
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: 40
    }
})