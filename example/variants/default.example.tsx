import React, { useState } from 'react';
import {
	Box,
	BoxProps,
	Button,
	ExpansionPanel,
	ExpansionPanelDetails,
	ExpansionPanelSummary,
	Typography,
} from '@material-ui/core';

import { Lightbox } from '../../src';

const images = [
	{
		src:
			'https://images.unsplash.com/photo-1590157678696-a5151f512cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
	},
	{
		src:
			'https://images.unsplash.com/photo-1587613990174-1f14ba3be7cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
	},
	{
		src:
			'https://images.unsplash.com/photo-1590114025443-530951ab7702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
	},
];

const codeExample = `
const images = [
	{
		src:
			'https://images.unsplash.com/photo-1590157678696-a5151f512cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80',
	},
	{
		src:
			'https://images.unsplash.com/photo-1587613990174-1f14ba3be7cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
	},
	{
		src:
			'https://images.unsplash.com/photo-1590114025443-530951ab7702?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
	},
];

<Lightbox onClose={() => setOpen(false)} images={images} open={open} />

`;

export const DefaultExample = (props: BoxProps) => {
	const [open, setOpen] = useState(false);

	return (
		<Box {...props}>
			<Typography paragraph>
				By default you only have to provide `images` prop which is an array of HTMLImageAttributes
				with `src` prop required
			</Typography>
			<Box mb={5}>
				<Button color="primary" variant="contained" onClick={() => setOpen(true)}>
					Open default
				</Button>
			</Box>
			<ExpansionPanel defaultExpanded>
				<ExpansionPanelSummary>
					<Typography>Code example</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<code>
						<pre>{codeExample}</pre>
					</code>
				</ExpansionPanelDetails>
			</ExpansionPanel>
			<Lightbox onClose={() => setOpen(false)} images={images} open={open} />
		</Box>
	);
};
