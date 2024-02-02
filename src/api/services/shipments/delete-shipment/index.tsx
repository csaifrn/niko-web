import axiosInstance from '../../../axiosInstance';
import { Shipment } from '../inteface';

interface Params {
  id: string;
}

export const DeleteShipment = async ({ id }: Params): Promise<Shipment> => {
  const shipment = await axiosInstance.delete<Shipment>(`/Shipments/${id}`);

  return shipment.data;
};
