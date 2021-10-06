import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import { send } from "emailjs-com";
import img from '../assets/ja.jpg';
import { Button, ContactContainer, Form, Input, Label, TextArea, ErrorMsg, ImgContainer } from "./Contact.styled";
import ContactSuccess from "./ContactSuccess";

const Contact = () => {
    const [success, setSuccess] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup
            .string()
            .matches(/^[aA-zZ]+$/, 'Imię nie powinno zawierać spacji i cyfr')
            .min(2, 'Imię musi mieć co najmniej 2 znaki')
            .required('Wpisz imię'),
        email: Yup
            .string()
            .email('Nieprawidłowy adres email')
            .required('Wpisz adres email'),
        message: Yup
            .string()
            .min(20, 'Wiadomość musi mieć co najmniej 20 znaków')
            .required('Napisz wiadomość')
    });

    const contactVariants = {
        hidden: {
            opacity: 0
        },
        visable: {
            opacity: 1,
            transition: {
                duration: .5,
                ease: 'easeInOut'
            }
        },
        exit: {
            y: '-100vh'
        }
    };

    return (
        <section>
            {!success && <h2>Napisz do mnie:</h2>}
            <ContactContainer
                variants={contactVariants}
                initial='hidden'
                animate='visable'
                exit='exit'
            >
                {
                    success ?
                        <ContactSuccess /> :
                        <Formik
                            initialValues={{ name: '', email: '', message: '' }}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                send('AdLap', 'template_AdLap', values, 'user_ll8Xyyti56HCpjtirE4VV')
                                    .catch(error => alert('Coś poszło nie tak...\n', error.text));
                                setSubmitting(false);
                                resetForm();
                                setSuccess(true);
                            }}
                        >
                            {
                                ({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                    <Form
                                        onSubmit={handleSubmit}
                                        variants={contactVariants}
                                        initial='hidden'
                                        animate='visable'
                                        exit='exit'
                                    >
                                        <Label htmlFor='name'>Imię
                                            <ErrorMessage name='name' component={ErrorMsg} />
                                        </Label>
                                        <Input
                                            name='name'
                                            type='text'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        <Label htmlFor='email'>Email
                                            <ErrorMessage name='email' component={ErrorMsg} />
                                        </Label>
                                        <Input
                                            name='email'
                                            type='email'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <Label htmlFor='message'>Wiadomość
                                            <ErrorMessage name='message' component={ErrorMsg} />
                                        </Label>
                                        <TextArea
                                            name='message'
                                            rows='5'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                        />
                                        <Button type='submit' disabled={isSubmitting}>Wyślij</Button>
                                    </Form>
                                )
                            }
                        </Formik>
                }
                {
                    !success &&
                    <ImgContainer
                        exit={{ y: -500 }}
                    >
                        <img src={img} alt={img} />
                    </ImgContainer>
                }

            </ContactContainer>
        </section>
    );
}

export default Contact;
