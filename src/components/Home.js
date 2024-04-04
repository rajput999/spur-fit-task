import React from 'react';
import appleLogo from "../images/appleLogo.png";
import stars from "../images/stars.png";
import phone from "../images/phone.png";
import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div className={styles.full}>
    <div className={styles.home}>
      <section className={styles.text}>
        {/* <div className={styles.leaf1}>
          <img src={leaf2} alt="" />
        </div>
        <div className={styles.leaf2}>
          <img src={leaf2} alt="" />
        </div> */}
        {/* <div className={styles.flower1}>
          <img src={flower1} alt="" />
        </div>
        <div className={styles.flower2}>
          <img src={flower2} alt="" />
        </div> */}
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
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;
