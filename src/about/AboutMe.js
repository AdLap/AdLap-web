import React from "react";
import { motion } from "framer-motion";
import { AboutContainer, Description, DescriptionList, Img, ImgContainer } from "./AboutMe.styled";
import img from '../assets/ja.jpg';

const AboutMe = () => {
    const tech = [
        'JavaScript',
        'React',
        'Vue.js',
        'jQuery',
        'Magento 2',
        'Motion Framer',
        'Styled Components',
        'SASS',
        'REST API',
        'i to nie koniec...'
    ];
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
            exit={{ opacity: 0 }}
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
                    Swoją przygodę z programowaniem zacząłem w 2012r. od stworzenia prostej strony opartej o CMS Joomla dla nowo powstającej firmy. Od tamtego czasu hobbystycznie zajmowałem się stronami www i dojrzewało we mnie przekonanie, że programowanie aplikacji webowych jest tym <em>co chcę w życiu robić...</em> <br />
                    <span>A więc stało się &#x1F60E;</span>
                </Description>
                <Description
                    variants={childrenVariants}
                >
                    Ale nie samą pracą nad bolącymi plecami i męczeniem oczu człowiek żyje &#128521;<br />
                    
                </Description>
                <DescriptionList
                    variants={childrenVariants}
                >
                    Technologie, w których pracuję:
                    {
                        tech.map((el, idx) => (
                            <li key={idx}><span>&#10004;</span>{el}</li>
                        ))
                    }
                </DescriptionList>
            </AboutContainer>
        </motion.section>
    );
}

export default AboutMe;
