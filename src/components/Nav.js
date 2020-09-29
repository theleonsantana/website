import { Link, styled } from '@material-ui/core';
import React from 'react';

const NavContainer = styled(`div`)(({ theme }) => ({
	display: `flex`,
	flexFlow: `column nowrap`,
	'& *:not(:last-child)': {
		marginBottom: 20,
	},
}));

const Nav = () => {
	return (
		<NavContainer>
			<Link href="/about" color="secondary" variant="body1">
				About
			</Link>
			<Link href="/projects" color="secondary" variant="body1">
				Projects
			</Link>
			<Link href="#" color="secondary" variant="body1">
				Contact
			</Link>
		</NavContainer>
	);
};

export default Nav;
