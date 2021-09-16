import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IntroDesc, IntroDescBox, IntroLogo, IntroSection } from '../components/introComponents';
import { StyledLink } from '../components/globalComponents';

const Intro = () => {
    const [descVisable, setDescVisable] = useState(false);

    setTimeout(() => {
        setDescVisable(true)
    }, 1500);

    const introVariant = {
        hidden: {
            opacity: 0
        },
        visable: {
            opacity: 1,
            transition: {
                ease: 'linear',
                duration: 1
            }
        },
        exit: {
            opacity: 0,
            x: '100vw',
            transition: {
                ease: 'linear',
                duration: 1
            }
        }
    }

    const desc = 'Web Developer Adam Łapacz';
    const descContainer = {
        hidden: { opacity: 0 },
        visable: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08
            }
        }
    };
    const descLetter = {
        hidden: { opacity: 0 },
        visable: { opacity: 1 }
    };

    return (
        <IntroSection
            variants={introVariant}
            initial='hidden'
            animate='visable'
            exit='exit'
        >
            <IntroLogo
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 1 }}
                exit={{ scale: 10, opacity: 0, x: '-300vw', y: '-100vw' }}
            >
                <StyledLink to='/home'>{`<AdLap />`}</StyledLink>
            </IntroLogo>
            <IntroDescBox>
                {descVisable &&
                    <IntroDesc
                        variants={descContainer}
                        initial='hidden'
                        animate='visable'
                    >
                        {desc.split('').map((letter, idx) => (
                            <motion.span
                                key={`${letter}-${idx}`}
                                variants={descLetter}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </IntroDesc>
                }
            </IntroDescBox>
        </IntroSection >
    )
}

export default Intro;
