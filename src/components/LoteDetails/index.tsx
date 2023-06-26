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
import { v4 as uuidv4 } from 'uuid';
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
          {task.categorias !== null && prioridadeState == true &&
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
          {task.categorias !== null && prioridadeState == false &&
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
          {task.tipologias !== null &&
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
                // ENVOLVIDOS 
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

        {task.detalhamento_por_fase != null && 
        
        <S.DetalFase>
            <h2>Detalhamento por fase</h2>

            {task.detalhamento_por_fase.map((fase: any) => (

                <S.Fase key={fase.id}>

                  <S.FaseIconDiv>
                    <img src={fase.icone} alt="ícone da fase" />
                    <h2>{fase.nome}</h2>
                  </S.FaseIconDiv>

                  {fase.inicio !== null &&
                    <S.TimeBeginDiv>
                      <img src={'/detal-fase-icons/inicio-icon.png'} alt="seta para direita" />
                      {fase.inicio}
                      <S.Text style={{ color: '#FCDE42' }}>{fase.hora_inicio}</S.Text>
                    </S.TimeBeginDiv>
                  }

                  {fase.conclusao !== null &&
                    <S.TimeFinishDiv>
                      <img src={'/detal-fase-icons/conclusao-icon.png'} alt="icone de check" />
                      {fase.conclusao}
                      <S.Text style={{ color: '#00D25B' }}>{fase.hora_conclusao}</S.Text>
                    </S.TimeFinishDiv>
                  }

                  {fase.tempo !== null &&
                    <S.Time>
                      <img src={'/detal-fase-icons/clock-icon.png'} alt="icone de relógio" />
                      {fase.tempo}
                    </S.Time>
                  }


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
                

              ))
            }
        </S.DetalFase>        
        }



      </S.areaClick>

      {/*{edit_modal && <EditModal close={handleEdit}></EditModal>}*/}
      {modal && <AtribuirAlguemModal close={handleAtribuirAlguem}></AtribuirAlguemModal>}
      {voltar && <VoltarModal close={handleVoltar}></VoltarModal>}
      {avancar && <AvancarModal close={handleAvancar}></AvancarModal>}
      {delete_modal && <DeletarLoteModal close={handleDelete}></DeletarLoteModal>}
      {config_modal && 
        <ConfigModal 
          valor_prioridade={prioridadeState} 
          handlePrioridade={handlePChange} 
          valor_compart={compartState} 
          handleCompart={handleCompartCheck} 
          close={handleConfig}></ConfigModal>}
    </>
  );
};

export default LoteDetails;
