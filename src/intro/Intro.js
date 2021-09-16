import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IntroDesc, IntroLogo, IntroSection } from '../components/introComponents';
import { StyledLink } from '../components/globalComponents';

const Intro = () => {
    const desc = 'Web Developer Adam Łapacz';
    const descContainer = {
        hidden: { opacity: 0 },
        visable: {
            opacity: 1,
            transition: {
                delay: 1,
                staggerChildren: 0.2
            }
        }
    };
    const descLetter = {
        hidden: { opacity: 0 },
        visable: { opacity: 1 }
    };

    return (
        <IntroSection>
            <AnimatePresence>
                {IntroLogo && (
                    <IntroLogo
                        key='logo'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeOut', duration: 3 }}
                        exit={{ scale: 500, opacity: 0 }}
                    >
                        <StyledLink
                            to='/home'
                        >
                            {`<AdLap />`}
                        </StyledLink>
                    </IntroLogo>
                )}
            </AnimatePresence>
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
        </IntroSection >
    )
}

export default Intro;
