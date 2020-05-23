import React, { HTMLAttributes, useState } from 'react';
import { Dialog, DialogProps, Fade, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

export interface LightboxProps extends Omit<DialogProps, 'children'> {
  images: Array<{ src: string } & HTMLAttributes<HTMLImageElement>>;
}

const useStyles = makeStyles(() => ({
  image: {
    display: 'block',
    maxWidth: '100%',
    maxHeight: 'calc(100vh - 64px)',
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
}));

export const Lightbox = ({ images, ...props }: LightboxProps) => {
  const [selected, setSelected] = useState(0);
  const styles = useStyles();

  return (
    <Dialog maxWidth="xl" {...props}>
      {images.map((image, index) => {
        if (index !== selected) {
          return null;
        }

        return (
          <Fade key={image.src} in={selected === index}>
            <div>
              <img className={styles.image} src={image.src} />
            </div>
          </Fade>
        );
      })}
      <IconButton
        color="primary"
        className={styles.prevButton}
        onClick={() => {
          setSelected(selected - 1);
        }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={() => setSelected(selected + 1)}
        className={styles.nextButton}
      >
        <ChevronRight />
      </IconButton>
    </Dialog>
  );
};
