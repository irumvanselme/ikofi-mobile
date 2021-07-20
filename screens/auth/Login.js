import React, { useState } from "react";
import Validator, { setMessages } from "validatorjs";
import en from "validatorjs/src/lang/en";
Validator.setMessages("en", en);

import AuthScreenLayout from "../../layouts/AuthScreen";
import FormControl from "../../components/FormControl";
import ButtonComponent from "../../components/ButtonComponent";
import { AuthService } from "../../services/AuthService";

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

			let { data } = await AuthService.register(login);
			console.log(data);
		} catch (error) {
			console.log(error.response.data);
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
