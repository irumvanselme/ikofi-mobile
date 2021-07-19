import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import LoginScreen from "../screens/auth/Login";
import RegisterScreen from "../screens/auth/Register";
import navigationTheme from "./navigationTheme";

const Stack = createStackNavigator();

const StackNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name="Home" component={Home} />
		<Stack.Screen name="Login" component={LoginScreen} />
		<Stack.Screen name="Register" component={RegisterScreen} />
	</Stack.Navigator>
);

export default function AuthNavigation() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<StackNavigator />
		</NavigationContainer>
	);
}
