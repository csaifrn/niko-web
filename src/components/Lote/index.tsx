import { uuidv4 } from "@firebase/util";
import React from "react";
import { Envolvidos, Categoria } from "../../pages/Etapas/Recebidos"
import * as S from "./styles"

const Lote = (props: any) => {
    return (
        <>
            {props.edit == true && (
                <S.LoteEdit className='Lote'>
                    <S.LoteArea >
                        <S.Content >

                            <h3>{props.value}</h3>
                            {
                                props.categoria && props.categoria.map((categoria: any, index: number) => (
                                    <React.Fragment key={uuidv4()}>
                                        {categoria.nome === props.prioridade && (
                                            <S.Prioridade>
                                                <p>Prioridade</p>
                                            </S.Prioridade>
                                        )}
                                    </React.Fragment>
                                ))
                            }
                        </S.Content>
                        <S.Content>
                            <S.Pa>
                                {
                                    props.categoria && props.categoria.map((categoria: any, index: number) => (
                                        <React.Fragment key={uuidv4()}>
                                            {index >= 0 && (
                                                <S.PaTextDiv style={{ borderRadius: "5px" }}>
                                                    <p style={{ padding: "0 0.5em" }}>{categoria.nome}</p>
                                                </S.PaTextDiv>
                                            )}
                                        </React.Fragment>
                                    ))
                                }
                            </S.Pa>
                        </S.Content>

                    </S.LoteArea>
                </S.LoteEdit>

            )}
            {props.edit == null && (
                <S.Lote className='Lote'>
                    <S.LoteArea >
                        <S.Content >

                            <h3>{props.value}</h3>
                            {
                                props.categoria && props.categoria.map((categoria: any, index: number) => (
                                    <React.Fragment key={uuidv4()}>
                                        {categoria.nome === props.prioridade && (
                                            <S.Prioridade>
                                                <p>Prioridade</p>
                                            </S.Prioridade>
                                        )}
                                    </React.Fragment>
                                ))
                            }
                        </S.Content>
                        <S.Content >
                            <S.Envolvido style={{ display: 'flex', marginLeft: '10px' }}>
                                {
                                    props.envolvidos && props.envolvidos.map((envolvidos: any) => (
                                        <React.Fragment key={uuidv4()}>
                                            <img src={envolvidos.foto} width={32} height={32} style={{ marginLeft: '-10px', borderRadius: "100%" }}></img>
                                        </React.Fragment>
                                    ))
                                }
                            </S.Envolvido>
                            <S.Pa>
                                {
                                    props.categoria && props.categoria.map((categoria: any, index: number) => (
                                        <React.Fragment key={uuidv4()}>
                                            {index >= 1 && (
                                                <S.PaTextDiv style={{ borderRadius: "100%", width: "2em" }}>
                                                    <p>+{index}</p>
                                                </S.PaTextDiv>

                                            )}
                                            {index == 0 && (
                                                <S.PaTextDiv style={{ borderRadius: "5px" }}>
                                                    <p style={{ padding: "0 0.5em" }}>{categoria.nome}</p>
                                                </S.PaTextDiv>
                                            )}
                                        </React.Fragment>
                                    ))
                                }
                            </S.Pa>
                        </S.Content>
                    </S.LoteArea>
                </S.Lote>

            )}

        </>
    );
}

export default Lote;