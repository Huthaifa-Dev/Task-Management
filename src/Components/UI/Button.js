import './Button.css';

const Button = (props) => {
    const onClick = event => {
        if (props.onClick) {
            event.preventDefault();
            props.onClick();
        }

    }
    let style = `${props.className}`;
    return (
        <button className={style} type={props.type || 'button'} onClick={onClick}>{props.children}</button>
    )

}

export default Button;