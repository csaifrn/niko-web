import { ReactNode, useEffect, useState } from 'react';
import * as S from './styles';
import Lote from '../Lote';
import Users from '../../data/UserData';
import { AtribuirButton } from '../../pages/Coordenador/Atividade/atividade-home/styles';
import { ArrowCircleLeft, UsersThree } from '@phosphor-icons/react';
import { BoardChanger } from '../BoardChanger';
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
import { GetResponseBatche } from '../../api/services/batches/query-batches/get.interface';

interface BoardProps {
  main_status: number;
  children?: ReactNode;
}

export const Board = (props: BoardProps) => {
  const user = { email: Users[1].email, role: 'Operador' };

  const [batchesDispo, setBatchesDispo] = useState<GetResponseBatche[]>([]);
  const [batchesAnda, setBatchesAnda] = useState<GetResponseBatche[]>([]);
  const [batchesConc, setBatchesConc] = useState<GetResponseBatche[]>([]);
  const [titleModal, setTitleModal] = useState({ button: 'pegar lote', title: 'Deseja pegar o lote?' });
  const [batche_data, setBatche] = useState<GetResponseBatche>();
  const [atribuirModal, setAtribuirModal] = useState<boolean>(false);
  const [openCriarModal, setOpenCriarModal] = useState<boolean>(false);
  const [openEspecifModal, setOpenEspecifModal] = useState<boolean>(false);

  const mutateBatchesQuery = useMutation(QueryBatche, {
    onSuccess: (data: GetResponseBatche[]) => {
      setBatchesDispo(data.filter((batche) => batche.specific_status === 0));
      setBatchesAnda(data.filter((batche) => batche.specific_status === 1));
    },
    onError: (err: ApiError) => {
      toast.error(err.message);
    },
  });

  const mutateBatchesConc = useMutation(QueryBatche, {
    onSuccess: (data: GetResponseBatche[]) => {
      setBatchesConc(data.filter((batche) => batche.specific_status === 0));
    },
    onError: (err: ApiError) => {
      toast.error(err.message);
    },
  });
  useEffect(() => {
    refecth();
  }, []);

  const refecth = () => {
    mutateBatchesQuery.mutate({
      status: props.main_status,
    });
    mutateBatchesConc.mutate({
      status: props.main_status + 1,
    });
  };
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
                {batchesDispo.map(
                  (batche) =>
                    batche && (
                      <a href={`/Lote/${batche.id}`} key={batche.id} style={{ textDecoration: 'none' }}>
                        <Lote
                          task={batche}
                          value={`${batche.title}`}
                          pendencia={batche.observations}
                          prioridade={batche.priority}
                          categoria={batche.settlement_project_categories}
                          //envolvidos={batche.envolvidos}
                        >
                          {user.role === 'Operador' && props.main_status != 4 && (
                            <AtribuirButton
                              onClick={(e) => {
                                e.preventDefault();
                                setOpenEspecifModal(!openEspecifModal);
                                setTitleModal({ button: 'Pegar lote', title: `Deseja pegar o ${batche.title}?` });
                                setBatche(batche);
                              }}
                              style={{ color: 'black' }}
                            >
                              <img src="/PegarLote_icon.svg" alt="icone de mão acenando" /> Pegar lote
                            </AtribuirButton>
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
                      </a>
                    ),
                )}
              </S.kanbanSectionContent>
            </S.kanban>
          )}
          {batchesAnda.length >= 0 && props.main_status != 4 && (
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
                      <a href={`/Lote/${batche.id}`} key={batche.id} style={{ textDecoration: 'none' }}>
                        <Lote
                          task={batche}
                          value={`${batche.title}`}
                          pendencia={batche.observations}
                          prioridade={batche.priority}
                          categoria={batche.settlement_project_categories}
                          //envolvidos={batche.envolvidos}
                        >
                          {user.role === 'Operador' && (
                            <S.BlackButton
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
                              <img src="/finished-icon.svg" alt="icone de concluído " />
                              <p>Marcar como concluído</p>
                            </S.BlackButton>
                          )}
                        </Lote>
                      </a>
                    ),
                )}
              </S.kanbanSectionContent>
            </S.kanban>
          )}
          {batchesConc.length >= 0 && props.main_status != 4 && (
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
                      <a href={`/Lote/${batche.id}`} key={batche.id} style={{ textDecoration: 'none' }}>
                        <Lote
                          task={batche}
                          value={`${batche.title}`}
                          pendencia={batche.observations}
                          prioridade={batche.priority}
                          categoria={batche.settlement_project_categories}
                          //envolvidos={batche.envolvidos}
                        ></Lote>
                      </a>
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
};

export default Board;
