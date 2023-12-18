import { string } from 'yup';

export interface PatchObservationParams {
  id: string;
}

export interface PatchResponseObservation {
  status: string;
}