import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import { colors } from "../constants/colors";

export default function ({ children, style = {} }) {
	return <View style={{ ...styles.container, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
	container: {
		paddingTop: StatusBar.currentHeight,
		minHeight: "100%",
		display: "flex",
		padding: 10,
		backgroundColor: colors.white,
	},
});
