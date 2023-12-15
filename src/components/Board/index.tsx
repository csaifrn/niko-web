import { ReactNode, createContext, useEffect, useState } from 'react';
import * as S from './styles';
import Lote from '../Lote';
import Users from '../../data/UserData';
import { ArrowCircleLeft, CheckCircle, HandWaving } from '@phosphor-icons/react';
import { AtribuirButton } from '../../pages/Coordenador/Atividade/atividade-home/styles';
import { BoardChanger } from '../BoardChanger';
import { GetResponseBatche } from '../../api/services/batches/get-batche/get.interface';
import { useMutation } from 'react-query';
import { QueryBatche } from '../../api/services/batches/query-batches';
import toast from 'react-hot-toast';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import theme from '../../global/theme';

import * as Empty from '../EmptyPage/styles';
import { AtribuirAlguemModal } from '../AtribuirAlguemModal';
import { Btn } from '../../pages/Etapas/Preparo/styles';
import { ModalCriarLote } from '../ModalCriarLote';
import { EspecifcModal } from '../EspecificStatusModal';
import { Link } from 'react-router-dom';

interface BoardProps {
  main_status: number;
  children?: ReactNode;
}

interface ContextProps {
  batchesDispo: GetResponseBatche[];
  setBatchesDispo: React.Dispatch<React.SetStateAction<GetResponseBatche[]>>;
  batchesAnda: GetResponseBatche[];
  setBatchesAnda: React.Dispatch<React.SetStateAction<GetResponseBatche[]>>;
  batchesConc: GetResponseBatche[];
  setBatchesConc: React.Dispatch<React.SetStateAction<GetResponseBatche[]>>;
}

export const KabanContext = createContext<ContextProps | null>(null);

export const Board = (props: BoardProps) => {
  const user = { email: Users[1].email, role: 'Operador' };

  const [batchesDispo, setBatchesDispo] = useState<GetResponseBatche[]>([]);
  const [batchesAnda, setBatchesAnda] = useState<GetResponseBatche[]>([]);
  const [batchesConc, setBatchesConc] = useState<GetResponseBatche[]>([]);
  const [titleModal, setTitleModal] = useState({ button: 'Pegar lote', title: 'Deseja pegar o lote' });
  const [batche_data, setBatche] = useState<GetResponseBatche>();
  const [atribuirModal, setAtribuirModal] = useState<boolean>(false);
  const [openCriarModal, setOpenCriarModal] = useState<boolean>(false);
  const [openEspecifModal, setOpenEspecifModal] = useState<boolean>(false);

  const mutateBatchesQuery = useMutation(QueryBatche, {
    onSuccess: (data: GetResponseBatche[]) => {
      setBatchesDispo(data.filter((batche) => batche.specific_status === 0));
      setBatchesAnda(data.filter((batche) => batche.specific_status === 1));
      setBatchesConc(data.filter((batche) => batche.specific_status === 2));
    },
    onError: (err: ApiError) => {
      toast.error(err.message);
    },
  });

  useEffect(() => {
    mutateBatchesQuery.mutate({
      status: props.main_status,
    });
  }, []);

  return (
    <KabanContext.Provider
      value={{ batchesAnda, batchesConc, batchesDispo, setBatchesAnda, setBatchesConc, setBatchesDispo }}
    >
      {/* Menu das fases */}
      <BoardChanger />

      {/* Botão de Criar lote(só aparece no preparo) */}
      {props.main_status === 0 && (
        <S.divChildren style={{ padding: '2em' }}>
          <Btn
            onClick={() => {
              setOpenCriarModal(!openCriarModal);
            }}
          >
            <p>Criar Lote</p>
          </Btn>
        </S.divChildren>
      )}

      {batchesDispo.length <= 0 && batchesAnda.length <= 0 && batchesConc.length <= 0 ? (
        <S.WrapperEmpty>
          <Empty.EmptyImg src="/Empty.svg" alt="Página vazia" style={{ height: '100%' }} />
          <Empty.Title>Está página parece vazia! Tente vasculhar outro lugar.</Empty.Title>
          <Empty.Text>{'Página vazia.'}</Empty.Text>
        </S.WrapperEmpty>
      ) : (
        <S.FaseKanbanPage>
          {batchesDispo.length >= 0 && (
            <S.kanban>
              <S.divTitulo>
                <h2 style={{ color: theme.colors.white }}>Disponíveis</h2>
                <h2
                  style={{
                    color: theme.colors['green/500'],
                  }}
                >
                  {batchesDispo.length}
                </h2>
              </S.divTitulo>
              <S.kanbanSectionContent>
                {batchesDispo.length === 0 && (
                  <S.WrapperEmptyKanban>
                    <Empty.Title>Está lista está vazia</Empty.Title>
                  </S.WrapperEmptyKanban>
                )}

                {/* Disponíveis */}
                {batchesDispo.map(
                  (batche) =>
                    batche && (
                      <Link to={`/Lote/${batche.id}`} key={batche.id} style={{ textDecoration: 'none' }}>
                        <Lote
                          task={batche}
                          value={`${batche.title}`}
                          observations={batche.observations}
                          prioridade={batche.priority}
                          categoria={batche.category}
                          pendencia={batche.pending_batch_observations}
                          //envolvidos={batche.envolvidos}
                        >
                          {user.role === 'Operador' && (
                            <S.BlackButton
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenEspecifModal(!openEspecifModal);
                                setTitleModal({ button: 'Pegar lote', title: `Deseja pegar o ${batche.title}?` });
                                setBatche(batche);
                              }}
                            >
                              <HandWaving size={20} weight="fill" /> Pegar lote
                            </S.BlackButton>
                          )}
                          {user.role === 'Coordenador' && (
                            <S.BlackButton
                              onClick={(e) => {
                                e.preventDefault();
                                setAtribuirModal(!atribuirModal);
                                setBatche(batche);
                              }}
                            >
                              <ArrowCircleLeft weight="fill" size={24} /> Atribuir lote
                            </S.BlackButton>
                          )}
                        </Lote>
                      </Link>
                    ),
                )}
              </S.kanbanSectionContent>
            </S.kanban>
          )}
          {batchesAnda.length >= 0 && (
            <S.kanban>
              <S.divTitulo>
                <h2 style={{ color: theme.colors.white }}>Em andamento</h2>
                <h2
                  style={{
                    color: theme.colors['yellow/300'],
                  }}
                >
                  {batchesAnda.length}
                </h2>
              </S.divTitulo>
              <S.kanbanSectionContent>
                {batchesAnda.length === 0 && (
                  <S.WrapperEmptyKanban>
                    <Empty.Title>Está lista está vazia</Empty.Title>
                  </S.WrapperEmptyKanban>
                )}
                {batchesAnda?.map(
                  (batche) =>
                    batche && (
                      <Link to={`/Lote/${batche.id}`} key={batche.id} style={{ textDecoration: 'none' }}>
                        <Lote
                          task={batche}
                          value={`${batche.title}`}
                          pendencia={batche.pending_batch_observations}
                          prioridade={batche.priority}
                          categoria={batche.category}
                          //envolvidos={batche.envolvidos}
                        >
                          {user.role === 'Operador' && (
                            <S.ConcluirButton
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenEspecifModal(!openEspecifModal);
                                setBatche(batche);
                                setTitleModal({
                                  button: 'Marcar como concluído',
                                  title: `Deseja marcar o ${batche.title} como concluído?`,
                                });
                              }}
                            >
                              <CheckCircle size={24} weight="fill" />
                              <p>Marcar como concluído</p>
                            </S.ConcluirButton>
                          )}
                        </Lote>
                      </Link>
                    ),
                )}
              </S.kanbanSectionContent>
            </S.kanban>
          )}
          {batchesConc.length >= 0 && (
            <S.kanban>
              <S.divTitulo>
                <h2 style={{ color: theme.colors.white }}>Concluídos</h2>
                <h2
                  style={{
                    color: theme.colors['green/500'],
                  }}
                >
                  {batchesConc.length}
                </h2>
              </S.divTitulo>
              <S.kanbanSectionContent>
                {batchesConc.length === 0 && (
                  <S.WrapperEmptyKanban>
                    <Empty.Title>Está lista está vazia</Empty.Title>
                  </S.WrapperEmptyKanban>
                )}
                {batchesConc.map(
                  (batche) =>
                    batche && (
                      <Link to={`/Lote/${batche.id}`} key={batche.id} style={{ textDecoration: 'none' }}>
                        <Lote
                          task={batche}
                          value={`${batche.title}`}
                          pendencia={batche.pending_batch_observations}
                          prioridade={batche.priority}
                          categoria={batche.category}
                          //envolvidos={batche.envolvidos}
                        >
                          {batche.main_status === 1 && (
                            <img src="/icon-small/Catalogação.svg" style={{ width: '32px', height: '32px' }} />
                          )}
                          {batche.main_status === 2 && (
                            <img src="/icon-small/Digitalização.svg" style={{ width: '32px', height: '32px' }} />
                          )}
                          {batche.main_status === 3 && (
                            <img src="/icon-small/Upload.svg" style={{ width: '32px', height: '32px' }} />
                            
                          )}
                        </Lote>
                      </Link>
                    ),
                )}
              </S.kanbanSectionContent>
            </S.kanban>
          )}
        </S.FaseKanbanPage>
      )}
      {atribuirModal && (
        <AtribuirAlguemModal close={() => setAtribuirModal(false)} assigners={batche_data?.assigned_users} />
      )}
      {openCriarModal && <ModalCriarLote close={() => setOpenCriarModal(!openCriarModal)} />}
      {openEspecifModal && batche_data && (
        <EspecifcModal
          close={() => setOpenEspecifModal(!openEspecifModal)}
          batche={batche_data}
          title={titleModal.title}
          button={titleModal.button}
        />
      )}
    </KabanContext.Provider>
  );
};

export default Board;
