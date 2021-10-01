import React from "react";
import { motion } from "framer-motion";
import { Description, HomeContainer, ImgDescription, ImgTech, Technologies, Welcome } from "./Home.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import talk from '../assets/talk.png';
import tech from '../assets/tech.jpg';

const Home = () => {
    return (
        <>
            <section>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    Home
                </motion.h2>
                <HomeContainer>
                    <Welcome>
                        <strong>Dobrze trafiłeś</strong>...<br /><span>...jeśli poszukujesz <strong>Frontend Developera &#x1F601;</strong></span>
                    </Welcome>
                    <Description>
                        Podczas pracy nad projektem skupiam się na <strong>Twoich potrzebach</strong>. Zanim pojawią się pierwsze linie kodu spisujemy założenia projektu: jaki jest cel aplikacji, jakie ma mieć funkcjonalności. Następnie omawiamy technologie, które będą zastosowane i projekt graficzny. Jeśli masz przygotowany układ graficzny - super, omawiamy go i od razu przechodzę do kodowania. Gdy nie masz, możemy wspólnie go zaprojektować, lub mogę zrobić to ja i do kodowania przechodzę po Twojej akceptacji grafiki.
                    </Description>
                    <ImgDescription>
                        <img src={talk} alt={talk} />
                    </ImgDescription>
                    <Technologies>
                        W swoich pracach najczęściej stosuję <strong>React</strong>. Dzięki niemu Twoja aplikacja będzie dynamiczna, stabilna, wydajna i łatwa w rozbudowie, a jeśli nie będziesz już chciał niektórych elementów, można je usunąć bez wpływu na działanie reszty aplikacji.<br />
                        Gdy potrzebujesz prosty, statyczny Landing Page, możemy pozostać przy HTML + CSS + JavaScript.<br />
                        Ponieważ obecnie ponad 50% ruchu w internecie odbywa się za pomocą urządzeń mobilnych
                        <a href='https://spidersweb.pl/2016/11/ruch-w-internecie-mobile.html' title='Źródło' target='_blank'>
                            <sup><FontAwesomeIcon icon={faInfoCircle} /> </sup>
                        </a>
                        aplikacje i strony tworzę zgodnie z metodologią <strong>Mobile-First</strong>.
                    </Technologies>
                    <ImgTech>
                        <img src={tech} alt={tech} />
                    </ImgTech>
                </HomeContainer>
            </section>
        </>
    );
}

export default Home;
