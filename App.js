import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import AuthNavigation from "./navigation/AuthNavigation";
import AppNavigator from "./navigation/AppNavigator";
import LoadingScreen from "./screens/Loading";

import { colors } from "./constants/colors";
import { AuthController } from "./utils/AuthController";

export default function App() {
	let App = LoadingScreen;

	const [show, setShow] = useState("Auth");

	useEffect(() => {
		(async function () {
			if (await AuthController.isLoggedIn()) {
				setShow("App");
			}
		})();
	}, []);

	switch (show) {
		case "Auth":
			App = AuthNavigation;
			break;
		case "App":
			App = AppNavigator;
			break;
	}

	return (
		<View style={styles.container}>
			<App />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
	},
});
