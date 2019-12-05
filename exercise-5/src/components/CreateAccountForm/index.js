import React from "react";

export default function Signup({signupFunction}){
	return (
		<div>
		<form onSubmit={e => signupFunction(e)} netlify>
			<label htmlFor="createEmail">Email</label>
			<input type="email" name="createEmail" placeholder="email"></input>
			<label htmlFor="createPassword">Password</label>
			<input type="password" name="createPassword"></input>
			<button>Create Account</button>

		</form>
	</div>
	);
}