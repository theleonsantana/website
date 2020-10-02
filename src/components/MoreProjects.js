import React from 'react';
import { Container, Grid, Typography, Link, styled } from '@material-ui/core';
import InnerNav from './InnerNav';

const MoreProjects = () => {
	return (
		<>
			<Typography variant="h3" style={{ marginTop: 90 }}>
				View more projects.
			</Typography>
			<Grid item container spacing={2} style={{ marginBottom: 40 }}>
				<Grid item md>
					<Link href="/single-project-id" color="secondary">
						<img
							src="https://www.smartr365.com/wp-content/uploads/2017/12/Background-Placeholder-2.png"
							alt="placeholder"
							style={{ width: `100%`, marginTop: 40 }}
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
		</>
	);
};

export default MoreProjects;
