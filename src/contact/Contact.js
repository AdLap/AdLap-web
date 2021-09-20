import { Formik } from "formik";
import React from "react";
import { Button, ContactSection, Form, Input, Label, TextArea } from "./Contact.styled";

const Contact = () => {
    return (
        <ContactSection>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                // validationSchema={ }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                {
                    ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, resetForm }) => (
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
