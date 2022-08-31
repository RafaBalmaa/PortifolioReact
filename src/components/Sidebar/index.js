import React from 'react'
import {
   SidebarContainer,
   Icon,
   CloseIcon,
   SidebarWrapper,
   SidebarMenu,
   SidebarLink,
   } from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
   return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle} >
            <CloseIcon />
         </Icon>
         <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to='about' onClick={toggle}>
                  Sobre
               </SidebarLink>
               <SidebarLink to='discover' onClick={toggle}>
                  Descubra
               </SidebarLink>
               <SidebarLink to='services' onClick={toggle}>
                  Projetos
               </SidebarLink>
               <SidebarLink to='singup' onClick={toggle}>
                  Tecnologias
               </SidebarLink>
            </SidebarMenu>
         </SidebarWrapper>
      </SidebarContainer>
   )
}

export default Sidebar
