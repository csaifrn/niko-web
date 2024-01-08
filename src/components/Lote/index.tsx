import * as S from './styles';
import React, { ReactNode } from 'react';
import { generateUUID } from '../../utils/generateUUID.util';
import { AssignedUser, Category } from '../../api/services/batches/get-batche/get.interface';
import { User, UserCircle, Warning } from '@phosphor-icons/react';
import { Tooltip } from 'react-tooltip';
import { IconUser } from '../Icon';

interface PropsLote {
  pendencia: number;
  value: string;
  priority: boolean;

  categories: Category[];
  assigners: AssignedUser[];

  children: ReactNode;
}

const Lote = ({ assigners, categories, children, pendencia, value, priority }: PropsLote) => {
  const random = generateUUID();
  return (
    <>
      <S.Lote className="Lote">
        <S.LoteArea>
          <S.LoteDetalhes>
            <S.LoteNumAvisos>
              <h2>{value}</h2>

              <S.PendPrioridade>
                {/* PENDENCIA */}
                {pendencia > 0 && (
                  <S.PendNumberIconBlack>
                    <Warning data-tooltip-id={`my-tooltip-${random}`} size={18} color="#f7df4c" weight="fill" />
                    <Tooltip id={`my-tooltip-${random}`} children={<p>Pendências</p>} place="top" />
                    <h2>{pendencia}</h2>
                  </S.PendNumberIconBlack>
                )}
                {/* PRIORIDADE */}
                {priority == true && (
                  <S.Prioridade>
                    <p>Prioridade</p>
                  </S.Prioridade>
                )}
              </S.PendPrioridade>
            </S.LoteNumAvisos>

            <S.LoteNumAvisos>
              {/* Categorias do Lote */}
              <S.Categoria>
                {categories &&
                  categories.map((cat: Category, index: number) => {
                    if (index === 0) {
                      return (
                        <React.Fragment key={cat.id}>
                          <S.BlackBlock style={{ borderRadius: '3px' }}>
                            <p style={{ padding: '0 0.5em' }}>{cat.name}</p>
                          </S.BlackBlock>
                        </React.Fragment>
                      );
                    } else if (index + 1 == categories.length) {
                      const random = generateUUID();
                      return (
                        <S.BlackBlock
                          data-tooltip-id={`my-tooltip-multiline-${random}`}
                          key={cat.id}
                          style={{ borderRadius: '100%', width: '2em', paddingRight: '2px' }}
                        >
                          <p>+{index}</p>
                          <Tooltip
                            id={`my-tooltip-multiline-${random}`}
                            children={categories.slice(1).map((cat: Category) => {
                              return <S.ToolText key={random}>{cat.name}</S.ToolText>;
                            })}
                            place="top"
                          />
                        </S.BlackBlock>
                      );
                    }
                  })}
              </S.Categoria>
              {/* Operadores do Lote */}
              <S.Envolvido style={{ display: 'flex', marginLeft: '10px' }}>
                {assigners &&
                  assigners.map((member, index: number) => {
                    if (index < 1) {
                      return <IconUser name={member.name} id={member.id} key={member.id} />;
                    } else if (index <= 2 && assigners.length === index + 1) {
                      const random = generateUUID();
                      return (
                        <S.BlackBlock
                          data-tooltip-id={`my-tooltip-multiline-${random}`}
                          key={member.id}
                          style={{ borderRadius: '100%', width: '2em', paddingRight: '2px' }}
                        >
                          <p>+{index}</p>
                          <Tooltip
                            id={`my-tooltip-multiline-${random}`}
                            children={assigners.slice(1).map((cat: AssignedUser) => {
                              return <S.ToolText key={cat.id}>{cat.name}</S.ToolText>;
                            })}
                            place="top"
                          />
                        </S.BlackBlock>
                      );
                    }
                  })}
              </S.Envolvido>
            </S.LoteNumAvisos>
          </S.LoteDetalhes>

          {/* BOTÃO DE ATRIBUIR ALGUÉM */}

          {children && children}
        </S.LoteArea>
      </S.Lote>
    </>
  );
};

export default Lote;
