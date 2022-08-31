import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
   const toggleHome = () => {
      scroll.scrollToTop();
   }

   return (
      <FooterContainer>
         <FooterWrap>
         <SocialMedia>
            <SocialMediaWrap>
               <SocialLogo to='/' onClick={toggleHome}>
               Balma
               </SocialLogo>
               <WebsiteRights>Balma © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
               <SocialIcons>
               <SocialIconLink href='https://www.facebook.com/rafaell.balmant/' target='_blank' arial-label='Facebook'>
                  <FaFacebook />
               </SocialIconLink>
               <SocialIconLink href='//www.instagram.com/rafaellbalmant/' target='_blank' arial-label='Instagram'>
                  <FaInstagram/>
               </SocialIconLink>
               <SocialIconLink href='https://youtube.com/channel/UC9RCfnIPBSg0XaQtdee0aDQ' target='_blank' arial-label='Youtube'>
                  <FaYoutube />
               </SocialIconLink>
               <SocialIconLink href='https://twitter.com/RafaBalma' target='_blank' arial-label='Twitter'>
                  <FaTwitter/>
               </SocialIconLink>
               <SocialIconLink href='https://www.linkedin.com/in/rafael-balmant-da-silva-8a5153234' target='_blank' arial-label='Linkedin'>
                  <FaLinkedin />
               </SocialIconLink>
               </SocialIcons>
            </SocialMediaWrap>
         </SocialMedia>
         </FooterWrap>
      </FooterContainer>
   )
}

export default Footer