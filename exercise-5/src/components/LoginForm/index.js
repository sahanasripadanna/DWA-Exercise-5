import React from "react";

export default function LoginForm({ submitFunction }){
	return (
		<div>
		<form onSubmit={e => submitFunction(e)}>
			<label htmlFor="loginEmail">Email</label>
			<input type="email" name="loginEmail" placeholder="email"></input>
			<label htmlFor="loginPassword">Password</label>
			<input type="password" name="loginPassword"></input>
			<button>Log In</button>

		</form>
	</div>
	)
}