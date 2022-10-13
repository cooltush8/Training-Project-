import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
  background : white;
  height : 80px ;
 margin - top : -80px ;
 display : flex ;
 justify - content : center ;
  align - items : center ;
  font - size : 1rem ;
  position : sticky ;
  top : 0 ;
 z - index : 10 ;`;


 export const NavbarContainer = styled.div`
 display : flex ;
 justify-content :space-between ;
 height : 80px ;
 z-index :  ;
width : 1000 % ;
padding : 24px ;
max - width : 1100px ;`;


export const NavLogo = styled ( LinkR )`

 
  justify-self : flex -start ;
  cursor : pointer ;
  font - size : 1.5ren ;
  display : flex ;
  align - items : center ;
  margin - left : 24px ;
  font - weight : bold ;
  text - decoration : none;` ;


  
  export const NavMenu = styled.ul`
  top:100px;
  display : flex;
  align - items : right ;
  list - style :  ;
  text - align : ;
  margin - right : -22px ;
`;


export const NavItem = styled.line`

text-decoration: none ;
  height : 60px ;`;



  
export const NavLinks = styled(LinkS)`

  
  display : flex;
  align-items: center ;
 text-decoration: none ;
    padding :0 1rem ; 
  height : 100 % ;
  cursor : pointer;
  width: 20;
  & .active {
    border - bottom : 3px solid # 01bf71 ;
 }`;


 export default NavLinks;