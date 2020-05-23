import React, { HTMLAttributes, useState, useCallback, KeyboardEventHandler } from 'react';
import {
	Card,
	Dialog,
	DialogProps,
	Fade,
	Grow,
	IconButton,
	Slide,
	Typography,
	Zoom,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import Collapse from '@material-ui/core/Collapse';

export interface LightboxProps extends Omit<DialogProps, 'children'> {
	images: Array<{ src: string } & HTMLAttributes<HTMLImageElement>>;
	TransitionComponent?: typeof Collapse | typeof Fade | typeof Slide | typeof Grow | typeof Zoom;
}

const useStyles = makeStyles((theme) => ({
	image: {
		display: 'block',
		maxWidth: '100%',
		maxHeight: `calc(100vh - ${theme.spacing(8)}px)`,
	},
	prevButton: {
		position: 'absolute',
		left: 0,
		top: '50%',
		transform: 'translateY(-50%)',
	},
	nextButton: {
		position: 'absolute',
		right: 0,
		top: '50%',
		transform: 'translateY(-50%)',
	},
	titleCard: {
		position: 'absolute',
		bottom: theme.spacing(4),
		padding: theme.spacing(2),
		left: '50%',
		transform: 'translateX(-50%)',
	},
}));

export const Lightbox = ({
	images,
	TransitionComponent = Fade,
	onKeyDown,
	...props
}: LightboxProps) => {
	const [selected, setSelected] = useState(0);
	const styles = useStyles();

	const handlePreviousImageRequest = useCallback(() => {
		setSelected((sel) => (sel + images.length - 1) % images.length);
	}, [images]);

	const handleNextImageRequest = useCallback(() => {
		setSelected((sel) => (sel + 1) % images.length);
	}, [images]);

	const handleKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((e) => {
		switch (e.which) {
			case 37:
				handlePreviousImageRequest();
				onKeyDown && onKeyDown(e);
				break;
			case 39:
				handleNextImageRequest();
				onKeyDown && onKeyDown(e);
				break;
			default:
				onKeyDown && onKeyDown(e);
		}
	}, []);

	return (
		<Dialog maxWidth="xl" {...props} onKeyDown={handleKeyDown}>
			{images.map((image, index) => {
				if (index !== selected) {
					return null;
				}

				return (
					<TransitionComponent key={image.src} in={selected === index}>
						<div>
							<img className={styles.image} src={image.src} />
							{image.title && (
								<Card className={styles.titleCard} variant="outlined">
									<Typography variant="caption">{image.title}</Typography>
								</Card>
							)}
						</div>
					</TransitionComponent>
				);
			})}
			<IconButton className={styles.prevButton} onClick={handlePreviousImageRequest}>
				<ChevronLeft />
			</IconButton>
			<IconButton onClick={handleNextImageRequest} className={styles.nextButton}>
				<ChevronRight />
			</IconButton>
		</Dialog>
	);
};
