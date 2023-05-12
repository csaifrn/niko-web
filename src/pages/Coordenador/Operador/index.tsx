import React, { useState } from "react";
import OperadorCard from "../../../components/OperadorCard";
import Users from "../../../data/UserData";
import * as S from "./styles";
import diacriticless from "diacriticless";

const Operador = () => {
  const [searchTerm, setSearchTerm] = useState(""); 


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Atualiza o critério de pesquisa conforme o usuário digita
  };

  const filteredUsers = Users.filter((user: any) => {
    const userName = diacriticless(user.name.toLowerCase());
    const search = diacriticless(searchTerm.toLowerCase());
    return userName.includes(search);
  });

  const sortedUsers = filteredUsers.sort((a: any, b: any) => {
    const nameA = diacriticless(a.name.toLowerCase());
    const nameB = diacriticless(b.name.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  return (
    <>
      <S.CardsArea>
      <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Pesquisa"
          style={{height: "44px", padding: "0 2em", borderRadius: "5px", backgroundColor: "rgb(57, 62, 75)", color: "#838383", border: "none"}}
        />
        {sortedUsers.map((user: any, index: number) => (
          <OperadorCard User={user} key={user.id} />
        ))}
      </S.CardsArea>
    </>
  );
};

export default Operador;