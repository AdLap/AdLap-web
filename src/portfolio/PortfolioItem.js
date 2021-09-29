import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ItemTitle, ItemContainer, ItemImg, ItemDesc, ItemTech, ItemLink } from "./PortfolioItem.styled";

const PortfolioItem = ({ title, img, desc, tech, link }) => {
    return (
        <ItemContainer>
            <ItemTitle>{title}</ItemTitle>
            <ItemImg>
                <img src={img} alt={title} title={title} />
            </ItemImg>
            <ItemDesc>{desc}</ItemDesc>
            <ItemTech>{tech}</ItemTech>
            <ItemLink href={link} title={title} target='_blank'>
                <FontAwesomeIcon icon={faEye} />
            </ItemLink>
        </ItemContainer>
    );
}

export default PortfolioItem;
