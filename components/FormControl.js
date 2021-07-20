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
	errors = [],
	handler = (data) => null,
}) {
	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleChange = (value) => {
		handler(value);
	};

	return (
		<View>
			{label && <Label label={label} />}
			<View
				style={{
					...styles.container,
					borderColor: errors.length == 0 ? "#cdcdcd" : "red",
				}}
			>
				<View style={{ flexGrow: 1, width: "90%", marginRight: 10 }}>
					<TextInput
						placeholder={placeholder}
						style={styles.input}
						secureTextEntry={password && !showPassword}
						onChangeText={handleChange}
					/>
				</View>
				{password && (
					<TouchableOpacity
						style={styles.button}
						onPress={handleShowPassword}
					>
						{!showPassword ? (
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
			{errors.length > 0 && (
				<Text style={styles.errorMessage}>{errors[0]}</Text>
			)}
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
		paddingVertical: 5,
	},
	label: {
		marginBottom: 5,
		marginTop: 18,
	},
	input: {
		fontSize: 16,
	},
	button: {},
	errorMessage: {
		color: "red",
		marginTop: 4,
	},
});
