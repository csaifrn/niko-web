import { Photo } from '../../users/me/me.interface';

export interface GetBatcheParams {
  id: string;
}

export interface GetResponseBatche {
  id: string;
  title: string;
  main_status: number;
  specific_status: number;
  digital_files_count: number;
  physical_files_count: number;
  priority: boolean;
  shelf_number: any;
  storage_location: string;
  created_at: string;
  updated_at: string;
  created_by: CreatedBy;
  category: Class;
  assigned_users: AssignedUser[];
  observations: Observation[];
  pending_batch_observations: {};
}

export interface Batche {
  id: string;
  title: string;
  main_status: number;
  specific_status: number;
  digital_files_count: number;
  physical_files_count: number;
  priority: boolean;
  shelf_number: any;
  created_at: string;
  updated_at: string;
  created_by: CreatedBy;
  storage_location: string;
  class_projects: Class[];
  assigned_users: BatcheAssignedUser[];
  tags: any[];
  observations: Observation[];
}

export interface CreatedBy {
  user_id: string;
  name: string;
}

export interface Class {
  id: string;
  name: string;
  priority?: boolean;
}

export interface CreatedBy {
  user_id: string;
  name: string;
}

export interface AssignedUser {
  id: string;
  name: string;
  photo: string | null;
}

export interface BatcheAssignedUser {
  id: string;
  name: string;
  photo: string | undefined;
}

export interface Observation {
  id: string;
  observation: string;
  is_pending: boolean;
  created_by: CreatedBy2;
  created_at: string;
}

export interface CreatedBy2 {
  user_id: string;
  name: string;
}
