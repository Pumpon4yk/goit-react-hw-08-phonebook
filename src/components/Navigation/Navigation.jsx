import { useAuth } from 'components/hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import { Header, Link, Nav } from './Navigation.styled';
import { Button, WrapBtn} from 'components/BasicsStyled/BasicsStyled.styled'


export const Navigation = () => {
  const {isLoggedIn} = useAuth()

  
  return (
    <Header>
      <Nav>
        <WrapBtn>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </WrapBtn>
        {isLoggedIn  ? <UserMenu/> : <WrapBtn>
        <Button type='button'><Link to="/register">Register</Link></Button>
        <Button type='button'><Link to="/login">LogIn</Link></Button>
        </WrapBtn>}
      </Nav>
    </Header>
  );
};

export default Navigation
