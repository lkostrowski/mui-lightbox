import React, { useState } from 'react';
import {
	Backdrop,
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

export const BackdropExample = (props: BoxProps) => {
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);

	return (
		<Box {...props}>
			<Typography variant="h4">Disabling backdrop</Typography>
			<Typography paragraph>
				You can pass every prop from Dialog component from MUI. Use `hideBackdrop` prop to disable
				backdrop.
			</Typography>
			<Box mb={5}>
				<Button
					color="primary"
					variant="contained"
					onClick={() => {
						setOpen1(true);
						setOpen2(false);
					}}
				>
					Open without backdrop
				</Button>
				<Button
					color="primary"
					variant="contained"
					onClick={() => {
						setOpen1(false);
						setOpen2(true);
					}}
				>
					Open with custom backdrop.
				</Button>
			</Box>
			<Lightbox onClose={() => setOpen1(false)} images={images} open={open1} hideBackdrop={true} />
			<Lightbox
				onClose={() => setOpen2(false)}
				images={images}
				open={open2}
				BackdropProps={{
					style: {
						background: 'red',
					},
				}}
			/>
		</Box>
	);
};
