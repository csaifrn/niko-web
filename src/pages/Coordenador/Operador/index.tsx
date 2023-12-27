import React, { useEffect, useState } from 'react';
import OperadorCard from '../../../components/OperadorCard';
import Users from '../../../data/UserData';
import * as S from './styles';
import Search from '../../../components/Search';
import Menu from '../../../components/Menu';
import MenuCoord from '../../../components/MenuCoord';
import { useParams } from 'react-router';
import { Membros } from '../../../data/ProjetoData';
import { Operador } from '../../../api/services/users/ListUsers/users.interface';
import { useMutation } from 'react-query';
import { GetOperadores } from '../../../api/services/users/ListUsers';

interface OperadorProps {
  id: string;
  name: string;
}

const removeDiacritics = (str: string): string => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

const OperadoresPage = () => {

  const [searchTerm, setSearchTerm] = useState<string>('');

  const { id } = useParams();

  const [membros, setMembros] = useState<Operador[]>([]);

  const OperadoresMutate = useMutation(GetOperadores, {
    onSuccess: (data: Operador[]) => {
      setMembros(data);
    },
  });

  useEffect(() => {
    // Users.forEach((element) => {
    //   const membro = Membros.filter((membr) => membr.email === element.email);
    //   membro.forEach((m) => {
    //     if (m.id_Projeto == id) {
    //       setMembros((old: any) => [...old, element]);
    //     }
    //   });
    // });

    OperadoresMutate.mutate();
  }, []);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers: Operador[] = membros.filter((user: Operador) => {
    const userName = removeDiacritics(user.name.toLowerCase());
    const search = removeDiacritics(searchTerm.toLowerCase());
    return userName.includes(search);
  });

  const sortedUsers: Operador[] = filteredUsers.sort((a: Operador, b: Operador) => {
    const nameA = removeDiacritics(a.name.toLowerCase());
    const nameB = removeDiacritics(b.name.toLowerCase());
    return nameA.localeCompare(nameB);
  });

  const sortedAndFilteredUsers: Operador[] = sortedUsers.sort((a: Operador, b: Operador) => {
    return a.id !== '' ? -1 : b.name === '' ? 1 : 0;
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Menu area={`/Operadores/${id}`} id_projeto={id}></Menu>
        <MenuCoord />
        <S.CardsArea>
          <h1 style={{color: 'white' , fontFamily: 'Rubik'}}>  Membros </h1>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

          {sortedAndFilteredUsers.map((user: Operador) => (
            <OperadorCard User={user} key={user.id} />
          ))}
        </S.CardsArea>
      </div>
    </>
  );
};

export default OperadoresPage;
