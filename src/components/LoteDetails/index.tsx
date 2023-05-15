import React, { useState, useEffect, useRef } from "react";
import * as S from "./styles";
import { Content } from "../Lote/styles";
import mockData from "../../data/kanbanData";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
      <S.areaClick>

        {/* BOTÃO DE FECHAR */}
        <S.CloseDiv>
          <S.Exit onClick={() => navigate(-1)}>
            <p style={{ padding: "0 0.5em" }}>X</p>
          </S.Exit>
        </S.CloseDiv>

        {/* TÍTULO DO LOTE */}
        <h1 style={{ marginBottom: "0.5em" }}>{task.title}</h1>

        {/* PROTOCOLO */}
        {/*<S.Protocolo>
            <S.ProtocoloTextDiv style={{ borderRadius: "5px" }}> 
              <p style={{ padding: "0 0.5em" }}>{task.protocolo}</p> 
            </S.ProtocoloTextDiv>
          </S.Protocolo>
        */}

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
        
        {/* OBSERVAÇÃO */}
        <S.Observações>Observações</S.Observações>

        {/* VOLTAR FASE */}
        <S.Botao>
          <img src={`/voltar.svg`}/>
          Voltar Fase
        </S.Botao>

        {/* AVANÇAR FASE */}
        <S.Botao>
          <img src={`/avancar.svg`}/>
          Avançar Fase
        </S.Botao>

        {/* ATRIBUIR À ALGUÉM */}
        <S.Botao>
          <img src={`/atribuir.svg`}/>
          Atribuir à alguém
        </S.Botao>

        {/* DELETAR LOTE */}
        <S.Botao className="excluir">
          <img src={`/trash.svg`}/>
          Deletar Lote
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
