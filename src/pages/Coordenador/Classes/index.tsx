import React, { useState } from 'react';
import * as S from './styles';
import Search from '../../../components/Search';
import CategoriaCard from '../../../components/CategoriaCard';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ModalCategory } from '../../../components/ModalCategory';
import { GetCategories } from '../../../api/services/settlement/get-categories';
import { useCategories } from '../../../hooks/useCategories';
import { ButtonCSV } from '../../../components/ButtonCSV';

const Classes = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const { categories, isLoadingCategories } = useCategories();

  const categoriesMutate = useMutation(GetCategories);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  console.log(isLoadingCategories);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu area={`/Classes`} id_projeto={id}></Menu>
        <MenuCoord />
        <S.CardsArea>
          <S.ButtonCriarClasse onClick={() => setOpen(!open)}>Criar classe</S.ButtonCriarClasse>
          <ButtonCSV data={categories}>Baixar CSV: Classes</ButtonCSV>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

          {categories?.map(
            (c) => c.name.toLowerCase().includes(searchTerm) && <CategoriaCard key={c.id} id={c.id} name={c.name} />,
          )}
        </S.CardsArea>
      </div>
      {open && (
        <ModalCategory title={'Criar classe'} close={() => setOpen(!open)} refetch={() => categoriesMutate.mutate()} />
      )}
    </>
  );
};

export default Classes;
