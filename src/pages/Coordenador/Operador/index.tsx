import React, { useEffect, useState } from 'react';
import OperadorCard from '../../../components/OperadorCard';
import Users from '../../../data/UserData';
import * as S from './styles';
import Search from '../../../components/Search';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router';
import { Membros } from '../../../data/ProjetoData';

type User = {
  id: string;
  name: string;
  url: string;
  email: string;
  lote: string;
  fase: string;
  andamento: boolean;
};

const removeDiacritics = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const Operador = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { id } = useParams();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const [membros, setMembros] = useState<typeof Users>([]);

  useEffect(() => {
    Users.forEach((element) => {
      const membro = Membros.filter((membr) => membr.email === element.email);
      membro.forEach((m) => {
        if (m.id_Projeto == id) {
          setMembros((old: any) => [...old, element]);
        }
      });
    });
  }, []);

  const filteredUsers: User[] = membros.filter((user: User) => {
    const userName = removeDiacritics(user.name.toLowerCase());
    const search = removeDiacritics(searchTerm.toLowerCase());
    return userName.includes(search);
  });

  const sortedUsers: User[] = filteredUsers.sort((a: User, b: User) => {
    const nameA = removeDiacritics(a.name.toLowerCase());
    const nameB = removeDiacritics(b.name.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  const sortedAndFilteredUsers: User[] = sortedUsers.sort((a: User, b: User) => {
    return a.lote !== '' ? -1 : b.lote === '' ? 1 : 0;
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu area={`/Operadores/${id}`} id_projeto={id}></Menu>
        <MenuCoord />
        <S.CardsArea>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

          {sortedAndFilteredUsers.map((user: User) => (
            <OperadorCard User={user} key={user.id} />
          ))}
        </S.CardsArea>
      </div>
    </>
  );
};

export default Operador;
