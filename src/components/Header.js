import { Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
	return (
		<div className="main-header">
			<div className="vertical-header">
				<Typography variant="h1">L</Typography>
			</div>
			<nav className="horizontal-nav">Something Here</nav>
		</div>
	);
};

export default Header;
