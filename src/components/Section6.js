import React, { useEffect } from 'react';
import timelineData from '../data/timelineData.json';
import styles from "../styles/Section6.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import icon3 from '../images/icon3.png'
gsap.registerPlugin(ScrollTrigger);

const Section6= ()=> {
    useEffect(()=>{
        var t1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#title",
                start: "0 80%",
                end: "0px 80%",
                toggleActions: "restart none none none"
            }
        });
        
        t1.fromTo(
            "#title", 
            { x: -1000, scale: 0, opacity: 0 }, 
            { x: 0, scale: 1, opacity: 1, duration: 1.5 } 
        );
    
    }, []);

    return (
        <div className={styles.full}>
        <div className={styles.timelineSection}>
            <div id='title'>
            <div className={styles.subTitle}>Wrong with self-improvement & how we're fixing it.</div>
            <div className={styles.mainTitle}>
                Self-improvement. Ugh.
                <img className={styles.icon3} src={icon3} alt="" />
            </div>
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
