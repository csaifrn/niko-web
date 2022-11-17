import React from 'react';
import {TextBox} from "./CardStyle";
import {CardContainer} from "./CardStyle";
import {CardContainer2} from "./CardStyle";

const Card = () => {
    return(
        <div>
            <CardContainer>

                <img src="./icons.png"></img>

                <TextBox>
                     Digitalizados 
                </TextBox>

            </CardContainer>

            <CardContainer2>
                <img src="./iconsdigtalizar.png"></img>     
            </CardContainer2>
        </div>
    )
}

export default Card;