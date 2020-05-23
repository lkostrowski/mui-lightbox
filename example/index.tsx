import 'react-app-polyfill/ie11';
import * as React from 'react';
import { PropsWithChildren } from 'react';
import * as ReactDOM from 'react-dom';
import {
	Box,
	Container,
	createMuiTheme,
	CssBaseline,
	Divider,
	ThemeProvider,
	Typography,
} from '@material-ui/core';
import { DefaultExample } from './variants/default.example';
import { deepOrange } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: deepOrange,
	},
});

const Wrapper = (props: PropsWithChildren<{}>) => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Container>
			<Box my={4}>
				<Typography variant="h3">Lightbox Demo</Typography>
				<div>{props.children}</div>
			</Box>
		</Container>
	</ThemeProvider>
);

const App = () => {
	return (
		<Wrapper>
			<DefaultExample my={5} />
			<Divider />
		</Wrapper>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
