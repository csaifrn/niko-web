import axiosInstance from '../../../axiosInstance';
import {
  PatchResponseBatche,
  PatchBatcheParams,
  PatchResponseEditBatch,
  PatchShelfNumberParams,
  PatchShelfNumberResponse,
  PatchBatcheClassParams,
} from './patch.interface';

export const PatchBatchePriority = async ({ id, priority }: PatchBatcheParams): Promise<PatchResponseBatche> => {
  const Batche = await axiosInstance.patch<PatchResponseBatche>(`/Batches/${id}`, {
    priority,
  });

  return Batche.data;
};

export const PatchBatcheEdit = async ({
  id,
  title,
  priority,
  physical_files_count,
  digital_files_count,
  storage_location,
}: PatchBatcheParams): Promise<PatchResponseEditBatch> => {
  const Batche = await axiosInstance.patch<PatchResponseEditBatch>(`/Batches/${id}`, {
    title,
    priority,
    digital_files_count,
    physical_files_count,
    storage_location,
  });

  return Batche.data;
};

export const PatchBatcheClassEdit = async ({
  id,
  title,
  priority,
  physical_files_count,
  digital_files_count,
  storage_location,
  newIds,
  deletedIds,
}: PatchBatcheClassParams): Promise<PatchResponseEditBatch> => {
  const Batche = await axiosInstance.patch<PatchResponseEditBatch>(`/Batches/${id}`, {
    title,
    priority,
    digital_files_count,
    physical_files_count,
    storage_location,
  });

  return Batche.data;
};

export const PatchShelfNumber = async ({
  id,
  shelf_number,
}: PatchShelfNumberParams): Promise<PatchShelfNumberResponse> => {
  const Batche = await axiosInstance.patch<PatchShelfNumberResponse>(`/Batches/shelf/${id}`, {
    shelf_number,
  });

  return Batche.data;
};
