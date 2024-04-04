import React, { useRef, useState } from 'react';
import dtsfData from '../data/dtsfData.json';
import left_arrow from "../images/left-arrow.png";
import right_arrow from "../images/right-arrow.png";
import icon1 from '../images/icon1.png'
import styles from "../styles/emotions.module.css";

const Emotions = () => {
    const [cards, setCards] = useState(dtsfData);
    const bcolor = ['#EEEBFD','#FEEFD5','#D8F2FE','#FDF1EE','#FEF7F1'];
    const cardsDivRef = useRef(null);

    const leftHandleClick = (evt) => {
        evt.preventDefault();
        cardsDivRef.current.scrollLeft -= 200; 
    }

    const rightHandleClick = (evt) => {
        evt.preventDefault();
        cardsDivRef.current.scrollLeft += 200; 
    }

    return (
        <div className={styles.emotions}>
            <h2 className={styles.emotions_title}>Does this sound familiar... <img className={styles.icon1} src={icon1} alt="" /></h2>
            <div className={styles.gallery}>
                <div className={styles.backbtn} onClick={leftHandleClick}><img src={left_arrow} alt="" /></div>
                <div className={styles.cards} ref={cardsDivRef}>
                    {cards.map((card, index) => (
                        <div className={styles.card} key={index} style={{backgroundColor:bcolor[index%bcolor.length]}}>
                            <span className={styles.cardIcon} role="img" aria-label="emoji">{card.icon}</span>
                            <h3>{card.title}</h3>
                            <p>{card.body}</p>
                        </div>
                    ))}
                </div>
                <div className={styles.frontbtn} onClick={rightHandleClick}><img src={right_arrow} alt="" /></div>
            </div>
        </div>
    );
};

export default Emotions;
