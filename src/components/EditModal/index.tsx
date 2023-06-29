import React, { useEffect, useState } from 'react';
import * as S from './style';
import Search from '../Search';
import CategoriaData from '../../data/CategoriaData';
import { LoteData } from '../../data/LoteData';
import { useNavigate, useParams } from 'react-router-dom';
import Menu from '../Menu';
import MenuCoord from '../MenuCoord';
import { TipologiaData } from '../../data/TipologiaData';

interface CategoriasTipologiasProps {
  close: () => void;
  // eslint-disable-next-line no-unused-vars
  setCategoria: (e: any) => void;
  // eslint-disable-next-line no-unused-vars
  setTipologia: (e: any) => void;
  categorias: typeof CategoriaData
  tipologias: typeof TipologiaData
}

interface IEditModal {
  id: number,
  name: string,
  prioridade?: boolean,
  percentage?: number,
}

export const EditModal = (props: CategoriasTipologiasProps) => {
  
  // FUNÇÃO PARA PESQUISA
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const [categorias, setCategorias] = useState<typeof CategoriaData>([]);
  const [tipologias, setTipologias] = useState<typeof TipologiaData>([]);
  const [selectedCategoriaData, setCategoriaData] = useState<number[]>([]);

  const handleLoteClick = (item: any) => {
    if(CatTipo === false)
    {
      if (categorias.includes(item)) {
        setCategorias(categorias.filter((catg) => catg.id !== item.id)) 
      } else {
        setCategorias((prev) => [...prev, CategoriaData.filter((catg) => catg.id === item.id)[0]])
      }
    } else {
      if (tipologias.includes(item)) {
        setTipologias(tipologias.filter((tipo) => tipo.id !== item.id)) 
      } else {
        setTipologias((prev) => [...prev, TipologiaData.filter((tipo) => tipo.id === item.id)[0]])
      }
    }
  };

  const [data, setData] = useState<IEditModal[]>(CategoriaData)
  const filteredCategorias = data.filter(
    (catg) => catg.name.toLowerCase().includes(searchTerm.toLowerCase()) || catg.name.includes(searchTerm),
  );

  const handleSave = () => {
    props.setCategoria(categorias)
    props.setTipologia(tipologias)
    props.close()
  }
  const [CatTipo, setCatTipo] = useState<boolean>(false)

  useEffect(() => {
    if(!CatTipo) {
      setData(CategoriaData)
    } else {
      setData(TipologiaData)
    }
  }, [CatTipo])

  let { id } = useParams();
  const navigate = useNavigate();
  const [lote , setLote] = useState(LoteData);
  const task = lote.filter((task) => task.id == id)[0];

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

            {/* CATEGORIAS E TIPOLOGIAS */}
            <S.Arquivos>
              <h2>Arquivos</h2>
              <S.ArquivosDiv>
                {/* ARQUIVOS FÍSICOS */}
                {task.arquiv_fisicos !== null &&
                  <S.ArquivosFisicos>
                    <p>Físicos</p> 
                    <S.ArquivosInput      
                      style={{ backgroundColor: '#393E4B' }}
                      type="text"
                      name="nome"
                      placeholder={`${task.arquiv_fisicos}`}
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
                      placeholder={`${task.arquiv_digitais}`}
                    >
                    </S.ArquivosInput>
                  </S.ArquivosDigitais>
                }                
              </S.ArquivosDiv>

            </S.Arquivos>
            
            {/*CATEGORIAS E TIPOLOGIAS*/}

            <S.Categorias>
              <div style={{color:'white', overflow: 'hidden', borderRadius: '5px', display: 'flex', width: '12.5em'}}>
                <button onClick={() => setCatTipo(false)} style={{height: '44px', color: 'white', border: 'none', backgroundColor: CatTipo ? '#2D303B' : '#191C24',  padding: '8px 8px'}}>Categorias</button>
                <button onClick={() => setCatTipo(true)} style={{height: '44px', color: 'white', border: 'none', backgroundColor: CatTipo ? '#191C24' : '#2D303B', padding: '8px 8px'}}>Tipologias</button>
              </div>
              <h2 style={{ marginBottom: '1em' }}>Categorias</h2>
              <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
              <S.ChooseCatTipol>
                {filteredCategorias.map((cat: any) => {
                  if(!CatTipo)
                  {
                    return(
                      <S.Categoria
                        key={cat.id}
                        onClick={() => handleLoteClick(cat)}
                        style={{
                          backgroundColor: categorias.includes(cat) ? '#090E09' : '#2D303B',
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
                          backgroundColor: tipologias.includes(cat) ? '#090E09' : '#2D303B',
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