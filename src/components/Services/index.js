import React from 'react'
// import Icon1 from '../../images/svg-1.svg'
// import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
// import Icon4 from '../../images/svg-4.svg'
// import Icon5 from '../../images/svg-5.svg'
import Icon6 from '../../images/svg-6.svg'
import Icon7 from '../../images/svg-7.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'
const Services = () => {
   return (
      <ServicesContainer id='services'>
         <ServicesH1>Meus Projetos</ServicesH1>
         <ServicesWrapper>
            <ServicesCard>
               <ServicesIcon src={Icon3} />
               <ServicesH2>Mini Blog</ServicesH2>
               <ServicesP>Um Crud no estilo Mini Blog OnePage feito com banco de dados em PHP, aonde voce tem: login, registros, pagina de perfil, DarkMode e ate mesmo comentarios. Aqui voce tem todas as informaçoẽs do meu time de aprendizagem na KaBuM!</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon6} />
               <ServicesH2>Portifolio</ServicesH2>
               <ServicesP>Meu proprio Portifolio, cujo voce esta acessando agora, feito com React uma biblioteca do NodeJS, feito com javascript e alguns packages do NodeJS, como o styled-components, um portifolio bonito e dinamico com a pagina totalmente em OnePage :)</ServicesP>
            </ServicesCard>
            <ServicesCard>
               <ServicesIcon src={Icon7} />
               <ServicesH2>PokeDex</ServicesH2>
               <ServicesP>Uma PokeDex, e uma listagems de pokemons do anime, feito com Banco de Dados como o MongoDB, Usando React e nosso querido NodeJS. Este projeto ainda esta sendo planejado, mas com o tempo ele ficara pronto :)</ServicesP>
            </ServicesCard>
         </ServicesWrapper>
      </ServicesContainer>
   )
   }

export default Services
// Balma:)
