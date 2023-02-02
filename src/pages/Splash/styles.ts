import styled from "styled-components";
import media from "styled-media-query";

export const backgroundContainer = styled.main`
    width: 100VW;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0A090E;
`;

export const itemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`;

export const logo = styled.img`
    width: 5rem;

    ${media.greaterThan("medium")`
       width: 10rem;
    `}
`;