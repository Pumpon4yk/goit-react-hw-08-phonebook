import Contacts from 'components/Contacts';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return (
      <Contacts />
  );
};

export default ContactsPage
