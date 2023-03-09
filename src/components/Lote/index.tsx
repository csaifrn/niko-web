import * as S from "./styles"

const Lote = (props: any) => {
    return (
        <>
            <S.Lote className='Lote'>
                <S.LoteArea >
                    <S.Content >
                        <h3>{props.task.title}</h3>
                        {
                            props.task.pa && props.task.pa.map((pa: any, index: number) => (
                                <>
                                    {pa.nome === props.prioridade && (
                                        <S.Prioridade>
                                            <p>Prioridade</p>
                                        </S.Prioridade>
                                    )}
                                </>
                            ))
                        }
                    </S.Content>
                    <S.Content >
                        <S.Envolvido style={{ display: 'flex', marginLeft: '10px' }}>
                            {
                                props.task.envolvidos && props.task.envolvidos.map((envolvidos: any) => (
                                    <>
                                        <img src={envolvidos.foto} width={32} height={32} style={{ marginLeft: '-10px', borderRadius: "100%" }}></img>
                                    </>
                                ))
                            }
                        </S.Envolvido>
                        <S.Pa>
                            {
                                props.task.pa && props.task.pa.map((pa: any, index: number) => (
                                    <>
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
                                    </>
                                ))
                            }
                        </S.Pa>
                    </S.Content>
                </S.LoteArea>
            </S.Lote>
        </>
    );
}

export default Lote;