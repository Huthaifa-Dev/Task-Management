import React from "react";
import styles from './Tag.module.scss';

const Tag = (props) => {
    const tagType = props.tag.replace(/\s+/g, '').toLowerCase();
    const classes = styles.tag + ' ' + styles[tagType];
    return <p className={classes} value={tagType}>{props.tag}</p>
}

export default Tag;