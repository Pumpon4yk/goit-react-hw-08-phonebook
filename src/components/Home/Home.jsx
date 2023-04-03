import { NavLink } from "react-router-dom";
import {WrapBtn, Button} from 'components/BasicsStyled/BasicsStyled.styled'
import { ContainerHome, TitleHome, TextHome, Card,  } from './Home.styled'


const Home = () => {

    return (
    <ContainerHome>
      <Card>
        <TitleHome>Phonebook </TitleHome>
        <TextHome>Welcome to the phone book, in this application you can save and edit your contacts easily. 
        To get started, register or log in to your account by clicking one of the buttons below.</TextHome>
        <WrapBtn>
        <Button type='button'><NavLink to="/register">Register</NavLink></Button>
        <Button type='button'><NavLink to="/login">LogIn</NavLink></Button>

        </WrapBtn>
      </Card>
    </ContainerHome>
  );
};

export default Home;
