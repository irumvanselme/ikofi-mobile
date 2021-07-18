import React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

import Screen from "../../layouts/Screen";
import ButtonComponent from "../../components/ButtonComponent";

import { colors } from "../../constants/colors";
import { TouchableOpacity } from "react-native";

export default function ProfileScreen() {
	const user = {
		full_names: "irumva anselme",
		username: "anselme23",
		mobile: "+250 783 384 212",
		email: "andesanselme@gmail.com",
	};

	return (
		<Screen style={styles.page}>
			<View style={styles.basicProfile}>
				<View style={styles.imageContainer}>
					<Image
						source={require("../../assets/profile.jpeg")}
						style={styles.profilePic}
					/>
				</View>
				<Text style={styles.name}>{user.full_names}</Text>
			</View>
			<View style={styles.details}>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Profile Details</Text>
					<View style={styles.cardTableRow}>
						<Text style={styles.rowAttribute}>username</Text>
						<Text style={styles.rowValue}>{user.username}</Text>
					</View>
					<View style={styles.cardTableRow}>
						<Text style={styles.rowAttribute}>Mobile</Text>
						<Text style={styles.rowValue}>{user.mobile}</Text>
					</View>
					<View style={styles.cardTableRow}>
						<Text style={styles.rowAttribute}>email</Text>
						<Text style={styles.rowValue}>{user.email}</Text>
					</View>
				</View>
				<View style={styles.card}>
					<Text style={styles.cardTitle}>Profile Settings</Text>
					<TouchableOpacity style={styles.cardClickable}>
						<Text>Edit Profile </Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cardClickable}>
						<Text>Change password</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.cardClickable}>
						<Text>Change PIN</Text>
					</TouchableOpacity>
				</View>
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
		height: 250,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	imageContainer: {
		borderWidth: 2,
		borderColor: "white",
		padding: 10,
		borderRadius: 100,
		elevation: 20,
	},
	profilePic: {
		width: 100,
		height: 100,
		borderRadius: 50,
	},
	name: {
		fontSize: 18,
		marginTop: 20,
		color: colors.white,
	},
	details: {
		backgroundColor: colors.white,
		flexGrow: 1,
		padding: 20,
	},
	card: {
		elevation: 1,
		borderWidth: 0.5,
		borderColor: "#ddd",
		marginVertical: 20,
		backgroundColor: colors.pureWhite,
		borderRadius: 5,
		paddingVertical: 15,
		paddingHorizontal: 20,
	},
	cardTitle: {
		fontSize: 16,
		borderBottomWidth: 1,
		paddingBottom: 10,
		borderBottomColor: colors.primary,
	},
	cardTableRow: {
		marginVertical: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	rowAttribute: {
		fontSize: 15,
		textTransform: "capitalize",
		fontWeight: "bold",
		color: "#505050",
	},
	rowValue: {
		fontSize: 15,
		color: colors.primary,
	},
	cardClickable: {
		paddingVertical: 10,
		borderRadius: 4,
		marginVertical: 2,
		paddingHorizontal: 20,
		backgroundColor: "#eee",
	},
});
