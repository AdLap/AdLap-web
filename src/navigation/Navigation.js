import React from "react";
import { NavLink } from "react-router-dom";
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
        open: { opacity: 1, zIndex: 1 }
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
                <NavLink
                    to='/home'
                    onClick={() => onOpen(false)}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/about'
                    onClick={() => onOpen(false)}
                >
                    O mnie
                </NavLink>
                <NavLink
                    to='/portfolio'
                    onClick={() => onOpen(false)}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    to='/contact'
                    onClick={() => onOpen(false)}
                >
                    Kontakt
                </NavLink>
            </StyledNavigation>
        </StyledNavBackground>
    );
}

export default Navigation;
