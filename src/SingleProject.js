import React from 'react';
import { Container, Grid, Typography, Link, styled } from '@material-ui/core';
import InnerNav from './components/InnerNav';

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
						justo, vitae condimentum lorem varius eu. Vivamus convallis, mi eget
						luctus ultricies, augue turpis sagittis metus, vel auctor metus
						sapien posuere quam. Vestibulum justo libero, consectetur et nisl
						nec, fermentum ultrices diam. Sed enim mauris, mollis sit amet
						dignissim vel, condimentum in ex.
					</Typography>
					<Grid item container spacing={2}>
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
				</Grid>
			</Grid>
		</Container>
	);
};

export default SingleProject;