import React, { useState } from 'react';
import * as S from './styles';
import mockData from '../../data/kanbanData';
import { useParams, useNavigate } from 'react-router-dom';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import { AtribuirAlguemModal } from '../AtribuirAlguemModal';
import { AvancarModal } from '../AvancarModal';
import { ConfigModal } from '../ConfigModal';
import { DeletarLoteModal } from '../DeletarLoteModal';
import { EditModal } from '../EditModal';
import { VoltarModal } from '../VoltarModal';

export const LoteDetails = () => {
  const [data] = useState(mockData);
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

  const id = useParams();

  const navigate = useNavigate();

  const filterTask = data.map((section: any) => section.tasks.filter((task: any) => task.id === id.id));
  const task = filterTask.filter((task: any) => task.length !== 0)[0][0];
  console.log(task);

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

        <S.LoteEditConfig>
          {/* TÍTULO */}
          <S.TituloLote>{task.title}</S.TituloLote>
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
            {task.arquivos_fisicos}
          </S.ArquivFisicos>

          {/* ARQUIVOS DIGITAIS */}
          <S.ArquivDigitais>
            <img src={`/arquivos_digitais.svg`} alt="arquivos digitais" />
            {task.arquivos_digitais}
          </S.ArquivDigitais>
        </S.DetalhesLote>

        <S.CategoriaPrioridade>
          {task.categoria &&
            task.categoria.map((categoria: any, index: number) => (
              <React.Fragment key={categoria.id}>
                {/* PRIORIDADE */}
                {categoria.nome == 'Financeiro' && (
                  <S.Prioridade>
                    <p>Prioridade</p>
                  </S.Prioridade>
                )}
                {/* CATEGORIAS */}
                {index >= 0 && (
                  <S.Categoria>
                    <p>{categoria.nome}</p>
                  </S.Categoria>
                )}
              </React.Fragment>
            ))}
        </S.CategoriaPrioridade>

        {/* FASE DO LOTE */}
        <S.FaseEnvolvAtual>
          <S.Icons src={`/icon-page/${task.fase_atual[0].nome}.png`} />
        </S.FaseEnvolvAtual>

        <S.ObsBotoes>

          {/* PENDÊNCIAS */}
          <S.Pendencias>
            <p>Pendências</p>
            {task.pendencias.map((pend: any) => (
              <S.ObsDivBlack key={pend.PendId}>
                {pend.pendencia && <img src={'/warning.svg'} alt="ícone de alerta" />}
                {pend.titulo}
              </S.ObsDivBlack>
            ))}
          </S.Pendencias>

          {/* OBSERVAÇÕES */}
          <S.Observações>
            <p>Observações</p>

          </S.Observações>

          {/* VOLTAR FASE */}

          <S.BotaoMudarFase>
            <S.VoltarAvancar onClick={handleVoltar}>
              <img src={`/voltar.svg`} alt="voltar" />
              <p>Voltar Fase</p>
            </S.VoltarAvancar>

            <S.EscolherFase className="custom-select">
              <S.OptionFases className="fase" value="recepção">
                <p>Recepção</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="preparo">
                <p>Preparo</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="catalogação">
                <p>Catalogação</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="digitalização">
                <p>Digitalização</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="upload">
                <p>Upload</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="arquivamento">
                <p>Arquivamento</p>
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
                <p>Recepção</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="preparo">
                <p>Preparo</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="catalogação">
                <p>Catalogação</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="digitalização">
                <p>Digitalização</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="upload">
                <p>Upload</p>
              </S.OptionFases>
              <S.OptionFases className="fase" value="arquivamento">
                <p>Arquivamento</p>
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
        </S.ObsBotoes>

        {/* DETALHAMENTO POR FASE */}
        <S.DetalFase>
          <h2>Detalhamento por fase</h2>
          <S.Fase>
            {/* RECEPÇÃO */}
            {task.fases &&
              task.fases.map((fase: any) => (
                <React.Fragment key={fase.id}>
                  {fase.recepçao &&
                    fase.recepçao.map((recep: any) => (
                      <React.Fragment key={recep.id}>
                        <S.FaseIconDiv>
                          <img src={recep.icone} alt="ícone de recepção" height={25} width={25} />
                          <h2>{recep.title}</h2>
                        </S.FaseIconDiv>

                        <S.TimeFinishDiv>
                          <img src={recep.time_finish} alt="icone de check" />
                          {recep.end}
                          <S.Text style={{ color: '#00D25B' }}>{recep.end_hour}</S.Text>
                        </S.TimeFinishDiv>

                        <S.EnvolvidosDiv>
                          {recep.envolvidos &&
                            recep.envolvidos.map((user: any) => (
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
            {/* PREPARO */}
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
            {/* CATALOGAÇÃO */}
            {task.fases &&
              task.fases.map((fase: any) => (
                <React.Fragment key={fase.id}>
                  {fase.catalogacao &&
                    fase.catalogacao.map((catalog: any) => (
                      <React.Fragment key={catalog.id}>
                        <S.FaseIconDiv>
                          <img src={catalog.icone} alt="ícone de preparo" height={22} width={22} />
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
            {/* DIGITALIZAÇÃO */}
            {task.fases &&
              task.fases.map((fase: any) => (
                <React.Fragment key={fase.id}>
                  {fase.digitalizacao &&
                    fase.digitalizacao.map((digital: any) => (
                      <React.Fragment key={digital.id}>
                        <S.FaseIconDiv>
                          <img src={digital.icone} alt="ícone de preparo" height={22} width={22} />
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
