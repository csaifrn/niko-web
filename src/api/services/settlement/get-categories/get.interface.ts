export interface Category {
  id: string;
  name: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
  batch_count: '4';
  preparation: Phase;
  cataloguing: Phase;
  digitization_scanning: Phase;
  upload: Phase;
  archiving: Phase;
}

interface Phase {
  batch_count: string;
  available: string;
  in_progress: string;
  done: string;
}
