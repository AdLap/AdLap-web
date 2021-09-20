import React from "react";
import { Link } from "react-router-dom";
import { StyledNavigation, StyledNavBackground } from "./Navigation.styled";

const Navigation = ({ open, onOpen }) => {
    const navVariants = {
        hidden: { x: '-100%', opacity: 0 },
        open: { x: 0, opacity: 1 }
    }

    const bgVariants = {
        hidden: {
            opacity: 0,
            zIndex: -1,
            transition: {
                delay: .2
            }
        },
        open: { opacity: 1, zIndex: 0 }
    }

    return (
        <StyledNavBackground
            variants={bgVariants}
            animate={open ? 'open' : 'hidden'}
        >
            <StyledNavigation
                variants={navVariants}
                animate={open ? 'open' : 'hidden'}
            >
                <Link
                    to='/home'
                    onClick={() => onOpen(false)}
                >
                    Home
                </Link>
                <Link
                    to='/about'
                    onClick={() => onOpen(false)}
                >
                    O mnie
                </Link>
                <Link
                    to='/portfolio'
                    onClick={() => onOpen(false)}
                >
                    Portfolio
                </Link>
                <Link
                    to='/contact'
                    onClick={() => onOpen(false)}
                >
                    Kontakt
                </Link>
            </StyledNavigation>
        </StyledNavBackground>
    );
}

export default Navigation;
