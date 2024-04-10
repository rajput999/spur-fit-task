import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AddVacanciesModal from "./AddVacancies";
import styles from "../styles/section11.module.css";
import cardData from "../data/vacanciesData.json";

gsap.registerPlugin(ScrollTrigger);

const Section11 = ({ isAdmin }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [vacancies, setVacancies] = useState(() => {
        const savedVacancies = localStorage.getItem("vacancies");
        return savedVacancies ? JSON.parse(savedVacancies) : cardData;
    });
    const [editIndex, setEditIndex] = useState(null);
    const [editData, setEditData] = useState(null);

    useEffect(() => {
        if (!isAdmin) {
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
        }
    }, [isAdmin]);

    const handleOpenModal = (index) => {
        setIsModalOpen(true);
        setEditIndex(index);
        setEditData(vacancies[index]);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditIndex(null);
        setEditData(null);
    };

    const addVacancy = (newVacancy) => {
        const updatedVacancies = [...vacancies, newVacancy];
        setVacancies(updatedVacancies);
        localStorage.setItem("vacancies", JSON.stringify(updatedVacancies));
    };

    const deleteVacancy = (index) => {
        const updatedVacancies = [...vacancies];
        updatedVacancies.splice(index, 1);
        setVacancies(updatedVacancies);
        localStorage.setItem("vacancies", JSON.stringify(updatedVacancies));
    };

    const editVacancy = (updatedVacancy) => {
        const updatedVacancies = [...vacancies];
        updatedVacancies[editIndex] = updatedVacancy;
        setVacancies(updatedVacancies);
        localStorage.setItem("vacancies", JSON.stringify(updatedVacancies));
        handleCloseModal();
    };

    return (
        <div className={isAdmin ? styles.adminSection11 : styles.section11} id="section11">
            <h2>Open vacancies</h2>
            {isAdmin && <button onClick={() => handleOpenModal()} className={styles.addVac}>Add vacancies</button>}
            <div className={isAdmin ? styles.adminCards : styles.cards}>
                {vacancies.map((card, index) => (
                    <div  key={index}>
                    <div className={isAdmin ? styles.admincard: styles.card }>
                        <div style={{ fontSize: '1.4rem', padding: '1rem 0 0 0.5rem', fontWeight: '600' }}>{card.title}</div>
                        <ul className={styles["card-list"]}>
                            {card.details.map((detail, idx) => (
                                <li key={idx} style={{fontSize:'1rem'}}>{detail}</li>
                            ))}
                        </ul>
                        <div className={styles.buttonContainer}>
                            {isAdmin && (
                                <button onClick={() => handleOpenModal(index)}>Edit</button>
                            )}
                            {isAdmin && (
                                <button onClick={() => deleteVacancy(index)}>Delete</button>
                            )}
                            <button>Know more</button>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <AddVacanciesModal open={isModalOpen} handleClose={handleCloseModal} addVacancy={addVacancy} editVacancy={editVacancy} vacancy={editData} />
        </div>
    );
};

export default Section11;
