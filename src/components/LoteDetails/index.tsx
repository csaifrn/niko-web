import * as S from './styles';

import React, { useEffect, useState } from 'react';

import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import FaseData from '../../data/FaseData';
import Splash from '../../pages/Splash';
import toast from 'react-hot-toast';

import { useParams, useNavigate } from 'react-router-dom';
import { ConfigModal } from '../ConfigModal';
import { useMutation } from 'react-query';
import { GetBatche } from '../../api/services/batches/get-batche';
import { AssignedUser, GetResponseBatche, Observation } from '../../api/services/batches/get-batche/get.interface';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { Empty } from '../EmptyPage';
import { CreateObservationModal } from '../Observation/Observation-modal-create';
import { LoteData } from '../../data/LoteData';
import { BoxObservation } from '../Observation/ObservationBox';
import { DeletarModal } from '../DeletarModal';
import { ObservationModal } from '../Observation/Observation-modal-update';
import { DeleteObservation } from '../../api/services/batches/observation/delete-obsevation';
import { AtribuirAlguemModal } from '../AtribuirAlguemModal';
import { BlockAssigner } from '../BatchBlocks/BlockAssigner';

export const LoteDetails = () => {
  const optionsFases = FaseData.map((fase) => ({ id: fase.id, label: fase.titulo }));
  const [task, setTask] = useState<GetResponseBatche | null>();
  const [observations, setObservations] = useState<Observation[]>([]);
  const [priority, setPriority] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [observacao, setObservacao] = useState(false);
  const [delete_modal, setDeleteModal] = useState(false);
  const [config_modal, setConfigModal] = useState(false);
  const [avancar, setAvancar] = useState(false);
  const [voltar, setVoltar] = useState(false);
  const [observation, setObservation] = useState<Observation>();
  const [observationId, setObservationId] = useState<string>();
  const [edit_modal, setEditModal] = useState<boolean>(false);
  const [atribuir_modal, setAtribuirModal] = useState<boolean>(false);
  const [createDate, setCreateDate] = useState<Date>();
  const [assigners, setAssigners] = useState<AssignedUser[]>([]);

  const handleConfig = () => {
    setConfigModal(!config_modal);
  };

  const handleDelete = () => {
    setDeleteModal(!delete_modal);
  };

  const handleVoltar = () => {
    setVoltar(!voltar);
  };

  const handleAvancar = () => {
    setAvancar(!avancar);
  };

  const handleAtribuirAlguem = () => {
    setAtribuirModal(!atribuir_modal);
  };

  const beforeTask = useMutation(GetBatche, {
    onSuccess: (data: GetResponseBatche) => {
      setTask(data);
      setObservations(data.observations);
      setPriority(data.priority);
      setCreateDate(new Date(data.created_at));
      setAssigners(data.assigned_users);
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    },
  });

  const deleteObs = useMutation(DeleteObservation, {
    onSuccess: (data) => {
      toast.success('Observação excluida');
      if (observations) {
        setObservations(observations.filter((obs) => obs.id != data.id));
      }
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    },
  });

  const DeleteObs = (id: string | undefined) => {
    if (id) {
      deleteObs.mutate({
        id,
      });
    }
  };

  const CheckIdForGetBatch = () => {
    if (typeof id === 'string') {
      beforeTask.mutate({
        id,
      });
    } else {
      navigate(-1);
    }
  };

  useEffect(() => {
    CheckIdForGetBatch();
  }, []);

  const taskData = LoteData[0];

  if (beforeTask.isLoading) {
    return <Splash />;
  } else if (beforeTask.error) {
    return <Empty error="Infelizmente esta página está vazia" />;
  } else {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Menu area={`/Painel/${id}`} id_projeto={id}></Menu>
          <MenuCoord />
          <S.areaClick>
            {/* BOTÃO DE FECHAR */}
            <S.CloseDiv>
              <S.Exit onClick={() => navigate(-1)}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.CloseDiv>

            <S.LoteInfos>
              <S.LoteEditConfig>
                {/* TÍTULO */}
                <S.TituloLote>{`${task?.title}`}</S.TituloLote>
                <S.EditConfig>
                  {/* EDITAR */}
                  <S.Edit href={`/Lote/${task?.id}/Edit`}>
                    {''}
                    <S.Icons src={`/pen.svg`}></S.Icons>
                    {''}
                  </S.Edit>
                  {/* CONFIGURAÇÕES */}
                  <S.Config onClick={handleConfig}>
                    {''}
                    <S.Icons src={`/config.svg`}></S.Icons>
                    {''}
                  </S.Config>
                </S.EditConfig>
              </S.LoteEditConfig>
              <S.DetalhesLote>
                {/* PROTOCOLO */}
                {/* <S.Protocolo>
            <p style={{ padding: '0 0.5em' }}>{task.protocolo}</p>
          </S.Protocolo> */}
                {task?.shelf_number !== null && <S.Estante>{task?.shelf_number}</S.Estante>}

                {/* ARQUIVOS FÍSICOS */}
                {task?.physical_files_count != 0 && (
                  <S.ArquivFisicos>
                    <img src={`/arquivos_fisicos.svg`} alt="arquivos fisicos" />
                    {task?.physical_files_count}
                  </S.ArquivFisicos>
                )}
                {/* ARQUIVOS DIGITAIS */}
                {task?.digital_files_count != 0 && (
                  <S.ArquivDigitais>
                    <img src={`/arquivos_digitais.svg`} alt="arquivos digitais" />
                    {task?.digital_files_count}
                  </S.ArquivDigitais>
                )}
                <S.BlockGray>
                  Criado por {task?.created_by.name} em{' '}
                  {createDate?.toLocaleString('pt-br', {
                    timeZone: 'America/Sao_paulo',
                  })}
                </S.BlockGray>
              </S.DetalhesLote>
              <S.DetalhesLote>
                <S.BlockGrayBorder>{task?.category.name}</S.BlockGrayBorder>
              </S.DetalhesLote>
              {assigners.length > 0 && (
                <React.Fragment>
                  Atribuidos
                  <S.DetalhesLote>
                    {assigners &&
                      assigners.map((assigned) => (
                        <BlockAssigner
                          key={assigned.id}
                          assigner={assigned}
                          setAssigners={setAssigners}
                        />
                      ))}
                  </S.DetalhesLote>
                </React.Fragment>
              )}
              {/* MOSTRA CATEGORIAS QUANDO O LOTE É PRIORIDADE */}
              <S.CategoriaPrioridade>
                {priority === true && (
                  <S.Prioridade>
                    <p>Prioridade</p>
                  </S.Prioridade>
                )}
                {/* <S.Categoria>
            <p>{task?.category.name}</p>
          </S.Categoria> */}
              </S.CategoriaPrioridade>
              {/* MOSTRA CATEGORIAS QUANDO O LOTE NÃO É PRIORIDADE */}
              {taskData.categorias.length > 0 && priority == false && (
                <S.CategoriaPrioridade>
                  {/* CATEGORIAS */}
                  {taskData.categorias.map((categoria: any) => (
                    <React.Fragment key={categoria.id}>
                      <S.Categoria>
                        <p>{categoria.name}</p>
                      </S.Categoria>
                    </React.Fragment>
                  ))}
                </S.CategoriaPrioridade>
              )}
              {/* TIPOLOGIAS */}
              {taskData.tipologias.length > 0 && (
                <S.Tipologias>
                  {taskData.tipologias.map((tipol: any) => (
                    <S.Tipologia key={tipol.id}>
                      <p>{tipol.name}</p>
                    </S.Tipologia>
                  ))}
                </S.Tipologias>
              )}
              <S.FaseEnvolvAtual>
                {/* FASE ATUAL DO LOTE */}
                <S.Icons src={`/icon-medium/${taskData.fase_atual}.svg`} />

                {/* ENVOLVIDOS  */}
                {/* {usuarios != null &&
            usuarios.map((env: any) => (
              <S.Envolvidos key={env.id}>
                {env.andamento == true && (
                  <img
                    src={env.foto}
                    alt={env.nome}
                    width={28}
                    height={28}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '100%',
                      border: '1px solid #43DB6D',
                    }}
                  />
                )}
                {env.andamento == false && (
                  <img
                    src={env.url}
                    alt={env.nome}
                    width={28}
                    height={28}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '100%',
                      border: '1px solid #393E4B',
                    }}
                  />
                )}
              </S.Envolvidos>
            ))} */}
              </S.FaseEnvolvAtual>
            </S.LoteInfos>

            <S.PendObservacaoBotoes>
              <S.PendObservacao>
                {/* PENDÊNCIAS */}
                {/* <S.Pendencias>
                <S.PendenciaTitulo>Pendências</S.PendenciaTitulo>

                <S.TodasAsPendencias>
                  {taskData.pendencias.map((pen: any) => (
                    <S.PendDivBlack key={pen.id}>
                      <S.PendenciaTextIcon>
                        {<img src="/warning.svg" alt="ícone de alerta" />}
                        {pen.comment}
                      </S.PendenciaTextIcon>

                      <S.BotaoResolverPend onClick={() => handleResolverPend(pen)}>
                        <S.Texto>Resolver pendência</S.Texto>
                      </S.BotaoResolverPend>
                    </S.PendDivBlack>
                  ))}
                </S.TodasAsPendencias>
              </S.Pendencias> */}

                {/* OBSERVAÇÕES */}
                <S.Observações>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <S.PendenciaTitulo>Observações</S.PendenciaTitulo>
                    <S.BotaoCriarProjeto
                      onClick={() => {
                        setObservacao(!observacao);
                      }}
                    >
                      <img src="/adicionar.svg" />
                    </S.BotaoCriarProjeto>
                  </div>

                  {observations &&
                    observations.map((obs, index) => {
                      return (
                        <BoxObservation
                          index={index}
                          key={obs.id}
                          observation={obs}
                          setObservation={(e: Observation) => setObservation(e)}
                          setId={(e) => setObservationId(e)}
                          openDelete={() => setDeleteModal(!delete_modal)}
                          openEdit={() => setEditModal(!edit_modal)}
                        />
                      );
                    })}
                </S.Observações>
              </S.PendObservacao>

              {/* BOTÕES PRINCIPAIS */}
              <S.Botoes>
                {/* ATRIBUIR À ALGUÉM */}
                <S.Botao onClick={handleAtribuirAlguem}>
                  <img src={`/atribuir.svg`} alt="botão para atribuir lote a algum operador " />
                  Atribuir à alguém
                </S.Botao>

                {/* VOLTAR FASE */}
                {observations && taskData.fase_atual != 'Preparo' && (
                  <S.BotaoMudarFase>
                    {/* BOTÃO DE VOLTAR FASE*/}
                    <S.VoltarAvancar onClick={handleVoltar} style={{ cursor: 'pointer' }}>
                      <img src={'/voltar.svg'} alt="ícone circular com uma seta para a esquerda ao centro" />
                      <p style={{ color: '#FFFFFF' }}>Voltar Fase</p>
                    </S.VoltarAvancar>

                    {/* BOTÃO DE ESCOLHER FASE PARA VOLTAR*/}
                    <S.EscolherFaseSelect
                      options={optionsFases}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="Escolher fase"
                    />
                  </S.BotaoMudarFase>
                )}

                {/* AVANÇAR FASE */}
                {taskData.fase_atual != 'Arquivamento' && (
                  <S.BotaoMudarFase>
                    {/* BOTÃO DE AVANÇAR FASE*/}
                    <S.VoltarAvancar onClick={handleAvancar} style={{ cursor: 'pointer' }}>
                      <img src={'/avancar.svg'} alt="ícone circular com uma seta para a direita ao centro" />
                      <p style={{ color: '#FFFFFF' }}>Avancar Fase</p>
                    </S.VoltarAvancar>

                    {/* BOTÃO DE ESCOLHER FASE PARA AVANÇAR*/}
                    <S.EscolherFaseSelect
                      options={optionsFases}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="Escolher fase"
                    />
                  </S.BotaoMudarFase>
                )}

                {/* DELETAR LOTE */}
                <S.BotaoDeletarLote onClick={handleDelete}>
                  <img src={`/trash.svg`} alt="Botão de deletar Lote" />
                  Excluir lote
                </S.BotaoDeletarLote>
              </S.Botoes>
            </S.PendObservacaoBotoes>

            {/* DETALHAMENTO POR FASE */}

            {taskData.detalhamento_por_fase != null && (
              <S.DetalFase>
                <S.DetalhamentoTitulo>Detalhamento por fase</S.DetalhamentoTitulo>
                <S.DetalhamentoGrid>
                  {taskData.detalhamento_por_fase.map((fase: any) => (
                    <S.Fase key={fase.id}>
                      <S.FaseIconDiv>
                        <img src={fase.icone} alt={'icone da fase ' + fase.nome} />
                        <S.NomeDaFase>{fase.nome}</S.NomeDaFase>
                      </S.FaseIconDiv>

                      {fase.inicio !== null && (
                        <S.TimeBeginDiv>
                          <img
                            src={'/detal-fase-icons/inicio-icon.png'}
                            alt="ícone com seta para direita indicando a data e hora que o lote começou a ser feito"
                          />
                          {fase.inicio}
                          <S.Text style={{ color: '#FCDE42' }}>{fase.hora_inicio}</S.Text>
                        </S.TimeBeginDiv>
                      )}

                      {fase.conclusao !== null && (
                        <S.TimeFinishDiv>
                          <img src={'/detal-fase-icons/conclusao-icon.png'} alt="icone de check" />
                          {fase.conclusao}
                          <S.Text style={{ color: '#00D25B' }}>{fase.hora_conclusao}</S.Text>
                        </S.TimeFinishDiv>
                      )}

                      {fase.tempo !== null && (
                        <S.Time>
                          <img src={'/detal-fase-icons/clock-icon.png'} alt="icone de relógio" />
                          {fase.tempo}
                        </S.Time>
                      )}

                      <S.EnvolvidosDiv>
                        {fase.envolvidos &&
                          fase.envolvidos.map((user: any) => (
                            <React.Fragment key={user.id}>
                              <img
                                src={user.foto}
                                alt="usuario envolvido na fase"
                                width={24}
                                height={24}
                                style={{
                                  objectFit: 'cover',
                                  borderRadius: '100%',
                                  border: '1px solid #191C24',
                                }}
                              />
                            </React.Fragment>
                          ))}
                      </S.EnvolvidosDiv>
                    </S.Fase>
                  ))}
                </S.DetalhamentoGrid>
              </S.DetalFase>
            )}
          </S.areaClick>
        </div>
        {/* {pend && <ModalResolverPendencia pendencia={pendencia} close={() => setPend(!pend)}></ModalResolverPendencia>}

    {pend && <ModalResolverPendencia pendencia={pendencia} close={() => setPend(!pend)}></ModalResolverPendencia>}
    {modal && (
      <AtribuirAlguemModal user={usuarios} setUser={setUsuarios} close={handleAtribuirAlguem}></AtribuirAlguemModal>
    )}
    {voltar && <VoltarModal close={handleVoltar}></VoltarModal>}
    {avancar && <AvancarModal close={handleAvancar}></AvancarModal>}*/}
        {config_modal && (
          <ConfigModal
            id={id!}
            prioridade={task?.priority ? task.priority : false}
            close={() => {
              setConfigModal(!config_modal);
            }}
            priorityOnChange={(e: boolean) => setPriority(e)}
          ></ConfigModal>
        )}
        {observacao && (
          <CreateObservationModal
            observations={observations!}
            refetch={(Obs: Observation[]) => {
              setObservations(Obs);
            }}
            close={() => {
              setObservacao(!observacao);
            }}
            title="Criar observação"
          />
        )}
        {delete_modal && (
          <DeletarModal
            title="Deletar observação?"
            close={() => setDeleteModal(!delete_modal)}
            deleteFunction={() => DeleteObs(observationId)}
          />
        )}
        {edit_modal && (
          <ObservationModal
            id={observationId}
            observation={observation?.observation}
            observations={observations}
            refetch={(Obss: Observation[]) => {
              setObservations(Obss);
            }}
            title="Mudar observação"
            close={() => setEditModal(!edit_modal)}
          />
        )}
        {atribuir_modal && (
          <AtribuirAlguemModal setAssigners={setAssigners} assigners={assigners} close={handleAtribuirAlguem} />
        )}
      </>
    );
  }
};

export default LoteDetails;
