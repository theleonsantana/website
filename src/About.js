import React from 'react';
import { Container, Grid, Typography, styled } from '@material-ui/core';
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
				<Grid item md={8}>
					<Typography variant="h2" style={{ marginTop: 90 }}>
						This is my story.
					</Typography>
					<ProfileImage
						src={ProfilePicture}
						alt="frontal shot of Leonardo Santana"
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default About;
