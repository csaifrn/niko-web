import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { Content, LoteEdit } from "../Lote/styles";
import mockData from "../../data/kanbanData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu";
import MenuCoord from "../MenuCoord";

export const LoteDetails = () => {
  const [data, setData] = useState(mockData);

  const blurRef = useRef(null);
  
  const id = useParams();

  const navigate = useNavigate();

  const filterTask = data.map((section: any) =>
    section.tasks.filter((task: any) => task.id === id.id)
  );
  const task = filterTask.filter((task: any) => task.length !== 0)[0][0];
  console.log(task)

  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord area="/" />
      <S.areaClick>

        {/* BOTÃO DE FECHAR */}
        <S.CloseDiv>
          <S.Exit onClick={() => navigate(-1)}>
            <p style={{ padding: "0 0.5em" }}>X</p>
          </S.Exit>
        </S.CloseDiv>

        <S.LoteEditConfig>
          {/* TÍTULO DO LOTE */}
          <S.TituloLote style={{ marginBottom: "0.5em" }}>{task.title}</S.TituloLote>
          <S.EditConfig>
            <S.Edit> <S.Icons src={`/pen.svg`} ></S.Icons> </S.Edit>
            <S.Config> <S.Icons src={`/config.svg`} ></S.Icons> </S.Config>
          </S.EditConfig>
        </S.LoteEditConfig>


        <S.DetalhesLote>
          {/* PROTOCOLO */}
          <S.Protocolo>
              <S.ProtocoloTextDiv> 
                <p style={{ padding: "0 0.5em" }}>{task.protocolo}</p> 
              </S.ProtocoloTextDiv>
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

        {/* CATEGORIAS */}
        <S.Categoria>
          {task.categoria &&
            task.categoria.map((categoria: any, index: number) => (
              <React.Fragment key={categoria.id}>
                {index >= 0 && (
                  <S.NomeCategoriaTextDiv style={{ borderRadius: "5px" }}>
                    <p style={{ padding: "0 0.5em" }}>{categoria.nome}</p>
                  </S.NomeCategoriaTextDiv>
                )}
              </React.Fragment>
            ))}
        </S.Categoria>
        
        {/* FASE DO LOTE */}
        <>
          <div style={{ margin: "2em 0em 0em 0em", display: "flex", justifyContent: "flex-start", gap: "0.5em" }}>
            <img src={`/icon-page/${task.fase_atual[0].nome}.png`}/>
          </div>
        </>
        
        {/* OBSERVAÇÕES */}
        <S.Observações>
          <h3>Observações</h3>
          {task.observacao.map((obs: any, index: number) => (
            <S.ObsDiv key = {obs.ObsId}>
              {obs.pendencia && <img src={"/warning.svg"} alt="ícone de alerta"/>}
              {obs.titulo}
            </S.ObsDiv>
          ))}
        </S.Observações>

        {/* VOLTAR FASE */}

        <S.BotaoMudarFase>
          <S.VoltarAvancar>
            <img src={`/voltar.svg`}/>
            <h3>Voltar Fase</h3>
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
            <h3>Avançar Fase</h3>
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
        <S.Botao>
          <img src={`/atribuir.svg`}/>
          <h3>Atribuir à alguém</h3>
        </S.Botao>

        {/* DELETAR LOTE */}
        <S.Botao style={{ backgroundColor:"#F32D2D" }}>
          <img src={`/trash.svg`}/>
          <h3>Deletar lote</h3>
        </S.Botao>        

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
    </>
  );
};

export default LoteDetails;
