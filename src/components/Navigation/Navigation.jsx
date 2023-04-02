import { useAuth } from 'components/hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';
import { Header, Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  // const state = useSelector()
  const {isLoggedIn} = useAuth()

  
  return (
    <Header>
      <Nav>
        <div>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        </div>
        {isLoggedIn ? <UserMenu/> : <div>
        <Link to="/register">Register</Link>
        <Link to="/login">LogIn</Link>
        </div>}
      </Nav>
    </Header>
  );
};
