import React from "react";

import AuthScreenLayout from "../../layouts/AuthScreen";
import FormControl from "../../components/FormControl";
import ButtonComponent from "../../components/ButtonComponent";

export default function LoginScreen() {
	return (
		<AuthScreenLayout
			title="Log in into Ikofi"
			linkText="Don't have an account"
			onClickLinkGoTo="Register"
		>
			<FormControl
				label="Email, username or Mobile"
				placeholder="Email, username, phone"
			/>
			<FormControl label="Password" placeholder="Password" password />
			<ButtonComponent>Log in</ButtonComponent>
		</AuthScreenLayout>
	);
}
