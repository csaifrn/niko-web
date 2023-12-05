import React from 'react';
import * as S from './styles';
import theme from '../../global/theme';

type SearchProps = {
  searchTerm: string;
  // eslint-disable-next-line no-unused-vars
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  black?: boolean;
};

const Search = ({ searchTerm, handleSearchChange }: SearchProps): JSX.Element => {
  return (
    <>
      <S.SearchDiv style={{ display: 'flex', position: 'relative' }}>
        <S.ImgSearch src="/search.svg" />
        <S.InputSearch
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Pesquisa"
          style={{ backgroundColor: theme.colors['gray/450'], color: 'white' }}
        />
      </S.SearchDiv>
    </>
  );
};

export default Search;
