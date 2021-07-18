import React from "react";
import { Image, View, StyleSheet } from "react-native";

export default function Logo() {
    return (
        <View>
            <Image source={require("../../assets/logo.png")} resizeMode="contain" style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    }
})