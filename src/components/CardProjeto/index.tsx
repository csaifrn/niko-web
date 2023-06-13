import React from 'react';
import { CardContainer } from './styles';

interface CardProps {
  srcImgIcon: string;
  link: string;
}
//
export const CardProjeto = (Props: CardProps) => {
  return (
    <div
      style={{
        borderRadius: '5px',
        overflow: 'hidden',
        display: 'flex',
        width: '100%',
        maxWidth: '400px',
        flexWrap: 'wrap',
      }}
    >
      <a
        href={Props.link}
        style={{ textDecoration: 'none', color: 'white', display: 'flex', flexDirection: 'column', width: '100%' }}
      >
        <img src={Props.srcImgIcon} alt="Incra" width={'100%'} />
        <div
          style={{
            backgroundColor: '#393E4B',
            display: 'flex',
            padding: '1em',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1>Incra</h1>
          <img src="DotsThreeOutlineVertical.svg" alt="Três Pontos" />
        </div>
      </a>
    </div>
  );
};
// teste
