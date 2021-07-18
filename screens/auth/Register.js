import React from "react";

import FormControl from "../../components/FormControl";
import ButtonComponent from "../../components/ButtonComponent";
import AuthScreenLayout from "../../layouts/AuthScreen";

export default function RegisterScreen() {
    return (
        <AuthScreenLayout title="Register into Ikofi">
            <FormControl label="Full names" placeholder="eg: John Doe"/>
            <FormControl label="Email" placeholder="eg: john@ikofi.rw"/>
            <FormControl label="Username" placeholder="eg: john"/>
            <FormControl label="Password" placeholder="password" password/>
            <ButtonComponent>register</ButtonComponent>
        </AuthScreenLayout>
    )
}