// import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';

// const dmsans = {
// 	fontFamily: 'DM Sans',
// 	fontStyle: 'normal',
// 	fontDisplay: 'swap',
// 	fontWeight: 400,
// 	src: `
//     local('DM Sans'),
//     url(DM Sans) format('woff2')
//   `,
// 	unicodeRange:
// 		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

// const dmserif = {
// 	fontFamily: 'DM Serif Display',
// 	fontStyle: 'normal',
// 	fontDisplay: 'swap',
// 	fontWeight: 400,
// 	src: `
//     local('DM Serif Display'),
//     url(DM Serif Display) format('woff2')
//   `,
// 	unicodeRange:
// 		'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
// };

const Theme = createMuiTheme({
	palette: {
		primary: {
			light: '#FFFFFF',
			main: '#FFFFFF',
			// dark: '#002884',
			// contrastText: '#fff',
		},
		secondary: {
			light: '#000000',
			main: '#000000',
			// dark: '#ba000d',
			// contrastText: '#000',
		},
	},
	typography: {
		fontFamily: [
			'DM Sans',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
		].join(','),
		h1: {
			fontFamily: ['DM Serif Display', 'serif'].join(','),
			fontSize: `10rem`,
		},
		h2: {
			fontFamily: ['DM Serif Display', 'serif'].join(','),
			fontSize: `100px`,
		},
		h3: {
			fontFamily: ['DM Serif Display', 'serif'].join(','),
			fontSize: `40px`,
		},
		body1: {
			fontSize: 20,
		},
		body2: {
			fontFamily: ['DM Serif Display', 'serif'].join(','),
			fontSize: 25,
		},
	},
	// overrides: {
	// 	MuiCssBaseline: {
	// 		'@global': {
	// 			'@font-face': [dmsans, dmserif],
	// 		},
	// 	},
	// },
});

export default Theme;
