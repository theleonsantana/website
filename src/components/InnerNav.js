import { Link, styled } from '@material-ui/core';
import React from 'react';

const NavContainer = styled(`div`)(({ theme }) => ({
	display: `flex`,
	flexFlow: `row nowrap`,
	justifyContent: `space-between`,
	alignItems: `flex-end`,
	width: `inherit`,
	marginTop: 150,
}));

const Nav = () => {
	return (
		<NavContainer>
			<Link href="/" color="secondary" variant="body2">
				Home
			</Link>
			<Link href="#" color="secondary" variant="body1" style={{ fontSize: 20 }}>
				say hi! <br />
				hi@leonsantana.com
			</Link>
		</NavContainer>
	);
};

export default Nav;
