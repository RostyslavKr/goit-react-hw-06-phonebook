import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './action';

const initialState = {
  contacts: [
    {
      name: 'Sam Winchester',
      number: '900-76-55',
      id: 'k5IqQ5Ahn63qrLy9KqFF3',
    },
    {
      name: 'Dean Winchester',
      number: '999-54-44',
      id: 'YasMbPqDeoDvLx3jAbDRJ',
    },
    {
      name: 'Boby Singer',
      number: '777-89-90',
      id: '4ONaH6pxfNXeHQGgrCPjM',
    },
    {
      name: 'John Winchester',
      number: '999-87-67',
      id: 'WTQeI-3j65t5R2EvDw6fB',
    },
  ],
  filter: { value: '' },
};
export const rootReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    })
    .addCase(deleteContact, (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    })
    .addCase(filterContact, (state, action) => {
      return {
        ...state,
        filter: { ...state.filter, value: action.payload },
      };
    });
});
