// import React, { useEffect, useState } from 'react';
// import * as S from './styles';
// import { useParams, useNavigate } from 'react-router-dom';
// import Menu from '../Menu';
// import MenuCoord from '../MenuCoord';
// import { AtribuirAlguemModal } from '../AtribuirAlguemModal';
// import { AvancarModal } from '../AvancarModal';
// import { ConfigModal } from '../ConfigModal';
// import { DeletarLoteModal } from '../DeletarLoteModal';
// import { VoltarModal } from '../VoltarModal';

// export const LoteDetails = () => {

//   const [config_modal, setConfigModal] = useState(false);
//   const handleConfig = () => {
//     setConfigModal(!config_modal);
//   };

//   const [delete_modal, setDeleteModal] = useState(false);
//   const handleDelete = () => {
//     setDeleteModal(!delete_modal);
//   };

//   const [voltar, setVoltar] = useState(false);
//   const handleVoltar = () => {
//     setVoltar(!voltar);
//   };

//   const [avancar, setAvancar] = useState(false);
//   const handleAvancar = () => {
//     setAvancar(!avancar);
//   };

//   const [modal, setModal] = useState(false);
//   const handleAtribuirAlguem = () => {
//     setModal(!modal);
//   };

//   const id = useParams();

//   const navigate = useNavigate();

//   const filterTask = data.map((section: any) => section.tasks.filter((task: any) => task.id === id.id));
//   const task = filterTask.filter((task: any) => task.length !== 0)[0][0];
//   console.log(task);

//   return (
//     <>
//       <Menu area="/"></Menu>
//       <MenuCoord/>
//       <S.areaClick>
//         {/* BOTÃO DE FECHAR */}
//         <S.CloseDiv>
//           <S.Exit onClick={() => navigate(-1)}>
//             <img src="/close.svg" alt="" height={18} width={18} />
//           </S.Exit>
//         </S.CloseDiv>

//         <S.LoteInfos>
//           <S.LoteEditConfig>
//             {/* TÍTULO */}
//             <S.TituloLote>{`${task.titulo} ${task.numero} `}</S.TituloLote>
//             <S.EditConfig>
//               {/* EDITAR */}
//               <S.Edit href={`/Lote/${task.id}/Edit`}>
//                 {''}
//                 <S.Icons src={`/pen.svg`}></S.Icons>{''}
//               </S.Edit>
//               {/* CONFIGURAÇÕES */}
//               <S.Config onClick={handleConfig}>
//                 {''}
//                 <S.Icons src={`/config.svg`}></S.Icons>{''}
//               </S.Config>
//             </S.EditConfig>
//           </S.LoteEditConfig>

//           <S.DetalhesLote>
//             {/* PROTOCOLO */}
//             <S.Protocolo>
//               <p style={{ padding: '0 0.5em' }}>{task.protocolo}</p>
//             </S.Protocolo>

//             {task.estante !== null &&
//               <S.Estante>
//                 {task.estante}
//               </S.Estante>
//             }

//             {/* ARQUIVOS FÍSICOS */}
//               {task.arquiv_fisicos != 0 &&
//                 <S.ArquivFisicos>
//                   <img src={`/arquivos_fisicos.svg`} alt="arquivos fisicos"/>
//                   {task.arquiv_fisicos}
//                 </S.ArquivFisicos>
//               }
//             {/* ARQUIVOS DIGITAIS */}
//             {task.arquiv_digitais != 0 &&
//                 <S.ArquivDigitais>
//                   <img src={`/arquivos_digitais.svg`} alt="arquivos digitais"/>
//                   {task.arquiv_digitais}
//                 </S.ArquivDigitais>
//             }
//           </S.DetalhesLote>

//         <S.CategoriaPrioridade>
//           {task.categoria &&
//             task.categoria.map((categoria: any, index: number) => (
//               <React.Fragment key={categoria.id}>
//                 {/* PRIORIDADE */}
//                 {categoria.nome == 'Financeiro' && (
//                   <S.Prioridade>
//                     <p>Prioridade</p>
//                   </S.Prioridade>
//                 )}
//                 {/* CATEGORIAS */}
//                 {index >= 0 && (
//                   <S.Categoria>
//                     <p>{categoria.nome}</p>
//                   </S.Categoria>
//                 )}
//               </React.Fragment>
//             ))}
//         </S.CategoriaPrioridade>

//         {/* FASE DO LOTE */}
//         <S.FaseEnvolvAtual>
//           <S.Icons src={`/icon-page/${task.fase_atual[0].nome}.png`} />
//         </S.FaseEnvolvAtual>

//         <S.ObsBotoes>
//           {/* OBSERVAÇÕES */}
//           <S.Observações>
//             <p>Observações</p>
//             {task.observacoes.map((obs: any) => (
//               <S.ObsDivBlack key={obs.ObsId} >
//                 {obs.titulo}
//               </S.ObsDivBlack>
//             ))}

//           </S.Observações>

//           {/* VOLTAR FASE */}

//           <S.BotaoMudarFase>
//             <S.VoltarAvancar onClick={handleVoltar}>
//               <img src={`/voltar.svg`} alt="voltar" />
//               <p>Voltar Fase</p>
//             </S.VoltarAvancar>

//             <S.EscolherFase className="custom-select">
//               <S.OptionFases className="fase" value="recepção">
//                 <p>Recepção</p>
//               </S.OptionFases>
//               <S.OptionFases className="fase" value="preparo">
//                 <p>Preparo</p>
//               </S.OptionFases>
//               <S.OptionFases className="fase" value="catalogação">
//                 <p>Catalogação</p>
//               </S.OptionFases>
//               <S.OptionFases className="fase" value="digitalização">
//                 <p>Digitalização</p>
//               </S.OptionFases>
//               <S.OptionFases className="fase" value="upload">
//                 <p>Upload</p>
//               </S.OptionFases>
//               <S.OptionFases className="fase" value="arquivamento">
//                 <p>Arquivamento</p>
//               </S.OptionFases>
//             </S.EscolherFase>
//           </S.BotaoMudarFase>

//           {/* AVANÇAR FASE */}
//           <S.BotaoMudarFase >

//             {indisponivel == false &&
//               <S.VoltarAvancar onClick={handleAvancar} style={{background: "#393E4B"}}>
//                 <img src={"/avancar.svg"} alt="ícone circular com uma seta para a direita ao centro"/>
//                 <p style={{color: indisponivel ? "rgba(255, 255, 255, 0.50)" : "#FFFFFF"}}>Avancar Fase</p>
//               </S.VoltarAvancar>
//             }

//             {indisponivel == true &&
//               <S.VoltarAvancar style={{background:"rgba(57, 62, 75, 0.50)"}}>
//                 <img src={"/avancar-desativado.svg"} alt="ícone circular com uma seta para a direita ao centro"/>
//                 <p style={{color: indisponivel ? "rgba(255, 255, 255, 0.50)" : "#FFFFFF"}}>Avancar Fase</p>
//               </S.VoltarAvancar>
//             }

//             {indisponivel == false &&
//               <S.EscolherFase className="custom-select" style={{background: indisponivel ? "rgba(57, 62, 75, 0.50)" : "#393E4B"}}  onChange={(e) => handleDebug(e)}>
//                 {FaseData.map((fase) => (
//                   <S.OptionFases className="fase" value={fase.titulo} key={fase.id} >
//                     {fase.titulo}
//                   </S.OptionFases>
//                 ))}
//               </S.EscolherFase>
//             }

//             {indisponivel == true &&
//               <S.EscolherFase className="custom-select" style={{background: indisponivel ? "rgba(57, 62, 75, 0.50)" : "#393E4B"}} disabled >
//                 {FaseData.map((fase) => (
//                   <S.OptionFases className="fase" value={fase.titulo} key={fase.id}>
//                     {fase.titulo}
//                     </S.OptionFases>
//                 ))}
//               </S.EscolherFase>
//             }

//           </S.BotaoMudarFase>

//           {/* ATRIBUIR À ALGUÉM */}
//           <S.Botao onClick={handleAtribuirAlguem}>
//             <img src={`/atribuir.svg`} alt="atribuir lote" />
//             <p>Atribuir à alguém</p>
//           </S.Botao>

//           {/* DELETAR LOTE */}
//           <S.Botao onClick={handleDelete} style={{ backgroundColor: '#F32D2D' }}>
//             <img src={`/trash.svg`} alt="Deletar Lote" />
//             <p>Deletar lote</p>
//           </S.Botao>
//         </S.PendObsBotoes>

//         {/* DETALHAMENTO POR FASE */}

//         {task.detalhamento_por_fase != null &&

//         <S.DetalFase>
//             <h2>Detalhamento por fase</h2>

//                         <S.TimeFinishDiv>
//                           <img src={recep.time_finish} alt="icone de check" />
//                           {recep.end}
//                           <S.Text style={{ color: '#00D25B' }}>{recep.end_hour}</S.Text>
//                         </S.TimeFinishDiv>

//                         <S.EnvolvidosDiv>
//                           {recep.envolvidos &&
//                             recep.envolvidos.map((user: any) => (
//                               <React.Fragment key={user.envolvidoId}>
//                                 <img
//                                   src={user.foto}
//                                   alt="usuario envolvido na fase"
//                                   style={{
//                                     height: '32px',
//                                     width: '32px',
//                                     borderRadius: '50px',
//                                   }}
//                                 />
//                               </React.Fragment>
//                             ))}
//                         </S.EnvolvidosDiv>
//                       </React.Fragment>
//                     ))}
//                 </React.Fragment>
//               ))}
//           </S.Fase>

//           <S.Fase>
//             {/* PREPARO */}
//             {task.fases &&
//               task.fases.map((fase: any) => (
//                 <React.Fragment key={fase.id}>
//                   {fase.preparo &&
//                     fase.preparo.map((prep: any) => (
//                       <React.Fragment key={prep.id}>
//                         <S.FaseIconDiv>
//                           <img src={prep.icone} alt="ícone de preparo" height={22} width={22} />
//                           <h2>{prep.title}</h2>
//                         </S.FaseIconDiv>

//                         <S.TimeBeginDiv>
//                           <img src={prep.time_begin} alt="seta para direita" />
//                           {prep.start}
//                           <S.Text style={{ color: '#FCDE42' }}>{prep.start_hour}</S.Text>
//                         </S.TimeBeginDiv>

//                         <S.TimeFinishDiv>
//                           <img src={prep.time_finish} alt="icone de check" />
//                           {prep.end}
//                           <S.Text style={{ color: '#00D25B' }}>{prep.end_hour}</S.Text>
//                         </S.TimeFinishDiv>

//                         <S.Time>
//                           <img src={prep.time_icon} alt="icone de relógio" />
//                           {prep.time}
//                         </S.Time>

//                         <S.EnvolvidosDiv>
//                           {prep.envolvidos &&
//                             prep.envolvidos.map((user: any) => (
//                               <React.Fragment key={user.envolvidoId}>
//                                 <img
//                                   src={user.foto}
//                                   alt="usuario envolvido na fase"
//                                   style={{
//                                     height: '32px',
//                                     width: '32px',
//                                     borderRadius: '50px',
//                                   }}
//                                 />
//                               </React.Fragment>
//                             ))}
//                         </S.EnvolvidosDiv>
//                       </React.Fragment>
//                     ))}
//                 </React.Fragment>
//               ))}
//           </S.Fase>

//           <S.Fase>
//             {/* CATALOGAÇÃO */}
//             {task.fases &&
//               task.fases.map((fase: any) => (
//                 <React.Fragment key={fase.id}>
//                   {fase.catalogacao &&
//                     fase.catalogacao.map((catalog: any) => (
//                       <React.Fragment key={catalog.id}>
//                         <S.FaseIconDiv>
//                           <img src={catalog.icone} alt="ícone de preparo" height={22} width={22} />
//                           <h2>{catalog.title}</h2>
//                         </S.FaseIconDiv>

//                         <S.TimeBeginDiv>
//                           <img src={catalog.time_begin} alt="seta para direita" />
//                           {catalog.start}
//                           <S.Text style={{ color: '#FCDE42' }}>{catalog.start_hour}</S.Text>
//                         </S.TimeBeginDiv>

//                         <S.TimeFinishDiv>
//                           <img src={catalog.time_finish} alt="icone de check" />
//                           {catalog.end}
//                           <S.Text style={{ color: '#00D25B' }}>{catalog.end_hour}</S.Text>
//                         </S.TimeFinishDiv>

//                         <S.Time>
//                           <img src={catalog.time_icon} alt="icone de relógio" />
//                           {catalog.time}
//                         </S.Time>

//                         <S.EnvolvidosDiv>
//                           {catalog.envolvidos &&
//                             catalog.envolvidos.map((user: any) => (
//                               <React.Fragment key={user.envolvidoId}>
//                                 <img
//                                   src={user.foto}
//                                   alt="usuario envolvido na fase"
//                                   style={{
//                                     height: '32px',
//                                     width: '32px',
//                                     borderRadius: '50px',
//                                   }}
//                                 />
//                               </React.Fragment>
//                             ))}
//                         </S.EnvolvidosDiv>
//                       </React.Fragment>
//                     ))}
//                 </React.Fragment>
//               ))}
//           </S.Fase>

//           <S.Fase>
//             {/* DIGITALIZAÇÃO */}
//             {task.fases &&
//               task.fases.map((fase: any) => (
//                 <React.Fragment key={fase.id}>
//                   {fase.digitalizacao &&
//                     fase.digitalizacao.map((digital: any) => (
//                       <React.Fragment key={digital.id}>
//                         <S.FaseIconDiv>
//                           <img src={digital.icone} alt="ícone de preparo" height={22} width={22} />
//                           <h2>{digital.title}</h2>
//                         </S.FaseIconDiv>

//                         <S.TimeBeginDiv>
//                           <img src={digital.time_begin} alt="seta para direita" />
//                           {digital.start}
//                           <S.Text style={{ color: '#FCDE42' }}>{digital.start_hour}</S.Text>
//                         </S.TimeBeginDiv>

//                         <S.TimeFinishDiv>
//                           <img src={digital.time_finish} alt="icone de check" />
//                           {digital.end}
//                           <S.Text style={{ color: '#00D25B' }}>{digital.end_hour}</S.Text>
//                         </S.TimeFinishDiv>

//                         <S.Time>
//                           <img src={digital.time_icon} alt="icone de relógio" />
//                           {digital.time}
//                         </S.Time>

//                         <S.EnvolvidosDiv>
//                           {digital.envolvidos &&
//                             digital.envolvidos.map((user: any) => (
//                               <React.Fragment key={user.envolvidoId}>
//                                 <img
//                                   src={user.foto}
//                                   alt="usuario envolvido na fase"
//                                   style={{
//                                     height: '32px',
//                                     width: '32px',
//                                     borderRadius: '50px',
//                                   }}
//                                 />
//                               </React.Fragment>
//                             ))}
//                         </S.EnvolvidosDiv>
//                       </React.Fragment>
//                     ))}
//                 </React.Fragment>
//               ))}
//           </S.Fase>
//         </S.DetalFase>
//       </S.areaClick>

//       {modal && <AtribuirAlguemModal close={handleAtribuirAlguem}></AtribuirAlguemModal>}
//       {edit_modal && <EditModal close={handleEdit}></EditModal>}
//       {config_modal && <ConfigModal close={handleConfig}></ConfigModal>}
//       {voltar && <VoltarModal close={handleVoltar}></VoltarModal>}
//       {avancar && <AvancarModal close={handleAvancar}></AvancarModal>}
//       {delete_modal && <DeletarLoteModal close={handleDelete}></DeletarLoteModal>}
//       {config_modal &&
//         <ConfigModal
//           valor_prioridade={prioridadeState}
//           handlePrioridade={handlePChange}
//           valor_compart={compartState}
//           handleCompart={handleCompartCheck}
//           close={handleConfig}></ConfigModal>}
//     </>
//   );
// };

// export default LoteDetails;'
