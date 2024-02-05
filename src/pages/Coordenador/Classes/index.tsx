import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Search from '../../../components/Search';
import CategoriaCard from '../../../components/CategoriaCard';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router-dom';
import { useCategories } from '../../../hooks/useCategories';
import { CSVButton } from '../../../components/CSVButton';
import { ModalCategory } from '../../../components/ModalCategory';
import { useMutation } from 'react-query';
import { Class } from '../../../api/services/batches/get-batche/get.interface';
import theme from '../../../global/theme';
import { GetCategories } from '../../../api/services/class/get-classes';

const Classes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const { categories, isLoadingCategories, refetch } = useCategories();
  const [, setCategories] = useState<Class[]>();
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const CategoriesMutate = useMutation(GetCategories, {
    onSuccess: (data: Class[]) => {
      setCategories(data);
    },
  });

  useEffect(() => {
    CategoriesMutate.mutate();
  }, []);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area={`/Classes`}></Menu>
      <MenuCoord />
      <S.CardsArea>
        <S.CriarAndCsvDiv>
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
        </S.CriarAndCsvDiv>

        {categories?.length && categories?.length === 1 && (
          <S.QuantClassesDiv>
            <S.QuantClassesText style={{ color: theme.colors['green/500'] }}>1</S.QuantClassesText>{' '}
            <S.QuantClassesText>Classe</S.QuantClassesText>
          </S.QuantClassesDiv>
        )}

        {categories?.length && categories?.length > 1 && (
          <S.QuantClassesDiv>
            <S.QuantClassesText style={{ color: theme.colors['green/500'] }}>{categories?.length}</S.QuantClassesText>{' '}
            <S.QuantClassesText>Classes</S.QuantClassesText>
          </S.QuantClassesDiv>
        )}

        <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        {categories?.length === 0 ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '16px',
            }}
          >
            <S.QuantClassesText>Ops! Nenhuma classe foi encontrada</S.QuantClassesText>
            <img
              src="/Empty.svg"
              width={'350em'}
              alt="imagem com pessoa em dúvida , indicando que nenhuma classe foi encontrada"
            />
          </div>
        ) : (
          categories?.map(
            (c) =>
              c.name.toLowerCase().includes(searchTerm) && (
                <CategoriaCard
                  key={c.id}
                  id={c.id}
                  name={c.name}
                  count_batches={c.batch_count}
                  available_batches_count={
                    Number(c.preparation_available) +
                    Number(c.cataloguing_available) +
                    Number(c.digitization_scanning_available) +
                    Number(c.upload_available) +
                    Number(c.archiving_available)
                  }
                  in_progress_batches_count={
                    Number(c.preparation_in_progress) +
                    Number(c.cataloguing_in_progress) +
                    Number(c.digitization_scanning_in_progress) +
                    Number(c.upload_in_progress) +
                    Number(c.archiving_in_progress)
                  }
                  archiving_done_batches_count={Number(c.archiving_done)}
                  preparo_batches_count={Number(c.preparation_batch_count)}
                  catalog_batches_count={Number(c.cataloguing_batch_count)}
                  digital_batches_count={Number(c.digitization_scanning_batch_count)}
                  upload_batches_count={Number(c.upload_batch_count)}
                  arquiv_batches_count={Number(c.archiving_batch_count)}
                />
              ),
          )
        )}
      </S.CardsArea>
      {open && (
        <ModalCategory title={'Criar classe'} close={() => setOpen(!open)} refetch={() => CategoriesMutate.mutate()} />
      )}
    </div>
  );
};

export default Classes;
