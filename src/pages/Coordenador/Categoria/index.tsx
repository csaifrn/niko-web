import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Search from '../../../components/Search';
import CategoriaData from '../../../data/CategoriaData';
import CategoriaCard from '../../../components/CategoriaCard';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { GetTags } from '../../../api/services/tags/get-batche';
import { Tag, Tags } from '../../../api/services/tags/get-batche/get.interface';

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

  const [tags, setTags] = useState<Tags>();

  const tagsMutate = useMutation(GetTags, {
    onSuccess: (data: Tags) => {
      setTags(data);
    },
  });

  useEffect(() => {
    tagsMutate.mutate();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const filteredTag: Tags = tags!.filter((tag: Tag) => {
    const tagName = removeDiacritics(tag.name.toLowerCase());
    const search = removeDiacritics(searchTerm.toLowerCase());
    return tagName.includes(search);
  });

  const sortedTags: Tags = filteredTag.sort((a: Tag, b: Tag) => {
    const nameA = removeDiacritics(a.name.toLowerCase());
    const nameB = removeDiacritics(b.name.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  const sortedAndFilteredTags: Tags = sortedTags.sort((a: Tag, b: Tag) => {
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu area={`/Categoria/${id}`} id_projeto={id}></Menu>
        <MenuCoord />
        <S.CardsArea>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

          {sortedAndFilteredTags.map((tag: Tag) => (
            <CategoriaCard key={tag.id} id={tag.id} name={tag.name} />
          ))}
        </S.CardsArea>
      </div>
    </>
  );
};

export default Categoria;
