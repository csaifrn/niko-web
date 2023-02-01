import React from 'react';
import {CardContainer, DataStrongCard, FigureIconCard, ImgIconCard, NumberCard, TextBoxCard} from "./CardStyle";

interface CardProps {
    color: string;
    srcImgIcon: string;
    link: string;
}

const Card = ( Props : CardProps ) => {
    return(
        <CardContainer href={Props.link}>
            
            <FigureIconCard backgroundColor={Props.color}>
              <ImgIconCard  src={Props.srcImgIcon}>
              </ImgIconCard>
            </FigureIconCard>

            <TextBoxCard>
              <DataStrongCard>
                <NumberCard backgroundColor='#FC6342'>12</NumberCard>
                <p>RECEBIDOS</p>
              </DataStrongCard>
              <DataStrongCard>
                <NumberCard backgroundColor='#FCDE42'>10</NumberCard>
                <p>ANDAMENTO</p>
              </DataStrongCard>
              <DataStrongCard>
                <NumberCard backgroundColor='#00D25B'>9</NumberCard>
                <p>CONCLUÍDOS</p>
              </DataStrongCard>
            </TextBoxCard>
            
        </CardContainer>
    )
}

export default Card;