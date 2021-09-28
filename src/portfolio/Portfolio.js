import React, { useEffect, useState } from "react";
import axios from 'axios';
import { PortfolioContainer, PortfolioSection, PortfolioTitle } from "./Portfolio.styled";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        axios.get('https://adlap-9b9e8-default-rtdb.europe-west1.firebasedatabase.app/projects.json')
            .then(resp => setProjects(Object.entries(resp.data).reverse()))
            .catch(error => console.log('error::', error))
    }, []);

    const portfolioVariants = {
        hidden: {
            opacity: 1,
            scale: 1
        },
        visable: {
            opacity: 1,
            scale: 1,
            transition: {
                when: 'beforeChildren',
                //   delayChildren: 2,
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visable: {
            y: 0,
            opacity: 1
        },
        exit: {
            x: '-100vw'
        }
    };

    return (
        <PortfolioSection>
            <PortfolioTitle>Portfolio:</PortfolioTitle>
            {
                projects &&
                <PortfolioContainer
                    variants={portfolioVariants}
                    initial='hidden'
                    animate={projects.length > 0 && 'visable'}
                    exit='exit'
                >
                    {
                        projects.map(project => (
                            <PortfolioItem
                                variants={itemVariants}
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
            }
        </PortfolioSection>
    );
}

export default Portfolio;
