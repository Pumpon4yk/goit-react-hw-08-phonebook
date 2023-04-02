import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
const { Button, Form, Input, Label, Messege } = require("./LoginForm.styled")



const LoginForm = () => {
const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = data => {
dispatch(logIn(data))
    reset()
  }


  return(
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Label>Email
        <Input defaultValue="" {...register('email')}/>
        <Messege>{errors.email?.message}</Messege>
      </Label> 

      <Label>Password
        <Input defaultValue="" {...register('password')}/>
        <Messege>{errors.password?.message}</Messege>
      </Label>

      <Button type="submit">LogIn</Button>
    </Form>

  )
}

export default LoginForm