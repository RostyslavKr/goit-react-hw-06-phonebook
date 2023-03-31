import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';
import { WrapperContacts, ItemContact, DeleteButton } from './Contacts.styled';

const getVisibleContacts = (contacts, value) => {
  if (value === '') {
    return contacts;
  }
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );
};

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const visibleContacts = getVisibleContacts(contacts, value);

  return (
    <WrapperContacts>
      <ul>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => (
            <ItemContact key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteButton onClick={() => handleDelete(contact.id)}>
                Delete
              </DeleteButton>
            </ItemContact>
          ))}
      </ul>
    </WrapperContacts>
  );
};
