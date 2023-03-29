import React, { useState, useEffect } from 'react';
import { Forms } from './Forms/Forms';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import {
  Container,
  ContainerContacts,
  TitlePhonebook,
  TitleContacts,
} from './Container.styled';

const getInitialConatcts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    const parcedContacts = JSON.parse(savedContacts);
    return parcedContacts;
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

export default function App() {
  const [contacts, setContacts] = useState(getInitialConatcts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Forms onSave={addContact} />

      <ContainerContacts>
        <TitleContacts>Contacts</TitleContacts>
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          contacts={filteredContacts()}
          onDeleteContact={deleteContact}
        />
      </ContainerContacts>
    </Container>
  );
}

// state = {
//     contacts: [],
//     filter: '',
//   };

//   addContact = newContact => {
//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
//       )
//     ) {
//       alert(`${newContact.name} is already in contacts`);
//       return;
//     }
//     this.setState(prevState => {
//       return {
//         contacts: [...prevState.contacts, newContact],
//       };
//     });
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts !== null) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevProps.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   render() {
//     const normalizedFilter = this.state.filter.toLowerCase();
//     const filteredContacts = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
