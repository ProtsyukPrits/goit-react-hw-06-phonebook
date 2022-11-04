import { FormList, Label, Input, Button } from './ContactForm.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import { PropTypes } from 'prop-types';
import * as yup from 'yup';
// 
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';

const initialValues = {
  name: '',
  number: '',
};

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(
      nameRegex,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: yup
    .string()
    .matches(
      numberRegex,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log('value', values);
    resetForm();
    dispatch(addContacts(values));
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormList autoComplete="off">
        <Label htmlFor="name">
          Name:
          <Field type="text" name="name" as={Input} />
          <ErrorMessage name="name" component="div" />
        </Label>

        <Label htmlFor="number">
          Number:
          <Field type="tel" name="number" as={Input} />
          <ErrorMessage name="number" component="div" />
        </Label>

        <Button type="submit">Add contacts</Button>
      </FormList>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
