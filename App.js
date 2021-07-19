import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./constants/colors";
import Home from "./screens/Home";
import LoginScreen from "./screens/auth/Login";
import RegisterScreen from "./screens/auth/Register";
import DashboardScreen from "./screens/dashboard/Dashboard";
import ProfileScreen from "./screens/auth/Profile";
import LearningScreen from "./screens/Learn";

export default function App() {
	let App;
	let show = "Learning";
	switch (show) {
		case "Home":
			App = Home;
			break;
		case "Login":
			App = LoginScreen;
			break;
		case "Register":
			App = RegisterScreen;
			break;
		case "Dashboard":
			App = DashboardScreen;
			break;
		case "Profile":
			App = ProfileScreen;
			break;
		case "Learning":
			App = LearningScreen;
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
