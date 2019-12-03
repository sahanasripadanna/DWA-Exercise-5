import React from "react"

import { UserInformation } from "../../components/UserProfileComponents";

export default function UserProfile({ user }){
	console.log(user);
	return (
	<div>
		<h1>User Profile for {user.uid && user.uid}</h1>
		<UserInformation email={user.email ? user.email : "whoops"}/>

	</div>
	);
}