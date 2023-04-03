import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Button,
  Form,
  Input,
  Label,
  Messege,
} from 'components/BasicsStyled/BasicsStyled.styled';
import { ContainerForm } from './LoginForm.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup); // extend yup

const LoginForm = () => {
  const dispatch = useDispatch();

  const schema = yup
    .object({
      email: yup.string().email().required(),
      password: yup.string().password().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema)});

  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <ContainerForm>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          Email
          <Input defaultValue="" {...register('email')} />
          <Messege>{errors.email?.message}</Messege>
        </Label>

        <Label>
          Password
          <Input type="password" defaultValue="" {...register('password')} />
          <Messege>{errors.password?.message}</Messege>
        </Label>

        <Button type="submit">LogIn</Button>
      </Form>
    </ContainerForm>
  );
};

export default LoginForm;
