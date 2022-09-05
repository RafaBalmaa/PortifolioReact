import React from 'react'

import PHP from '../../images/PHPTec.png'
import JS from '../../images/JSTec.png'
import RCT from '../../images/ReactTec.png'
import NDJS from '../../images/NodeTec.jpg'
import CSS from '../../images/CSSTec.png'
import HTML from '../../images/HTMLTec.png'

import {
   TecContainer, 
   TecH1, 
   TecWrapper, 
   TecCard, 
   TecIcon, 
   TecH2, 
   TecP
} from './TechnologieElements'

const Technologies = () => {
   return (
      <TecContainer id='Tec'>
         <TecH1>Tecnologias:</TecH1>
         <TecWrapper>
            <TecCard>
               <TecIcon src={PHP} />
               <TecH2>PHP</TecH2>
               <TecP>Fiz um Crud usando o banco de Dados phpMyadmin, com essa linguagem aprendi a como usar o banco de dados assim cadastrando pessoas, login e ate fiz um comentario dos usuarios com ele, aprendi varias coisas como dar SELECTS INSERTS entre outras coisas</TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={JS} />
               <TecH2>JavaScript</TecH2>
               <TecP>Com essa linguagem eu aprendi varias coisas como ajax, jogos, um relogio, a trazer informaçoes do front para o backEnd, estudei javascript, com node, e react  </TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={NDJS} />
               <TecH2>NodeJs</TecH2>
               <TecP>Um estudo incrivel com uma linguagem inusitada, aprendi sobre packages do NodeJs, aprendia utilizar o terminal e o prompt de comando do NodeJS, fiz um Crud com login, cadastro e verificação de usuarios.</TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={RCT} />
               <TecH2>React</TecH2>
               <TecP>Como dito mais a cima, esse portifolio foi feito totalmente com o React, uma biblioteca do NodeJS, Usando componentes, e o styled-components, que como o proprio nome diz e um estilo para esses componentes, muito didatico e dinamico aprendendo coisas novas.</TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={HTML} />
               <TecH2>Html</TecH2>
               <TecP>Linguagem inicial da maioria dos devs, o Html e uma das linguagems de base para um site, com ele estudei oque sao tags, estilos entre outras coisas</TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={CSS} />
               <TecH2>Css</TecH2>
               <TecP>Uma linguagem primordial para a estilização de telas o css foi a primeira linguagem para estilizar meu site, com ele aprendi a fazer telas responsivas, com flex e grid, tipos de estilização para ficar mais organizados e responsivo, entre outras coisas como active e hover </TecP>
            </TecCard>
         </TecWrapper>
      </TecContainer>
   )
}

export default Technologies
