import { uuidv4 } from "@firebase/util";
import React from "react";
import { Envolvidos, PA } from "../../pages/Etapas/Recebidos"
import * as S from "./styles"

const Lote = (props: any) => {
    console.log(props.pa)
    return (
        <>
            {props.edit == true && (
                <S.Lote className='Lote'>
                    <S.LoteArea >
                        <S.Content >

                            <h3>{props.value}</h3>
                            {
                                props.pa && props.pa.map((pa: any, index: number) => (
                                    <React.Fragment key={uuidv4()}>
                                        {pa.nome === props.prioridade && (
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
                                    props.pa && props.pa.map((pa: any, index: number) => (
                                        <React.Fragment key={uuidv4()}>
                                            {index >= 0 && (
                                                <S.PaTextDiv style={{ borderRadius: "5px" }}>
                                                    <p style={{ padding: "0 0.5em" }}>{pa.nome}</p>
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
            {props.edit == null && (
                <S.Lote className='Lote'>
                    <S.LoteArea >
                        <S.Content >

                            <h3>{props.value}</h3>
                            {
                                props.pa && props.pa.map((pa: any, index: number) => (
                                    <React.Fragment key={uuidv4()}>
                                        {pa.nome === props.prioridade && (
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
                                    props.pa && props.pa.map((pa: any, index: number) => (
                                        <React.Fragment key={uuidv4()}>
                                            {index >= 1 && (
                                                <S.PaTextDiv style={{ borderRadius: "100%", width: "2em" }}>
                                                    <p>+{index}</p>
                                                </S.PaTextDiv>

                                            )}
                                            {index == 0 && (
                                                <S.PaTextDiv style={{ borderRadius: "5px" }}>
                                                    <p style={{ padding: "0 0.5em" }}>{pa.nome}</p>
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