import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IntroDesc, IntroLogo, IntroSection } from '../components/introComponents';
import { StyledLink } from '../components/globalComponents';

const Intro = () => {
    const desc = 'Web Developer Adam Łapacz'

    return (
        <IntroSection>
            <AnimatePresence>
                {IntroLogo && (
                    <IntroLogo
                        key='logo'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ ease: 'easeInOut', duration: 3 }}
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
            <IntroDesc>
                {desc.split('').map((letter, idx) => (
                    <motion.span
                        key={`${letter}-${idx}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 5, staggerChildren: 0.5 }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </IntroDesc>
        </IntroSection >
    )
}

export default Intro;
