import { Link, styled } from '@material-ui/core';
import React from 'react';

import Nav from './Nav';

const NavContainer = styled(`div`)(({ theme }) => ({
	display: `flex`,
	flexFlow: `row nowrap`,
	justifyContent: `space-between`,
	alignItems: `flex-start`,
	width: `60%`,
	marginTop: 150,
	position: `fixed`,
}));

const InnerNav = () => {
	return (
		<NavContainer>
			<Link href="/" color="secondary" variant="body2">
				Home
			</Link>
			{/* <Link href="#" color="secondary" variant="body1" style={{ fontSize: 20 }}>
				say hi! <br />
				hi@leonsantana.com
			</Link> */}
			<Nav size={20} />
		</NavContainer>
	);
};

export default InnerNav;
