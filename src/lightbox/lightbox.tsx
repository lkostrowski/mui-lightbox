import React, {
	HTMLAttributes,
	KeyboardEventHandler,
	MouseEventHandler,
	useCallback,
	useState,
} from 'react';
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

interface ControlledLightboxProps {
	onPrevious(): unknown;
	onNext(): unknown;
	activeImage: number;
}

interface StatefulLightboxProps {
	initialImage?: number;
}

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
		left: theme.spacing(2),
		top: '50%',
		transform: 'translateY(-50%)',
		background: theme.palette.action.selected,
		boxShadow: theme.shadows[7],
	},
	nextButton: {
		position: 'absolute',
		right: theme.spacing(2),
		top: '50%',
		transform: 'translateY(-50%)',
		background: theme.palette.action.selected,
		boxShadow: theme.shadows[7],
	},
	titleCard: {
		position: 'absolute',
		bottom: theme.spacing(4),
		padding: theme.spacing(2),
		left: '50%',
		transform: 'translateX(-50%)',
	},
}));

export const LightboxBase = ({
	images,
	TransitionComponent = Fade,
	onPrevious,
	onNext,
	activeImage,
	onKeyDown,
	...props
}: LightboxProps & ControlledLightboxProps) => {
	const styles = useStyles();

	const handlePreviousButtonClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
		() => onPrevious(),
		[],
	);
	const handleNextButtonClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
		() => onNext(),
		[],
	);

	const handleKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>((e) => {
		switch (e.which) {
			case 37:
				onPrevious();
				onKeyDown && onKeyDown(e);
				break;
			case 39:
				onNext();
				onKeyDown && onKeyDown(e);
				break;
			default:
				onKeyDown && onKeyDown(e);
		}
	}, []);

	return (
		<Dialog maxWidth="xl" {...props} onKeyDown={handleKeyDown}>
			{images.map(({ className, ...image }, index) => {
				if (index !== activeImage) {
					return null;
				}

				return (
					<TransitionComponent key={image.src} in={activeImage === index}>
						<div>
							<img className={styles.image} {...image} />
							{image.title && (
								<Card className={styles.titleCard} variant="outlined">
									<Typography variant="caption">{image.title}</Typography>
								</Card>
							)}
						</div>
					</TransitionComponent>
				);
			})}
			<IconButton className={styles.prevButton} onClick={handlePreviousButtonClick}>
				<ChevronLeft />
			</IconButton>
			<IconButton onClick={handleNextButtonClick} className={styles.nextButton}>
				<ChevronRight />
			</IconButton>
		</Dialog>
	);
};

export const Lightbox = (
	props: LightboxProps & StatefulLightboxProps & Partial<ControlledLightboxProps>,
) => {
	const { images, initialImage, onPrevious, onNext, activeImage, ...restProps } = props;
	const [selected, setSelected] = useState(initialImage || 0);

	const handlePreviousImageRequest = useCallback(() => {
		setSelected((sel) => (sel + images.length - 1) % images.length);
	}, [images]);

	const handleNextImageRequest = useCallback(() => {
		setSelected((sel) => (sel + 1) % images.length);
	}, [images]);

	return (
		<LightboxBase
			images={images}
			onPrevious={onPrevious || handlePreviousImageRequest}
			onNext={onNext || handleNextImageRequest}
			activeImage={activeImage || selected}
			{...restProps}
		/>
	);
};
