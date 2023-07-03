import React, { useEffect, useState } from 'react';
import * as S from './style';
import Search from '../Search';
import CategoriaData from '../../data/CategoriaData';
import { LoteData } from '../../data/LoteData';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import { TipologiaData } from '../../data/TipologiaData';

interface IEditModal {
  id: number
  name: string
  prioridade?: boolean
  percentage?: number
}

interface CategoriasTipologiasProps {
  close: () => void;
  setCategoria: (e: any) => void
  setTipologia: (e: any) => void
  categorias: typeof CategoriaData
  tipologias: typeof TipologiaData
}

export const EditModal = (props: CategoriasTipologiasProps) => {
  
  // FUNÇÃO PARA PESQUISA
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  };

  const [categorias, setCategorias] = useState<any>([])
  const [tipologias, setTipologias] = useState<any>([])
  const [selectedCategoriaData, setCategoriaData] = useState<number[]>([])

  const handleLoteClick = (item: any) => {
    if(CatTipol === false)
    {
      if (categorias.includes(item)) {
        setCategorias(categorias.filter((catg:any) => catg.id !== item.id)) 
      } else {
        setCategorias((prev:any) => [...prev, CategoriaData.filter((catg) => catg.id === item.id)[0]])
      }
    } else {
      if (tipologias.includes(item)) {
        setTipologias(tipologias.filter((tipo:any) => tipo.id !== item.id)) 
      } else {
        setTipologias((prev:any) => [...prev, TipologiaData.filter((tipo) => tipo.id === item.id)[0]])
      }
    }
  }

  const [data, setData] = useState<IEditModal[]>(CategoriaData)
  const filteredCategorias = data.filter(
    (catg) => catg.name.toLowerCase().includes(searchTerm.toLowerCase()) || catg.name.includes(searchTerm),
  )

  const [CatTipol, setCatTipol] = useState<boolean>(false)

  useEffect(() => {
    if(!CatTipol) {
      setData(CategoriaData)
    } else {
      setData(TipologiaData)
    }
    setCategorias(task.categorias)
  }, [CatTipol])



  const navigate = useNavigate();
  let { id } = useParams();
  const [lote , setLote] = useState(LoteData);
  const task = lote.filter((task) => task.id == id)[0]

  const [arquivFis , setArquivFis] = useState(task.arquiv_fisicos);
  const handleArquivosFisicos = (e:any) => {
    setArquivFis(e.target.value)
    console.log('arquivos fisicos atualizados!')
  }

  const [arquivDig , setArquivDig] = useState(task.arquiv_digitais);
  const handleArquivosDigitais = (e:any) => {
    setArquivDig(e.target.value)
    console.log('arquivos digitais atualizados!')
  }

  const handleSave = () => {
    const LoteAtualizado = {
      id: categorias.id,
      categorias: categorias,
      tipologias: tipologias,
      arquivosFisicos: arquivFis,
      arquivosDigitais: arquivDig
    }
    console.log(LoteAtualizado)
    //navigate(/Lote/${categorias.id});
  }

  // const filteredTitulo = mockData.filter(
  //   (mockData) =>
  //   mockData.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord/>
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h1>Editar Lote {task.numero}</h1> 
              <button onClick={() => navigate(-1)} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                <img
                  src="/close.svg"
                  alt=""
                  height={24}
                  width={24}
                  style={{
                    padding: '5px 5px',
                    backgroundColor: '#393E4B',
                    borderRadius: '3px',
                  }}
                />
              </button>
            </S.NameClose>

            {/* PROTOCOLO */}
            <S.ProtocoloDiv>
              <h2>Protocolo</h2>
              <S.Protocolo>{task.protocolo}</S.Protocolo>
            </S.ProtocoloDiv>

            {/* LOCAL */}       
            {task.estante !== null &&
              <S.LocalDiv>
                <p>Local</p>
                <S.Local
                  key={task.id}
                  style={{ backgroundColor: '#2D303B' }}
                  type="text"
                  name="nome"
                  placeholder={task.estante}
                ></S.Local>
              </S.LocalDiv>            
            }

            {/* ARQUIVOS */}
            <S.Arquivos>
              <h2>Arquivos</h2>
              <S.ArquivosDiv>
                {/* ARQUIVOS FÍSICOS */}
                {task.arquiv_fisicos !== null &&
                  <S.ArquivosFisicos>
                    <p>Físicos</p> 
                    <S.ArquivosInput      
                      style={{ backgroundColor: '#393E4B' }}
                      type="number"
                      name="nome"
                      placeholder={``}
                      onChange={handleArquivosFisicos}
                      value={arquivFis}
                    >
                    </S.ArquivosInput>
                  </S.ArquivosFisicos>
                }

                {/* ARQUIVOS DIGITAIS */}
                {task.arquiv_digitais !== null && 
                  <S.ArquivosDigitais>
                    <p>Digitais</p>
                    <S.ArquivosInput      
                      style={{ backgroundColor: '#393E4B' }}
                      type="text"
                      name="nome"
                      placeholder={``}
                      onChange={handleArquivosDigitais}
                      value={arquivDig}
                    >
                    </S.ArquivosInput>
                  </S.ArquivosDigitais>
                }                
              </S.ArquivosDiv>

            </S.Arquivos>
            
            {/*CATEGORIAS E TIPOLOGIAS*/}

            <S.Categorias>
              <div style={{color:'white', overflow: 'hidden', borderRadius: '5px', display: 'flex', width: '12.5em'}}>
                <button onClick={() => setCatTipol(false)} style={{height: '44px', color: 'white', border: 'none', backgroundColor: CatTipol ? '#2D303B' : '#191C24',  padding: '8px 8px'}}>Categorias</button>
                <button onClick={() => setCatTipol(true)} style={{height: '44px', color: 'white', border: 'none', backgroundColor: CatTipol ? '#191C24' : '#2D303B', padding: '8px 8px'}}>Tipologias</button>
              </div>
              
              <h2 style={{ marginBottom: '1em' }}>Categorias</h2>
              {categorias.map((cat:any) => (
                cat.name

              ))}
              {tipologias.map((tipol:any) => (
                tipol.name

              ))}
              <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
              <S.ChooseCatTipol>
                {filteredCategorias.map((cat: any) => {
                  if(!CatTipol)
                  {
                    return(
                      <S.Categoria
                        key={cat.id}
                        onClick={() => handleLoteClick(cat)}
                        style={{
                          backgroundColor: categorias.includes(cat) ? '#393E4B' : '#20232B',
                        }}
                      >
                        <p
                          style={{
                            color: categorias.includes(cat) ? '#fff' : '#838383',
                          }}
                        >
                          {cat.name}
                        </p>
                      </S.Categoria>
                      
                    )
                  } else {
                    return(
                      <S.Tipologia
                        key={cat.id}
                        onClick={() => handleLoteClick(cat)}
                        style={{
                          backgroundColor: tipologias.includes(cat) ? '#393E4B' : '#20232B',
                        }}
                      >
                        <p
                          style={{
                            color: tipologias.includes(cat) ? '#fff' : '#838383',
                          }}
                        >
                          {cat.name}
                        </p>
                      </S.Tipologia>
                      
                    )
                  }
                  })
                }
              </S.ChooseCatTipol>
            </S.Categorias>
            <S.SalvarEditButton onClick={handleSave}>Salvar</S.SalvarEditButton>
          </S.ModalContent>
    </>
  );
};

export {};