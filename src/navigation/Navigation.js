import React from "react";
import { Link } from "react-router-dom";
import { StyledNavigation } from "./Navigation.styled";

const Navigation = ({ open, onOpen }) => {
    const navVariants = {
        hidden: { x: '-100%', opacity: 0 },
        open: { x: 0, opacity: 1 }
    }

    return (
        <StyledNavigation
            variants={navVariants}
            animate={open ? 'open' : 'hidden'}
        >
            <Link
                to='#home'
                onClick={() => onOpen(false)}
            >
                Home
            </Link>
            <Link
                to='/home'
                onClick={() => onOpen(false)}
            >
                O mnie
            </Link>

        </StyledNavigation>
    );
}

export default Navigation;
