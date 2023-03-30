import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import {
  FormContainer,
  TitleInput,
  Input,
  Error,
  NameInput,
  Button,
} from './Forms.styled';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('*Required'),
  number: Yup.string().required('*Required'),
});

export const Forms = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const handleSubmit = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
  };
  return (
    <FormContainer>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          handleSubmit({ ...values });
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <TitleInput htmlFor="name">
            <NameInput>Name</NameInput>
            <Input type="text" name="name" />
            <Error name="name" component="div" />
          </TitleInput>
          <TitleInput htmlFor="number">
            <NameInput>Number</NameInput>
            <Input
              type="text"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              name="number"
            />
            <Error name="number" component="div" />
          </TitleInput>
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </FormContainer>
  );
};

Form.propTypes = {
  onSave: PropTypes.func,
};
