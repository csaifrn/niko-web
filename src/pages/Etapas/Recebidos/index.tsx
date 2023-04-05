import React, { useRef, useState } from 'react';
import { Menu } from '../../../components/Menu';
import * as Style from '../../../global/index';
import * as S from "../../../components/Board/styles"
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


const Recebidos = () => {

  const [CategoriaDetails, setCategoriaDetails] = useState<Categoria[]>([{
    id: uuidv4(),
    nome: "Xxx"
  }])
  const [title, setTitleDetails] = useState<string>("")

  const [task, setTaskDetails] = useState({
    id: uuidv4(),
    title: 'Lote X',
    categoria: [{
      id: uuidv4(),
      nome: "Categoria"
    }],
    envolvidos: null,

  })


  function writeLoteData(LoteId: string, title: string, categorias: Categoria[], envolvidos: [] | null) {
    const db = getDatabase();
    console.log(LoteId, title, categorias, envolvidos)
    console.log('Lote Criado!')
    set(ref(db, 'Lotes/' + LoteId), {
      title: title,
      categoria: categorias,
      envolvidos: envolvidos
    });
  }

  return (
    <>
      <Style.Wrapper>
        <Menu area='/Recebidos'></Menu>
        <div style={{ margin: '2em' }}>
          <Lote task={task} value={task.title} categoria={task.categoria} envolvidos={task.envolvidos} prioridade={"Maisa"} edit={true}>
          </Lote>
          <h1 style={{ color: 'white', margin: '0.5em 0' }}>Recebidos</h1>
          <h3 style={{ color: 'white', marginBottom: '0.5em' }}>Adicionar Lote</h3>
          <div>
            <div>
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
          <S.btnPrioridade onClick={() => {
            writeLoteData(uuidv4(), title, CategoriaDetails, null)
          }}>Adicionar Lote</S.btnPrioridade>
          <Style.Footer></Style.Footer>
        </div>
      </Style.Wrapper>
    </>
  )
}

export default Recebidos;