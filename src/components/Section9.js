import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/section9.module.css';

const Section9 = () => {
    // const teamAheadRef = useRef(null);

    useEffect(() => {
        // const teamAheadText = teamAheadRef.current;

        // var t1 = gsap.timeline({
        //   scrollTrigger: {
        //     trigger: `.${styles.sign_P}`,
        //     start: "0 98%",
        //     end: "0px 80%",
        //     toggleActions: "restart none none none",
        //   },
        // });

        // t1.fromTo(
        //     teamAheadText,
        //     {
        //         opacity: 1,
        //         scaleX: 1,
        //         scaleY: 1
        //     },
        //     {
        //         opacity: 1,
        //         scaleX: 1,
        //         scaleY: 1,
        //         duration: 1,
        //         delay: 0.5,
        //         ease: 'power4.out',
        //         onComplete: () => {
        //             teamAheadText.textContent="";
        //             const text = "Team ahead";
        //             let index = 0;
        //             const interval = setInterval(() => {
        //                 if (index < text.length) {
        //                     teamAheadText.textContent += text[index];
        //                     index++;
        //                 } else {
        //                     clearInterval(interval);
        //                 }
        //             }, 200);
        //         }
        //     }
        // );


        var t2 = gsap.timeline({
          scrollTrigger: {
            trigger: `#start_btn`,
            start: "0 80%",
            end: "0px 80%",
            toggleActions: "restart none none none",
          },
        });
        
        t2.fromTo(
          "#start_btn", 
          {  scale: 0, opacity: 0 }, 
          {  scale: 1, opacity: 1, duration: 1.5 } 
        );
    }, []); 

    return (
        <div className={styles.full}>
            <div className={styles.subtitle}> We take privacy seriously </div>
            <div className={styles.maintitle}> Before you get started </div>
            <div className={styles.Sbody}>
                "We won't share your answers with anyone (and won't ever tell <br/> you which friends said what about you)"
            </div>
            <div className={styles.sign_P}>
                <p>with love, </p>
                <p ref={teamAheadRef} className={styles.sign}></p>
            </div>
            <button id='start_btn'>Start a test</button>
            <div className={styles.last}>Takes only 5 minutes</div>
        </div>
    );
}

export default Section9;
