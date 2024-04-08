import React, { useEffect } from 'react';
import styles from "../styles/section10.module.css";
import happyblob from "../images/happyblob.png";
import cardListData from '../data/workWithUs.json';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section10 = () => {
    console.log("hey");

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: `#sectionTitle`,
                start: "top 70%", // Adjusted start position
                end: "bottom 70%", // Adjusted end position
                toggleActions: "restart none none none",
            },
        })
        .fromTo(
            `#sectionTitle`,
            { x: -200, opacity: 0 },
            { x: 0, opacity: .8, duration: 0.6 }
        )
        .fromTo(
            `#companyName`,
            { x: 80, opacity: 0 },
            { x: 0, opacity: .8, duration: 0.6 },
        );

        gsap.timeline({
            scrollTrigger: {
                trigger: `#sec10Content img`,
                start: "top 90%", // Adjusted start position
                end: "bottom 90%", // Adjusted end position
                toggleActions: "restart none reset reverse",
            },
        })
        .fromTo(
            `#sec10Content img`,
            { rotateZ: 30, scale: .9, transformOrigin: "50% 20%" },
            { rotateZ: -30, scale: 1.2, duration: 0.6, repeat: -1, yoyo: true }
        );
    }, []);

    return (
        <div className={styles.section10}>
            <div className={styles.sec10Title}>
                <h2 id="sectionTitle">Work with us</h2>
                <h2 id="companyName">ahead</h2>
            </div>

            <div className={styles.sec10Content} id="sec10Content">
                <div className={styles.sec10Info}>
                    <div className={styles.sec10About}>
                        <img src={happyblob} alt="" />
                        <div style={{fontSize:'1.5rem',fontWeight:'700',margin:'0.6rem 0'}}>About</div>
                        <span>At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</span>
                    </div>
                    <div className={styles.sec10Product}>
                        <div style={{fontSize:'1.5rem',fontWeight:'700',margin:'0.6rem 0'}}>Product</div>
                        <span>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</span>
                    </div>
                </div>
                <div className={styles.sec10Scroll}>
                    {cardListData && cardListData.map((card, i) => {
                        return (
                            <div key={i} className={styles.sec10ScrollItem}>
                                <h6>{card.title}</h6>
                                <span>{card.text}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Section10;
