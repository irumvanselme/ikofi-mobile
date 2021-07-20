import React, { useState } from "react";

import AuthScreenLayout from "../../layouts/AuthScreen";
import FormControl from "../../components/FormControl";
import ButtonComponent from "../../components/ButtonComponent";

export default function LoginScreen() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const loginHandler = () => {
		console.log(login);
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
			/>
			<FormControl label="Password" placeholder="Password" password />
			<ButtonComponent onClick={loginHandler}>Log in</ButtonComponent>
		</AuthScreenLayout>
	);
}
