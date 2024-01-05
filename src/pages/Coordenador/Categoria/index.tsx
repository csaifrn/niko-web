import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Search from '../../../components/Search';
import CategoriaCard from '../../../components/CategoriaCard';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Tag } from '../../../api/services/tags/get-tags/get.interface';
import { ButtonGreen } from '../../../components/AtribuirAlguemModal/style';
import { ModalCategory } from '../../../components/ModalCategory';
import { Category } from '../../../api/services/batches/get-batche/get.interface';
import { GetCategories } from '../../../api/services/settlement/get-categories';

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
  const [open, setOpen] = useState<boolean>(false);

  const [Categories, setCategories] = useState<Category[]>();

  const CategoriesMutate = useMutation(GetCategories, {
    onSuccess: (data: Category[]) => {
      setCategories(data);
    },
  });

  useEffect(() => {
    CategoriesMutate.mutate();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const filteredCat: Category[] = Categories
    ? Categories.filter((cat: Category) => {
        const catName = removeDiacritics(cat.name.toLowerCase());
        const search = removeDiacritics(searchTerm.toLowerCase());
        return catName.includes(search);
      })
    : [];

  const sortedCategories: Category[] = filteredCat.sort((a: Category, b: Category) => {
    const nameA = removeDiacritics(a.name.toLowerCase());
    const nameB = removeDiacritics(b.name.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  const sortedAndFilteredCategories: Category[] = sortedCategories.sort((a: Category, b: Category) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu area={`/Categoria/${id}`} id_projeto={id}></Menu>
        <MenuCoord />
        <S.CardsArea>
          <ButtonGreen onClick={() => setOpen(!open)}>Criar classe</ButtonGreen>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

          {sortedAndFilteredCategories.map((tag: Tag) => (
            <CategoriaCard key={tag.id} id={tag.id} name={tag.name} />
          ))}
        </S.CardsArea>
      </div>
      {open && (
        <ModalCategory title={'Criar classe'} close={() => setOpen(!open)} refetch={() => CategoriesMutate.mutate()} />
      )}
    </>
  );
};

export default Categoria;
