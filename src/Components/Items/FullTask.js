import React from 'react';
import styles from './FullTask.module.scss';
import Tag from './Tag';
import Button from '../UI/Button';
import { TiAttachmentOutline } from "react-icons/ti";
import { AiOutlineComment } from "react-icons/ai";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";

const FullTask = (props) => {
    console.log(props.task)
    const task = props.task
    const navigate = useNavigate();
    const backHandler = () => {
        navigate("/board")
    }
    return (
        <div className={styles.container}>
            <section className={styles.back}>
                <Button onClick={backHandler}>
                    <IoArrowBack />
                    {/* <p>Return to board</p> */}
                </Button>
            </section>

            <div className={styles.task}>
                <section className={styles.title}>
                    <h1>{task.title}</h1>
                    <div className={styles.tag}>
                        <Tag tag={task.tag} />
                    </div>
                </section>
                <section className={styles.description}>
                    <em>{task.description}</em>
                </section>
                <section className={styles.attachments}>
                    <h3>Attachments</h3>
                    <div className={styles.controls}>
                        <Button>
                            <TiAttachmentOutline />
                            <p>Attach</p>
                        </Button>
                    </div>
                </section>
                <section className={styles.comments}>
                    <h3>Comments</h3>

                    <div className={styles.controls}>
                        <Button>
                            <AiOutlineComment />
                            <p>Comment</p>
                        </Button>
                    </div>
                </section>

            </div>
        </div>
    )
}

export default FullTask;