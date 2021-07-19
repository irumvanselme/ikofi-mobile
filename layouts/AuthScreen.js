import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function AuthScreenLayout({
	children,
	title,
	linkText,
	onClickLinkGoTo,
}) {
	const navigation = useNavigation();

	const goBack = () => {
		navigation.goBack();
	};

	const navigateToScreen = () => {
		navigation.navigate(onClickLinkGoTo);
	};

	return (
		<Screen>
			<MaterialIcons
				name="navigate-before"
				size={40}
				color="black"
				onPress={goBack}
			/>
			<View style={styles.container}>
				<Text style={styles.header}>{title}</Text>
				<View style={{ margin: 20 }}>{children}</View>
			</View>
			<TouchableOpacity onPress={navigateToScreen}>
				<View>
					<Text style={styles.linkText}>{linkText}</Text>
				</View>
			</TouchableOpacity>
		</Screen>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 50,
	},
	header: {
		fontSize: 30,
		fontWeight: "700",
		color: colors.primary,
		textAlign: "center",
	},
	linkText: {
		color: colors.primary,
		textAlign: "center",
		fontSize: 16,
	},
});
