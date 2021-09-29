import React from "react";
import { ModalImgContainer, ModalImg, ModalContainer } from "./PortfolioModal.styled";

const PortfolioModal = ({ img, onModalImg }) => {
    const modalVariants = {
        hidden: {
            scale: 0,
            y: '-100vh'
        },
        visable: {
            scale: 1,
            x: '-50%',
            y: '-50%'
        },
        exit: {
            scale: 0
        }
    };

    return (
        <ModalContainer
            onClick={() => onModalImg(null)}
        >
            <ModalImgContainer
                variants={modalVariants}
                initial='hidden'
                animate='visable'
                exit='exit'
            >
                <ModalImg src={img} alt={img} />
            </ModalImgContainer>
        </ModalContainer>

    );
}

export default PortfolioModal;