import * as S from './styles';
import React, { useEffect, useState } from 'react';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import FaseData from '../../data/FaseData';
import Splash from '../../pages/Splash';
import toast from 'react-hot-toast';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
import { PatchBatcheMainStatus } from '../../api/services/batches/patch-status';
import { CheckCircle, HandWaving, X } from '@phosphor-icons/react';
import theme from '../../global/theme';
import { PatchBatcheSpecifStatus } from '../../api/services/batches/patch-status-specific';
import { ToolTip } from '../Observation/ObservationBox/styles';

import { EspecifcModal } from '../EspecificStatusModal';
import { SharedState } from '../../context/SharedContext';
import { AtribuirButton } from '../AtribuirLoteModal/styles';
import { BlackButton } from '../Board/styles';

interface Option {
  label: string;
  value: number;
}

export const LoteDetails = () => {
  const optionsFases = FaseData.map((fase, index) => ({ value: index, label: fase.titulo }));
  const [task, setTask] = useState<GetResponseBatche | null>(null);
  const [observations, setObservations] = useState<Observation[]>([]);
  const [priority, setPriority] = useState<boolean>(false);
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
  const [status, setStatus] = useState<number>(0);
  const [specificStatus, setSpecificStatus] = useState<number>(0);
  const [openEspecifModal, setOpenEspecifModal] = useState<boolean>(false);
  const [titleModal, setTitleModal] = useState({ button: 'Pegar lote', title: 'Deseja pegar o lote?' });
  const [option, setOption] = useState<Option>();
  const { id } = useParams();
  const { user } = SharedState();
  const navigate = useNavigate();

  const handleConfig = () => {
    setConfigModal(!config_modal);
  };

  const handleVoltar = () => {
    setVoltar(!voltar);
  };

  const handleAvancar = () => {
    setAvancar(!avancar);

    if (option?.value && id && option?.value === status + 1) {
      mutateEspecific.mutate({
        id,
        specific_status: 0,
      });
      mutateStatus.mutate({
        main_status: option.value,
        id,
      });
    } else {
      toast.error('Você não pode fazer isso.');
    }
  };

  const handleAtribuirAlguem = () => {
    setAtribuirModal(!atribuir_modal);
  };

  const mutateStatus = useMutation(PatchBatcheMainStatus, {
    onSuccess: () => {
      setStatus(status + 1);
      toast.success('Fase atualizada!');
    },
    onError: (err: ApiError) => {
      toast.error(err.response?.data.message ? err.response?.data.message : 'Erro na execução');
    },
  });

  const mutateEspecific = useMutation(PatchBatcheSpecifStatus, {
    onSuccess: () => {},
  });

  const beforeTask = useMutation(GetBatche, {
    onSuccess: (data: GetResponseBatche) => {
      setTask(data);
      setObservations(data.observations);
      setPriority(data.priority);
      setCreateDate(new Date(data.created_at));
      setAssigners(data.assigned_users);
      setStatus(data.main_status);
      setSpecificStatus(data.specific_status);
      setOption({
        value: data.main_status + 1,
        label: optionsFases ? optionsFases[data.main_status + 1].label : 'Houve um problema',
      });
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

  // const handleStatus = () => {
  //   if(assigners.length === 0){
  //     setSpecificStatus(0)
  //   }else(
  //     setSpecificStatus(1)
  //   )
  // }

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
              <S.Exit onClick={() => navigate(`/Fase/${id}/Board/${optionsFases[status].label}`)}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.CloseDiv>

            <S.LoteInfos>
              {/* CABEÇALHO */}
              <S.LoteEditConfig>
                {/* TÍTULO */}
                <S.TituloLote>{`${task?.title}`}</S.TituloLote>

                <S.EditConfig>
                  {/* BOTÃO DE EDITAR */}
                  <Link to={`/Lote/${task?.id}/Edit`}>
                    <S.Edit>
                      <S.Icons src={`/pen.svg`}></S.Icons>
                      <ToolTip style={{ width: '80px' }} id="tool">
                        Editar Lote
                      </ToolTip>
                    </S.Edit>
                  </Link>

                  {/* BOTÃO DE CONFIGURAÇÕES */}
                  <S.Config onClick={handleConfig}>
                    <S.Icons src={`/config.svg`}></S.Icons>
                    <ToolTip style={{ width: '120px' }} id="tool">
                      Configurações do lote
                    </ToolTip>
                  </S.Config>
                </S.EditConfig>
              </S.LoteEditConfig>

              {/* DADOS DA CRIAÇÃO DO LOTE */}
              <S.DadosCriacaoLoteDiv>
                {/* SE VOCÊ CRIOU */}
                {task?.created_by.name == user?.name && (
                  <S.BlockGray>
                    Criado por Você em{' '}
                    {createDate?.toLocaleString('pt-br', {
                      timeZone: 'America/Sao_paulo',
                    })}
                  </S.BlockGray>
                )}

                {/* SE OUTRA PESSOA CRIOU */}
                {task?.created_by.name != user?.name && (
                  <S.BlockGray>
                    Criado por {task?.created_by.name} em{' '}
                    {createDate?.toLocaleString('pt-br', {
                      timeZone: 'America/Sao_paulo',
                    })}
                  </S.BlockGray>
                )}
              </S.DadosCriacaoLoteDiv>

              {/* ARQUIVOS */}
              <S.DetalhesLote>
                {task?.shelf_number !== null && <S.Estante>{task?.shelf_number}</S.Estante>}

                {/* FÍSICOS */}

                <S.ArquivFisicos>
                  <img src={`/arquivos_fisicos.svg`} alt="arquivos fisicos" />
                  {task?.physical_files_count}
                  <ToolTip style={{ width: '105px' }} id="tool">
                    Arquivos físicos
                  </ToolTip>
                </S.ArquivFisicos>

                {/* DIGITAIS(QUANDO HOUVER) */}
                {optionsFases[status].label != 'Preparo' && optionsFases[status].label != 'Catalogação' && (
                  <S.ArquivDigitais>
                    <img src={`/arquivos_digitais.svg`} alt="arquivos digitais" />
                    {task?.digital_files_count}
                    <ToolTip style={{ width: '110px' }} id="tool">
                      Arquivos digitais
                    </ToolTip>
                  </S.ArquivDigitais>
                )}
              </S.DetalhesLote>

              {/* CATEGORIAS */}
              {/* <S.DetalhesLote>
                <S.BlockGrayBorder>{task?.category.name}</S.BlockGrayBorder>
              </S.DetalhesLote> */}

              {/* PRIORIORIDADE(SE TIVER) */}
              {priority === true && (
                <S.PrioridadeDiv>
                  <S.PrioridadeTag>
                    <p>Prioridade</p>
                  </S.PrioridadeTag>
                </S.PrioridadeDiv>
              )}

              <S.FaseAtualDiv>
                {/* FASE ATUAL DO LOTE */}
                <S.IconTooltipFase>
                  <S.Icons src={`/icon-medium/${optionsFases[status].label}.svg`} />
                  <ToolTip style={{}} id="tool">
                    {optionsFases[status].label}
                  </ToolTip>
                </S.IconTooltipFase>
              </S.FaseAtualDiv>

              {/* OPERADORES ATRIBUÍDOS AO LOTE */}
              {assigners.length > 0 && (
                <React.Fragment>
                  <h2>Atribuídos</h2>
                  <S.DetalhesLote>
                    {assigners &&
                      assigners.map((assigned) => (
                        <BlockAssigner key={assigned.id} assigner={assigned} setAssigners={setAssigners} />
                      ))}
                  </S.DetalhesLote>
                </React.Fragment>
              )}
            </S.LoteInfos>

            <S.ObservacaoBotoes>
              {/* OBSERVAÇÕES */}
              <S.Observações>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <S.ObsTituloNumber>
                    <S.ObservacaoTitulo>Observações</S.ObservacaoTitulo>
                    <p>{observations.length}</p>
                  </S.ObsTituloNumber>

                  <S.BotaoCriarObservacao
                    onClick={() => {
                      setObservacao(!observacao);
                    }}
                  >
                    <ToolTip style={{ width: '150px' }} id="tool">
                      Adicionar observação
                    </ToolTip>
                    <img src="/adicionar.svg" alt="" />
                  </S.BotaoCriarObservacao>
                </div>

                {observations.length != 0 && (
                  <S.ObsCardsDiv>
                    {observations.map((obs, index) => {
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
                  </S.ObsCardsDiv>
                )}
              </S.Observações>

              {/* BOTÕES PRINCIPAIS */}
              <S.Botoes>
                {/* PEGAR LOTE */}
                {specificStatus === 0 && (
                  <S.PegarLote
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenEspecifModal(!openEspecifModal);
                      setTitleModal({ button: 'Pegar lote', title: `Deseja pegar o ${task?.title}?` });
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: '16px',
                        color: 'white',
                        alignItems: 'center',
                        marginLeft: '12px',
                      }}
                    >
                      <HandWaving size={20} weight="fill" />
                      <p>Pegar lote</p>
                    </div>
                  </S.PegarLote>
                )}

                {/* MARCAR COMO CONCLUÍDO */}
                {specificStatus === 1 && (
                  <S.ConcluirButton
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenEspecifModal(!openEspecifModal);
                      setTitleModal({
                        button: 'Marcar como concluído',
                        title: `Deseja marcar o ${task?.title} como concluído?`,
                      });
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: '8px',
                        alignItems: 'center',
                        marginLeft: '16px',
                      }}
                    >
                      <CheckCircle size={24} weight="fill" />
                      Marcar como concluído
                    </div>
                  </S.ConcluirButton>
                )}

                {/* ATRIBUIR LOTE */}
                <S.Botao onClick={handleAtribuirAlguem}>
                  <img src={`/AddUser.svg`} alt="botão para atribuir lote a algum operador " />
                  Atribuir à alguém
                </S.Botao>

                {/* VOLTAR FASE */}
                {observations && taskData.fase_atual != 'Preparo' && (
                  <S.BotaoMudarFase>
                    {/* BOTÃO DE VOLTAR FASE*/}
                    <S.VoltarAvancar onClick={handleVoltar} style={{ cursor: 'pointer' }}>
                      <img src={'/voltar.svg'} alt="ícone circular com uma seta para a esquerda ao centro" />
                      <p style={{ color: theme.colors.white }}>Voltar Fase</p>
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

                    <S.VoltarAvancar
                      disabled={(() => {
                        const isDisabled =
                          (option?.value !== undefined && option?.value === status) ||
                          task?.specific_status === 0 ||
                          task?.specific_status === 2 ||
                          (option?.value !== undefined && option?.value > status + 1);

                        return isDisabled;
                      })()}
                      onClick={handleAvancar}
                      style={{ cursor: 'pointer' }}
                    >
                      {option?.value && option?.value < status ? (
                        <img src={'/voltar.svg'} alt="ícone circular com uma seta para a esquerda ao centro" />
                      ) : option?.value === status ? (
                        <X size={24} color={theme.colors.white} />
                      ) : (
                        <img src={'/avancar.svg'} alt="ícone circular com uma seta para a direita ao centro" />
                      )}
                      {option?.value && option?.value < status ? (
                        <p style={{ color: theme.colors.white }}>Voltar Fase</p>
                      ) : option?.value === status ? (
                        <p style={{ color: theme.colors.white }}>Você escolheu a mesma fase</p>
                      ) : (
                        <p style={{ color: theme.colors.white }}>Avancar Fase</p>
                      )}
                    </S.VoltarAvancar>

                    {/* BOTÃO DE ESCOLHER FASE PARA AVANÇAR*/}
                    <S.EscolherFaseSelect
                      options={optionsFases}
                      onChange={(o: any) => setOption(o)}
                      value={option}
                      className="react-select-container"
                      classNamePrefix="react-select"
                      placeholder="Escolher fase"
                    />
                    {task?.specific_status === 0 && <ToolTip id="tool">É necessário pegar o lote antes</ToolTip>}
                  </S.BotaoMudarFase>
                )}

                {/* EXCLUIR LOTE */}
                <S.BotaoDeletarLote>
                  <img src={`/trash.svg`} alt="Botão de excluir Lote" />
                  Excluir lote
                </S.BotaoDeletarLote>
              </S.Botoes>
            </S.ObservacaoBotoes>

            {/* DETALHAMENTO POR FASE */}

            {/* {taskData.detalhamento_por_fase != null && (
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
                          <S.Text style={{ color: theme.colors['yellow/300'] }}>{fase.hora_inicio}</S.Text>
                        </S.TimeBeginDiv>
                      )}

                      {fase.conclusao !== null && (
                        <S.TimeFinishDiv>
                          <img src={'/detal-fase-icons/conclusao-icon.png'} alt="icone de check" />
                          {fase.conclusao}
                          <S.Text style={{ color: theme.colors['green/500'] }}>{fase.hora_conclusao}</S.Text>
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
                                  border: `1px solid ${theme.colors['gray/700']}`,
                                }}
                              />
                            </React.Fragment>
                          ))}
                      </S.EnvolvidosDiv>
                    </S.Fase>
                  ))}
                </S.DetalhamentoGrid>
              </S.DetalFase>
            )} */}
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
            id={observationId}
            observations={observations!}
            pendencia={observation?.is_pending}
            refetch={() => {
              if (id) {
                beforeTask.mutate({
                  id,
                });
              }
            }}
            close={() => {
              setObservacao(!observacao);
            }}
            title="Adicionar observação"
          />
        )}
        {delete_modal && (
          <DeletarModal
            title="Excluir observação?"
            close={() => setDeleteModal(!delete_modal)}
            deleteFunction={() => DeleteObs(observationId)}
          />
        )}
        {edit_modal && (
          <ObservationModal
            id={observationId}
            observation={observation?.observation}
            observations={observations}
            refetch={() => {
              if (id) {
                beforeTask.mutate({
                  id,
                });
              }
            }}
            title="Mudar observação"
            close={() => setEditModal(!edit_modal)}
            pendencia={observation?.is_pending}
          />
        )}
        {atribuir_modal && (
          <AtribuirAlguemModal setAssigners={setAssigners} assigners={assigners} close={handleAtribuirAlguem} />
        )}
        {openEspecifModal && (
          <EspecifcModal
            close={() => setOpenEspecifModal(!openEspecifModal)}
            batche={task!}
            title={titleModal.title}
            button={titleModal.button}
            setSpecificStatus={setSpecificStatus}
            setBatche={setTask}
            setStatus={setStatus}
          />
        )}
      </>
    );
  }
};

export default LoteDetails;
