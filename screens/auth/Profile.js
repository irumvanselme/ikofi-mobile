import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { colors } from "../../constants/colors";
import Screen from "../../layouts/Screen";

export default function ProfileScreen() {
	return (
		<Screen style={styles.page}>
			<View style={styles.basicProfile}>
				<Text>I am the profile screen ... </Text>
			</View>
			<View style={styles.details}>
				<Text>Details</Text>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	page: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		backgroundColor: colors.primary,
		padding: 0,
	},
	basicProfile: {
		height: 200,
	},
	details: {
		backgroundColor: colors.white,
		flexGrow: 1,
	},
});
