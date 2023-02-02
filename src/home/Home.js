import React from "react";
import { motion } from "framer-motion";
import { Description, HomeContainer, ImgDescription, ImgTech, Technologies, Welcome } from "./Home.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import talk from '../assets/talk.png';
import tech from '../assets/tech.jpg';

const Home = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visable: { opacity: 1 },
        exit: { opacity: 0, x: -5000 }
    }

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <h2>Home</h2>
                <HomeContainer
                    variants={containerVariants}
                    initial='hidden'
                    animate='visable'
                    exit='exit'
                >
                    <Welcome>
                        <strong>Dobrze trafiłeś</strong>...<br /><span>...jeśli poszukujesz <strong>Frontend Developera &#x1F601;</strong></span>
                    </Welcome>
                    <Description>
                        Jestem Frontend Developerem z dwuletnim doświadczeniem w&nbsp;ramach własnych oraz komercyjnych projektów.
Ostatnie miesiące pozwoliły mi pracować nad rozwojem serwisów <strong>e-commerce</strong> z&nbsp;wykorzystaniem <strong>Magento 2</strong>.
Pierwsze zaś kroki w świecie komercyjnych wyzwań stawiałem ulepszając wewnętrzny system do zarządzania siecią sklepów z użyciem <strong>TypeScript</strong> i <strong>Vue.js</strong>.
Świetnie odnajduję się w zagadnieniach <strong>RWD</strong> oraz preprocesorach <strong>CSS</strong>, a <strong>GIT</strong> i&nbsp;<strong>Jira</strong> to moja codzienność.
                    </Description>
                    <ImgDescription>
                        <img src={talk} alt={talk} />
                    </ImgDescription>
                    <Technologies>
                    Oprócz zawodowych sukcesów, mam na swoim koncie mniej komercyjne, ale w pełni funkcjonalne projekty, stworzone z&nbsp;wykorzystaniem aktualnych technologii.
Każdy kolejny dzień to dla mnie doskonalenie i poszerzanie swoich zawodowych umiejętności,
Cel niezmiennie pozostaje jeden: zostać <strong>super ninją Frontendu</strong> w&nbsp;nieprzeciętnym zespole ekspertów &#128521;
                    </Technologies>
                    <ImgTech>
                        <img src={tech} alt={tech} />
                    </ImgTech>
                </HomeContainer>
            </motion.section>
        </>
    );
}

export default Home;
