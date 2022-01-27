import React from "react";

const Tag = (props) => {
    return <p className={`todo-item__tag ${props.tag.replace(/\s+/g, '').toLowerCase()}`}>{props.tag}</p>
}

export default Tag;