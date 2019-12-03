import React from 'react';

export default function Header({ loggedIn, logoutFunction}){
	return(
		<header>
			<nav>
				{loggedIn && <a href="/">Home</a>}
				{!loggedIn && <a href="/login">Login</a>}
				{loggedIn && <a onClick={() => logoutFunction()}>Log out</a>}
				{!loggedIn && <a href="/sign-up">Sign Up</a>}
			</nav>
		</header>
	);
}