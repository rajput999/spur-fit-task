import React from 'react'
import styles from '../styles/section9.module.css'

const Section9 = () => {
  return (
    <div className={styles.full}>
        <div className={styles.subtitle}> We take privacy seriously </div>
        <div className={styles.maintitle}> Before you get started </div>
        <div className={styles.Sbody}>
            "We won't share your answers with anyone (and won't ever tell <br/> you which friends said what about you)"
        </div>
        <div className={styles.sign_P}>
            <p>with love, </p>
            <p className={styles.sign}>Team ahead</p>
        </div>
        <button>Start a test</button>
        <div className={styles.last}>Takes only 5 minutes</div>
    </div>
  )
}

export default Section9