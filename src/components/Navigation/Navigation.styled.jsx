import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const Header =styled.header`
width: 1280px;
height: 50px;
border-bottom: 1px solid black;
margin: 0 auto 30px;
`

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
padding: 15px;

`


export const Link = styled(NavLink)`
color: blue;
font-family: sans-serif;
font-size: 22px;
padding: 0 10px;

:hover{
  color: orange;
}
`