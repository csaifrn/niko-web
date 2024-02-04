import axiosInstance from '../../../axiosInstance';
import { Shipment } from '../inteface';

interface Params {
  id: string;
  description: string | null;
  title: string;
  received_at: string;
  count_boxes: number;
}

export const EditShipment = async ({ id, count_boxes, description, received_at, title }: Params): Promise<Shipment> => {
  const shipment = await axiosInstance.patch<Shipment>(`/Shipments/${id}`, {
    title,
    count_boxes,
    received_at,
    description,
  });

  return shipment.data;
};
