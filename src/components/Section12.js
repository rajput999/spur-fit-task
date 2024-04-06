import appleLogo from "../images/appleLogo.png";
import logo from "../images/logo.png"; 
import email from "../images/email.png";
import location from "../images/location.png";
import copyright from "../images/copyright.png";
import styles from "../styles/section12.module.css";

const Section12 = () => {
    return ( 
        <div className={styles.section12}>
            <div className={styles.logoContainer}>
                <img src={logo} alt="" />
                <h3>ahead</h3>
            </div>
            <div className={styles.contactDetails}>
                <div className={styles.address}><img src={location} alt="" /><p>Augustraba 26, 10117 Berlin</p></div>
                <div className={styles.email}><img src={email} alt="" /><p>hasd@ahead-app.com</p></div>
            </div>
            <button className={styles.appStoreButton}>
              <img src={appleLogo} alt="" className={styles.appleLogo} />
              <section className={styles.appStoreButtonText}>
                <p className={styles.logoTitle}>Download on the</p>
                <p className={styles.logoSubtitle}>App Store</p>
              </section>
            </button>
            <div className={styles.copyright}><img src={copyright} alt="" />2022 Ahead app. All rights reserved</div>
        </div>
     );
}
 
export default Section12;
