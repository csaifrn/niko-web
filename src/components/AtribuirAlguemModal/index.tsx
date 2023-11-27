import React, { useEffect, useState } from 'react';
import * as S from './style';
import { AssignedUser } from '../../api/services/batches/get-batche/get.interface';

import { validationSearch } from './validation';
import toast from 'react-hot-toast';
import { SearchUserResponseBatche } from '../../api/services/batches/assigners/get-user-autocomplete/get.interface';
import { SearchUser } from '../../api/services/batches/assigners/get-user-autocomplete';
import { useMutation } from 'react-query';
import { PostAssigners } from '../../api/services/batches/assigners/post-assigners';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import { useParams } from 'react-router-dom';
import { DeleteAssigner } from '../../api/services/batches/assigners/delete-assigners';
import { PostResponseAssigners } from '../../api/services/batches/assigners/post-assigners/post.interface';

import ReactLoading from 'react-loading';
import { ErrorMessage } from '../../pages/Login/styles';
import { MultiValue } from 'react-select';

export interface AtribuirAlguemModalProps {
  close: () => void;
  assigners: AssignedUser[] | undefined;
  setAssigners?: React.Dispatch<React.SetStateAction<AssignedUser[]>>;
}

interface Options {
  value: string;
  label: string;
}

export const AtribuirAlguemModal = (props: AtribuirAlguemModalProps) => {
  const { id } = useParams();
  const [closing, setClosing] = useState(false);
  const [errorInput, setErrorInput] = useState('');
  const [options, setOptions] = useState<MultiValue<Options | null>>([]);
  const [presentAssigners, setPresentAssigners] = useState<AssignedUser[]>(props.assigners ? props.assigners : []);
  const [userRemoved, setUserRemoved] = useState<string>('');
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

  const assignMutate = useMutation(PostAssigners, {
    onSuccess: (data: PostResponseAssigners) => {
      toast.success('Mudanças salvas!');
      setPresentAssigners(data.assignedUsers);
      handleClose();
    },
    onError: (error: ApiError) => {
      if (error.response) {
        toast.error(error.response!.data.message);
      }
    },
  });

  const users = useMutation(SearchUser, {
    onSuccess: (data: SearchUserResponseBatche) => {
      setOptions([]);
      const opt = data.users;
      const response: Options[] = opt.map((e) => ({ value: e.id, label: e.name }));
      setOptions(response);
    },
  });

  const removeAssigner = useMutation(DeleteAssigner, {
    onSuccess: () => {
      toast.success(`Você removeu este responsável do lote.`);
      setPresentAssigners((assigner) => [...assigner.filter((a) => a.id != userRemoved)]);
    },
  });

  useEffect(() => {
    if (props.setAssigners) {
      props.setAssigners(presentAssigners ? presentAssigners : []);
    }
  }, [presentAssigners]);

  useEffect(() => {
    onChange();
  }, [userInput]);

  useEffect(() => {
    if (userRemoved && id) {
      removeAssigner.mutate({
        batch_id: id,
        assignment_user_id: userRemoved,
      });
    }
  }, [userRemoved]);

  const onRemove = (e: Options | null | undefined) => {
    if (e && presentAssigners.map((a) => a.id === e?.value)) {
      setUserRemoved(e?.value ? e.value : '');
    }
  };

  const onChange = async () => {
    const isValid = await validateSearch();

    if (isValid) {
      users.mutate({
        name: userInput,
      });
    }
  };

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newAssigner = optionsSelected
      .map((ass) => {
        if (presentAssigners) {
          const isAlready = presentAssigners.some((a) => a.id === ass?.value);
          if (!isAlready) {
            return ass?.value;
          }
        } else {
          return ass?.value;
        }
      })
      .filter((value) => value !== undefined); // Filtrar valores undefined

    if (newAssigner.length > 0 && newAssigner.length + presentAssigners.length <= 5 && id) {
      setErrorInput('');
      assignMutate.mutate({
        batch_id: id,
        assignment_users_ids: newAssigner as string[],
      });
    }
    if (newAssigner.length === 0) {
      if (presentAssigners.length > 0) {
        if (presentAssigners.length === 5) {
          setErrorInput(
            'O usuários escolhidos já estão atribuidos. O número máximo é 5 retire um operador ou cancele.',
          );
        } else {
          setErrorInput('O usuários escolhidos já estão atribuidos. Adicione um operador novo.');
        }
      } else {
        setErrorInput('Adicione um operador novo');
      }
    } else if (newAssigner.length + presentAssigners.length > 5) {
      setErrorInput('O número máximo de usuários é 5.');
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
            <S.CustomSelect
              isMulti
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              placeholder={'Digite no mínimo 3 caracteres...'}
              onInputChange={setUserinput}
              inputValue={userInput}
              onChange={(e: any, action: any) => {
                // eslint-disable-next-line no-constant-condition
                if ((action.action = 'remove-value')) {
                  onRemove(action.removedValue);
                }

                setOptionsSelected(e);
              }}
              options={options}
              name="colors"
              className="react-select-container"
              classNamePrefix="react-select"
              value={optionsSelected}
              isLoading={users.isLoading}
              required
            />
            {errorInput != '' && <ErrorMessage>{errorInput}</ErrorMessage>}

            <S.ButtonGreen disabled={assignMutate.isLoading || assignMutate.isSuccess} onClick={onSubmit}>
              {assignMutate.isLoading ? (
                <ReactLoading type="cylon" color="white" height={32} width={32} />
              ) : assignMutate.isSuccess ? (
                'Ok'
              ) : (
                'Salvar'
              )}
            </S.ButtonGreen>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};

export {};
