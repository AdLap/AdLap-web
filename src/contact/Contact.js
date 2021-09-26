import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';
import { Button, ContactSection, Form, Input, Label, TextArea, ErrorMsg, ContactTitle } from "./Contact.styled";
import ContactSuccess from "./ContactSuccess";

const Contact = () => {
    const [success, setSuccess] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup
            .string()
            .matches(/^[aA-zZ]+$/, 'Imię nie powinno zawierać spacji i cyfr')
            .min(2, 'Imię musi mieć co najmniej 2 znaki')
            .required('Podane imię jest nieprawidłowe'),
        email: Yup
            .string()
            .email('Nieprawidłowy adres email')
            .required('Wpisz adres email'),
        message: Yup
            .string()
            .min(20, 'Wiadomość musi mieć co najmniej 20 znaków')
            .required('Wiadomość nie może być pusta')
    });

    const contactVariants = {
        hidden: {
            opacity: 0
        },
        visable: {
            opacity: 1,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 1,
                ease: 'easeInOut'
            }
        }
    };

    return (
        <ContactSection
            variants={contactVariants}
            initial='hidden'
            animate='visable'
            exit='exit'
        >
            {!success && <ContactTitle>Napisz do mnie:</ContactTitle>}
            {
                success ?
                    <ContactSuccess /> :
                    <Formik
                        initialValues={{ name: '', email: '', message: '' }}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                console.log('values::', values);
                                setSubmitting(false);
                                resetForm();
                                setSuccess(true);
                            }, 500);
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
        </ContactSection >
    );
}

export default Contact;
