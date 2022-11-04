// import { useState, useEffect } from 'react';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { ContactContainer } from './App.styled';
import { Filter } from './Filter';
// import { nanoid } from 'nanoid';
// import { getContacts } from 'redux/selectors';

// const LS_KEY = 'phonebook_contacts';

export const App = () => {
  // const [filter, setFilter] = useState('');

  // const localStorContacts = localStorage.getItem(LS_KEY);
  // const parseContacts = JSON.parse(localStorContacts);

  // if (parseContacts) {
  //   return parseContacts
  // }

  // localStorage.setItem(LS_KEY, JSON.stringify(getContacts));

  // const addToContact = ({ name, number }) => {
  //   if (contacts.some(contact => contact.name === name)) {
  //     return Notiflix.Notify.info(`${contacts.name} is already in contacts!`);
  //   }

  //   setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  // };

  // const deleteFromContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // const filtring = e => {
  //   setFilter(e.currentTarget.value.toLowerCase().trim());
  // };

  // const filtringContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter)
  // );

  return (
    <ContactContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </ContactContainer>
  );
};
