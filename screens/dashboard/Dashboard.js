import React from "react";

import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Screen from "../../layouts/Screen";
import { colors } from "../../constants/colors";
import Transactions from "../../components/dashboard/Transactions";

export default function DashboardScreen() {
	return (
		<Screen style={styles.container}>
			<View style={styles.page}>
				<View style={styles.details}>
					<Text style={styles.greetings}>Good evening Anselme !</Text>
					<Text style={styles.greetings}>Welcome Back</Text>
				</View>
				<View style={styles.transactions}>
					<LinearGradient
						colors={[colors.primary, "#A46DFF"]}
						start={{ x: 0, y: 0.5 }}
						end={{ x: 1, y: 0 }}
						style={styles.balance}
					>
						<View style={{ marginTop: 17 }}>
							<Text style={{ fontSize: 18, color: "white" }}>
								3253
							</Text>
						</View>
						<View>
							<Text style={styles.cardMoney}>4000</Text>
							<Text
								style={{
									textAlign: "right",
									marginTop: 10,
									color: "lightgray",
								}}
							>
								Your Balance
							</Text>
						</View>
					</LinearGradient>
					<View style={styles.transactionContainer}>
						<Transactions />
					</View>
				</View>
			</View>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 0,
		paddingTop: 0,
	},
	page: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		backgroundColor: colors.primary,
	},
	details: {
		flex: 1.5,
		display: "flex",
		justifyContent: "flex-end",
		padding: 20,
		paddingBottom: 90,
	},
	transactions: {
		flex: 5,
		backgroundColor: colors.white,
		borderTopEndRadius: 20,
		borderTopStartRadius: 20,
		elevation: 1,
		padding: 10,
		paddingTop: 20,
	},
	balance: {
		backgroundColor: colors.white,
		height: 150,
		marginHorizontal: 20,
		marginTop: -80,
		elevation: 40,
		borderRadius: 20,
		padding: 20,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	greetings: {
		fontSize: 24,
		fontWeight: "bold",
		color: colors.white,
	},
	transactionContainer: {
		paddingTop: 40,
	},
	cardMoney: {
		fontSize: 50,
		color: colors.white,
		textAlign: "right",
	},
});
