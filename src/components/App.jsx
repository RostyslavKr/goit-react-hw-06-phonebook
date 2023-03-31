import { Forms } from './Forms/Forms';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import {
  Container,
  ContainerContacts,
  TitlePhonebook,
  TitleContacts,
} from './Container.styled';

export const App = () => {
  return (
    <Container>
      <TitlePhonebook>Phonebook</TitlePhonebook>
      <Forms />
      <ContainerContacts>
        <TitleContacts>Contacts</TitleContacts>
        <Filter />
        <Contacts />
      </ContainerContacts>
    </Container>
  );
};
