import {Container, Contact, PhoneNumber, ButtonDelete, ButtonEdit } from './ContactsItem.styled';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

import { deleteContact } from 'redux/contacts/operations';
import { isLoadingContacts, getEditId } from 'redux/contacts/seletors';
import { WrapBtn } from 'components/BasicsStyled/BasicsStyled.styled';
import {setEdit} from 'redux/contacts/editSlice'
import ModalEdit from 'components/ModalEdit';

const portal = document.querySelector("#modal-root")


const ContactsItem = ({ contact: { id, name, number }}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingContacts)
  const idContact = useSelector(getEditId)

  const handalEdit = (e) => {
    dispatch(setEdit(e.target.id))
  }
 
  return (
    <Container>
      <Contact>
        {name}
      </Contact>
      <PhoneNumber>{number}</PhoneNumber>
      <WrapBtn>
      <ButtonEdit id={id} onClick={handalEdit} disabled={isLoading}>Edit</ButtonEdit>

      <ButtonDelete id={id} onClick={() => dispatch(deleteContact(id))} disabled={isLoading}>
      Delete
      </ButtonDelete>
      </WrapBtn>
      {idContact && createPortal(<ModalEdit/>, portal)}
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

export default ContactsItem