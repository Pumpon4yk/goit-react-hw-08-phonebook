import styled from 'styled-components';
import { ButtonSecond, Text } from 'components/BasicsStyled/BasicsStyled.styled';



export const Container = styled.div`
display: flex;
align-items: center;
gap: 15px;
`
export const Avatar = styled.img`
width: 40px;
`
 
export const Login = styled(Text)`
padding: 8px;
font-size: 22px;

  border-radius: 5px;
  background: rgb(54,131,244);
background: linear-gradient(0deg, rgba(54,131,244,0.4290091036414566) 0%, rgba(82,153,227,0.41780462184873945) 100%);

`

export const Button = styled(ButtonSecond)`
width: 65px;
height: 25px;
`