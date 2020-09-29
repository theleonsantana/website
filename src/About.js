import React from 'react';
import { Container, Grid, Typography, Link, styled } from '@material-ui/core';
import InnerNav from './components/InnerNav';

import ProfilePicture from './images/L-perfil.jpg';

const ProfileImage = styled(`img`)(({ theme }) => ({
	width: `100%`,
	marginTop: 40,
}));

const About = () => {
	return (
		<Container maxWidth="lg" style={{ padding: 20 }}>
			<Grid container spacing={5} justify="center">
				<InnerNav />
				<Grid item md={8} style={{ marginTop: 200 }}>
					<Typography variant="h2" style={{ marginTop: 90 }}>
						This is my story.
					</Typography>
					<ProfileImage
						src={ProfilePicture}
						alt="frontal shot of Leonardo Santana"
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
					<Typography variant="body2" style={{ marginTop: 40 }}>
						Development using:
					</Typography>
					<Grid item container>
						<Grid item md>
							<Typography>JavaScript</Typography>
							<Typography>TypeScript</Typography>
							<Typography>MaterialUI</Typography>
							<Typography>SQL</Typography>
						</Grid>
						<Grid item md>
							<Typography>React</Typography>
							<Typography>Redux</Typography>
							<Typography>Node</Typography>
							<Typography>Postgresql</Typography>
						</Grid>
						<Grid item md>
							<Typography>NPM / Yarn</Typography>
							<Typography>AWS EC2</Typography>
							<Typography>Git</Typography>
							<Typography>WordPress PHP </Typography>
						</Grid>
						<Grid item md>
							<Typography>Ruby</Typography>
							<Typography>Rails</Typography>
						</Grid>
					</Grid>
					<Typography variant="body2" style={{ marginTop: 40 }}>
						Online profiles
					</Typography>
					<Grid item md container direction="column">
						<Link href="/about" color="secondary" variant="body1">
							GitHub
						</Link>
						<Link href="/about" color="secondary" variant="body1">
							LinkedIn
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
