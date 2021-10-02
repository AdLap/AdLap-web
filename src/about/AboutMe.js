import React, { useState } from "react";
import { motion } from "framer-motion";
import { AboutContainer, Description, DescriptionList, Img, ImgContainer } from "./AboutMe.styled";
import img from '../assets/ja2.png';

const AboutMe = () => {
    const [tech] = useState([
        'JavaScript ES6+',
        'React',
        'React Redux',
        'Context API',
        'REST API',
        'Motion Framer',
        'Styled Components',
        'SASS',
        'i inne w zależności od wymagań projektu'
    ])
    const aboutVariants = {
        hidden: { x: 0 },
        visable: {
            x: 0,
            transition: {
                staggerChildren: 0.3
            }
        },
        exit: { x: 2000 }
    }
    const childrenVariants = {
        hidden: { x: 2000 },
        visable: { x: 0 }
    }
    const imgVariants = {
        hidden: {
            x: -5000,
            opacity: 0
        },
        visable: {
            x: 0,
            opacity: 1,
            transition: { duration: 1 }
        }
    }

    return (
        <motion.section
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0}}
        >
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                O mnie:
            </motion.h2>
            <AboutContainer
                variants={aboutVariants}
                initial='hidden'
                animate='visable'
                exit='exit'
            >
                <ImgContainer
                    variants={imgVariants}
                >
                    <Img src={img} alt='Adam Łapacz' />
                </ImgContainer>
                <Description
                    variants={childrenVariants}
                >
                    Cześć! <br /> Jestem Adam i zajmuję się frontendem. <br /> Swoją przygodę z programowaniem zacząłem w 2012r. od stworzenia prostej strony opartej o CMS Joomla dla nowo powstającej firmy. Od tamtego czasu hobbystycznie zajmowałem się stronami www i dojrzewało we mnie przekonanie, że powinienem profesjonalnie programować aplikacje webowe... <br />
                    A więc stało się &#x1F60E; &#x1F601;
                </Description>
                <Description
                    variants={childrenVariants}
                >
                    Rozwiązywanie problemów, poszukiwanie najlepszej ścieżki do
                    osiągnięcia celu, a zwłaszcza znalezienie rozwiązania sprawia mi ogromną frajdę. Mam satysfakcję, gdy grafika ożywa za pomocą kodu
                    lub dodam nową funkcjonalność, szczególnie gdy uda mi się coś uprościć.
                </Description>
                <DescriptionList
                    variants={childrenVariants}
                >
                    Do tworzenia aplikacji wykorzystuję:
                    <ul>
                        {
                            tech.map((el, idx) => (
                                <li key={idx}>{el}</li>
                            ))
                        }
                    </ul>
                </DescriptionList>
            </AboutContainer>

        </motion.section>
    );
}

export default AboutMe;
