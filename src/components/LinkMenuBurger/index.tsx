import React, { useEffect } from "react";
import * as S from "./styles"

interface LinkMenuProps {
  nome: string,
  path: string,
  area: string,
  
}

const LinkMenuBurger = (props : LinkMenuProps) => {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    if (props.area == props.path) {
      setOpen(true)
    }
    else {
      setOpen(false)
    }
  })

  return(
    <S.LinkMenu href={props.path} open={open}>
      {props.nome}
    </S.LinkMenu>
  );

}

export default LinkMenuBurger;