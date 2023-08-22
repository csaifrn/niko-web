import * as S from './styles';
import React, { useEffect, useRef, useState } from 'react';

import { LoteData } from '../../data/LoteData';
import { generateUUID } from '../../utils/generateUUID.util';
import { ArrowCircleRight } from '@phosphor-icons/react';
import theme from '../../global/theme';

interface IUltimoLote {
  close: () => void;
}

const lote = LoteData[2];

export const UltimoLote = (props: IUltimoLote) => {
  const [touchStartY, setTouchStartY] = useState(0); // Estado para controlar a posição inicial do toque
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 200 }); // Estado para controlar a posição do modal
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
    const timer = setTimeout(() => {
      setModalPosition({ x: 0, y: 0 });
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  // Função para atualizar a posição do modal durante o arrastar
  const handleDrag = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const modal = modalRef.current;
    if (modal) {
      const modalRect = modal.getBoundingClientRect();
      const offsetY = touch.clientY - touchStartY;
      if (offsetY >= 0 && offsetY <= modalRect.height) {
        setModalPosition({ x: 0, y: offsetY });
      }
    }
  };

  // Função para iniciar o arrastar
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartY(e.touches[0].clientY);
  };

  // Função para finalizar o arrastar e decidir se o modal deve ser fechado ou não
  const handleTouchEnd = () => {
    const modal = modalRef.current;
    if (modal) {
      const modalRect = modal.getBoundingClientRect();
      const halfHeight = modalRect.height / 1.5;

      if (modalPosition.y > halfHeight) {
        setModalPosition({ x: 0, y: modalRect.height + 400 });
        setTimeout(() => props.close(), 300);
      } else {
        setModalPosition({ x: 0, y: 0 });
      }
    }
  };

  return (
    <S.ModalBackdrop>
      <S.Wrapper
        id="modal-scaling"
        ref={modalRef}
        style={{
          transform: `translate(0, ${modalPosition.y}px)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleDrag}
        onTouchEnd={handleTouchEnd}
      >
        <S.ContainerData onTouchMove={handleDrag}>
          {' '}
          {/* Adicionar o evento onTouchMove */}
          <S.Barra></S.Barra>
          <S.LoteArea>
            <S.Content>
              <S.Titulo>{lote.titulo + ' ' + lote.numero} </S.Titulo>
            </S.Content>
            <S.Content>
              <S.Envolvido style={{ display: 'flex', marginLeft: '10px' }}>
                {lote.envolvidos &&
                  lote.envolvidos.map((envolvidos: any, index: number) => (
                    <React.Fragment key={generateUUID()}>
                      {index <= 2 && (
                        <img
                          src={envolvidos.foto}
                          width={24}
                          height={24}
                          style={{
                            marginLeft: '-10px',
                            borderRadius: '100%',
                            objectFit: 'cover',
                            width: '24px',
                            height: '24px',
                          }}
                          alt="Foto do usuário"
                        ></img>
                      )}
                      {index >= 3 && (
                        <S.PaTextDiv
                          style={{
                            borderRadius: '100%',
                            width: '24px',
                            marginLeft: '-10px',
                          }}
                        >
                          <p>+{index - 2}</p>
                        </S.PaTextDiv>
                      )}
                    </React.Fragment>
                  ))}
              </S.Envolvido>

              <S.Pa>
                {lote.categorias &&
                  lote.categorias.map((categoria: any, index: number) => (
                    <React.Fragment key={generateUUID()}>
                      {index >= 1 && (
                        <S.PaTextDiv style={{ borderRadius: '100%', width: '2em' }}>
                          <p>+{index}</p>
                        </S.PaTextDiv>
                      )}
                      {index == 0 && (
                        <S.PaTextDiv style={{ borderRadius: '3px' }}>
                          <p style={{ padding: '0 0.5em' }}>{categoria.nome}</p>
                        </S.PaTextDiv>
                      )}
                    </React.Fragment>
                  ))}
              </S.Pa>
            </S.Content>
          </S.LoteArea>
          <S.Titulo>Deseja continuar esse lote?</S.Titulo>
          <S.Btn>
            <ArrowCircleRight size={32} weight="fill" color={theme.colors['gray/700']} />
            Continuar Lote
          </S.Btn>
          <S.BlackButton
            onClick={() => {
              setModalPosition({ x: 0, y: 600 });
              setTimeout(() => props.close(), 400);
            }}
          >
            Recusar
          </S.BlackButton>
        </S.ContainerData>
      </S.Wrapper>
    </S.ModalBackdrop>
  );
};
