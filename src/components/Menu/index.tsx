import React from 'react';
import * as S from "./styles"

export const Menu = () => {
    return(
      <S.MenuArea>
        <S.MenuImg src='/menu.svg'/>
        <S.MenuImg src='/Logo_Niko.svg'/>
        <S.MenuLeft>
          <S.MenuImg src='/Lupa.svg'/>
          <S.MenuImg src='/Conta.svg'/>
        </S.MenuLeft>
    </S.MenuArea>
    )
}
