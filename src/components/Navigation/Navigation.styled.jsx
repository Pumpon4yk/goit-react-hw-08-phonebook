import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Header =styled.header`
display: flex;
align-items: center;
width: 1280px;
height: 70px;
border-bottom: 1px solid black;
margin: 0 auto 30px;
`

export const Nav = styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px;
`


export const Link = styled(NavLink)`
color: blue;
font-size: 18px;

:hover{
  color: orange;
}
`