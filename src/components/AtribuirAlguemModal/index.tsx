import React, { useEffect, useState } from 'react';
import * as S from './style';
import { AssignedUser, GetResponseBatche } from '../../api/services/batches/get-batche/get.interface';
import Select from 'react-select';
import { MultiValue } from 'react-select';
import { validationSearch } from './validation';
import toast from 'react-hot-toast';
import { SearchUserResponseBatche } from '../../api/services/batches/assigners/get-user-autocomplete/get.interface';
import { SearchUser } from '../../api/services/batches/assigners/get-user-autocomplete';
import { useMutation } from 'react-query';
import { PostAssigners } from '../../api/services/batches/assigners/post-assigners';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { useParams } from 'react-router-dom';

export interface AtribuirAlguemModalProps {
  close: () => void;
  assigners: AssignedUser[] | undefined;
  setAssigners: React.Dispatch<React.SetStateAction<AssignedUser[]>>;
}

interface Options {
  value: string;
  label: string;
}

export const AtribuirAlguemModal = (props: AtribuirAlguemModalProps) => {
  const { id } = useParams();
  const [closing, setClosing] = useState(false);
  const [options, setOptions] = useState<MultiValue<Options | null>>([]);
  const [optionsSelected, setOptionsSelected] = useState<MultiValue<Options | null>>(
    props.assigners ? props.assigners.map((e) => ({ value: e.id, label: e.name })) : [],
  );
  const [userInput, setUserinput] = useState<string>('');

  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
    const timer = setTimeout(() => {
      const modal = document.getElementById('modal-scaling');
      if (closing === false && modal) {
        modal.style.transform = 'scale(1)';
      } else if (modal && closing) {
        modal.style.transform = 'scale(0)';
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [closing]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const assignMutate = useMutation(PostAssigners, {
    onSuccess: (data: GetResponseBatche) => {
      console.log(data);
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response!.data.message);
      }
    },
  });

  const validateSearch = async (): Promise<boolean> => {
    try {
      await validationSearch.validate(
        {
          name: userInput,
        },
        {
          abortEarly: false,
        },
      );
    } catch (error) {
      return false;
    }
    return true;
  };

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    toast.success('Deu certo!');
    if (optionsSelected.length > 0 && id)
      assignMutate.mutate({
        batch_id: id,
        assignment_users_ids: [...optionsSelected.map((ass) => ass?.value!)],
      });
  };

  useEffect(() => {
    onChange();
  }, [userInput]);

  const users = useMutation(SearchUser, {
    onSuccess: (data: SearchUserResponseBatche) => {
      setOptions([]);
      const opt = data.users;
      const response: Options[] = opt.map((e) => ({ value: e.id, label: e.name }));
      setOptions(response);
    },
  });

  const onChange = async () => {
    const isValid = await validateSearch();

    if (isValid) {
      users.mutate({
        name: userInput,
      });
    }
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent id="modal-content">
            <S.NameClose>
              <h2>Atribuir para</h2>

              <button
                onClick={handleClose}
                style={{ width: 'auto', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                <img
                  src="/close.svg"
                  alt=""
                  height={24}
                  width={24}
                  style={{
                    padding: '5px 5px',
                    backgroundColor: '#090E09',
                    borderRadius: '5px',
                  }}
                />
              </button>
            </S.NameClose>
            <Select
              isMulti
              autoFocus
              placeholder={'Digite no mínimo 3 caracteres...'}
              onInputChange={setUserinput}
              inputValue={userInput}
              onChange={(e) => setOptionsSelected(e)}
              options={options}
              name="colors"
              className="basic-multi-select"
              classNamePrefix="select"
              value={optionsSelected}
              isLoading={users.isLoading}
            />
            <S.AtribuirButton onClick={onSubmit}>Salvar</S.AtribuirButton>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
