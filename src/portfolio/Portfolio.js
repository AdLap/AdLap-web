import React, { useEffect, useState } from "react";
import axios from 'axios';
import { PortfolioContainer, PortfolioSection, PortfolioTitle } from "./Portfolio.styled";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://adlap-9b9e8-default-rtdb.europe-west1.firebasedatabase.app/projects.json')
            .then(resp => setProjects(Object.entries(resp.data).reverse()))
            .catch(error => console.log('error::', error))
    }, []);

    const portfolioVariants = {
        hidden: {
            opacity: 0
        },
        visable: {
            opacity: 1,
            transition: {
                staggerChildren: 1
                // duration: 1,
                // ease: 'easeInOut'
            }
        },
        exit: {
            y: '100vh',
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: '0'
        },
        visable: {
            opacity: 1
        }
        // exit: {
        //     x: '-100vw'
        // }
    };

    return (
        <PortfolioSection
            // variants={portfolioVariants}
            // initial='hidden'
            // animate='visable'
            // exit='exit'
        >
            <PortfolioTitle>Portfolio:</PortfolioTitle>
            <PortfolioContainer>
                {
                    projects.map((project, idx) => (
                        <PortfolioItem
                            initial={{ x: '-100vw' }}
                            animate={{ x: 0 }}
                            transition={{
                                duration: 1,
                                delay: 1 + idx
                            }}
                            key={project[1].id}
                            title={project[1].title}
                            img={project[1].img}
                            desc={project[1].description}
                            tech={project[1].tech}
                            link={project[1].link}
                        />
                    ))
                }
            </PortfolioContainer>
        </PortfolioSection>
    );
}

export default Portfolio;
