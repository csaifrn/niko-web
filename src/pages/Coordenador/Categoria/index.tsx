import React, { useState } from 'react';
import * as S from './styles';
import Search from '../../../components/Search';
import CategoriaData from '../../../data/CategoriaData';
import CategoriaCard from '../../../components/CategoriaCard';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router-dom';

type Categoria = {
  id: number;
  name: string;
  percentage: number;
  prioridade: boolean;
};

const removeDiacritics = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const Categoria = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const filteredCategorias: Categoria[] = CategoriaData.filter((categoria: Categoria) => {
    const categoriaName = removeDiacritics(categoria.name.toLowerCase());
    const search = removeDiacritics(searchTerm.toLowerCase());
    return categoriaName.includes(search);
  });

  const sortedCategorias: Categoria[] = filteredCategorias.sort((a: Categoria, b: Categoria) => {
    const nameA = removeDiacritics(a.name.toLowerCase());
    const nameB = removeDiacritics(b.name.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  const sortedAndFilteredCategorias: Categoria[] = sortedCategorias.sort((a: Categoria, b: Categoria) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <Menu area={`/Categoria/${id}`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.CardsArea>
        <S.SearchDiv>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        </S.SearchDiv>
        <S.CategoriaCardsArea>
          {sortedAndFilteredCategorias.map((categoria: Categoria) => (
            <CategoriaCard key={categoria.id} id={categoria.id} name={categoria.name} percentage={categoria.percentage} prioridade={categoria.prioridade}/>
          ))}
        </S.CategoriaCardsArea>
      </S.CardsArea>
    </>
  );
};

export default Categoria;
