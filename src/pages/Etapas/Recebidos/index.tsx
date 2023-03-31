import React, { useRef, useState } from 'react';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import * as S from "../../../components/Board/styles"
import { getDatabase, ref, set } from "firebase/database";
import { uuidv4 } from '@firebase/util';
import produce, { current } from 'immer';
import Lote from '../../../components/Lote/index';

export interface PA {
  id: string
  nome: string
}

export interface Envolvidos {
  foto: string
}

export interface Task {
  id: string
  title: string
  pa: PA[] | null
  envolvidos: Envolvidos[] | null
}


const Recebidos = () => {

  const [PADetails, setPADetails] = useState<PA[]>([{
    id: uuidv4(),
    nome: "Xxx"
  }])
  const [title, setTitleDetails] = useState<string>("")

  const [task, setTaskDetails] = useState({
    id: uuidv4(),
    title: 'Lote X',
    pa: [{
      id: uuidv4(),
      nome: "Assentamento"
    }],
    envolvidos: null,

  })


  function writeLoteData(LoteId: string, title: string, pas: PA[], envolvidos: [] | null) {
    const db = getDatabase();
    console.log(LoteId, title, pas, envolvidos)
    console.log('Lote Criado!')
    set(ref(db, 'Lotes/' + LoteId), {
      title: title,
      pa: pas,
      envolvidos: envolvidos
    });
  }

  return (
    <>
      <Style.Wrapper>
        <Menu area='/Recebidos'></Menu>
        <div style={{ margin: '2em' }}>
          <Lote task={task} value={task.title} pa={task.pa} envolvidos={task.envolvidos} prioridade={"Maisa"} edit={true}>
          </Lote>
          <h1 style={{ color: 'white', margin: '0.5em 0' }}>Recebidos</h1>
          <h3 style={{ color: 'white', marginBottom: '0.5em' }}>Adicionar Lote</h3>
          <div>
            <div>
              <S.btnPrioridade onClick={() => {
                setPADetails(currentPA => [...currentPA, {
                  id: uuidv4(),
                  nome: ''
                }])
                setTaskDetails(currentTask => {
                  return {
                    ...currentTask,
                    pa: PADetails
                  };
                });
              }}>Adicionar PA</S.btnPrioridade>
            </div>
            {
              PADetails.map((p, index) => {
                return (
                  <div key={p.id} style={{ display: 'flex', flexDirection: 'row', gap: '0.5em', margin: '0.5em 0' }}>
                    <S.inputPrioridade type="text" className="form-control" placeholder="Nome do PA" aria-label="Username" aria-describedby="basic-addon1" onChange={e => {
                      const name = e.target.value;
                      setPADetails(currentPA => {
                        const updatedPADetails = produce(currentPA, v => {
                          v[index].nome = name;
                        });
                        setTaskDetails(currentTask => {
                          return {
                            ...currentTask,
                            pa: updatedPADetails
                          };
                        });
                        return updatedPADetails;
                      })
                      task.pa = PADetails;
                    }} />
                    <S.btnPrioridade onClick={() => {
                      setPADetails(currentPA => currentPA.filter(x => x.id !== p.id)); task.pa = PADetails;
                    }}>X</S.btnPrioridade>
                  </div>
                )
              })
            }
          </div>
          <S.inputPrioridade type="text" className="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" onChange={e => { setTitleDetails(e.target.value); task.title = e.target.value }} style={{ marginBottom: "0.5em" }} />
          <br />
          <S.btnPrioridade onClick={() => {
            writeLoteData(uuidv4(), title, PADetails, null)
          }}>Adicionar Lote</S.btnPrioridade>
          <Style.Footer></Style.Footer>
        </div>
      </Style.Wrapper>
    </>
  )
}

export default Recebidos;