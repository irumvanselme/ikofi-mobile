import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View, Text } from "react-native";
import Screen from "../layouts/Screen";
import { Button } from "react-native";
import { colors } from "../constants/colors";
import navigationTheme from "../navigation/navigationTheme";

const Tweets = () => {
	const navigation = useNavigation();
	return (
		<Screen>
			<Text>I am the Tweats</Text>
			<Button
				title="View details"
				onPress={() => navigation.navigate("TweetDetails", { id: 4 })}
			/>
		</Screen>
	);
};

const TweetDetails = () => (
	<Screen>
		<Text>I am the Tweet details</Text>
	</Screen>
);

const Home = () => (
	<Screen>
		<Text>I am at the Home </Text>
	</Screen>
);

const SendMoney = () => (
	<Screen>
		<Text>I am the send money page </Text>
	</Screen>
);

const Profile = () => (
	<Screen>
		<Text>I am the profile screen</Text>
	</Screen>
);

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const StackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
			gestureDirection: "vertical",
		}}
	>
		<Stack.Screen name="Tweets" component={Tweets} />
		<Stack.Screen name="TweetDetails" component={TweetDetails} />
	</Stack.Navigator>
);

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
			component={Home}
		/>
		<Tabs.Screen name="Send" component={SendMoney} />
		<Tabs.Screen name="Profile" component={Profile} />
	</Tabs.Navigator>
);

export default function LearningScreen() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<TabNavigator />
		</NavigationContainer>
	);
}
