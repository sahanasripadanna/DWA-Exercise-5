import React from "react";

export default function Signup({signupFunction}){
	return (
		<div>
		<form onSubmit={e => signupFunction(e)}>
			<label htmlFor="createEmail">Email</label>
			<input type="email" name="createEmail" placeholder="email"></input>
			<label htmlFor="createPassword">Password</label>
			<input type="password" name="createPassword"></input>
			<button>Log In</button>

		</form>
	</div>
	);
}