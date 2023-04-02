import { useDispatch } from "react-redux"
import { logOut } from "redux/auth/operations"
import { Button, Container, Text } from "./UserMenu.styled"
import { useAuth } from 'components/hooks/useAuth';



const UserMenu = () => {
const dispatch = useDispatch()
const {user} = useAuth()


  return(
    <Container>
      <Text>{user.email}</Text>
      <Button type="button" onClick={() => dispatch(logOut())}>LogOut</Button>
    </Container>

  )
}

export default UserMenu