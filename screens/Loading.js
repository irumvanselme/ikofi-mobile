import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

import Logo from "../components/logo/Logo";

export default function LoadingScreen() {
	return (
		<View style={styles.container}>
			<Logo />
			<Image
				source={require("../assets/loading.gif")}
				style={styles.loadingImage}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "white",
	},
	loadingImage: {
		width: 400,
		height: 100,
		marginTop: 100,
	},
});
