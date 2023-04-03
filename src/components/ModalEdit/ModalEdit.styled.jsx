import { Title } from "components/BasicsStyled/BasicsStyled.styled";
import { ButtonDelete } from "components/ContactsItem/ContactsItem.styled";
import styled from "styled-components";

export const Backdrop = styled.div`
position: fixed;
top:0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(28,46,57,0.05); 
`

export const Modal = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: flex;
flex-direction: column;
align-items: center;
width: 350px;
height: 400px;
background-color: rgb(180,200,200);
padding: 35px;
border-radius: 20px;
text-align: center;
`

export const CloseBtn = styled(ButtonDelete)`
position: absolute;
top:20px;
right: 20px;
`

export const TitleModal = styled(Title)`
font-size: 28px;
margin-bottom: 50px;
`