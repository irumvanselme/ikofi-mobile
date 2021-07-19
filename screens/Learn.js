import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import { View, Text } from "react-native";
import Screen from "../layouts/Screen";
import { Button } from "react-native";

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

const TweetDetails = ({ route }) => (
	<Screen>
		<Text>I am the Tweet details {route.params.id}</Text>
	</Screen>
);

const Stack = createStackNavigator();

const config = {
	animation: "spring",
	config: {
		stiffness: 1000,
		damping: 500,
		mass: 3,
		overshootClamping: true,
		restDisplacementThreshold: 0.01,
		restSpeedThreshold: 0.01,
	},
};

const StackNavigator = () => (
	<Stack.Navigator
		screenOptions={{
			headerShown: false,
			gestureDirection: "vertical",
			transitionSpec: {
				open: config,
				close: config,
			},
		}}
	>
		<Stack.Screen name="Tweets" component={Tweets} />
		<Stack.Screen name="TweetDetails" component={TweetDetails} />
	</Stack.Navigator>
);

export default function LearningScreen() {
	return (
		<NavigationContainer>
			<StackNavigator />
		</NavigationContainer>
	);
}
