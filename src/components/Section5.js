import React from 'react'
import styles from '../styles/section5.module.css'
import icon2 from '../images/icon2.png'

const Section5 = () => {
  return (
    <div className={styles.fullPage}>
    <div className={styles.full}>
        <div className={styles.title}>
            <div className={styles.subtitle}>
                Built out of Frustration
            </div>
            <div className={styles.mainTitle}>
                Meet the ahead app
            </div>
        </div>
        <div className={styles.lowerSection}>
            <div className={styles.lowerLeft}>
                <div className={styles.graycircle}>
                    <div className={styles.whitecircle}>
                        <img className={styles.img2} src={icon2} alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.lowerRight}>
                A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.<br/><br/>
                Think of it as a pocket cheerleader towards a better, more fulfilling.
            </div>  
        </div>
    </div>
    </div>
  )
}

export default Section5