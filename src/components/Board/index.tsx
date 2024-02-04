import { ReactNode, useEffect, useState } from 'react';
import * as S from './styles';
import Lote from '../Lote';
import { BoardChanger } from '../BoardChanger';
import { useMutation } from 'react-query';
import { QueryBatche } from '../../api/services/batches/query-batches';
import toast from 'react-hot-toast';
import { ApiError } from '../../api/services/authentication/signIn/signIn.interface';
import theme from '../../global/theme';
import { AtribuirAlguemModal } from '../AtribuirAlguemModal';
import { Btn } from '../../pages/FasesEspecificsPages/Preparo/styles';
import { ModalCriarLote } from '../ModalCriarLote';
import { EspecifcModal } from '../EspecificStatusModal';
import { Link } from 'react-router-dom';
import { GetResponseBatche } from '../../api/services/batches/query-batches/get.interface';
import { CheckCircle, HandWaving } from '@phosphor-icons/react';
import { useMe } from '../../hooks/useMe';
import Loading from 'react-loading';
import * as Empty from '../EmptyPage/styles';

interface BoardProps {
  main_status: number;
  children?: ReactNode;
}

export const Board = (props: BoardProps) => {
  const { me } = useMe();

  const [batchesDispo, setBatchesDispo] = useState<GetResponseBatche[]>([]);

  const [batchesAnda, setBatchesAnda] = useState<GetResponseBatche[]>([]);
  const [batchesConc, setBatchesConc] = useState<GetResponseBatche[]>([]);
  const [titleModal, setTitleModal] = useState({ button: 'pegar lote', title: 'Deseja pegar o lote?' });
  const [batche_data, setBatche] = useState<GetResponseBatche>();
  const [atribuirModal, setAtribuirModal] = useState<boolean>(false);
  const [openCriarModal, setOpenCriarModal] = useState<boolean>(false);
  const [openEspecifModal, setOpenEspecifModal] = useState<boolean>(false);

  const operadorEstaNoLote = (obj: any, OperadorId: string) => {
    if (me != undefined) {
      return Object.values(obj).includes(OperadorId);
    }
  };

  const mutateBatchesQuery = useMutation(QueryBatche, {
    onSuccess: (data: GetResponseBatche[]) => {
      setBatchesDispo(data.filter((batche) => batche.specific_status === 0));
      setBatchesAnda(data.filter((batche) => batche.specific_status === 1));
      if (props.main_status === 4) {
        setBatchesConc(data.filter((batche) => batche.specific_status === 2));
      }
    },
    onError: (err: ApiError) => {
      toast.error(err.message);
    },
  });

  const mutateBatchesConc = useMutation(QueryBatche, {
    onSuccess: (data: GetResponseBatche[]) => {
      setBatchesConc(data.filter((batche) => batche.specific_status === 0));
    },
    onError: (err: ApiError) => {},
  });
  useEffect(() => {
    refecth();
  }, []);

  const refecth = () => {
    mutateBatchesQuery.mutate({
      status: props.main_status,
    });
    if (props.main_status != 4) {
      mutateBatchesConc.mutate({
        status: props.main_status + 1,
      });
    }
  };
  if (mutateBatchesConc.isLoading || mutateBatchesQuery.isLoading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '80vh' }}>
        <Loading type="cylon" />
      </div>
    );
  } else {
    return (
      <>
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
                            value={`${batche.title}`}
                            priority={batche.priority}
                            categories={batche.class_projects}
                            pendencia={batche.pending_batch_observations}
                            assigners={batche.assigned_users}

                            //envolvidos={batche.envolvidos}
                          >
                            <S.BlackButton
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenEspecifModal(!openEspecifModal);
                                setTitleModal({ button: 'Pegar lote', title: `Deseja pegar o ${batche.title}?` });
                                setBatche(batche);
                              }}
                            >
                              <HandWaving size={20} weight="fill" alt="icone de mão acenando" /> Pegar lote
                            </S.BlackButton>

                            {/* {user?.role === 'MANAGER' && (
                            <S.BlackButton
                              onClick={(e) => {
                                e.preventDefault();
                                setAtribuirModal(!atribuirModal);
                                setBatche(batche);
                              }}
                            >
                              <ArrowCircleLeft weight="fill" size={24} /> Atribuir lote
                            </S.BlackButton>
                          )} */}
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
                            value={`${batche.title}`}
                            priority={batche.priority}
                            categories={batche.class_projects}
                            pendencia={batche.pending_batch_observations}
                            assigners={batche.assignedUsers}
                            //envolvidos={batche.envolvidos}
                          >
                            {me != undefined &&
                              batche.assignedUsers != undefined &&
                              operadorEstaNoLote(
                                batche.assignedUsers.map((user) => user.id),
                                me?.id,
                              ) === true && (
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
                                  <CheckCircle
                                    size={24}
                                    weight="fill"
                                    alt="icone circular com ícone de correto ao centro"
                                  />
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
                  {props.main_status == 4 ? (
                    <h2 style={{ color: theme.colors.white }}>Arquivados</h2>
                  ) : (
                    <h2 style={{ color: theme.colors.white }}>Concluídos</h2>
                  )}
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
                            value={`${batche.title}`}
                            priority={batche.priority}
                            categories={batche.class_projects}
                            pendencia={batche.pending_batch_observations}
                            assigners={batche.assigned_users}
                          >
                            {batche.main_status === 1 && (
                              <img src="/icon-small/Catalogação.svg" alt="" style={{ width: '32px', height: '32px' }} />
                            )}
                            {batche.main_status === 2 && (
                              <img
                                src="/icon-small/Digitalização.svg"
                                alt=""
                                style={{ width: '32px', height: '32px' }}
                              />
                            )}
                            {batche.main_status === 3 && (
                              <img src="/icon-small/Upload.svg" alt="" style={{ width: '32px', height: '32px' }} />
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
        {openCriarModal && (
          <ModalCriarLote
            close={() => setOpenCriarModal(!openCriarModal)}
            refetch={() =>
              mutateBatchesQuery.mutate({
                status: props.main_status,
              })
            }
          />
        )}
        {openEspecifModal && batche_data && (
          <EspecifcModal
            close={() => setOpenEspecifModal(!openEspecifModal)}
            batche={batche_data}
            title={titleModal.title}
            button={titleModal.button}
            refetch={refecth}
          />
        )}
      </>
    );
  }
};

export default Board;
