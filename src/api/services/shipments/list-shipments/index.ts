import axiosInstance from '../../../axiosInstance';
import { Shipment } from '../inteface';

export const ListShipments = async (): Promise<Shipment[]> => {
  const Shipments = await axiosInstance.get<Shipment[]>('/shipments');

  return Shipments.data;
};
