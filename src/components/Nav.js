import { Link, styled } from '@material-ui/core';
import React from 'react';

const NavContainer = styled(`div`)(({ theme }) => ({
	display: `flex`,
	flexFlow: `column nowrap`,
	'& *:not(:last-child)': {
		marginBottom: 20,
	},
}));

const Nav = ({ size }) => {
	return (
		<NavContainer>
			<Link
				href="/about"
				color="secondary"
				variant="body1"
				style={{ fontSize: size }}
			>
				About
			</Link>
			<Link
				href="/projects"
				color="secondary"
				variant="body1"
				style={{ fontSize: size }}
			>
				Projects
			</Link>
			<Link
				href="#"
				color="secondary"
				variant="body1"
				style={{ fontSize: size }}
			>
				Contact
			</Link>
		</NavContainer>
	);
};

export default Nav;
