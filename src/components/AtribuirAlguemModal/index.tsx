import React, { useState } from 'react';
import * as S from './style';
import Search from '../Search';
import Users from '../../data/UserData';

interface AtribuirAlguemModalProps {
  close: () => void;
}

export const AtribuirAlguemModal = (props: AtribuirAlguemModalProps) => {
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleLoteClick = (userId: number) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = Users.filter((Users) => Users.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea>
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Atribuir para</h2>

              <button onClick={props.close} style={{ width: 'auto', backgroundColor: 'transparent', border: 'none' }}>
                <img
                  src="/close.svg"
                  height={18}
                  width={18}
                  style={{
                    padding: '5px 5px',
                    backgroundColor: '#090E09',
                    borderRadius: '5px',
                  }}
                  alt="Fechar"
                />
              </button>
            </S.NameClose>
            <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
            <S.ChooseUser>
              {filteredUsers.map((user: any) => (
                <S.User
                  key={user.id}
                  onClick={() => handleLoteClick(user.id)}
                  style={{
                    backgroundColor: selectedUsers.includes(user.id) ? '#090E09' : '#2D303B',
                  }}
                >
                  <S.NameFotoUser>
                    <img
                      src={user.url}
                      alt=""
                      width={28}
                      height={28}
                      style={{ objectFit: 'cover', borderRadius: '100%' }}
                    ></img>

                    <p
                      style={{
                        color: selectedUsers.includes(user.id) ? '#FFFFFF' : '#838383',
                      }}
                    >
                      {user.name}
                    </p>
                  </S.NameFotoUser>
                </S.User>
              ))}
            </S.ChooseUser>
            <S.AtribuirButton onClick={props.close}>Atribuir</S.AtribuirButton>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
