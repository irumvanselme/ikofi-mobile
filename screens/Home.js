import React from "react";
import { StyleSheet, Text, ImageBackground, View, Image } from "react-native";
import Screen from "../layouts/Screen";
import { colors } from "../constants/colors";

export default function () {
    return (
        <Screen>
            <Image source={require("../assets/logo.png")} resizeMode="contain" style={{ backgroundColor: "red"}}/>
            <Text>Holla I am anselme</Text>
        </Screen>
    )
}

const styles = StyleSheet.create({})