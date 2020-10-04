import { Link, styled } from '@material-ui/core';
import React, { useState } from 'react';

const NavContainer = styled(`div`)(({ theme }) => ({
	display: `flex`,
	flexFlow: `column nowrap`,
	'& *:not(:last-child)': {
		marginBottom: 20,
	},
}));

const Nav = ({ size }) => {
	const [email, setEmail] = useState('');

	const handleCopy = (e) => {
		setEmail(e.target.getAttribute('data-info'));
	};
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
				onClick={handleCopy}
				color="secondary"
				variant="body1"
				style={{ fontSize: size, cursor: `pointer` }}
				data-info="hi@leonsantana.com"
			>
				Contact
			</Link>
		</NavContainer>
	);
};

export default Nav;
