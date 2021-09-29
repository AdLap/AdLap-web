import React from "react";
import InProgress from "../InProgress";
import { AboutTitle, Img, ImgContainer } from "./AboutMe.styled";
import img from '../assets/ja.jpg';

const AboutMe = () => {
    return (
        <section>
            <AboutTitle>O mnie:</AboutTitle>
            <ImgContainer>
                <Img src={img} alt='Adam Łapacz' />
            </ImgContainer>
            {/* <InProgress /> */}
        </section>
    );
}

export default AboutMe;
