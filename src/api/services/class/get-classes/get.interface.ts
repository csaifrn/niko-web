export interface Category {
  id: string;
  name: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  batch_count: string;
  preparation_batch_count: string;
  preparation_available: string;
  preparation_in_progress: string;
  preparation_done: string;
  cataloguing_batch_count: string;
  cataloguing_available: string;
  cataloguing_in_progress: string;
  cataloguing_done: string;
  digitization_scanning_batch_count: string;
  digitization_scanning_available: string;
  digitization_scanning_in_progress: string;
  digitization_scanning_done: string;
  upload_batch_count: string;
  upload_available: string;
  upload_in_progress: string;
  upload_done: string;
  archiving_batch_count: string;
  archiving_available: string;
  archiving_in_progress: string;
  archiving_done: string;
}
