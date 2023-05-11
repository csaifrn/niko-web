import React from 'react';
import Board from '../../../components/Board';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'

// import { Container } from './styles';

const Upload = () => {
  return (
    <>
      <Style.Wrapper>
        <p>Upload</p>
        <Board etapa='upload'/>
        <Style.Footer></Style.Footer>
      </Style.Wrapper>
    </>
  )
}

export default Upload;