import React, { useState } from "react";
import OperadorCard from "../../../components/OperadorCard";
import Users from "../../../data/UserData";
import * as S from "./styles";
import diacriticless from "diacriticless";
import Search from "../../../components/Search";

type User = {
  id: number;
  name: string;
  lote: string;
  fase: string;
};

const Operador = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers: User[] = Users.filter((user: User) => {
    const userName = diacriticless(user.name.toLowerCase());
    const search = diacriticless(searchTerm.toLowerCase());
    return userName.includes(search);
  });

  const sortedUsers: User[] = filteredUsers.sort((a: User, b: User) => {
    const nameA = diacriticless(a.name.toLowerCase());
    const nameB = diacriticless(b.name.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  const sortedAndFilteredUsers: User[] = sortedUsers.sort((a: User, b: User) => {
    return a.lote !== "" ? -1 : b.lote === "" ? 1 : 0;
  });

  return (
    <>
      <S.CardsArea>
        <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        {/* <S.SearchDiv style={{ display: "flex", position: "relative" }}>
          <S.ImgSearch src="search.svg" />
          <S.InputSearch
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Pesquisa"
          />
        </S.SearchDiv> */}

        {sortedAndFilteredUsers.map((user: User, index: number) => (
          <OperadorCard User={user} key={user.id} />
        ))}
      </S.CardsArea>
    </>
  );
};

export default Operador;