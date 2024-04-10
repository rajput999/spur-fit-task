import React, { useEffect, useRef} from 'react';
import dtsfData from '../data/dtsfData.json';
import left_arrow from "../images/left-arrow.png";
import right_arrow from "../images/right-arrow.png";
import icon1 from '../images/icon1.png'
import styles from "../styles/emotions.module.css";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Emotions = () => {
    const bcolor = ['#EEEBFD','#FEEFD5','#D8F2FE','#FDF1EE','#FEF7F1'];
    const cardsDivRef = useRef(null);

    useEffect(() => {
        gsap.to(cardsDivRef.current, {
            scrollTrigger: {
                trigger: cardsDivRef.current,
                start: "top 70%",
                scrub: 1,
                onEnter: () => {
                    cardsDivRef.current.scrollLeft += 400; 
                }
            },
            ease: "power3.inOut",
        });


        var t1 = gsap.timeline({
            scrollTrigger: {
                trigger: "#dtsf",
                start: "0 80%",
                end: "0px 80%",
                toggleActions: "restart none none none"
            }
        });
        
        t1.fromTo(
            "#dtsf", 
            { x: -1000, scale: 0, opacity: 0 }, 
            { x: 0, scale: 1, opacity: 1, duration: 1.5 } 
        );
        
        

    }, []);

    const leftHandleClick = (evt) => {
        evt.preventDefault();
        cardsDivRef.current.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    }

    const rightHandleClick = (evt) => {
        evt.preventDefault();
        cardsDivRef.current.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    }
    
    return (
        <div className={styles.emotions} id='Emotions'>
            <h2 className={styles.emotions_title} id='dtsf'>Does this sound familiar... <img className={styles.icon1} src={icon1} alt="" id='eicon1'/></h2>
            <div className={styles.gallery}>
                <div className={styles.backbtn} onClick={leftHandleClick}><img src={left_arrow} alt="" /></div>
                <div className={styles.cards} ref={cardsDivRef}>
                    {dtsfData.map((card, index) => (
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



// useEffect(() => {
    //     const elementIcon1 = document.getElementById('eicon1');
      
    //     gsap.registerPlugin(MotionPathPlugin);
      
    //     var t1 = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: '#eicon1',
    //         start: "0 80%",
    //         end: "0px 80%",
    //         toggleActions: "restart none reset reverse",
    //       }
    //     });
      
    //     t1.to(
    //       elementIcon1,
    //       {
    //         duration: 1.5,
    //         motionPath: {
    //           path: [
    //             { x: 0, y: 150 }, // Starting point
    //             { x: -100, y: 100 }, // Control point
    //             { x: -200, y: 50 } // Ending point
    //           ],
    //           curviness: 1,
    //           autoRotate: true
    //         },
    //         opacity: 1
    //       }
    //     );
    //   }, [])
