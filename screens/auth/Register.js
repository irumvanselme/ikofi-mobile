import React from "react";

import FormControl from "../../components/FormControl";
import ButtonComponent from "../../components/ButtonComponent";
import AuthScreenLayout from "../../layouts/AuthScreen";
import { ScrollView } from "react-native";
import { colors } from "../../constants/colors";

export default function RegisterScreen() {
	return (
		<ScrollView style={{ backgroundColor: colors.white }}>
			<AuthScreenLayout
				title="Register into Ikofi"
				linkText={"Already have an account ?"}
				onClickLinkGoTo="Login"
			>
				<FormControl label="Full names" placeholder="eg: John Doe" />
				<FormControl label="Email" placeholder="eg: john@ikofi.rw" />
				<FormControl label="Username" placeholder="eg: john" />
				<FormControl label="Password" placeholder="password" password />
				<ButtonComponent>register</ButtonComponent>
			</AuthScreenLayout>
		</ScrollView>
	);
}
