import { Grid, Typography } from '@material-ui/core';
import React from 'react';

const Transition = () => {
	return (
		<Grid
			container
			justify="center"
			alignContent="center"
			style={{ height: `100vh` }}
		>
			<Typography variant="h1" className="glitchEffect" data-text="L">
				L
			</Typography>
		</Grid>
	);
};

export default Transition;
