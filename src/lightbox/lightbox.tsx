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
    width: `calc(100vw - ${theme.spacing(4)}px)`,
    height: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  image: {
    display: 'block',
    width: '100%',
    objectFit: 'contain',
    height: '100%',
  },
}));

export const Lightbox = ({ images, ...props }: LightboxProps) => {
  const styles = useStyles();

  return (
    <Modal {...props}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={images[0].src} />
      </div>
    </Modal>
  );
};
