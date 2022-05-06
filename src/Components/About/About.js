import React from 'react'
import Layout from '../UI/Layout'
import styles from './About.module.scss';
import { BsFacebook, BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
function About() {
    return (
        <Layout title="About" className="flex-container" >
            <div className={styles.card}>
                <header>
                    <div className={styles.imageContainer}>
                        <img src="https://scontent.fjrs1-2.fna.fbcdn.net/v/t39.30808-6/257668466_3047002025546761_8458408451079680564_n.jpg?_nc_cat=110&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=qoCbDZZDkxQAX_HCnwm&tn=td4Ad95FRh5zg6lJ&_nc_ht=scontent.fjrs1-2.fna&oh=00_AT_HSTeLvpZbPZg3zbTmtRfizlfDKAqUoW0O1GxXuhx6fQ&oe=62793202" />
                    </div>
                    <h2 className={styles.title}>Huthaifa Salman</h2>
                </header>
                <div className={styles.bio}>
                    <p>I'm a frontend React developer, and a software engineering student.
                        This project was made alongside this course <a href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/">React - The Complete Guide</a> and it's a personal project to enhance my skills in react.
                    </p>
                </div>
                <ul className={styles.links}>
                    <li><a href='https://www.facebook.com/huthaifaS418/'><BsFacebook /></a></li>
                    <li><a href='https://www.instagram.com/huthaifa_salman'><BsInstagram /></a></li>
                    <li><a href='https://www.linkedin.com/in/huthaifa-jamal/'><BsLinkedin /></a></li>
                    <li><a href='https://github.com/Huthaifa-Dev'><BsGithub /></a></li>
                </ul>

            </div>
        </Layout>
    )
}

export default About