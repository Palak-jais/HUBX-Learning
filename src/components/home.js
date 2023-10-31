import React from "react";
import { Link } from "react-router-dom";
import styles from './ui.module.css';
export default function Home(){
    return <div>
        <h1 className={styles.header}>HUBX LEARNING STUFFS</h1>
        <div className={styles.stuffs}>
            <h2><Link to='/form' className={styles.btn}>Formik Forms</Link></h2>
        </div>
    </div>
}