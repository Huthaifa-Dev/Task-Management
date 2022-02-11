import './Button.css';

const Button = (props) => {
    const onClick = event => {
        if (props.onClick) {
            event.preventDefault();
            props.onClick();
        }

    }
    return (
        <button className={props.className} type={props.type || 'button'} onClick={onClick}>{props.children}</button>
    )

}

export default Button;