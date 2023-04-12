import React from 'react';
import {CardContainer, DataStrongCard, FigureIconCard, ImgIconCard, NumberCard, TextBoxCard} from "./styles";

interface CardProps {
    color: string;
    srcImgIcon: string;
    link: string;
}

export const Card = ( Props : CardProps ) => {
    return(
        <CardContainer href={Props.link}>
            
            <FigureIconCard backgroundColor={Props.color}>
              <ImgIconCard  src={Props.srcImgIcon}>
              </ImgIconCard>
            </FigureIconCard>

            <TextBoxCard>
              <DataStrongCard>
                <NumberCard backgroundColor='#43DB6D'>12</NumberCard>
                <p>DISPONÍVEIS</p>
              </DataStrongCard>
              <DataStrongCard>
                <NumberCard backgroundColor='#FCDE42'>10</NumberCard>
                <p>ANDAMENTO</p>
              </DataStrongCard>
              <DataStrongCard>
                <NumberCard backgroundColor='#F32D2D'>9</NumberCard>
                <p>EM PAUSA</p>
              </DataStrongCard>
            </TextBoxCard>
            
        </CardContainer>
    )
}
// teste