import styled from "styled-components";
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
background: orange;
display: flex;
justify-content: space-between;
`

const Title = styled.div`
font: 30px 'Rockwell';
margin: 20px;
color: crimson;
`
const NavBar = styled.div`
display: flex;
`

const NavOptions = styled(Link)`
height: 60%;
margin: 15px;
width: 120px;
border-radius: 10px;
background: green;
color: white;
border-style: none;
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
`

export { HeaderContainer, Title, NavBar, NavOptions }