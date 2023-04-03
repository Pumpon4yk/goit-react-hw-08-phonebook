import { Messege, FormAddContact } from './ContactForm.styled';
import {
  Button,
  Input,
  Label,
} from 'components/BasicsStyled/BasicsStyled.styled';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  errorContacts,
  getEditId,
  idFilter,
} from 'redux/contacts/seletors';
import { addContact, editContact } from 'redux/contacts/operations';
import { setEdit } from 'redux/contacts/editSlice';

const namePattern =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const numberPattern =
  /^(?:\+[\d]{1,3}\s?)?(?:[\d]{2,}[\s-]?[\d]{2,}[\s-]?[\d]{2,}[\s-]?[\d]{2,}|\([\d]{2,}\)[\s-]?[\d]{2,}[\s-]?[\d]{2,}[\s-]?[\d]{2,})$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(
      namePattern,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(3)
    .max(25)
    .required('Required'),
  number: Yup.string()
    .matches(
      numberPattern,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .max(20)
    .required('Required'),
});

const checkContscts = (arr, obj) => {
  return arr.every(e => e.name.toLowerCase() !== obj.name.toLowerCase());
};


const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isError = useSelector(errorContacts);
  const contact = useSelector(idFilter);
  const idContact = useSelector(getEditId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    const { name } = data;

    if (idContact) {
      if (name) dispatch(editContact(data));
      dispatch(setEdit(''));

      if (isError) return;

      reset();
      return;
    } else if (checkContscts(contacts, data)) {
      dispatch(addContact(data));

      if (isError) return;

      reset();
    } else {
      toast(`🔸${name}🔸is already in contacts `, {
        icon: '🚫',
        duration: 3000,
      });
    }
  };

  return (
    <FormAddContact onSubmit={handleSubmit(onSubmit)}>
      <Label>
        Name
        <Input
          defaultValue={idContact ? contact[0].name : ''}
          {...register('name')}
        />
        <Messege>{errors.name?.message}</Messege>
      </Label>
      <Label>
        Number
        <Input
          defaultValue={idContact ? contact[0].number : ''}
          {...register('number')}
        />
        <Messege>{errors.number?.message}</Messege>
      </Label>
      <Button type="submit">{idContact ? 'Edit' : 'Add'} contact</Button>
    </FormAddContact>
  );
};

export default ContactForm;
