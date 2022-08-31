import React from 'react';

import { 
      InfoContainer, 
      InfoWrapper,
      InfoRow,
      TextWrapper,
      TopLine,
      Heading,
      Column1,
      Column2,
      Subtitle,
      ImgWrap, 
      Img,
      Imgme
   } from './InfoElements';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, imgme, altme}) => {
   
   return (
      <div>
         <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                  <Column1>
                  <TextWrapper>
                     <TopLine>{topLine}</TopLine>
                     <Heading lightText={lightText}>{headline}</Heading>
                     <Subtitle darkText={darkText}>{description}</Subtitle>
                  </TextWrapper>
                  </Column1>
                  <Column2>
                     <ImgWrap>
                        <Img src={img} alt={alt} />
                        <Imgme src={imgme} alt={altme} />
                     </ImgWrap>
                  </Column2>
               </InfoRow>
            </InfoWrapper>
         </InfoContainer>
      </div>
   )
   }

export default InfoSection
