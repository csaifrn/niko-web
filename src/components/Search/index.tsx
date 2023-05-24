import React from "react";
import * as S from "./styles";

type SearchProps = {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  black?: boolean;
};

const Search = ({
  searchTerm,
  handleSearchChange,
  black,
}: SearchProps): JSX.Element => {
  return (
    <>
      <S.SearchDiv style={{ display: "flex", position: "relative" }}>
        <S.ImgSearch src="/search.svg" />
        <S.InputSearch
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Pesquisa"
          style={{ backgroundColor: "#191C24" }}
        />
      </S.SearchDiv>
    </>
  );
};

export default Search;
