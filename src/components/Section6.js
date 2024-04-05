import React, { useEffect } from 'react';
import timelineData from '../data/timelineData.json';
import styles from "../styles/Section6.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon3 from '../images/icon3.png'
gsap.registerPlugin(ScrollTrigger);

const Section6= ()=> {
    useEffect(()=>{
        var t1 = gsap.timeline({scrollTrigger:{trigger: `.${styles.timelineSection} h5`, start:"0 80%",end: "0px 80%", toggleActions: "restart none reset reverse"}});
        t1.fromTo(`.${styles.timelineSection} h5, .${styles.timelineSection} h2`, {x: -200, opacity:0}, {x:40, opacity: 1, duration: .6, });
        t1.to(`.${styles.timelineSection} h5, .${styles.timelineSection} h2`, {x:0, duration: .3});
    
    }, []);

    return (
        <div className={styles.full}>
        <div className={styles.timelineSection}>
            <div className={styles.subTitle}>Wrong with self-improvement & how we're fixing it.</div>
            <div className={styles.mainTitle}>
                Self-improvement. Ugh.
                <img className={styles.icon3} src={icon3} alt="" />
            </div>
            <div className={styles.timeline}>
                <div className={styles.timelineContent}>
                    {timelineData.map((event, index) => (
                        <div className={styles.timelineItem} key={index}>
                            <div className={styles.eventTitle}>{event.title}</div>
                            <span>{event.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Section6;
