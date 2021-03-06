import React, { useState } from "react";

import AuthScreenLayout from "../../layouts/AuthScreen";
import FormControl from "../../components/FormControl";
import ButtonComponent from "../../components/ButtonComponent";
import { AuthService } from "../../services/AuthService";
import { Alert } from "react-native";
import { AuthController } from "../../utils/AuthController";
import Validator from "../../utils/validator";

export default function LoginScreen() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const [errors, setErrors] = useState({
		login: [],
		password: [],
	});

	const loginHandler = async () => {
		try {
			let valid = new Validator(
				{ login, password },
				{
					login: "required|string|min:3",
					password: "required|string|min:3",
				}
			);

			if (valid.fails()) return setErrors(valid.errors.all());

			setErrors({
				login: [],
				password: [],
			});

			let { data } = await AuthService.login(valid.input);
			AuthController.storeToken(data.data.token);
		} catch (error) {
			Alert.alert(error.response.data.message);
		}
	};

	return (
		<AuthScreenLayout
			title="Log in into Ikofi"
			linkText="Don't have an account"
			onClickLinkGoTo="Register"
		>
			<FormControl
				label="Email, username or Mobile"
				placeholder="Email, username, phone"
				handler={setLogin}
				errors={errors.login}
			/>
			<FormControl
				label="Password"
				placeholder="Password"
				handler={setPassword}
				password
				errors={errors.password}
			/>
			<ButtonComponent onClick={loginHandler}>Log in</ButtonComponent>
		</AuthScreenLayout>
	);
}
