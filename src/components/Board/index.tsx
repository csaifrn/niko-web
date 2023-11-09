import { useEffect, useState } from 'react';
import * as S from './styles';
import Lote from '../Lote';
import EtapaData from '../../data/EtapaData';
import { LoteData } from '../../data/LoteData';
import { useParams } from 'react-router-dom';
import Users from '../../data/UserData';
import { AtribuirAlguem, AtribuirButton as Btn } from '../Lote/styles';
import { ArrowCircleLeft, ArrowCircleRight, ArrowCircleUp, UsersThree } from '@phosphor-icons/react';
import { AtribuirButton } from '../../pages/Coordenador/Atividade/atividade-home/styles';
import { BoardChanger } from '../BoardChanger';

interface Fase {
  id: number;
  titulo: string;
}

interface BoardProps {
  titulo: string;
  fase: Fase;
}

export const Board = (props: BoardProps) => {
  const { id } = useParams();
  const [etapas, setEtapas] = useState<any[]>([]);
  const user = { email: Users[1].email, role: 'Operador' };

  const fase = props.fase;
  const etapasTemp = EtapaData.filter((Etapa) => Etapa.id_fase === Number(fase.id));

  const carregarLotes = (etapaid: string) =>
    LoteData.filter((lote) => {
      const etapa = lote.id_etapa;

      // etapas do meio
      if (etapa instanceof String || typeof etapa === 'string') {
        return etapa === etapaid;

        // etapas das pontas
      } else {
        return etapa[0] === etapaid || etapa[1] === etapaid;
      }
    });

  function handleSection(section: any) {
    if (section.tasks.filter((lote: any) => lote.id_projeto === id)) {
      if (section.title == 'Disponíveis' || section.title == 'Em andamento' || section.title == 'Concluídos') {
        return section.tasks.filter((lote: any) => lote.id_projeto === id).length;
      } else if (section.title == 'Em pausa') {
        return section.tasks.map((lote: any) => {
          if (lote.id_projeto === id) {
            return lote.envolvidos.filter((e: any) => e.email === user.email).length
              ? lote.envolvidos.filter((e: any) => e.email === user.email).length
              : 0;
          }
        });
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  useEffect(() => {
    for (let index = 0; index < etapasTemp.length; index++) {
      const element = etapasTemp[index];
      const Items = { id: element.id, title: element.titulo, tasks: carregarLotes(element.id) };
      setEtapas((dataItens) => [...dataItens, Items]);
    }
  }, []);

  if (user.role === 'Operador') {
    return (
      <>
        <BoardChanger />
        <S.kanban className="board">
          {etapas.map((section) => {
            const valor = handleSection(section);

            return (
              <>
                {valor > 0 && (
                  <S.kanbanSection key={section.id}>
                    <S.divTitulo>
                      <h2 className="kanbanSectionTititle">{section.title}</h2>
                      {section.title == 'Disponíveis' && (
                        <h2
                          style={{
                            color: '#43DB6D',
                          }}
                        >
                          {valor}
                        </h2>
                      )}
                      {section.title == 'Em pausa' && (
                        <h2
                          style={{
                            color: '#F32D2D',
                          }}
                        >
                          {valor}
                        </h2>
                      )}
                      {section.title == 'Em andamento' && (
                        <h2
                          style={{
                            color: '#FCDE42',
                          }}
                        >
                          {valor}
                        </h2>
                      )}
                      {section.title == 'Concluídos' && (
                        <h2
                          style={{
                            color: '#43DB6D',
                          }}
                        >
                          {valor}
                        </h2>
                      )}
                    </S.divTitulo>
                    <S.kanbanSectionContent>
                      {section.tasks.map((task: any) => {
                        if (task.id_projeto === id) {
                          if (section.title === 'Disponíveis') {
                            return (
                              <a href={`/Lote/${id}/${task.id}`} key={task.id} style={{ textDecoration: 'none' }}>
                                <Lote
                                  task={task}
                                  value={`${task.titulo} ${task.numero}`}
                                  pendencia={task.pendencias.length}
                                  prioridade={task.prioridade}
                                  categoria={task.categorias}
                                  envolvidos={task.envolvidos}
                                >
                                  <AtribuirButton onClick={(e) => e.preventDefault()}>
                                    <ArrowCircleLeft weight="fill" size={24} /> Pegar Lote
                                  </AtribuirButton>
                                </Lote>
                              </a>
                            );
                          } else if (section.title === 'Em andamento') {
                            return (
                              <a href={`/Lote/${id}/${task.id}`} key={task.id} style={{ textDecoration: 'none' }}>
                                <Lote
                                  task={task}
                                  value={`${task.titulo} ${task.numero}`}
                                  pendencia={task.pendencias.length}
                                  prioridade={task.prioridade}
                                  categoria={task.categorias}
                                  envolvidos={task.envolvidos}
                                >
                                  {task.prioridade && (
                                    <S.BlackButton onClick={(e) => e.preventDefault()}>
                                      <UsersThree weight="fill" size={24} color="#00D25B" />
                                      Participar do Lote
                                    </S.BlackButton>
                                  )}
                                </Lote>
                              </a>
                            );
                          } else if (section.title === 'Em pausa') {
                            if (task.envolvidos[task.envolvidos.length - 1].email === user.email) {
                              console.log('opa');
                              return (
                                <a href={`/Lote/${id}/${task.id}`} key={task.id} style={{ textDecoration: 'none' }}>
                                  <Lote
                                    task={task}
                                    value={`${task.titulo} ${task.numero}`}
                                    pendencia={task.pendencias.length}
                                    prioridade={task.prioridade}
                                    categoria={task.categorias}
                                    envolvidos={task.envolvidos}
                                  >
                                    <S.BlackButton onClick={(e) => e.preventDefault()}>
                                      <ArrowCircleRight weight="fill" size={24} />
                                      Continuar Lote
                                    </S.BlackButton>
                                  </Lote>
                                </a>
                              );
                            }
                          } else if (section.title === 'Concluídos') {
                            return (
                              <a href={`/Lote/${id}/${task.id}`} key={task.id} style={{ textDecoration: 'none' }}>
                                <Lote
                                  task={task}
                                  value={`${task.titulo} ${task.numero}`}
                                  pendencia={task.pendencias.length}
                                  prioridade={task.prioridade}
                                  categoria={task.categorias}
                                  envolvidos={task.envolvidos}
                                ></Lote>
                              </a>
                            );
                          }
                        }
                      })}
                    </S.kanbanSectionContent>
                  </S.kanbanSection>
                )}
              </>
            );
          })}
        </S.kanban>
      </>
    );
  } else {
    return (
      <>
        <BoardChanger />
        <S.FaseKanbanPage>
          {/* <S.divImg>
            <S.IconeFase src={`/icon-medium/${fase.titulo}.svg`} alt={`icone da fase ${fase.titulo}`} />
            <h1 style={{ color: '#ffffff' }}>{fase.titulo}</h1>
          </S.divImg>

          <S.divImgMaior>
            <S.IconeFase src={`/icon-big/${fase.titulo}.svg`} alt={`icone da fase ${fase.titulo}`} />
            <h1 style={{ color: '#ffffff' }}>{fase.titulo}</h1>
          </S.divImgMaior> */}

          {fase.titulo == 'Arquivamento' || fase.titulo == 'Preparo' ? (
            <S.kanban className="board" style={{ justifyContent: 'center' }}>
              {etapas.map((section) => (
                <S.kanbanSection key={section.id}>
                  <S.divTitulo>
                    <h2 className="kanbanSectionTititle">{section.title}</h2>
                    {section.title == 'Disponíveis' && (
                      <h2
                        style={{
                          color: '#43DB6D',
                        }}
                      >
                        {section.tasks.filter((lote: any) => lote.id_projeto === id)
                          ? section.tasks.filter((lote: any) => lote.id_projeto === id).length
                          : 0}
                      </h2>
                    )}
                    {section.title == 'Em pausa' && (
                      <h2
                        style={{
                          color: '#F32D2D',
                        }}
                      >
                        {section.tasks.filter((lote: any) => lote.id_projeto === id)
                          ? section.tasks.filter((lote: any) => lote.id_projeto === id).length
                          : 0}
                      </h2>
                    )}
                    {section.title == 'Em andamento' && (
                      <h2
                        style={{
                          color: '#FCDE42',
                        }}
                      >
                        {section.tasks.filter((lote: any) => lote.id_projeto === id)
                          ? section.tasks.filter((lote: any) => lote.id_projeto === id).length
                          : 0}
                      </h2>
                    )}
                    {section.title == 'Concluídos' && (
                      <h2
                        style={{
                          color: '#43DB6D',
                        }}
                      >
                        {section.tasks.filter((lote: any) => lote.id_projeto === id)
                          ? section.tasks.filter((lote: any) => lote.id_projeto === id).length
                          : 0}
                      </h2>
                    )}
                  </S.divTitulo>

                  <S.kanbanSectionContent>
                    {section.tasks.map(
                      (task: any) =>
                        task.id_projeto === id && (
                          <a href={`/Lote/${task.id}`} key={task.id} style={{ textDecoration: 'none' }}>
                            <Lote
                              task={task}
                              value={`${task.titulo} ${task.numero}`}
                              pendencia={task.pendencias.length}
                              prioridade={task.prioridade}
                              categoria={task.categorias}
                              envolvidos={task.envolvidos}
                            ></Lote>
                          </a>
                        ),
                    )}
                  </S.kanbanSectionContent>
                </S.kanbanSection>
              ))}
            </S.kanban>
          ) : (
            <S.kanban className="board">
              {etapas.map((section) => (
                <S.kanbanSection key={section.id}>
                  <S.divTitulo>
                    <h2 className="kanbanSectionTititle">{section.title}</h2>
                    {section.title == 'Disponíveis' && (
                      <h2
                        style={{
                          color: '#43DB6D',
                        }}
                      >
                        {section.tasks.filter((lote: any) => lote.id_projeto === id)
                          ? section.tasks.filter((lote: any) => lote.id_projeto === id).length
                          : 0}
                      </h2>
                    )}
                    {section.title == 'Em pausa' && (
                      <h2
                        style={{
                          color: '#F32D2D',
                        }}
                      >
                        {section.tasks.filter((lote: any) => lote.id_projeto === id)
                          ? section.tasks.filter((lote: any) => lote.id_projeto === id).length
                          : 0}
                      </h2>
                    )}
                    {section.title == 'Em andamento' && (
                      <h2
                        style={{
                          color: '#FCDE42',
                        }}
                      >
                        {section.tasks.filter((lote: any) => lote.id_projeto === id)
                          ? section.tasks.filter((lote: any) => lote.id_projeto === id).length
                          : 0}
                      </h2>
                    )}
                    {section.title == 'Concluídos' && (
                      <h2
                        style={{
                          color: '#43DB6D',
                        }}
                      >
                        {section.tasks.filter((lote: any) => lote.id_projeto === id)
                          ? section.tasks.filter((lote: any) => lote.id_projeto === id).length
                          : 0}
                      </h2>
                    )}
                  </S.divTitulo>

                  <S.kanbanSectionContent>
                    {section.tasks.map(
                      (task: any) =>
                        task.id_projeto === id && (
                          <a href={`/Lote/${task.id}`} key={task.id} style={{ textDecoration: 'none' }}>
                            <Lote
                              task={task}
                              value={`${task.titulo} ${task.numero}`}
                              pendencia={task.pendencias.length}
                              prioridade={task.prioridade}
                              categoria={task.categorias}
                              envolvidos={task.envolvidos}
                            >
                              <Btn type="button">
                                <AtribuirAlguem>
                                  <ArrowCircleUp weight="fill" color="#FCDE42" width={20} height={20} />
                                  <p>Atribuir à alguém</p>
                                </AtribuirAlguem>
                              </Btn>
                            </Lote>
                          </a>
                        ),
                    )}
                  </S.kanbanSectionContent>
                </S.kanbanSection>
              ))}
            </S.kanban>
          )}
        </S.FaseKanbanPage>
      </>
    );
  }
};

export default Board;
