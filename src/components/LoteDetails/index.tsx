import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { Content, LoteEdit } from "../Lote/styles";
import mockData from "../../data/kanbanData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AtribuirAlguemModal } from "../AtribuirAlguemModal";
import { EditModal } from "../EditModal";

export const LoteDetails = (user: any) => {
  const [data, setData] = useState(mockData);
  const [edit_modal , setEditModal] = useState(false);
  const [modal , setModal] = useState(false);

  const handleEdit = () => {
    setEditModal(!edit_modal);
  };

  const handleAtribuirAlguem = () => {
    setModal(!modal);
  };

  const blurRef = useRef(null);
  
  const id = useParams();

  const navigate = useNavigate();

  const filterTask = data.map((section: any) =>
    section.tasks.filter((task: any) => task.id === id.id)
  );
  const task = filterTask.filter((task: any) => task.length !== 0)[0][0];
  console.log(task)

  const User: any = user.User;
  return (
    <>
      <S.areaClick>

        {/* BOTÃO DE FECHAR */}
        <S.CloseDiv>
          <S.Exit onClick={() => navigate(-1)}>
            <img 
              src= "/close.svg"
              alt=""
              height={18}
              width={18}
            />
          </S.Exit>
        </S.CloseDiv>

        <S.LoteEditConfig>
          {/* TÍTULO */}
          <S.TituloLote>{task.title}</S.TituloLote>
          <S.EditConfig>
            {/* EDITAR */}
            <S.Edit onClick={handleEdit}> <S.Icons src={`/pen.svg`} ></S.Icons> </S.Edit>
            {/* CONFIGURAÇÕES */}
            <S.Config onClick={handleAtribuirAlguem}> <S.Icons src={`/config.svg`} ></S.Icons> </S.Config>
          </S.EditConfig>
        </S.LoteEditConfig>


        <S.DetalhesLote>
          {/* PROTOCOLO */}
            <S.Protocolo> 
              <p style={{ padding: "0 0.5em" }}>{task.protocolo}</p> 
            </S.Protocolo>
          
          {/* ESTANTE */}
          <S.Estante>{task.estante}</S.Estante>

          {/* ARQUIVOS FÍSICOS */}
          <S.ArquivFisicos> 
            <img src={`/arquivos_fisicos.svg`}/>
            {task.arquivos_fisicos}
          </S.ArquivFisicos>

          {/* ARQUIVOS DIGITAIS */}
          <S.ArquivDigitais> 
            <img src={`/arquivos_digitais.svg`}/>
            {task.arquivos_digitais}
          </S.ArquivDigitais>
        </S.DetalhesLote>

        <S.CategoriaPrioridade>
          {task.categoria &&
            task.categoria.map((categoria: any, index: number) => (
              <React.Fragment key={categoria.id}>
                {/* PRIORIDADE */}
                {categoria.nome == "Financeiro" && <S.Prioridade><p>Prioridade</p></S.Prioridade>}
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
          <S.Icons src={`/icon-page/${task.fase_atual[0].nome}.png`}/>
        </S.FaseEnvolvAtual>

        <S.ObsBotoes>
          {/* OBSERVAÇÕES */}
          <S.Observações>
            <p>Observações</p>
            {task.observacao.map((obs: any, index: number) => (
              <S.ObsDivBlack key = {obs.ObsId}>
                {obs.pendencia && <img src={"/warning.svg"} alt="ícone de alerta"/>}
                {obs.titulo}
              </S.ObsDivBlack>
            ))}
          </S.Observações>

          {/* VOLTAR FASE */}

          <S.BotaoMudarFase>
            <S.VoltarAvancar>
              <img src={`/voltar.svg`}/>
              <p>Voltar Fase</p>
            </S.VoltarAvancar>

            <S.EscolherFase>
              <S.OptionFases value="maca">Recepção</S.OptionFases>
              <S.OptionFases value="laranja">Preparo</S.OptionFases>
              <S.OptionFases value="banana">Catalogação</S.OptionFases>
              <S.OptionFases value="uva">Digitalização</S.OptionFases>
              <S.OptionFases value="uva">Upload</S.OptionFases>
              <S.OptionFases value="uva">Arquivamento</S.OptionFases>
            </S.EscolherFase>
          </S.BotaoMudarFase>

          {/* AVANÇAR FASE */}

          <S.BotaoMudarFase>
            <S.VoltarAvancar>
              <img src={`/avancar.svg`}/>
              <p>Avançar Fase</p>
            </S.VoltarAvancar>

            <S.EscolherFase>
              <S.OptionFases className="fase" value="recepção">Recepção</S.OptionFases>
              <S.OptionFases className="fase" value="preparo">Preparo</S.OptionFases>
              <S.OptionFases className="fase" value="catalogação">Catalogação</S.OptionFases>
              <S.OptionFases className="fase" value="digitalização">Digitalização</S.OptionFases>
              <S.OptionFases className="fase" value="upload">Upload</S.OptionFases>
              <S.OptionFases className="fase" value="arquivamento">Arquivamento</S.OptionFases>
            </S.EscolherFase>
          </S.BotaoMudarFase>

          {/* ATRIBUIR À ALGUÉM */}
          <S.Botao onClick={handleAtribuirAlguem}>
            <img  src={`/atribuir.svg`}/>
            <p>Atribuir à alguém</p>
          </S.Botao>

          {/* DELETAR LOTE */}
          <S.Botao style={{ backgroundColor:"#F32D2D" }}>
            <img src={`/trash.svg`}/>
            <p>Deletar lote</p>
          </S.Botao>

        </S.ObsBotoes>
                

        {/* DETALHAMENTO POR FASE */}
        <S.DetalFase>
          <h2>Detalhamento por fase</h2>
          <S.Fase>
            {/* RECEPÇÃO */}
            {task.fases &&
              task.fases.map((fase: any, index: number) => (
                <React.Fragment key={fase.id}>
                  {fase.recepçao &&
                    fase.recepçao.map((recep: any, index: number) => (
                      <React.Fragment key={recep.id}>

                        <S.FaseIconDiv>
                          <img src={recep.icone}alt="ícone de recepção" height={25}width={25}/>
                          <h2>{recep.title}</h2>
                        </S.FaseIconDiv>

                        <S.TimeFinishDiv>
                          <img src={recep.time_finish} alt="icone de check" />
                          {recep.end}
                          <S.Text style={{ color:"#00D25B" }}>{recep.end_hour}</S.Text>
                        </S.TimeFinishDiv>

                        <S.EnvolvidosDiv>
                          {recep.envolvidos &&
                            recep.envolvidos.map((user: any, index: number) => (
                              <React.Fragment key={user.envolvidoId}>
                                <img
                                  src={user.foto}
                                  alt="usuario envolvido na fase"
                                  style={{
                                    height: "32px",
                                    width: "32px",
                                    borderRadius: "50px",
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
              task.fases.map((fase: any, index: number) => (
                <React.Fragment key={fase.id}>
                  {fase.preparo &&
                    fase.preparo.map((prep: any, index: number) => (
                      <React.Fragment key={prep.id}>
                        <S.FaseIconDiv>
                          <img src={prep.icone} alt="ícone de preparo" height={22} width={22}/>
                          <h2>{prep.title}</h2>
                        </S.FaseIconDiv>

                        <S.TimeBeginDiv>
                            <img src={prep.time_begin} alt="seta para direita" />
                            {prep.start}
                            <S.Text style={{ color:"#FCDE42" }}>{prep.start_hour}</S.Text>
                        </S.TimeBeginDiv>
                        
                        <S.TimeFinishDiv>
                          <img src={prep.time_finish} alt="icone de check" />
                          {prep.end}
                          <S.Text style={{ color:"#00D25B" }}>{prep.end_hour}</S.Text>
                        </S.TimeFinishDiv>

                        <S.Time>
                          <img src={prep.time_icon} alt="icone de relógio"/>
                          {prep.time}
                        </S.Time>

                        <S.EnvolvidosDiv>
                          {prep.envolvidos &&
                            prep.envolvidos.map((user: any, index: number) => (
                              <React.Fragment key={user.envolvidoId}>
                                <img
                                  src={user.foto}
                                  alt="usuario envolvido na fase"
                                  style={{
                                    height: "32px",
                                    width: "32px",
                                    borderRadius: "50px",
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
              task.fases.map((fase: any, index: number) => (
                <React.Fragment key={fase.id}>
                  {fase.catalogacao &&
                    fase.catalogacao.map((catalog: any, index: number) => (
                      <React.Fragment key={catalog.id}>
                        <S.FaseIconDiv>
                          <img src={catalog.icone} alt="ícone de preparo" height={22} width={22}/>
                          <h2>{catalog.title}</h2>
                        </S.FaseIconDiv>

                        <S.TimeBeginDiv>
                            <img src={catalog.time_begin} alt="seta para direita" />
                            {catalog.start}
                            <S.Text style={{ color:"#FCDE42" }}>{catalog.start_hour}</S.Text>
                        </S.TimeBeginDiv>
                        
                        <S.TimeFinishDiv>
                          <img src={catalog.time_finish} alt="icone de check" />
                          {catalog.end}
                          <S.Text style={{ color:"#00D25B" }}>{catalog.end_hour}</S.Text>
                        </S.TimeFinishDiv>

                        <S.Time>
                          <img src={catalog.time_icon} alt="icone de relógio"/>
                          {catalog.time}
                        </S.Time>

                        <S.EnvolvidosDiv>
                          {catalog.envolvidos &&
                            catalog.envolvidos.map((user: any, index: number) => (
                              <React.Fragment key={user.envolvidoId}>
                                <img
                                  src={user.foto}
                                  alt="usuario envolvido na fase"
                                  style={{
                                    height: "32px",
                                    width: "32px",
                                    borderRadius: "50px",
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
              task.fases.map((fase: any, index: number) => (
                <React.Fragment key={fase.id}>
                  {fase.digitalizacao &&
                    fase.digitalizacao.map((digital: any, index: number) => (
                      <React.Fragment key={digital.id}>
                        <S.FaseIconDiv>
                          <img src={digital.icone} alt="ícone de preparo" height={22} width={22}/>
                          <h2>{digital.title}</h2>
                        </S.FaseIconDiv>

                        <S.TimeBeginDiv>
                            <img src={digital.time_begin} alt="seta para direita" />
                            {digital.start}
                            <S.Text style={{ color:"#FCDE42" }}>{digital.start_hour}</S.Text>
                        </S.TimeBeginDiv>
                        
                        <S.TimeFinishDiv>
                          <img src={digital.time_finish} alt="icone de check" />
                          {digital.end}
                          <S.Text style={{ color:"#00D25B" }}>{digital.end_hour}</S.Text>
                        </S.TimeFinishDiv>

                        <S.Time>
                          <img src={digital.time_icon} alt="icone de relógio"/>
                          {digital.time}
                        </S.Time>

                        <S.EnvolvidosDiv>
                          {digital.envolvidos &&
                            digital.envolvidos.map((user: any, index: number) => (
                              <React.Fragment key={user.envolvidoId}>
                                <img
                                  src={user.foto}
                                  alt="usuario envolvido na fase"
                                  style={{
                                    height: "32px",
                                    width: "32px",
                                    borderRadius: "50px",
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
  
      {modal && (
          <AtribuirAlguemModal
            close={handleAtribuirAlguem}
          ></AtribuirAlguemModal>
      )}

      {edit_modal && (
          <EditModal
            close={handleEdit}
          ></EditModal>
      )}
    </>
  );
};

export default LoteDetails;
