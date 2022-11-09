import React from 'react';
import {CardContainer} from "./CardStyle";
import {CardContainer2} from "./CardStyle";

const Card = () => {
    return(
        <div>
        <CardContainer>
            <img src="./icons.png"></img>
        </CardContainer>

        <CardContainer2>
            <img src="./iconsdigtalizar.png"></img>
        </CardContainer2>
    </div>
    )
}

export default Card;