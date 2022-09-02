import styled from "styled-components"

export const TecContainer = styled.div`
   height: 1100px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #010606;
   @media screen and (max-width: 768px) {
      height: 2500px;
   }
   @media screen and (max-width: 480px) {
      height: 2700px;
   }
`
export const TecWrapper = styled.div`
   max-width: 1000px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   align-items: center;
   grid-gap: 16px;
   padding: 0 50px;
   @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
   }  
   @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
}
`
export const TecCard = styled.div`
   background: #fff;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   border-radius: 10px;
   max-height: 350px;
   padding:  30px;
   box-shadow: 0 1px 3px rgba(0,0,0,0.2);
   transition: all 0.2s ease-in-out;
   &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease-in-out;
      cursor:pointer;
   }
`
export const TecIcon = styled.img`
   height: 160px;
   width: 160px;
   margin-bottom: 10px;
`
export const TecH1 = styled.h1`
   font-size: 2.5rem;
   color: #fff;
   margin-bottom: 64px;
   @media screen and (max-width: 480px) {
      font-size: 2rem;
   }  
`
export const TecH2 = styled.h2`
   font-size: 1rem;
   margin-bottom: 10px;
`

export const TecP = styled.p`
   font-size: 15px;
   text-align: center;
`
