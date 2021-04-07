import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
	palette: {
		type: 'dark',
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
		},
		h2: {
			fontFamily: ['DM Serif Display', 'serif'].join(','),
		},
		h3: {
			fontFamily: ['DM Serif Display', 'serif'].join(','),
		},
		body1: {
			fontFamily: ['DM Serif Display', 'serif'].join(','),
			fontSize: 20,
		},
	},
});

export default Theme;
