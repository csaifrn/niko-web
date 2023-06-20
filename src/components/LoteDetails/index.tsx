import React, { useState } from 'react';
import * as S from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import { AtribuirAlguemModal } from '../AtribuirAlguemModal';
import { AvancarModal } from '../AvancarModal';
import { ConfigModal } from '../ConfigModal';
import { DeletarLoteModal } from '../DeletarLoteModal';
import { EditModal } from '../EditModal';
import { VoltarModal } from '../VoltarModal';
import { LoteData } from '../../data/LoteData';

export const LoteDetails = () => {
  const [lote , setLote] = useState(LoteData);
  const [edit_modal, setEditModal] = useState(false);
  const [config_modal, setConfigModal] = useState(false);
  const [modal, setModal] = useState(false);
  const [delete_modal, setDeleteModal] = useState(false);
  const [voltar, setVoltar] = useState(false);
  const [avancar, setAvancar] = useState(false);

  const handleEdit = () => {
    setEditModal(!edit_modal);
  };

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
    setModal(!modal);
  };

  let { id } = useParams();

  const navigate = useNavigate();

  const task = lote.filter((task) => task.id == id)[0];

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
              <S.Edit onClick={handleEdit}>
                {' '}
                <S.Icons src={`/pen.svg`}></S.Icons>{' '}
              </S.Edit>
              {/* CONFIGURAÇÕES */}
              <S.Config onClick={handleConfig}>
                {' '}
                <S.Icons src={`/config.svg`}></S.Icons>{' '}
              </S.Config>
            </S.EditConfig>
          </S.LoteEditConfig>

          <S.DetalhesLote>
            {/* PROTOCOLO */}
            <S.Protocolo>
              <p style={{ padding: '0 0.5em' }}>{task.protocolo}</p>
            </S.Protocolo>

            {/* ARQUIVOS FÍSICOS */}
            <S.ArquivFisicos>
              <img src={`/arquivos_fisicos.svg`} alt="arquivos fisicos" />
              {21}
            </S.ArquivFisicos>

            {/* ARQUIVOS DIGITAIS */}
            <S.ArquivDigitais>
              <img src={`/arquivos_digitais.svg`} alt="arquivos digitais" />
              {22}
            </S.ArquivDigitais>
          </S.DetalhesLote>

          <S.CategoriaPrioridade>
            {task.categorias &&
              task.categorias.map((categoria: any, index: number) => (
                <React.Fragment key={categoria.id}>
                  {/* PRIORIDADE */}
                  {categoria.nome == 'Financeiro' && (
                    <S.Prioridade>
                      <p>Prioridade</p>
                    </S.Prioridade>
                  )}
                  {/* CATEGORIAS */}
                  {index >= 0 && (
                    <>
                    <S.Categoria>
                      <p>{categoria.nome}</p>
                    </S.Categoria>
                    </>
                  )}
                  
                </React.Fragment>
              ))}
          </S.CategoriaPrioridade>

          {/* FASE DO LOTE */}
          <S.FaseEnvolvAtual>
            <S.Icons src={`/icon-page/${task.fase_atual}.png`} />
          </S.FaseEnvolvAtual>

          </S.LoteInfos>

        <S.PendObsBotoes>

          {/* PENDÊNCIAS */}
          <S.Pendencias>
            <p>Pendências</p>
            {task.pendencias.map((pend: any) => (
              <S.PendDivBlack key={pend.PendId}>
                {pend.pendencia && <img src={'/warning.svg'} alt="ícone de alerta" />}
                {pend.titulo}
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

      {modal && <AtribuirAlguemModal close={handleAtribuirAlguem}></AtribuirAlguemModal>}
      {edit_modal && <EditModal close={handleEdit}></EditModal>}
      {config_modal && <ConfigModal close={handleConfig}></ConfigModal>}
      {voltar && <VoltarModal close={handleVoltar}></VoltarModal>}
      {avancar && <AvancarModal close={handleAvancar}></AvancarModal>}
      {delete_modal && <DeletarLoteModal close={handleDelete}></DeletarLoteModal>}
    </>
  );
};

export default LoteDetails;
