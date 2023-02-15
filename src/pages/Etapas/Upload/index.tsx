import React from 'react';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index'

// import { Container } from './styles';

const Upload = () => {
  return(
    <>
    <Style.Wrapper>
      <Menu area='/Upload'></Menu>
      <p>Upload</p>
      <Style.Footer></Style.Footer>
    </Style.Wrapper>
    </>
  )
}

export default Upload;