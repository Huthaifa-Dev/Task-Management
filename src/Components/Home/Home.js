import React from 'react'
import Button from '../UI/Button';
// import Layout from '../UI/Layout';
import styles from './Home.module.scss';
import photo from '../../assets/Asset 1.png';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();
    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <img src={photo} alt='todo' />
            </div>
            <div className={styles.controls}>
                <Button onClick={() => navigate('/board')}>Start Tasking</Button>
            </div>
        </div>
    )
}

export default Home