import React from "react";
import { motion } from "framer-motion";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open, onOpen }) => {
    const burgerVariants = {
        hidden: { opacity: 0 },
        visable: {
            opacity: 1,
            transition: {
                delay: 1
            }
        }
    }

    const topVariants = {
        close: { rotate: 0 },
        open: { rotate: 45 }
    }

    const midVariants = {
        close: { opacity: 1 },
        open: { opacity: 0 }
    }

    const bottomVariants = {
        close: { rotate: 0 },
        open: { rotate: -45 }
    }

    return (
        <StyledBurger
            onClick={() => onOpen(!open)}
            variants={burgerVariants}
            initial='hidden'
            animate='visable'
            exit='exit'
        >
            <motion.div
                variants={topVariants}
                animate={open ? 'open' : 'close'}
            />
            <motion.div
                variants={midVariants}
                animate={open ? 'open' : 'close'}
            />
            <motion.div
                variants={bottomVariants}
                animate={open ? 'open' : 'close'}
            />
        </StyledBurger >
    );
}

export default Burger;
