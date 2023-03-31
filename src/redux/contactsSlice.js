import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  items: [
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
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(user) {
        return {
          payload: { name: user.name, number: user.number, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
