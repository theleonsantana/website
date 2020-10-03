import React from 'react';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import InnerNav from './components/InnerNav';
import MoreProjects from './components/MoreProjects';

const SingleProject = () => {
	return (
		<Container maxWidth="lg" style={{ padding: 20 }}>
			<Grid container spacing={5} justify="center">
				<InnerNav />
				<Grid item md={8} style={{ marginTop: 200, marginBottom: 100 }}>
					<Typography variant="h2" style={{ marginTop: 90 }}>
						Single Project Title..
					</Typography>
					<img
						src="https://www.smartr365.com/wp-content/uploads/2017/12/Background-Placeholder-2.png"
						alt="placeholder"
						style={{ width: `100%`, marginTop: 40 }}
					/>
					<Typography
						variant="body1"
						style={{ marginTop: 40, lineHeight: 1.8 }}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
						rutrum elit vitae imperdiet commodo. Donec vitae egestas dolor. Nam
						bibendum aliquam malesuada. Nulla et nisl felis. Fusce auctor nisi
						justo, vitae condimentum lorem varius eu.
					</Typography>
					<Grid item container spacing={2} style={{ marginBottom: 40 }}>
						<Grid item md>
							<img
								src="https://www.smartr365.com/wp-content/uploads/2017/12/Background-Placeholder-2.png"
								alt="placeholder"
								style={{ width: `100%`, marginTop: 40 }}
							/>
						</Grid>
						<Grid item md>
							<img
								src="https://www.smartr365.com/wp-content/uploads/2017/12/Background-Placeholder-2.png"
								alt="placeholder"
								style={{ width: `100%`, marginTop: 40 }}
							/>
						</Grid>
					</Grid>
					<Link href="#" color="secondary" variant="body1">
						Visit Project
					</Link>
					<MoreProjects />
				</Grid>
			</Grid>
		</Container>
	);
};

export default SingleProject;
