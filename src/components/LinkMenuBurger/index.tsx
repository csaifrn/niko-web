import React, { useEffect } from 'react';
import * as S from './styles';

interface LinkMenuProps {
  nome: string;
  path: string;
  area: string;
}

const LinkMenuBurger = (props: LinkMenuProps) => {
  const [Linkopen, setLinkOpen] = React.useState(true);

  useEffect(() => {
    if (props.area == props.path) {
      setLinkOpen(true);
    } else {
      setLinkOpen(false);
    }
  }, [props.area, props.path]);

  return (
    <S.LinkMenu href={props.path} open={Linkopen}>
      {props.nome}
    </S.LinkMenu>
  );
};

export default LinkMenuBurger;
