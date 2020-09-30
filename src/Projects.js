import React from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import InnerNav from './components/InnerNav';

const Projects = () => {
	return (
		<Container maxWidth="lg" style={{ padding: 20 }}>
			<Grid container spacing={5}>
				<InnerNav />
			</Grid>
			<Typography>Projects</Typography>
		</Container>
	);
};

export default Projects;
