import React from 'react';
import Board from '../../../components/Board';
import * as Style from '../../../global/index';

// import { Container } from './styles';

const Upload = () => {
  return (
    <>
      <Style.Wrapper>
        <p>Upload</p>
        <Board fase="upload" />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Upload;
