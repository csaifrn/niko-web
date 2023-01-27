import styled from "styled-components";
import media from "styled-media-query";

export const backgroundContainer = styled.main`
    width: 100VW;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const itemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const logo = styled.img`
    width: 15rem;

    ${media.greaterThan("medium")`
       width: 20rem;
    `}
`;