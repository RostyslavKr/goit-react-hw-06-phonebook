import React from 'react';
import PropTypes from 'prop-types';
import { WrapperContacts, ItemContact, DeleteButton } from './Contacts.styled';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <WrapperContacts>
      <ul>
        {contacts.length > 0 &&
          contacts.map(contact => (
            <ItemContact key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteButton onClick={() => onDeleteContact(contact.id)}>
                Delete
              </DeleteButton>
            </ItemContact>
          ))}
      </ul>
    </WrapperContacts>
  );
};
Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func,
};
