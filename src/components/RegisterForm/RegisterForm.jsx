import { useForm } from 'react-hook-form';
import { Button, Form, Input, Label, Messege } from './RegisterForm.styled';
import {signUp} from 'redux/auth/operations'
import { useDispatch } from 'react-redux';

const RegisterForm = () => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = date => {
    dispatch(signUp(date))
    reset()
  }


  return(
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
        <Input defaultValue="" {...register('password')}/>
        <Messege>{errors.password?.message}</Messege>

      </Label>

      <Button type="submit">Register</Button>
    </Form>

  )
}

export default RegisterForm