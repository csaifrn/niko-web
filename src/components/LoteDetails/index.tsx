import { useEffect, useState } from 'react';
import * as S from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import { ConfigModal } from '../ConfigModal';
import { DeletarLoteModal } from '../DeletarLoteModal';
import { useMutation } from 'react-query';
import { GetBatche } from '../../api/services/batches/get-batche';
import { GetResponseBatche } from '../../api/services/batches/get-batche/get.interface';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import toast from 'react-hot-toast';
import { Empty } from '../EmptyPage';
import Splash from '../../pages/Splash';
import { Plus } from '@phosphor-icons/react';
import theme from '../../global/theme';
import { SuccessModal } from '../SuccessModal';

export const LoteDetails = () => {
  const [config_modal, setConfigModal] = useState(false);
  const handleConfig = () => {
    setConfigModal(!config_modal);
  };

  const [observacao, setObservacao] = useState(false);

  const [delete_modal, setDeleteModal] = useState(false);
  const handleDelete = () => {
    setDeleteModal(!delete_modal);
  };

  // const [voltar, setVoltar] = useState(false);
  // const handleVoltar = () => {
  //   setVoltar(!voltar);
  // };

  // const [avancar, setAvancar] = useState(false);
  // const handleAvancar = () => {
  //   setAvancar(!avancar);
  // };

  const [modal, setModal] = useState(false);
  const handleAtribuirAlguem = () => {
    setModal(!modal);
  };

  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const beforeTask = useMutation(GetBatche, {
    onSuccess: (data: GetResponseBatche) => {
      setTask(data);
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response.data.message);
        setError(error.response.data.message);
      }
    },
  });

  const [task, setTask] = useState<GetResponseBatche | null>();

  useEffect(() => {
    if (typeof id === 'string') {
      beforeTask.mutate({
        id,
      });
    } else {
      navigate(-1);
    }
  }, []);

  const [prioridadeState] = useState(task?.priority);

  // const handlePChange = () => {
  //   setPrioridadeState(prioridadeState === 1 ? 0 : 1);
  // };

  // const [compartState, setCompartState] = useState(task.envolvidos.length >= 2);
  //const handleCompartCheck = () => {
  //  setCompartState(!compartState);
  //};
  if (beforeTask.isLoading) {
    return <Splash />;
  } else if (error === null) {
    return (
      <>
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
              <S.TituloLote>{`${task?.settlement_project}`}</S.TituloLote>
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
            </S.DetalhesLote>

            {/* MOSTRA CATEGORIAS QUANDO O LOTE É PRIORIDADE */}
            <S.CategoriaPrioridade>
              {prioridadeState === 1 && (
                <S.Prioridade>
                  <p>Prioridade</p>
                </S.Prioridade>
              )}
              <S.Categoria>
                <p>{task?.category.name}</p>
              </S.Categoria>
            </S.CategoriaPrioridade>

            {/* {task.categorias.length > 0 && prioridadeState == false && (
            <S.CategoriaPrioridade>
              {task.categorias.map((categoria: any) => (
                <React.Fragment key={categoria.id}>
                  <S.Categoria>
                    <p>{categoria.name}</p>
                  </S.Categoria>
                </React.Fragment>
              ))}
            </S.CategoriaPrioridade>
          )} */}

            {/* {task.tipologias.length > 0 && (
            <S.Tipologias>
              {task.tipologias.map((tipol: any) => (
                <S.Tipologia key={tipol.id}>
                  <p>{tipol.name}</p>
                </S.Tipologia>
              ))}
            </S.Tipologias>
          )} */}

            <S.FaseEnvolvAtual>
              {/* FASE ATUAL DO LOTE */}
              {/* <S.Icons src={`/icon-medium/${task.}.png`} /> */}

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

          <S.PendObservacao>
            {/* <S.Pendencias>
            <p>Pendências</p>
            {task.pendencias.map((pen: any) => (
              <S.PendDivBlack key={pen.id}>
                <S.PendenciaTextIcon>
                  {<img src="/warning.svg" alt="ícone de alerta" />}
                  {pen.comment}
                </S.PendenciaTextIcon>

                <S.ResolverPend onClick={() => handleResolverPend(pen)}>
                  <S.Texto>Resolver pendência</S.Texto>
                </S.ResolverPend>
              </S.PendDivBlack>
            ))}
          </S.Pendencias> */}

            <S.Observações>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p>Observações</p>
                <button
                  onClick={() => {
                    setObservacao(!observacao);
                  }}
                  style={{
                    backgroundColor: theme.colors['green/500'],
                    borderRadius: '100%',
                    height: '28px',
                    width: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                  }}
                >
                  <Plus size={18} color={theme.colors['gray/900']} />
                </button>
              </div>

              {/* {observacoes.map((obs: any) => (
              <S.ObsDivBlack key={obs.ObsId}>{obs.titulo}</S.ObsDivBlack>
            ))} */}
            </S.Observações>
          </S.PendObservacao>

          <S.Botoes>
            {/* ATRIBUIR À ALGUÉM */}
            <S.Botao onClick={handleAtribuirAlguem}>
              <img src={`/atribuir.svg`} alt="botão para atribuir lote a algum operador " />
              <p>Atribuir à alguém</p>
            </S.Botao>

            {/* VOLTAR FASE */}
            {/* <S.BotaoMudarFase>
            {indisponivel == false && (
              <S.VoltarAvancar onClick={handleVoltar} style={{ background: '#393E4B' }}>
                <img src={'/voltar.svg'} alt="ícone circular com uma seta para a esquerda ao centro" />
                <p style={{ color: indisponivel ? 'rgba(255, 255, 255, 0.50)' : '#FFFFFF' }}>Voltar Fase</p>
              </S.VoltarAvancar>
            )}

            {indisponivel == true && (
              <S.VoltarAvancar style={{ background: 'rgba(57, 62, 75, 0.50)' }}>
                <img src={'/voltar-desativado.svg'} alt="ícone circular com uma seta para a esquerda ao centro" />
                <p style={{ color: indisponivel ? 'rgba(255, 255, 255, 0.50)' : '#FFFFFF' }}>Voltar Fase</p>
              </S.VoltarAvancar>
            )}

            {indisponivel == false && (
              <S.EscolherFase
                className="custom-select"
                style={{ background: indisponivel ? 'rgba(57, 62, 75, 0.50)' : '#393E4B' }}
              >
                {FaseData.map((fase) => (
                  <S.OptionFases className="fase" value="fase" key={fase.id}>
                    {fase.titulo}
                  </S.OptionFases>
                ))}
              </S.EscolherFase>
            )}

            {indisponivel == true && (
              <S.EscolherFase
                className="custom-select"
                style={{ background: indisponivel ? 'rgba(57, 62, 75, 0.50)' : '#393E4B' }}
                disabled
              >
                {FaseData.map((fase) => (
                  <S.OptionFases className="fase" value="fase" key={fase.id}>
                    {fase.titulo}
                  </S.OptionFases>
                ))}
              </S.EscolherFase>
            )}
          </S.BotaoMudarFase> */}

            {/* AVANÇAR FASE */}
            {/* <S.BotaoMudarFase>
            {indisponivel == false && (
              <S.VoltarAvancar onClick={handleAvancar} style={{ background: '#393E4B' }}>
                <img src={'/avancar.svg'} alt="ícone circular com uma seta para a direita ao centro" />
                <p style={{ color: indisponivel ? 'rgba(255, 255, 255, 0.50)' : '#FFFFFF' }}>Avancar Fase</p>
              </S.VoltarAvancar>
            )}

            {indisponivel == true && (
              <S.VoltarAvancar style={{ background: 'rgba(57, 62, 75, 0.50)' }}>
                <img src={'/avancar-desativado.svg'} alt="ícone circular com uma seta para a direita ao centro" />
                <p style={{ color: indisponivel ? 'rgba(255, 255, 255, 0.50)' : '#FFFFFF' }}>Avancar Fase</p>
              </S.VoltarAvancar>
            )}

            {indisponivel == false && (
              <S.EscolherFase
                className="custom-select"
                style={{ background: indisponivel ? 'rgba(57, 62, 75, 0.50)' : '#393E4B' }}
                onChange={(e) => handleDebug(e)}
              >
                {FaseData.map((fase) => (
                  <S.OptionFases className="fase" value={fase.titulo} key={fase.id}>
                    {fase.titulo}
                  </S.OptionFases>
                ))}
              </S.EscolherFase>
            )}

            {indisponivel == true && (
              <S.EscolherFase
                className="custom-select"
                style={{ background: indisponivel ? 'rgba(57, 62, 75, 0.50)' : '#393E4B' }}
                disabled
              >
                {FaseData.map((fase) => (
                  <S.OptionFases className="fase" value={fase.titulo} key={fase.id}>
                    {fase.titulo}
                  </S.OptionFases>
                ))}
              </S.EscolherFase>
            )}
          </S.BotaoMudarFase> */}

            {/* DELETAR LOTE */}
            <S.Botao onClick={handleDelete} style={{ backgroundColor: '#F32D2D' }}>
              <img src={`/trash.svg`} alt="Deletar Lote" />
              <p>Deletar lote</p>
            </S.Botao>
          </S.Botoes>

          {/* DETALHAMENTO POR FASE */}

          {/* {task.detalhamento_por_fase != null && (
          <S.DetalFase>
            <S.DetalhamentoTitulo>Detalhamento por fase</S.DetalhamentoTitulo>
            <S.DetalhamentoGrid>
              {task.detalhamento_por_fase.map((fase: any) => (
                <S.Fase key={fase.id}>
                  <S.FaseIconDiv>
                    <img src={fase.icone} alt={'icone da fase' + fase.nome} />
                    <h2>{fase.nome}</h2>
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
        )} */}
        </S.areaClick>
        {/* {pend && <ModalResolverPendencia pendencia={pendencia} close={() => setPend(!pend)}></ModalResolverPendencia>}

        {modal && (
          <AtribuirAlguemModal user={usuarios} setUser={setUsuarios} close={handleAtribuirAlguem}></AtribuirAlguemModal>
        )}
        {voltar && <VoltarModal close={handleVoltar}></VoltarModal>}
        {avancar && <AvancarModal close={handleAvancar}></AvancarModal>} */}
        {delete_modal && <DeletarLoteModal delete={() => console.log(id)} close={handleDelete}></DeletarLoteModal>}
        {config_modal && (
          <ConfigModal
            id={id!}
            prioridade={task!.priority}
            close={() => {
              setConfigModal(!config_modal);
            }}
          ></ConfigModal>
        )}
        {observacao &&
          <SuccessModal close={() => {setObservacao(!observacao)}} title='Criar observação'/>
        }
      </>
    );
  } else {
    return <Empty error={error} />;
  }
};

export default LoteDetails;
