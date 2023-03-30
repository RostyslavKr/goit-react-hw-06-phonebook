import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  (name, number) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);

export const deleteContact = createAction(
  'contacts/deleteContact',
  idContact => {
    return {
      payload: idContact,
    };
  }
);

export const filterContact = createAction('filter/filterContact', value => {
  return {
    payload: value,
  };
});
