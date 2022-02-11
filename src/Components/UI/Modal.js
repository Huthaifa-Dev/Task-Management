import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal}>
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;