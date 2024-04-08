import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import appleLogo from "../images/appleLogo.png";
import stars from "../images/stars.png";
import phone from "../images/phone.png";
import styles from "../styles/home.module.css";
import icon1 from "../images/icon1.png"
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from '../images/icon5.png'
import icon6 from '../images/icon6.png'

const Home = () => {
  useEffect(() => {
    const icon1Element = document.getElementById('icon1');
    const icon3Element = document.getElementById('icon3');
    const icon4Element = document.getElementById('icon4');
    const icon5Element = document.getElementById('icon5');
    const dotCircleElement = document.querySelector(`.${styles.dot_circle}`);
    const dotCircleRadius = dotCircleElement.offsetWidth / 2;

    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: `#icon1`,
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none reset reverse",
      },
    });

    var t2 = gsap.timeline({
      scrollTrigger: {
        trigger: `#icon1`,
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none reset reverse",
      },
    });

    var t3 = gsap.timeline({
      scrollTrigger: {
        trigger: `#icon1`,
        start: "0 80%",
        end: "0px 80%",
        toggleActions: "restart none reset reverse",
      },
    });

  
    t1.fromTo(
      [icon1Element],
      { 
        rotation: 45, 
        transformOrigin: `-${dotCircleRadius}px 50%`,
        x: '500%' 
      },
      { 
        rotation: 0, 
        ease: "linear", 
        duration: 0.5 
      }
    )
    t2.fromTo(
      [icon3Element],
      { rotation: 45, transformOrigin: `18vw 32vw`, x:'-300%', y:'-310%' },
      { rotation: 0, ease: "linear", duration: 0.5 }
    );
    t3.fromTo(
      [icon4Element],
      { rotation: 45, transformOrigin: `25vw -13vw` , x:'-300%', y:'210%'},
      { rotation: 0, ease: "linear", duration: 0.5 }
    );
    gsap.fromTo(
      [icon5Element],
      { rotation: 60 }, 
      { rotation: 300, ease: "linear", duration: 0.6, onComplete: () => gsap.killTweensOf(icon5Element) } 
    );
  }, []);
  

  return (
    <div className={styles.full}>
      <div className={styles.home}>
        <div className={styles.icon5Wrapper}>
          <img className={styles.icon5} id="icon5" src={icon5} alt="" />
        </div>  
        <img className={styles.icon6} id="icon6" src={icon6} alt="" />
        <section className={styles.text}>
          <div className={styles.innerContainer}>
            <div className={styles.subtitle}>Ahead App</div>
            <div className={styles.title}>Master your life <br />by mastering <br/> emotions</div>
            <div className={styles.rating}>
              <button className={styles.appStoreButton}>
                <img src={appleLogo} alt="" className={styles.appleLogo} />
                <section className={styles.appStoreButtonText}>
                  <div className={styles.logoTitle}>Download on the</div>
                  <div className={styles.logoSubtitle}>App Store</div>
                </section>
              </button>
              <div className={styles.stars}>
                <img className={styles.star_image}  src={stars} alt="" />
                <div >100+ AppStore Reviews</div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.image}>
          <div className={styles.dot_circle}>
            <div className={styles.circle}></div>
            <img className={styles.phone_img} src={phone} alt="" />
            <img className={styles.icon1} id="icon1" src={icon1} alt="" />
            <img className={styles.icon3} id="icon3" src={icon3} alt="" />
            <img className={styles.icon4} id="icon4" src={icon4} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
