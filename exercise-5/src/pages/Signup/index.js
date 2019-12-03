import React from "react";
import CreateAccountForm from "../../components/CreateAccountForm";

export default function Signup({signupFunction}){
	return (
		<div>
		<h1>Sign Up</h1>
			<CreateAccountForm signupFunction={signupFunction}/>
		</div>
	)
};