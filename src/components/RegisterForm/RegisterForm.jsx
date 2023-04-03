import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import YupPassword from 'yup-password'
import { ContainerForm } from './RegisterForm.styled';
import { Button, Form, Input, Label, Messege } from 'components/BasicsStyled/BasicsStyled.styled'
import {signUp} from 'redux/auth/operations'
import { useDispatch } from 'react-redux';

YupPassword(yup) // extend yup

const RegisterForm = () => {
  const dispatch = useDispatch()

  const schema = yup.object({
    name: yup.string().min(3).max(25).required(),
    email: yup.string().email().required(),
    password: yup.string().password().required(),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({resolver: yupResolver(schema)})

  const onSubmit = date => {
    dispatch(signUp(date))
    reset()
  }


  return(
    <ContainerForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Name
        <Input defaultValue="" {...register('name')}/>
        <Messege>{errors.name?.message}</Messege>

      </Label> 

      <Label>Email
        <Input defaultValue="" {...register('email')}/>
        <Messege>{errors.email?.message}</Messege>

      </Label> 

      <Label>Password
        <Input type="password" defaultValue="" {...register('password')}/>
        <Messege>{errors.password?.message}</Messege>

      </Label>

      <Button type="submit">Register</Button>
    </Form>
    </ContainerForm>

  )
}

export default RegisterForm