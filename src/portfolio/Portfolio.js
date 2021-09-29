import React, { useEffect, useState } from "react";
import axios from 'axios';
import { motion } from 'framer-motion';
import { PortfolioContainer, PortfolioSection, PortfolioTitle } from "./Portfolio.styled";
import PortfolioItem from "./PortfolioItem";


const Portfolio = () => {
    const [projects, setProjects] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://adlap-9b9e8-default-rtdb.europe-west1.firebasedatabase.app/projects.json')
            .then(resp => setProjects(Object.entries(resp.data).reverse()))
            .catch(error => setError(error))
    }, []);

    const portfolioVariants = {
        hidden: {
          //  opacity: 1,
            scale: 0
        },
        visable: {
           // opacity: 1,
            scale: 1,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
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
            x: '100vw'
        }
    };

    const items = projects && projects.map(project => (
        <PortfolioItem
            title={project[1].title}
            img={project[1].img}
            desc={project[1].description}
            tech={project[1].tech}
            link={project[1].link}
        />
    ));

    return (
        <PortfolioSection>
            <PortfolioTitle exit={{opacity: 0}}>Portfolio:</PortfolioTitle>
            {
                projects ?
                    <PortfolioContainer
                        variants={portfolioVariants}
                        initial='hidden'
                        animate={'visable'}
                        exit='exit'
                    >
                        {
                            items.map((item, idx) => (
                                <motion.div
                                    key={`${item}-${idx}`}
                                    variants={itemVariants}
                                >{item}</motion.div>
                            ))
                        }
                    </PortfolioContainer> :
                    error ?
                        <h2 style={{ color: 'red ' }}>{error}</h2> :
                        <h2 style={{ color: 'green' }}>Wczytuję dane...</h2>
            }

        </PortfolioSection >
    );
}

export default Portfolio;
