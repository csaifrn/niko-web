import styled from 'styled-components';
import media from 'styled-media-query';

const SearchDiv = styled.div`
  display: flex;
  position: relative;
`;

const InputSearch = styled.input`
  height: 44px;
  padding: 0 4.2em;
  border-radius: 5px;
  background-color: rgb(57, 62, 75);
  color: #fff;
  border: none;
  width: 100%;
  font-family: 'Rubik', Helvetica, sans-serif;
  ::-webkit-input-placeholder {
    color: white;
  }

  :-moz-placeholder { /* Firefox 18- */
    color: white;  
  }

  ::-moz-placeholder {  /* Firefox 19+ */
    color: white;  
  }

  :-ms-input-placeholder {  
    color: white;  
  }
  ${media.greaterThan('large')`
    width: 100%;
  `}
`;

const ImgSearch = styled.img`
  position: absolute;
  top: 10px;
  left: 16px;
`;

export { InputSearch, ImgSearch, SearchDiv };
