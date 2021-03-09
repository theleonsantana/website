import { Grid, Typography, Container } from '@material-ui/core';
import React from 'react';

// import Nav from './components/Nav';

const Home = () => {
	return (
		<Container maxWidth="lg" style={{ padding: 20 }}>
			<Grid
				container
				justify="space-between"
				alignContent="center"
				alignItems="center"
				spacing={5}
				style={{ height: `100vh` }}
			>
				<Grid item md={5}>
					<Typography variant="h1" style={{ lineHeight: `9rem` }}>
						Hi, <br /> I am <br />
						Leo
					</Typography>
				</Grid>
				<Grid item md={5}>
					<Typography variant="body2">Full Stack Software Engineer</Typography>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Home;
