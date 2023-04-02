import { Toaster } from 'react-hot-toast';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts, isLoadingContacts } from 'redux/contacts/seletors';
import { Container, TitleContact, TitleForm } from './Contacts.styled';
import ContactForm from '../ContactForm';
import { SearchContact } from '../SearchContact';
import { ContactsList } from '../ContactsList';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(isLoadingContacts);

  return (
    <Container>
      <TitleForm>Phonebook</TitleForm>
      <ContactForm />

      <TitleContact>Contacts</TitleContact>
      {contacts.length === 0 && isLoading && <p>loading...</p>}
      {contacts.length === 0 && !isLoading ? (
        <p>You don't have contacts ☹️</p>
      ) : (
        <>
          <SearchContact />
          <ContactsList />
        </>
      )}

      <Toaster position="top-left" reverseOrder={false} />
    </Container>
  );
};

export default Contacts;
