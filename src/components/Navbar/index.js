import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
   Nav, 
   NavbarContainer,
   NavLogo, 
   MobileIcon,
   NavMenu,
   NavItem, 
   NavLinks
} from './NavbarElements';

// import * as S from './NavbarElements'; // dica paulão

const Navbar = ({ toggle }) => {
   const [scrollNav, setScrollNav] = useState(false)

   const changeNav = () => {
      if(window.scrollY >= 80){
         setScrollNav(true)
      }else{
         setScrollNav(false)
      }
   }

   useEffect(() => {
      window.addEventListener('scroll', changeNav)
   }, [])

   const toggleHome = () =>{
      scroll.scrollToTop();
   }

   return (
      <React.Fragment>
         <IconContext.Provider value={{ color: '#fff'}}>
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>
               <NavLogo to='/' onClick={toggleHome}>Balma</NavLogo>
               <MobileIcon onClick={toggle}> 
                  <FaBars />
               </MobileIcon>
                  <NavMenu>
                     <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sobre</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Descubra</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projetos</NavLinks>
                     </NavItem>
                     <NavItem>
                        <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Tecnologias</NavLinks>
                     </NavItem>
                  </NavMenu>
            </NavbarContainer>
         </Nav>
         </IconContext.Provider>
      </React.Fragment>
   );
};

export default Navbar

