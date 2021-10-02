import React from "react";
import { FooterIcons, FooterLogo, StyledFooter } from "./Footer.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
    const footerVariants = {
        hidden: {
            //y: '100%'
            opacity: 0
        },
        visable: {
            // y: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut'
            }
        },
        exit: {
            //y: '100%',
            opacity: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <StyledFooter
            variants={footerVariants}
            initial='hidden'
            animate='visable'
            exit='exit'
        >
            <FooterLogo>
                <Link to='/' title='Intro'>{`< AdLap /> `}</Link>
                &copy; 2021
            </FooterLogo>
            <FooterIcons>
                <a href='https://github.com/AdLap' title='GitHub' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href='https://pl.linkedin.com/in/adam-%C5%82apacz' title='LinkedIn' target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </FooterIcons>
        </StyledFooter>
    );
}

export default Footer;
