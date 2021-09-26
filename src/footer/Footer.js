import React from "react";
import { FooterIcons, FooterLogo, StyledFooter } from "./Footer.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
    const footerVariants = {
        hidden: {
            y: '100%'
        },
        visable: {
            y: 0,
            transition: {
                duration: 2,
                ease: 'easeInOut'
            }
        },
        exit: {
            y: '100%',
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
                2021 &copy;
                <Link to='/'>{`< AdLap />`}</Link>
            </FooterLogo>
            <FooterIcons>
                <a href='https://github.com/AdLap' title='GitHub' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href='https://pl.linkedin.com/in/adam-%C5%82apacz' title='LinkedIn' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </FooterIcons>
        </StyledFooter>
    );
}

export default Footer;
