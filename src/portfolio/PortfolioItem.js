import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ItemTitle, ItemContainer, ItemImg, ItemDesc, ItemTech, ItemLink, ItemGithubLink } from "./PortfolioItem.styled";

const PortfolioItem = ({ title, img, desc, tech, link, github, onModalImg }) => {
    return (
        <ItemContainer>
            <ItemTitle>{title}</ItemTitle>
            <ItemImg>
                <img src={img} alt={title} title={title} onClick={() => onModalImg(img)} />
            </ItemImg>
            <ItemDesc>{desc}</ItemDesc>
            <ItemTech>{tech}</ItemTech>
            <ItemLink href={link} title={title} target='_blank'>
                <FontAwesomeIcon icon={faEye} />
            </ItemLink>
            <ItemGithubLink href={github} title={`${title} - GitHub`} target='_blank'>
                <FontAwesomeIcon icon={faGithub} />
            </ItemGithubLink>
        </ItemContainer>
    );
}

export default PortfolioItem;
