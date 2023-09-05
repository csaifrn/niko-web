import styled from 'styled-components';
import media from 'styled-media-query';

export const EspecificacoesAtiv = styled.div`
    ${media.greaterThan("large")`
        display:flex;
        gap: 32px;
    `}
`;

export const Data = styled.div`

`;