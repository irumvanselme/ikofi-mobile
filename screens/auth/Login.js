import React from "react";
import { Text, View } from "react-native";
import Screen from "../../layouts/Screen";
import AuthScreenLayout from "../../layouts/AuthScreen";
import FormControl from "../../components/FormControl";
import ButtonComponent from "../../components/ButtonComponent";

export default function LoginScreen() {
    return (
        <AuthScreenLayout title="Log in into Ikofi">
            <FormControl label="Email, username or Mobile" placeholder="Email, username, phone"/>
            <FormControl label="Password" placeholder="password" password/>
            <ButtonComponent>Log in</ButtonComponent>
        </AuthScreenLayout>
    )
}