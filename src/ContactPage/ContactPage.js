import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './ContactPage.css';

class ContactPage extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Formik
          initialValues={{ email: '', textarea: '' }}
          onSubmit={(values) => {
            axios.post('http://localhost:3001/contact', {
              ...values
          }).then(res => {
              console.log(res.data);
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className='undabot-contactPage__form'>
              <Field type="email" name="email" placeholder="Email" className='undabot-contactPage__formItem'/>
              <ErrorMessage name="email" component="div" />
              <br/>
              <Field as='textarea' type="textarea" placeholder="Textarea" name="textarea" className='undabot-contactPage__formItem'/>
              <ErrorMessage name="textarea" component="div" />
              <br/>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </React.Fragment>  
    )
  }
}

export default ContactPage;