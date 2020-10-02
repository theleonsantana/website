import React from 'react';
import { Container, Grid, Link, Typography } from '@material-ui/core';
import InnerNav from './components/InnerNav';

const Projects = () => {
	return (
		<Container maxWidth="lg" style={{ padding: 20 }}>
			<Grid container spacing={5} justify="center">
				<InnerNav />
				<Grid item md={8} style={{ marginTop: 200 }}>
					<Typography variant="h2" style={{ marginTop: 90 }}>
						My projects.
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={5}
				justify="center"
				style={{ marginTop: 40, marginBottom: 100 }}
			>
				<Grid item md={4}>
					<Link href="/single-project-id" color="secondary">
						<img
							src="https://www.smartr365.com/wp-content/uploads/2017/12/Background-Placeholder-2.png"
							alt="placeholder"
							style={{ width: `100%` }}
						/>
						<Typography variant="body1" style={{ marginTop: 15 }}>
							Project Title
						</Typography>
						<Typography variant="body1" style={{ marginTop: 10, fontSize: 15 }}>
							Brief description
						</Typography>
					</Link>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Projects;
