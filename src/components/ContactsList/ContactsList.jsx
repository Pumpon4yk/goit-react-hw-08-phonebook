import {  List, Item } from './ContactsList.styled';
import ContactsItem  from 'components/ContactsItem';

import { useSelector } from 'react-redux';
import { contactsFilter } from 'redux/contacts/seletors';

const ContactsList = () => {
  const visibleContacts = useSelector(contactsFilter);

  return (
    <List>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <ContactsItem contact={contact} />
          </Item>
        ))}
      </List>
  )
}

export default ContactsList
