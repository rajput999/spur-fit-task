import React, { useEffect } from 'react';
import styles from '../styles/section5.module.css';
import icon2 from '../images/icon2.png';
import icon7 from '../images/icon7.png';
import icon8 from '../images/icon8.png'
import icon5 from '../images/icon5.png'
import icon6 from '../images/icon6.png'
import { gsap } from 'gsap';


const Section5 = () => {
  useEffect(() => {
    const icon5Element = document.querySelector(`.${styles.icon5}`);
    const icon5_2Element = document.querySelector(`.${styles.icon5_2}`);

    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#title",
            start: "0 80%",
            end: "0px 80%",
            toggleActions: "restart none none none"
        }
    });

    var t2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#title",
            start: "0 80%",
            end: "0px 80%",
            toggleActions: "restart none none none"
        }
    });

    var t3 = gsap.timeline({
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

    t2.fromTo(
        [icon5Element,icon5_2Element],
        { rotation: 0 }, 
        { rotation: 150, ease: "linear", duration: 1, } 
      );

    t3.fromTo(
        "#sec5body", 
        { x: -200, scale: 0, opacity: 0 }, 
        { x: 0, scale: 1, opacity: 1, duration: 1.5 } 
    );
    

    const handleScroll = () => {
      const icon7Element = document.querySelector(`.${styles.icon7}`);
      if (icon7Element) {
        const rotation = window.scrollY ; 
        icon7Element.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.fullPage}>
      <div className={styles.full}>
        <img src={icon7} alt="" className={styles.icon7} />
        <img src={icon5} alt="" className={styles.icon5}/>
        <img src={icon6} alt="" className={styles.icon6}/>
        <div className={styles.title} id='title'>
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
                <img src={icon8} alt="" className={styles.icon8}/>
              <div className={styles.whitecircle}>
                <img className={styles.img2} src={icon2} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.lowerRight}>
          <img src={icon5} alt="" className={styles.icon5_2}/>
            <div id='sec5body'>
            A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.<br /><br />
            Think of it as a pocket cheerleader towards a better, more fulfilling.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
