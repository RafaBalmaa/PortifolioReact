import React, {useState} from 'react';
import Video3 from '../../Videos/video3.mp4';
import {Button} from '../ButtonElements';
import { 
   HeroContainer,
   HeroBg,
   VideoBg,
   HeroContent,
   HeroH1,
   HeroP,
   HeroBtnWrapper,
   ArrowForward,
   ArrowRight 
   } from './HeroElements'

const HeroSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
   }

   return (
      <HeroContainer id='home'>
         <HeroBg>
            <VideoBg autoPlay loop muted={true} src={Video3} type='video3/mp4' />
         </HeroBg>
         <HeroContent>
            <HeroH1>Olá!</HeroH1>
            <HeroH1>Eu sou Rafael Balmant da Silva</HeroH1>
            <HeroP>
               Seja bem vindo ao meu Portifolio, Aqui voce vera tudo sobre mim e meu desenvolvimento
            </HeroP>
            <HeroBtnWrapper>
            <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Veja Ele{hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection
