import { Backdrop, CloseBtn, TitleModal, Modal } from "./ModalEdit.styled";
import { useDispatch } from 'react-redux';
import {setEdit} from 'redux/contacts/editSlice'

import  ContactForm  from 'components/ContactForm';

const ModalEdit = () => {
const dispatch = useDispatch()

  return (
    <Backdrop>
        <Modal>
        <CloseBtn type="button" onClick={() => dispatch(setEdit(""))}>Close</CloseBtn>
          <TitleModal>Contact editor</TitleModal>
          <ContactForm/>

        </Modal>
    </Backdrop>
  )
  
}

export default ModalEdit

