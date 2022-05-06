import React from 'react'
import style from './UpdateItem.module.scss';
import { BsGithub } from "react-icons/bs";

function UpdateItem(props) {
    return (
        <li className={style.item}>
            <section className={style.description}>
                <h2 className={style.title}>{props.title}</h2>
                <p className={style.description}>{props.description}</p>
            </section>
            <a href={props.link}><BsGithub /></a>
        </li>
    )
}

export default UpdateItem