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
import { useCategories } from '../../../hooks/useCategories';

import { ButtonCSV } from '../../../components/ButtonCSV';
import { SharedState } from '../../../context/SharedContext';
import { UserRole } from '../../../utils/userRole.enum';

type Categoria = {
  id: number;
  name: string;
  percentage: number;
  prioridade: boolean;
};

const removeDiacritics = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const Classes = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const { categories, isLoadingCategories } = useCategories();
  const [, setCategories] = useState<Category[]>();
  const { user } = SharedState();

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

  const filteredCat = !isLoadingCategories
    ? categories?.filter((cat: Category) => {
        const catName = removeDiacritics(cat.name.toLowerCase());
        const search = removeDiacritics(searchTerm.toLowerCase());
        return catName.includes(search);
      })
    : [];

  const sortedCategories = filteredCat?.sort((a: Category, b: Category) => {
    const nameA = removeDiacritics(a.name.toLowerCase());
    const nameB = removeDiacritics(b.name.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  const sortedAndFilteredCategories = sortedCategories?.sort((a: Category, b: Category) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu area={`/Classes`} id_projeto={id}></Menu>
        <MenuCoord />
        <S.CardsArea>
          {user?.role === UserRole.MANAGER && (
            <div style={{ display: 'flex', gap: '1em' }}>
              <ButtonGreen onClick={() => setOpen(!open)}>Criar classe</ButtonGreen>
              <ButtonCSV data={categories}>Baixar CSV: Classes</ButtonCSV>
            </div>
          )}

          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

          {sortedAndFilteredCategories?.map((tag: Tag) => (
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

export default Classes;
