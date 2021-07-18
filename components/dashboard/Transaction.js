import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

export default function Transaction({ transaction }) {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.receiversName}>Kalisa Augustin</Text>
				<Text style={styles.time}>A few seconds Ago</Text>
			</View>
			<View>
				<Text style={styles.francs}>+25, 000</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#eee",
		padding: 20,
		borderRadius: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	receiversName: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#505050",
	},
	time: {
		color: "gray",
		fontSize: 14,
		marginTop: 5,
	},
	francs: {
		color: "red",
		fontWeight: "bold",
		fontSize: 16,
	},
});
