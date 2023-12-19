import axiosInstance from "../../../../axiosInstance";
import { PatchObservationParams, PatchResponseObservation } from "./pend.interface";

export const PatchPendencia = async ({id}: PatchObservationParams): Promise<PatchResponseObservation> => {
  const Pendencia = await axiosInstance.patch<PatchResponseObservation>(`/batches/observations/${id}/pending`);

  return Pendencia.data;
};