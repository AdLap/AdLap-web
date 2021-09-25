import { Formik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { Button, ContactSection, Form, Input, Label, TextArea } from "./Contact.styled";

const Contact = () => {
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
    })

    return (
        <ContactSection>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values));
                        setSubmitting(false);
                        resetForm();
                    }, 500);
                }}
            >
                {
                    ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <Label htmlFor='name'>Imię</Label>
                            <Input
                                name='name'
                                type='text'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <Label htmlFor='email'>Email</Label>
                            <Input
                                name='email'
                                type='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <Label htmlFor='message'>Wiadomość</Label>
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
        </ContactSection >
    );
}

export default Contact;
