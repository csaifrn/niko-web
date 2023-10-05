export interface ErrorsForm {
  observation?: string;
}

export interface ObservationResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
