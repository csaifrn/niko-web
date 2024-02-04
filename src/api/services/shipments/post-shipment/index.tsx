import axiosInstance from '../../../axiosInstance';
import { Shipment } from '../inteface';

interface Params {
  description: string | null;
  title: string;
  received_at: string;
  count_boxes: number;
}

export const CreateShipment = async ({ count_boxes, description, received_at, title }: Params): Promise<Shipment> => {
  const shipment = await axiosInstance.post<Shipment>('/Shipments', {
    title,
    count_boxes,
    received_at,
    description,
  });

  return shipment.data;
};
