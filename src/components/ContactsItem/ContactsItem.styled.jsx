import styled from 'styled-components';
import { ButtonSecond, Text } from 'components/BasicsStyled/BasicsStyled.styled';


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
`

export const Contact = styled(Text)`
margin: 0;
padding: 0;
`;


export const PhoneNumber = styled.span`
margin-left: 5px;
color: white;
text-shadow: 0px 2px 2px rgba(0,0,0,0.6);
`;

export const ButtonDelete = styled(ButtonSecond)`
width: 45px;

`;
export const ButtonEdit = styled(ButtonSecond)`
width: 45px;
color: blue;
box-shadow: rgba(50, 50, 255, 0.2) 0 -25px 18px -14px inset,
    rgba(50, 50, 255, 0.15) 0 1px 2px, rgba(50, 50, 255, 0.15) 0 2px 4px,
    rgba(50, 50, 255, 0.15) 0 4px 8px, rgba(50, 50, 255, 0.15) 0 8px 16px,
    rgba(50, 50, 255, 0.15) 0 16px 32px;
    :hover {
    box-shadow: rgba(50, 50, 255, 0.25) 0 -25px 18px -14px inset,
      rgba(50, 50, 255, 0.25) 0 1px 2px, rgba(50, 50, 255, 0.25) 0 2px 4px,
      rgba(50, 50, 255, 0.25) 0 4px 8px, rgba(50, 50, 255, 0.25) 0 8px 16px,
      rgba(50, 50, 255, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;