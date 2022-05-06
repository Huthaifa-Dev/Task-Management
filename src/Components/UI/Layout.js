import React from 'react'
import style from './Layout.module.css'
function Layout(props) {
    return (
        <div className={style.container}>
            <h1 className={style.title}>{props.title}</h1>
            <div className={style.content}>{props.children}</div>
        </div>
    )
}

export default Layout