import React, { HTMLAttributes } from 'react';
import { Modal, ModalProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export interface LightboxProps extends Omit<ModalProps, 'children'> {
  images: Array<{ src: string } & HTMLAttributes<HTMLImageElement>>;
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    maxWidth: `calc(100vw - ${theme.spacing(4)}px)`,
    maxHeight: `calc(100vh - ${theme.spacing(4)}px)`,
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    display: 'block',
    objectFit: 'contain',
    height: '100%',
    maxWidth: '100%',
  },
}));

export const Lightbox = ({ images, ...props }: LightboxProps) => {
  const styles = useStyles();

  return (
    <Modal {...props}>
      <div className={styles.wrapper}>
        {images.map((image) => (
          <div className={styles.imageWrapper} key={image.src}>
            <img className={styles.image} src={image.src} />
          </div>
        ))}
      </div>
    </Modal>
  );
};
