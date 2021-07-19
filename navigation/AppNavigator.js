import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DashboardScreen from "../screens/dashboard/Dashboard";
import ProfileScreen from "../screens/auth/Profile";
import SendMoneyScreen from "../screens/money/Send";
import navigationTheme from "./navigationTheme";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => (
	<Tabs.Navigator tabBarOptions={{}}>
		<Tabs.Screen
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name="home"
						size={size}
						color={color}
					/>
				),
			}}
			name="Home"
			component={DashboardScreen}
		/>
		<Tabs.Screen name="Send" component={SendMoneyScreen} />
		<Tabs.Screen name="Profile" component={ProfileScreen} />
	</Tabs.Navigator>
);

export default function AppNavigator() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<TabNavigator />
		</NavigationContainer>
	);
}
