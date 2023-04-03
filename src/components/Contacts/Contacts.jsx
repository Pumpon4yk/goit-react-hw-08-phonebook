import { useSelector } from 'react-redux';
import { getContacts, isLoadingContacts, getEditId } from 'redux/contacts/seletors';
import { ContainerForm, TitleContact, TitleForm, Fake } from './Contacts.styled';
import ContactForm from '../ContactForm';
import SearchContact from '../SearchContact';
import ContactsList from '../ContactsList';



const Contacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(isLoadingContacts);
  const idContact = useSelector(getEditId)

  
  return (
    <ContainerForm>
      <TitleForm>Phonebook</TitleForm>
      {idContact ? <Fake/> : <ContactForm/>}
      

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

    </ContainerForm>
  );
};

export default Contacts;
