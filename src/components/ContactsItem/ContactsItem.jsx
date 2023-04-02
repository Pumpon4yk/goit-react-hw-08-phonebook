import {Container, Contact, PhoneNumber, ButtonDelete } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { isLoadingContacts } from 'redux/contacts/seletors';

export const ContactsItem = ({ contact: { id, name, number }}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingContacts)
 
  return (
    <Container>
      <Contact>
        {name}
      </Contact>
      <PhoneNumber>{number}</PhoneNumber>
      <ButtonDelete id={id} onClick={() => dispatch(deleteContact(id))} disabled={isLoading}>
      Delete
      </ButtonDelete>
    </Container>
  );
};


ContactsItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired,
  
};