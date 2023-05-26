import React from 'react';
import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import MenuCoord from '../../../components/MenuCoord';

// import { Container } from './styles';

const Upload = () => {
  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord />
      <Style.Wrapper>
        <p>Upload</p>
        <Board fase="upload" />
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  );
};

export default Upload;
