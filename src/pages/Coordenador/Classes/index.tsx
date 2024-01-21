import React, { useState } from 'react';
import * as S from './styles';
import Search from '../../../components/Search';
import CategoriaCard from '../../../components/CategoriaCard';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router-dom';
import { useCategories } from '../../../hooks/useCategories';
import { CSVButton } from '../../../components/CSVButton';

const Classes = () => {
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const { categories, isLoadingCategories } = useCategories();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area={`/Classes`} id_projeto={id}></Menu>
      <MenuCoord />
      <S.CardsArea>
        <S.ButtonCriarClasse onClick={() => setOpen(!open)}>Criar classe</S.ButtonCriarClasse>
        {!isLoadingCategories && categories ? (
          <CSVButton
            columns={[
              {
                key: 'name',
                name: 'Lote',
              },
              {
                key: 'batch_count',
                name: 'Quantidade total lotes',
              },
              {
                key: 'preparation_batch_count',
                name: 'Total em fase de preparação',
              },
              {
                key: 'preparation_available',
                name: 'Lotes disponíveis em fase de preparação',
              },
              {
                key: 'preparation_in_progress',
                name: 'Lotes em progresso em fase de preparação',
              },
              {
                key: 'preparation_done',
                name: 'Lotes concluídos em fase de preparação',
              },
              {
                key: 'cataloguing_batch_count',
                name: 'Total em fase de catalogação',
              },
              {
                key: 'cataloguing_available',
                name: 'Lotes disponíveis em fase de catalogação',
              },
              {
                key: 'cataloguing_in_progress',
                name: 'Lotes em progresso em fase de catalogação',
              },
              {
                key: 'cataloguing_done',
                name: 'Lotes concluídos em fase de catalogação',
              },
              {
                key: 'digitization_scanning_batch_count',
                name: 'Total em fase de digitalização e escaneamento',
              },
              {
                key: 'digitization_scanning_available',
                name: 'Lotes disponíveis em fase de digitalização e escaneamento',
              },
              {
                key: 'digitization_scanning_in_progress',
                name: 'Lotes em progresso em fase de digitalização e escaneamento',
              },
              {
                key: 'digitization_scanning_done',
                name: 'Lotes concluídos fase de digitalização e escaneamento',
              },
              {
                key: 'upload_batch_count',
                name: 'Total em fase de upload',
              },
              {
                key: 'upload_available',
                name: 'Lotes disponiveis em fase de upload',
              },
              {
                key: 'upload_in_progress',
                name: 'Lotes em progresso em fase de upload',
              },
              {
                key: 'upload_done',
                name: 'Lotes concluídos em fase de upload',
              },
              {
                key: 'created_at',
                name: 'Data de cadastro',
                formatToDate: true,
              },
              {
                key: 'updated_at',
                name: 'Data de última atualização',
                formatToDate: true,
              },
            ]}
            fileName="projetos-de-assentamento"
            data={categories}
          />
        ) : (
          <S.LoadingSpinner />
        )}
        <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

        {categories?.map(
          (c) =>
            c.name.toLowerCase().includes(searchTerm) && (
              <CategoriaCard key={c.id} id={c.id} name={c.name} count_batches={c.batch_count} />
            ),
        )}
      </S.CardsArea>
    </div>
  );
};

export default Classes;
