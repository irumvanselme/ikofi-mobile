import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Label = ({ label }) => <Text style={styles.label}>{label}</Text>;

export default function FormControl({
	placeholder = "",
	label,
	password = false,
}) {
	const [isPassword, setIsPassword] = useState(password);
	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	return (
		<View>
			{label && <Label label={label} />}
			<View style={styles.container}>
				<View style={{ flexGrow: 1, width: "90%", marginRight: 10 }}>
					<TextInput
						placeholder={placeholder}
						style={styles.input}
						secureTextEntry={isPassword && showPassword}
					/>
				</View>
				{password && (
					<TouchableOpacity
						style={styles.button}
						onPress={handleShowPassword}
					>
						{showPassword ? (
							<Ionicons
								name="eye-off-outline"
								size={24}
								color="black"
							/>
						) : (
							<Ionicons
								name="eye-outline"
								size={24}
								color="black"
							/>
						)}
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		borderWidth: 1.5,
		borderColor: "#cdcdcd",
		borderRadius: 3,
		backgroundColor: colors.pureWhite,
		overflow: "hidden",
		paddingHorizontal: 15,
		paddingVertical: 8,
	},
	label: {
		marginBottom: 5,
		marginTop: 25,
	},
	input: {
		fontSize: 16,
	},
	button: {},
});
