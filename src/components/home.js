import React from "react";
import { Link } from "react-router-dom";
import styles from './ui.module.css';
export default function Home(){
    return <div>
        <h1 className={styles.header}>HUBX LEARNING STUFFS</h1>
        <div className={styles.stuffs}>
            <h2><Link to='/form' className={styles.btn}>Formik Forms</Link></h2>
            <h2><Link to='/dynamic' className={styles.btn}>Dynamic Forms</Link></h2>
            <h2><Link to='/mui' className={styles.btn}>Material UI </Link></h2>
        </div>
    </div>
}