import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import { colors } from "../constants/colors";

export default function () {
	const navigatiom = useNavigation();

	return (
		<TouchableNativeFeedback
			background={TouchableNativeFeedback.Ripple("white", false)}
			onPress={() => navigatiom.navigate("Send")}
		>
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.text}>SEND</Text>
				</View>
			</View>
		</TouchableNativeFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primary,
		width: 80,
		height: 80,
		borderRadius: 40,
		bottom: 22,
		elevation: 2,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	textContainer: {
		width: 70,
		height: 70,
		borderRadius: 35,
		backgroundColor: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontWeight: "bold",
		fontSize: 20,
		color: colors.primary,
	},
});
