import React from "react";
import { motion } from "framer-motion";
import { AboutContainer, Description, DescriptionList, Img, ImgContainer } from "./AboutMe.styled";
import img from '../assets/ja.jpg';

const AboutMe = () => {
    const tech = [
        'TypeScript',
        'JavaScript',
        'Next',
        'React',
        'Vue',
        'Styled Components',
        'SASS/LESS'
    ];
    const aboutVariants = {
        hidden: { x: 0 },
        visable: {
            x: 0,
            transition: {
                staggerChildren: 0.3
            }
        },
        exit: { x: 2000 }
    }
    const childrenVariants = {
        hidden: { x: 2000 },
        visable: { x: 0 }
    }
    const imgVariants = {
        hidden: {
            x: -5000,
            opacity: 0
        },
        visable: {
            x: 0,
            opacity: 1,
            transition: { duration: 1 }
        }
    }

    return (
        <motion.section
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                O mnie:
            </motion.h2>
            <AboutContainer
                variants={aboutVariants}
                initial='hidden'
                animate='visable'
                exit='exit'
            >
                <ImgContainer
                    variants={imgVariants}
                >
                    <Img src={img} alt='Adam Łapacz' />
                </ImgContainer>

                <Description
                    variants={childrenVariants}
                >
                    Moja historia z tworzeniem stron internetowych zaczęła się w 2012 roku, kiedy zrealizowałem swój pierwszy projekt dla nowo powstałego biznesu. W kolejnych latach pracowałem dorywczo, przyjmując mniejsze zlecenia. Mimo to zawsze kiełkowała we mnie myśl o profesjonalnym zaangażowaniu się w obszar programowania aplikacji webowych.
                    <hr />
                    Podjęcie tej drogi okazało się dla mnie nie tylko słuszne, lecz również ekscytujące. Każde nowe wyzwanie staje się dla mnie okazją do rozwoju. Dążę do zdobywania wszechstronnego doświadczenia i doskonale swoje umiejętności, aby stawać się coraz bardziej kompetentnym programistą.
                </Description>

                <Description
                    variants={childrenVariants}
                >
                    Oczywiście, życie to nie tylko godziny spędzone przed ekranem komputera. Oprócz pracy, znajduję radość w zainteresowaniach, które ożywiają moją codzienność. Pasjonuję się motocyklami i z przyjemnością korzystam z każdej przejażdżki, podczas której mogę na chwilę oderwać się od codziennych spraw. Dodatkowo, strzelectwo to dla mnie nie tylko sposób na relaks, ale także moment skupienia, rozwijający jednocześnie umiejętność koncentracji i precyzji.
                    <br /><br />
                    Te różnorodne elementy dodają nowych kolorów mojemu życiu zawodowemu i osobistemu, nadając mu pełniejszy wymiar. 😊
                </Description>
                <DescriptionList
                    variants={childrenVariants}
                >
                    Technologie, w których pracuję:
                    {

                        tech.map((el) => (
                            <li key={el}><span>&#10004;</span>{el}</li>
                        ))
                    }
                    <li>
                        <span>&#10004;</span>
                        <span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: .75, repeat: Infinity, repeatType: 'reverse' }}
                                exit={{ opacity: 0 }}
                            >.</motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5, duration: .75, repeat: Infinity, repeatType: 'reverse' }}
                                exit={{ opacity: 0 }}
                            >.</motion.span>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: .75, repeat: Infinity, repeatType: 'reverse' }}
                                exit={{ opacity: 0 }}
                            >.</motion.span>
                        </span>
                    </li>
                </DescriptionList>
            </AboutContainer>
        </motion.section>
    );
}

export default AboutMe;
