// Open vacancies
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import styles from "../styles/section11.module.css"; 
gsap.registerPlugin(ScrollTrigger);

const Section11 = () => {
    
    useEffect(()=>{
        var t1 = gsap.timeline({
            scrollTrigger: {
              trigger: `#section11 h2`, 
              start: "0 80%",
              end: "0px 80%",
              toggleActions: "restart none reset reverse",
            },
          });
          t1.fromTo(
            `#section11 h2`, 
            { x: -200, opacity: 0, fontSize: 0 },
            { x: 300, opacity: 1, duration: 0.6, fontSize: "3rem" }
          );
          t1.to(`.${styles.section11} h2`, { x: 250, duration: 0.3 });
    }, []);

  return (
    <div className={styles.section11} id="section11"> 
      <h2>Open vacancies</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div style={{fontSize:'1.4rem',padding:'1rem 0 0 0.5rem',fontWeight:'600'}}>Senior Full-Stack Engineer</div>
          <ul className={styles["card-list"]}>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>$40-50K, 0.5-1.5% equity share options</li>
          </ul>
          <button>Know more</button>
        </div>
        <div className={styles.card}>
          <div style={{fontSize:'1.4rem',padding:'1rem 0 0 0.5rem',fontWeight:'600'}}>Senior Full-Stack Engineer</div>
          <ul className={styles["card-list"]}>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>$40-50K, 0.5-1.5% equity share options</li>
          </ul>
          <button>Know more</button>
        </div>

        <div className={styles.card}>
          <div style={{fontSize:'1.4rem',padding:'1rem 0 0 0.5rem',fontWeight:'600'}}>Senior Full-Stack Engineer</div>
          <ul className={styles["card-list"]}>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>$40-50K, 0.5-1.5% equity share options</li>
          </ul>
          <button>Know more</button>
        </div>
      </div>
    </div>
  );
};

export default Section11;
