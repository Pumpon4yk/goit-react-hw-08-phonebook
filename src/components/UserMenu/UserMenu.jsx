import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations"
import { Button, Container, Login, Avatar } from "./UserMenu.styled"
import { useAuth } from 'components/hooks/useAuth';
import { AvatarGenerator } from 'random-avatar-generator';

const generator = new AvatarGenerator();

const UserMenu = () => {
const dispatch = useDispatch()
const {user} = useAuth()
const avatar = generator.generateRandomAvatar();

  return(
    <Container>
    <Avatar src={avatar} alt="avatar"/>
      <Login>{user.email}</Login>
      <Button type="button" onClick={() => dispatch(logOut())}>LogOut</Button>
    </Container>

  )
}

export default UserMenu