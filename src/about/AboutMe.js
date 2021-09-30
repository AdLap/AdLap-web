import React from "react";
import { AboutContainer, AboutTitle, Description, DescriptionList, Img, ImgContainer } from "./AboutMe.styled";
import img from '../assets/ja2.png';
import { useState } from "react/cjs/react.development";

const AboutMe = () => {
    const [tech] = useState([
        'JavaScript ES6+',
        'React',
        'React Redux',
        'Context API',
        'REST API',
        'Motion Framer',
        'Styled Components',
        'SASS',
        'i inne w zależności od wymagań projektu'
    ])
    const imgVariants = {
        hidden: { x: 100 },
        visable: { x: 0 },
        exit: { x: -100 }
    }

    return (
        <section>
            <AboutTitle>O mnie:</AboutTitle>
            <AboutContainer>
                <ImgContainer
                    variants={imgVariants}
                    initial='hidden'
                    animate='visable'
                    exit='exit'
                >
                    <Img src={img} alt='Adam Łapacz' />
                </ImgContainer>
                <Description>
                    Cześć! <br /> Jestem Adam i zajmuję się frontendem. <br /> Swoją przygodę z programowaniem zacząłem w 2012r. od stworzenia prostej strony opartej o CMS Joomla dla nowo powstającej firmy. Od tamtego czasu hobbystycznie zajmowałem się stronami www i dojrzewało we mnie przekonanie, że chcę profesjonalnie programować aplikacje webowe... <br />
                    A więc stało się &#x1F60E; &#x1F601;
                </Description>
                <Description>
                    Rozwiązywanie problemów, poszukiwanie najlepszej ścieżki do
                    osiągnięcia celu, a zwłaszcza znalezienie rozwiązania sprawia mi ogromną frajdę. Mam satysfakcję, gdy grafika ożywa za pomocą kodu
                    lub dodam nową funkcjonalność, szczególnie gdy uda mi się coś uprościć.
                </Description>
                <DescriptionList>
                    Do tworzenia aplikacji wykorzystuję:
                    <ul>
                        {
                            tech.map((el, idx) => (
                                <li key={idx}>{el}</li>
                            ))
                        }
                    </ul>
                </DescriptionList>
            </AboutContainer>

        </section>
    );
}

export default AboutMe;
