import React, { useRef, useState } from 'react';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import * as S from "./styles"
import { getDatabase, ref, set } from "firebase/database";
import { uuidv4 } from '@firebase/util';
import produce, { current } from 'immer';
import Lote from '../../../components/Lote/index';

export interface Categoria {
  id: string
  nome: string
}

export interface Envolvidos {
  foto: string
}

export interface Task {
  id: string
  title: string
  categoria: Categoria[] | null
  envolvidos: Envolvidos[] | null
}

interface RecepProps {
  etapa: string;
}


const Recebidos = (props: RecepProps) => {

  // const [CategoriaDetails, setCategoriaDetails] = useState<Categoria[]>([{
  //   id: uuidv4(),
  //   nome: "Xxx"
  // }])
  // const [title, setTitleDetails] = useState<string>("")

  const task = {
    id: "2",
    title: "Lote 10",
    categoria: [
      {
        nome: "Administrativo",
        id: 1,
      },
    ],
  }

  // const [task, setTaskDetails] = useState({
  //   id: uuidv4(),
  //   title: 'Lote X',
  //   categoria: [{
  //     id: uuidv4(),
  //     nome: "Categoria"
  //   }],
  //   envolvidos: null,
  // })


  // function writeLoteData(LoteId: string, title: string, categorias: Categoria[], envolvidos: [] | null) {
  //   const db = getDatabase();
  //   console.log(LoteId, title, categorias, envolvidos)
  //   console.log('Lote Criado!')
  //   set(ref(db, 'Lotes/' + LoteId), {
  //     title: title,
  //     categoria: categorias,
  //     envolvidos: envolvidos
  //   });
  // }

  return (
    <>
      <Style.Wrapper>
        <>
        
          <div style={{ margin: "1em 3em 0em 3em", display: "flex", justifyContent: "flex-end", gap: "0.5em" }}>
            <img src={`/icon-page/${props.etapa}.png`}/>
          </div>
        </>
        
        <div style={{ margin: '2em', display: 'flex', flexDirection: 'column', gap: '1em' }}>
        <S.Btn onClick={() => {}}><p>Adicionar Caixa</p></S.Btn>
        
        <S.LoteArea>
          <Lote task={task} value={task.title} categoria={task.categoria} envolvidos={{}} prioridade={"Maisa"} edit={true} >
          </Lote>
          <Lote task={task} value={task.title} categoria={task.categoria} envolvidos={{}} prioridade={"Maisa"} edit={true} >
          </Lote>
          <Lote task={task} value={task.title} categoria={task.categoria} envolvidos={{}} prioridade={"Maisa"} edit={true} >
          </Lote>
          <Lote task={task} value={task.title} categoria={task.categoria} envolvidos={{}} prioridade={"Maisa"} edit={true} >
          </Lote>
          <Lote task={task} value={task.title} categoria={task.categoria} envolvidos={{}} prioridade={"Maisa"} edit={true} >
          </Lote>
        </S.LoteArea>

          


          {/* 
          <h1 style={{ color: 'white', margin: '0.5em 0' }}>Recebidos</h1>
          <h3 style={{ color: 'white', marginBottom: '0.5em' }}>Adicionar Lote</h3>
          <div >
            <div style={{ marginBottom: '0.5em' }}>
              <S.btnPrioridade onClick={() => {
                setCategoriaDetails(currentCategorias => [...currentCategorias, {
                  id: uuidv4(),
                  nome: ''
                }])
                setTaskDetails(currentTask => {
                  return {
                    ...currentTask,
                    categoria: CategoriaDetails
                  };
                });
              }}>Adicionar Categoria</S.btnPrioridade>
            </div>
            {
              CategoriaDetails.map((p, index) => {
                return (
                  <div key={p.id} style={{ display: 'flex', flexDirection: 'row', gap: '0.5em', margin: '0.5em 0' }}>
                    <S.inputPrioridade type="text" className="form-control" placeholder="Categoria" aria-label="Username" aria-describedby="basic-addon1" onChange={e => {
                      const name = e.target.value;
                      setCategoriaDetails(currentCategoria => {
                        const updatedCategoriaDetails = produce(currentCategoria, v => {
                          v[index].nome = name;
                        });
                        setTaskDetails(currentTask => {
                          return {
                            ...currentTask,
                            categoria: updatedCategoriaDetails
                          };
                        });
                        return updatedCategoriaDetails;
                      })
                      task.categoria = CategoriaDetails;
                    }} />
                    <S.btnPrioridade onClick={() => {
                      setCategoriaDetails(currentCategoria => currentCategoria.filter(x => x.id !== p.id)); task.categoria = CategoriaDetails;
                    }}>X</S.btnPrioridade>
                  </div>
                )
              })
            }
          </div>
          <S.inputPrioridade type="text" className="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" onChange={e => { setTitleDetails(e.target.value); task.title = e.target.value }} style={{ marginBottom: "0.5em" }} />
          <br />
          
          <Style.Footer></Style.Footer> */}

        </div>
      </Style.Wrapper>
    </>
  )
}

export default Recebidos;