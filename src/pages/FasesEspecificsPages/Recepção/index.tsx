import * as S from './styles';
import { useState } from 'react';
import MenuCoord from '../../../components/MenuCoord';
import Menu from '../../../components/Menu';
import { useParams } from 'react-router-dom';
import { ShipmentModal } from '../../../components/ShipmentModal';
import { BoardChanger } from '../../../components/BoardChanger';
import theme from '../../../global/theme';
import { SharedState } from '../../../context/SharedContext';
import { UserRole } from '../../../utils/userRole.enum';
import { useMutation, useQuery } from 'react-query';
import { ListShipments } from '../../../api/services/shipments/list-shipments';
import { ButtonDelete, ButtonEdit, DivButtons } from '../../../components/Observation/ObservationBox/styles';
import { PencilSimple, Trash } from 'phosphor-react';
import { Tooltip } from 'react-tooltip';
import { Shipment } from '../../../api/services/shipments/inteface';
import { AtribuirButton } from '../../../components/EditProjetoModal/styles';
import { DeletarModal } from '../../../components/DeletarModal';
import { DeleteShipment } from '../../../api/services/shipments/delete-shipment';
import toast from 'react-hot-toast';

const Recebidos = () => {
  const { id } = useParams();
  const { user } = SharedState();
  const [openCriarModal, setOpenCriarModal] = useState(false);
  const [deleted, setDeleted] = useState(false);

  const [shipment, setShipment] = useState<Shipment | null>(null);
  const { data, refetch } = useQuery('Shipments', ListShipments);

  const mutateDelete = useMutation(DeleteShipment, {
    onSuccess: () => {
      toast.success('Remessa deletada!');
      setShipment(null);
      refetch();
    },
    onError: () => {
      setShipment(null);
    },
  });

  const handleDelete = () => {
    if (shipment) {
      mutateDelete.mutate({
        id: shipment.id,
      });
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Menu area={`/Fases/Board/Recebidos`} id_projeto={id}></Menu>
      <MenuCoord />

      <S.RecepcaoPage>
        <BoardChanger />

        <AtribuirButton
          onClick={() => {
            setOpenCriarModal(!openCriarModal);
          }}
        >
          <p>Adicionar Remessa</p>
        </AtribuirButton>

        <S.RemessasMain>
          <S.NumeroDeRemessasDiv>
            <S.RemessasTitle> Remessas recebidas</S.RemessasTitle>
            <S.NumDeRemessasGreen>{data?.length}</S.NumDeRemessasGreen>
          </S.NumeroDeRemessasDiv>

          <S.RemessasCards>
            {data?.map((Shipment) => {
              return (
                <S.RemessaCardCinzaClaro key={Shipment.id}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5em',
                    }}
                  >
                    <h2>{`${Shipment.title}`}</h2>

                    <h2 style={{ color: theme.colors['gray/50'] }}>
                      <strong style={{ color: theme.colors['green/500'] }}> {`${Shipment.count_boxes}`}</strong> caixas
                    </h2>
                  </div>

                  {Shipment.description && (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1em',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: theme.colors['gray/700'],
                          padding: '1.5em',
                          borderRadius: '3px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '1em',
                        }}
                      >
                        <h3>Observações</h3>
                        <p
                          style={{
                            color: theme.colors['gray/50'],
                          }}
                        >
                          {Shipment.description}
                        </p>
                      </div>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {Shipment.received_at != undefined && (
                      <p
                        style={{
                          color: theme.colors['gray/50'],
                        }}
                      >
                        {new Date(Shipment.received_at).toLocaleString('pt-br', {
                          timeZone: 'America/Sao_paulo',
                          dateStyle: 'long',
                        })}
                      </p>
                    )}
                    <div>
                      <DivButtons>
                        {user?.role === UserRole.MANAGER ||
                          (Shipment.user_id === user?.sub && (
                            <ButtonEdit
                              onClick={() => {
                                setShipment(Shipment);
                                setOpenCriarModal(!openCriarModal);
                              }}
                              className="EditarTooltipR"
                            >
                              <PencilSimple size={18} weight="fill" color={theme.colors['white']} />
                              <Tooltip
                                children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Editar Remessa</p>}
                                anchorSelect=".EditarTooltipR"
                                place="bottom"
                              />
                            </ButtonEdit>
                          ))}

                        {user?.role === UserRole.MANAGER && (
                          <ButtonDelete
                            onClick={() => {
                              setShipment(Shipment);
                              setDeleted(!deleted);
                            }}
                            className="ExcluirTooltipR"
                          >
                            <Trash size={18} color="#f5f5f5" weight="fill" />
                            <Tooltip
                              children={<p style={{ fontSize: '12px', fontFamily: 'Rubik' }}>Excluir Remessa</p>}
                              anchorSelect=".ExcluirTooltipR"
                              place="bottom"
                            />
                          </ButtonDelete>
                        )}
                      </DivButtons>
                    </div>
                  </div>
                </S.RemessaCardCinzaClaro>
              );
            })}
          </S.RemessasCards>
        </S.RemessasMain>
      </S.RecepcaoPage>

      {openCriarModal && (
        <ShipmentModal
          shipment={shipment}
          refech={refetch}
          setShipment={setShipment}
          close={() => {
            setOpenCriarModal(!openCriarModal);
            setShipment(null);
          }}
        />
      )}
      {deleted && (
        <DeletarModal
          close={() => {
            setShipment(null);
            setDeleted(false);
          }}
          title="Deseja deletar essa remessa?"
          deleteFunction={handleDelete}
        />
      )}
    </div>
  );
};

export default Recebidos;
