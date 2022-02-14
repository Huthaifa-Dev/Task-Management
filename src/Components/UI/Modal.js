import React, { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.scss';

const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal} >
            <Backdrop onClick={props.onClick} />
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {

    return (
        <Fragment>
            {/* {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)} */}
            {ReactDOM.createPortal(
                <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;