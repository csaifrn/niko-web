import React, { useState } from "react";
import OperadorCard from "../../../components/OperadorCard";
import Categorias from "../../../data/CategoriaData";
import * as S from "./styles";
import Search from "../../../components/Search";
import CategoriaData from "../../../data/CategoriaData";
import CategoriaCard from "../../../components/CategoriaCard";
import Menu from "../../../components/Menu";
import MenuCoord from "../../../components/MenuCoord";


type Categoria = {
  id: number;
  name: string;
  percentage: number;
};

const removeDiacritics = (str: string): string => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const Categoria = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
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

  const sortedAndFilteredCategorias: Categoria[] = sortedCategorias.sort(
    (a: Categoria, b: Categoria) => {
      return a.name.localeCompare(b.name);
    }
  );

  return (
    <>
      <Menu area="/"></Menu>
      <MenuCoord area="/" />
      <S.CardsArea>

        <Search
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />

        {sortedAndFilteredCategorias.map((categoria: Categoria, index: number) => (
          <CategoriaCard key={categoria.id} categoria={categoria}/>
        ))}
      </S.CardsArea>
    </>
  );
};

export default Categoria;