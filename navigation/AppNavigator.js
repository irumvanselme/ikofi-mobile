import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import DashboardScreen from "../screens/dashboard/Dashboard";
import ProfileScreen from "../screens/auth/Profile";
import SendMoneyScreen from "../screens/money/Send";
import navigationTheme from "./navigationTheme";
import SendMoneyButton from "../components/SendMoneyButton";

const Tabs = createBottomTabNavigator();

const TabNavigator = () => (
	<Tabs.Navigator
		lazy={true}
		tabBarOptions={{
			labelStyle: {
				fontSize: 15,
			},
			style: {
				height: 70,
			},
			tabStyle: {
				paddingVertical: 10,
			},
			iconStyle: {
				paddingBottom: 5,
				marginTop: 5,
			},
		}}
	>
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
		<Tabs.Screen
			options={{
				tabBarButton: () => <SendMoneyButton />,
			}}
			name="Send"
			component={SendMoneyScreen}
		/>
		<Tabs.Screen
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name="account"
						size={size}
						color={color}
					/>
				),
			}}
			name="Profile"
			component={ProfileScreen}
		/>
	</Tabs.Navigator>
);

export default function AppNavigator() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<TabNavigator />
		</NavigationContainer>
	);
}
