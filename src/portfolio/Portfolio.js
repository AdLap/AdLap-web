import React, { useEffect, useState } from "react";
import axios from 'axios';
import { PortfolioContainer, PortfolioSection, PortfolioTitle } from "./Portfolio.styled";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://adlap-9b9e8-default-rtdb.europe-west1.firebasedatabase.app/')
        .then(resp => console.log('resp::', resp))
        .catch(error => console.log('error::', error))
    },[])

    const portfolioVariants = {
        hidden: {
            y: '-100vh'
        },
        visable: {
            y: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        },
        exit: {
            y: '-100vh',
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: '-100vh'
        },
        visable: {
            y: 0
        },
        exit: {
            y: '-100vh'
        }
    };

    return (
        <PortfolioSection
            variants={portfolioVariants}
            initial='hidden'
            animate='visable'
            exit='exit'
        >
            <PortfolioTitle>Portfolio:</PortfolioTitle>
            <PortfolioContainer>
                <PortfolioItem
                    title='Oddaj rzeczy'
                    img=''
                    desc='Celem projektu jest stworzenie miejsca, w którym każdy będzie mógł oddać niepotrzebne rzeczy zaufanym instytucjom.'
                    tech='React / React Router / Formik / Yup / CSS Modules / SASS'
                    link='https://oddaj-rzeczy-5dccc.web.app/'
                />
                <PortfolioItem
                    title='Oddaj rzeczy'
                    img=''
                    desc='Celem projektu jest stworzenie miejsca, w którym każdy będzie mógł oddać niepotrzebne rzeczy zaufanym instytucjom.'
                    tech='React / React Router / Formik / Yup / CSS Modules / SASS'
                    link='https://oddaj-rzeczy-5dccc.web.app/'
                />
                <PortfolioItem
                    title='Oddaj rzeczy'
                    img=''
                    desc='Celem projektu jest stworzenie miejsca, w którym każdy będzie mógł oddać niepotrzebne rzeczy zaufanym instytucjom.'
                    tech='React / React Router / Formik / Yup / CSS Modules / SASS'
                    link='https://oddaj-rzeczy-5dccc.web.app/'
                />
                <PortfolioItem
                    title='Oddaj rzeczy'
                    img=''
                    desc='Celem projektu jest stworzenie miejsca, w którym każdy będzie mógł oddać niepotrzebne rzeczy zaufanym instytucjom.'
                    tech='React / React Router / Formik / Yup / CSS Modules / SASS'
                    link='https://oddaj-rzeczy-5dccc.web.app/'
                />
            </PortfolioContainer>
        </PortfolioSection>
    );
}

export default Portfolio;
