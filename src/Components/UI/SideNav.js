import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styles from './SideNav.module.scss'
import { FcHome, FcParallelTasks, FcAbout, FcNews } from "react-icons/fc";


function SideNav() {




    return (
        <Fragment>
            <div className={styles.logo}>
                <img alt="🗒️" aria-label="🗒️" src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f5d2-fe0f.svg"></img>
            </div>
            <div className={styles.sideNav}>
                <Link to="/home"> <FcHome /> <p>Home</p></Link>
                <Link to="/board"> <FcParallelTasks /> <p>Tasks</p></Link>
                <Link to="/about"> <FcAbout /> <p>About</p></Link>
                <Link to="/updates"> <FcNews /> <p>Updates</p></Link>
            </div>
        </Fragment>

    )
}

export default SideNav