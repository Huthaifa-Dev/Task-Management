import React from "react";

const Draggable = (props) => {

    return (
        <div draggable={true} onDragStart={props.onDragStart}>
            {props.children}
        </div>
    )
}

export default Draggable;