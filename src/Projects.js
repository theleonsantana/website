import React from 'react';
import { Container, Grid } from '@material-ui/core';
import InnerNav from './components/InnerNav';

const Projects = () => {
	return (
		<Container maxWidth="lg" style={{ padding: 20 }}>
			<Grid container spacing={5}>
				<InnerNav />
			</Grid>
		</Container>
	);
};

export default Projects;
