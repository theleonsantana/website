import { createMuiTheme } from '@material-ui/core/styles';

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
});

export default Theme;
