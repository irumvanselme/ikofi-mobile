import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Transaction from "./Transaction";

export default function Transactions() {
	const transactions = ["Transaction One"];

	return (
		<View>
			<Text style={styles.head}>Transactions </Text>
			<View style={styles.body}>
				{transactions.map((transaction, i) => (
					<Transaction key={i} transaction={transactions} />
				))}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	head: {
		fontSize: 20,
		fontWeight: "bold",
		color: "gray",
	},
	body: {
		paddingTop: 20,
	},
});
