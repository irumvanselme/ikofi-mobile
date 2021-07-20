import React, { useState } from "react";

import FormControl from "../../components/FormControl";
import ButtonComponent from "../../components/ButtonComponent";
import AuthScreenLayout from "../../layouts/AuthScreen";
import { ScrollView } from "react-native";
import { colors } from "../../constants/colors";
import Validator from "../../utils/validator";
import { Alert } from "react-native";
import { AuthService } from "../../services/AuthService";
import { AuthController } from "../../utils/AuthController";

export default function RegisterScreen() {
	const [full_name, setFullNames] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [errors, setErrors] = useState({
		full_name: [],
		email: [],
		username: [],
		password: [],
	});

	const registerUser = async () => {
		try {
			let valid = new Validator(
				{ full_name, email, username, password },
				{
					full_name: "required|string|min:3",
					email: "required|email|min:3",
					username: "required|string|min:3",
					password: "required|string|min:3",
				}
			);

			if (valid.fails()) return setErrors(valid.errors.all());

			setErrors({
				full_name: [],
				email: [],
				username: [],
				password: [],
			});

			await AuthService.register({
				...valid.input,
				pin: 12345,
			});

			let { data } = await AuthService.login({
				login: email,
				password: password,
			});

			AuthController.storeToken(data.data.token);
		} catch (error) {
			Alert.alert(error.response.data.message);
		}
	};

	return (
		<ScrollView style={{ backgroundColor: colors.white }}>
			<AuthScreenLayout
				title="Register into Ikofi"
				linkText={"Already have an account ?"}
				onClickLinkGoTo="Login"
			>
				<FormControl
					label="Full names"
					placeholder="eg: John Doe"
					handler={setFullNames}
					errors={errors.full_name}
				/>
				<FormControl
					label="Email"
					placeholder="eg: john@ikofi.rw"
					handler={setEmail}
					errors={errors.email}
				/>
				<FormControl
					label="Username"
					placeholder="eg: john"
					handler={setUsername}
					errors={errors.username}
				/>
				<FormControl
					label="Password"
					placeholder="Password"
					password
					handler={setPassword}
					errors={errors.password}
				/>
				<ButtonComponent onClick={registerUser}>
					register
				</ButtonComponent>
			</AuthScreenLayout>
		</ScrollView>
	);
}
