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
               <TecP>Um Crud no estilo Mini Blog OnePage feito com banco de dados em PHP, aonde voce tem: login, registros, pagina de perfil, DarkMode e ate mesmo comentarios. Aqui voce tem todas as informaçoẽs do meu time de aprendizagem na KaBuM!</TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={JS} />
               <TecH2>JavaScript</TecH2>
               <TecP>Meu proprio Portifolio, cujo voce esta acessando agora, feito com React uma biblioteca do NodeJS, feito com javascript e alguns packages do NodeJS, como o styled-components, um portifolio bonito e dinamico com a pagina totalmente em OnePage </TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={NDJS} />
               <TecH2>NodeJs</TecH2>
               <TecP>Uma PokeDex, e uma listagems de pokemons do anime, feito com Banco de Dados como o MongoDB, Usando React e nosso querido NodeJS. Este projeto ainda esta sendo planejado, mas com o tempo ele ficara pronto :)</TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={RCT} />
               <TecH2>React</TecH2>
               <TecP>Uma PokeDex, e uma listagems de pokemons do anime, feito com Banco de Dados como o MongoDB, Usando React e nosso querido NodeJS. Este projeto ainda esta sendo planejado, mas com o tempo ele ficara pronto :)</TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={HTML} />
               <TecH2>React</TecH2>
               <TecP>Uma PokeDex, e uma listagems de pokemons do anime, feito com Banco de Dados como o MongoDB, Usando React e nosso querido NodeJS. Este projeto ainda esta sendo planejado, mas com o tempo ele ficara pronto :)</TecP>
            </TecCard>
            <TecCard>
               <TecIcon src={CSS} />
               <TecH2>React</TecH2>
               <TecP>Uma PokeDex, e uma listagems de pokemons do anime, feito com Banco de Dados como o MongoDB, Usando React e nosso querido NodeJS. Este projeto ainda esta sendo planejado, mas com o tempo ele ficara pronto :)</TecP>
            </TecCard>
         </TecWrapper>
      </TecContainer>
   )
}

export default Technologies
