import React, { useState } from 'react';
import * as S from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import { AtribuirAlguemModal } from '../AtribuirAlguemModal';
import { AvancarModal } from '../AvancarModal';
import { ConfigModal } from '../ConfigModal';
import { DeletarLoteModal } from '../DeletarLoteModal';
import { VoltarModal } from '../VoltarModal';
import { LoteData } from '../../data/LoteData';
//import { EditModal } from '../EditModal';

export const LoteDetails = () => {

  //const [edit_modal, setEditModal] = useState(false); 
  // const handleEdit = () => {
  //   setEditModal(!edit_modal);
  // };

  const [config_modal, setConfigModal] = useState(false);
  const handleConfig = () => {
    setConfigModal(!config_modal);
  };

  const [delete_modal, setDeleteModal] = useState(false);
  const handleDelete = () => {
    setDeleteModal(!delete_modal);
  };

  const [voltar, setVoltar] = useState(false);
  const handleVoltar = () => {
    setVoltar(!voltar);
  };

  const [avancar, setAvancar] = useState(false);
  const handleAvancar = () => {
    setAvancar(!avancar);
  };

  const [modal, setModal] = useState(false);
  const handleAtribuirAlguem = () => {
    setModal(!modal);
  };

  let { id } = useParams();
  const navigate = useNavigate();
  const [lote , setLote] = useState(LoteData);
  const task = lote.filter((task) => task.id == id)[0];

  const [prioridadeState, setPrioridadeState] = useState(task.prioridade);
  const handlePChange = () => {
    setPrioridadeState(!prioridadeState);
  };

  const [compartState, setCompartState] = useState(task.envolvidos.length >= 2);
  const handleCompartCheck = () => {
    setCompartState(!compartState);
  };

  return (
    <>
      <Menu area="/"></Menu>
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
            <S.TituloLote>{`${task.titulo} ${task.numero} `}</S.TituloLote>
            <S.EditConfig>
              {/* EDITAR */}
              <S.Edit href={`/Lote/${task.id}/Edit`}>
                {''}
                <S.Icons src={`/pen.svg`}></S.Icons>{' '}
              </S.Edit>
              {/* CONFIGURAÇÕES */}
              <S.Config onClick={handleConfig}>
                {''}
                <S.Icons src={`/config.svg`}></S.Icons>{' '}
              </S.Config>
            </S.EditConfig>
          </S.LoteEditConfig>

          <S.DetalhesLote>
            {/* PROTOCOLO */}
            <S.Protocolo>
              <p style={{ padding: '0 0.5em' }}>{task.protocolo}</p>
            </S.Protocolo>

            {task.estante != '' && 
              <S.Estante>
                {task.estante}
              </S.Estante>
            }

            {/* ARQUIVOS FÍSICOS */}
              {task.arquiv_fisicos != 0 &&
                <S.ArquivFisicos>
                  <img src={`/arquivos_fisicos.svg`} alt="arquivos fisicos"/>
                  {task.arquiv_fisicos} 
                </S.ArquivFisicos>
              }
            {/* ARQUIVOS DIGITAIS */}
            {task.arquiv_digitais != 0 &&
                <S.ArquivDigitais>
                  <img src={`/arquivos_digitais.svg`} alt="arquivos digitais"/>
                  {task.arquiv_digitais} 
                </S.ArquivDigitais>
            }
          </S.DetalhesLote>

          {/* MOSTRA CATEGORIAS QUANDO O LOTE É PRIORIDADE */}
          {task.categorias != null && prioridadeState == true &&
            <S.CategoriaPrioridade>

              {/* PRIORIDADE */}
              <S.Prioridade>
                <p>Prioridade</p>
              </S.Prioridade>
              
              {/* CATEGORIAS */}
              {
                task.categorias.map((categoria: any, index: number) => (
                  <React.Fragment key={categoria.id}>
                    <S.Categoria>
                      <p>{categoria.titulo}</p>
                    </S.Categoria> 
                  </React.Fragment>
                ))}
          </S.CategoriaPrioridade>}

          {/* MOSTRA CATEGORIAS QUANDO O LOTE NÃO É PRIORIDADE */}
          {task.categorias != null && prioridadeState == false &&
            <S.CategoriaPrioridade>
              {/* CATEGORIAS */}
              {
                task.categorias.map((categoria: any) => (
                  <React.Fragment key={categoria.id}>
                    <S.Categoria>
                      <p>{categoria.titulo}</p>
                    </S.Categoria> 
                  </React.Fragment>
                ))}
            </S.CategoriaPrioridade>
          }
          
          {/* TIPOLOGIAS */}
          {task.tipologias != null &&
            <S.Tipologias>
              {task.tipologias.map((tipol: any) => (
                <S.Tipologia key={tipol.id} >
                  <p>{tipol.titulo}</p>
                </S.Tipologia>
              ))}
            </S.Tipologias>
          }

          <S.FaseEnvolvAtual>
            {/* FASE ATUAL DO LOTE */}
            <S.Icons src={`/icon-page/${task.fase_atual}_icon.png`} />
            {task.envolvidos != null &&
              task.envolvidos.map((env: any) => (
                <S.Envolvidos key={env.id}>
                  {env.andamento == true &&
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
                    />}

                  {env.andamento == false &&
                    <img 
                      src={env.foto}
                      alt={env.nome}
                      width={28}
                      height={28}
                      style={{
                        objectFit: 'cover',
                        borderRadius: '100%',
                        border: '1px solid #393E4B',
                      }}
                    />}
                </S.Envolvidos>

              ))}
          </S.FaseEnvolvAtual>

        </S.LoteInfos>

        <S.PendObsBotoes>

          {/* PENDÊNCIAS */}
          <S.Pendencias>
            <p>Pendências</p>
            {task.pendencias.map((pend: any) => (
              <S.PendDivBlack key={pend.PendId}>

                <S.PendenciaTextIcon>
                  {<img src={pend.pend_icon} alt="ícone de alerta" />}
                  {pend.titulo}
                </S.PendenciaTextIcon>

                <S.ResolverPend>
                   <p>Resolver pendência</p>
                </S.ResolverPend>
                
              </S.PendDivBlack>
            ))}
          </S.Pendencias>

          {/* OBSERVAÇÕES */}
          <S.Observações>
            <p>Observações</p>
            {task.observacoes.map((obs: any) => (
              <S.ObsDivBlack>
                {obs.titulo}
              </S.ObsDivBlack>
            ))}

          </S.Observações>

          {/* VOLTAR FASE */}

          <S.BotaoMudarFase>
            <S.VoltarAvancar onClick={handleVoltar}>
              <img src={`/voltar.svg`} alt="voltar" />
              Voltar Fase
            </S.VoltarAvancar>

            <S.EscolherFase className="custom-select">
              <S.OptionFases className="fase" value="recepção">
                Recepção
              </S.OptionFases>
              <S.OptionFases className="fase" value="preparo">
                Preparo
              </S.OptionFases>
              <S.OptionFases className="fase" value="catalogação">
                Catalogação
              </S.OptionFases>
              <S.OptionFases className="fase" value="digitalização">
                Digitalização
              </S.OptionFases>
              <S.OptionFases className="fase" value="upload">
                Upload
              </S.OptionFases>
              <S.OptionFases className="fase" value="arquivamento">
                Arquivamento
              </S.OptionFases>
            </S.EscolherFase>
          </S.BotaoMudarFase>

          {/* AVANÇAR FASE */}

          <S.BotaoMudarFase>
            <S.VoltarAvancar onClick={handleAvancar}>
              <img src={`/avancar.svg`} alt="avançar" />
              <p>Avançar Fase</p>
            </S.VoltarAvancar>

            <S.EscolherFase>
              <S.OptionFases className="fase" value="recepção">
                Recepção
              </S.OptionFases>
              <S.OptionFases className="fase" value="preparo">
                Preparo
              </S.OptionFases>
              <S.OptionFases className="fase" value="catalogação">
                Catalogação
              </S.OptionFases>
              <S.OptionFases className="fase" value="digitalização">
                Digitalização
              </S.OptionFases>
              <S.OptionFases className="fase" value="upload">
                Upload
              </S.OptionFases>
              <S.OptionFases className="fase" value="arquivamento">
                Arquivamento
              </S.OptionFases>
            </S.EscolherFase>
          </S.BotaoMudarFase>

          {/* ATRIBUIR À ALGUÉM */}
          <S.Botao onClick={handleAtribuirAlguem}>
            <img src={`/atribuir.svg`} alt="atribuir lote" />
            <p>Atribuir à alguém</p>
          </S.Botao>

          {/* DELETAR LOTE */}
          <S.Botao onClick={handleDelete} style={{ backgroundColor: '#F32D2D' }}>
            <img src={`/trash.svg`} alt="Deletar Lote" />
            <p>Deletar lote</p>
          </S.Botao>
        </S.PendObsBotoes>

        {/* DETALHAMENTO POR FASE */}
        {/* <S.DetalFase>
          <h2>Detalhamento por fase</h2>

          <S.Fase>

            {task.fases &&
              task.fases.map((fase: any) => (
                <React.Fragment key={fase.id}>
                  {fase.preparo &&
                    fase.preparo.map((prep: any) => (
                      <React.Fragment key={prep.id}>
                        <S.FaseIconDiv>
                          <img src={prep.icone} alt="ícone de preparo" height={22} width={22} />
                          <h2>{prep.title}</h2>
                        </S.FaseIconDiv>

                        <S.TimeBeginDiv>
                          <img src={prep.time_begin} alt="seta para direita" />
                          {prep.start}
                          <S.Text style={{ color: '#FCDE42' }}>{prep.start_hour}</S.Text>
                        </S.TimeBeginDiv>

                        <S.TimeFinishDiv>
                          <img src={prep.time_finish} alt="icone de check" />
                          {prep.end}
                          <S.Text style={{ color: '#00D25B' }}>{prep.end_hour}</S.Text>
                        </S.TimeFinishDiv>

                        <S.Time>
                          <img src={prep.time_icon} alt="icone de relógio" />
                          {prep.time}
                        </S.Time>

                        <S.EnvolvidosDiv>
                          {prep.envolvidos &&
                            prep.envolvidos.map((user: any) => (
                              <React.Fragment key={user.envolvidoId}>
                                <img
                                  src={user.foto}
                                  alt="usuario envolvido na fase"
                                  style={{
                                    height: '32px',
                                    width: '32px',
                                    borderRadius: '50px',
                                  }}
                                />
                              </React.Fragment>
                            ))}
                        </S.EnvolvidosDiv>
                      </React.Fragment>
                    ))}
                </React.Fragment>
              ))}
          </S.Fase>

          <S.Fase>

            {task.fases &&
              task.fases.map((fase: any) => (
                <React.Fragment key={fase.id}>
                  {fase.catalogacao &&
                    fase.catalogacao.map((catalog: any) => (
                      <React.Fragment key={catalog.id}>
                        <S.FaseIconDiv>
                          <img src={catalog.icone} alt="ícone de catalogação" height={22} width={22} />
                          <h2>{catalog.title}</h2>
                        </S.FaseIconDiv>

                        <S.TimeBeginDiv>
                          <img src={catalog.time_begin} alt="seta para direita" />
                          {catalog.start}
                          <S.Text style={{ color: '#FCDE42' }}>{catalog.start_hour}</S.Text>
                        </S.TimeBeginDiv>

                        <S.TimeFinishDiv>
                          <img src={catalog.time_finish} alt="icone de check" />
                          {catalog.end}
                          <S.Text style={{ color: '#00D25B' }}>{catalog.end_hour}</S.Text>
                        </S.TimeFinishDiv>

                        <S.Time>
                          <img src={catalog.time_icon} alt="icone de relógio" />
                          {catalog.time}
                        </S.Time>

                        <S.EnvolvidosDiv>
                          {catalog.envolvidos &&
                            catalog.envolvidos.map((user: any) => (
                              <React.Fragment key={user.envolvidoId}>
                                <img
                                  src={user.foto}
                                  alt="usuario envolvido na fase"
                                  style={{
                                    height: '32px',
                                    width: '32px',
                                    borderRadius: '50px',
                                  }}
                                />
                              </React.Fragment>
                            ))}
                        </S.EnvolvidosDiv>
                      </React.Fragment>
                    ))}
                </React.Fragment>
              ))}
          </S.Fase>

          <S.Fase>

            {task.fases &&
              task.fases.map((fase: any) => (
                <React.Fragment key={fase.id}>
                  {fase.digitalizacao &&
                    fase.digitalizacao.map((digital: any) => (
                      <React.Fragment key={digital.id}>
                        <S.FaseIconDiv>
                          <img src={digital.icone} alt="ícone de digitalização" height={22} width={22} />
                          <h2>{digital.title}</h2>
                        </S.FaseIconDiv>

                        <S.TimeBeginDiv>
                          <img src={digital.time_begin} alt="seta para direita" />
                          {digital.start}
                          <S.Text style={{ color: '#FCDE42' }}>{digital.start_hour}</S.Text>
                        </S.TimeBeginDiv>

                        <S.TimeFinishDiv>
                          <img src={digital.time_finish} alt="icone de check" />
                          {digital.end}
                          <S.Text style={{ color: '#00D25B' }}>{digital.end_hour}</S.Text>
                        </S.TimeFinishDiv>

                        <S.Time>
                          <img src={digital.time_icon} alt="icone de relógio" />
                          {digital.time}
                        </S.Time>

                        <S.EnvolvidosDiv>
                          {digital.envolvidos &&
                            digital.envolvidos.map((user: any) => (
                              <React.Fragment key={user.envolvidoId}>
                                <img
                                  src={user.foto}
                                  alt="usuario envolvido na fase"
                                  style={{
                                    height: '32px',
                                    width: '32px',
                                    borderRadius: '50px',
                                  }}
                                />
                              </React.Fragment>
                            ))}
                        </S.EnvolvidosDiv>
                      </React.Fragment>
                    ))}
                </React.Fragment>
              ))}
          </S.Fase>
        </S.DetalFase> 
        */}
      </S.areaClick>
      {/*{edit_modal && <EditModal close={handleEdit}></EditModal>}*/}
      {modal && <AtribuirAlguemModal close={handleAtribuirAlguem}></AtribuirAlguemModal>}
      {config_modal && 
        <ConfigModal 
          valor_prioridade={prioridadeState} 
          handlePrioridade={handlePChange} 
          valor_compart={compartState} 
          handleCompart={handleCompartCheck} 
          close={handleConfig}></ConfigModal>}
      {voltar && <VoltarModal close={handleVoltar}></VoltarModal>}
      {avancar && <AvancarModal close={handleAvancar}></AvancarModal>}
      {delete_modal && <DeletarLoteModal close={handleDelete}></DeletarLoteModal>}
    </>
  );
};

export default LoteDetails;
