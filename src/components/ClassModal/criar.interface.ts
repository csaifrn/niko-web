export interface ErrorsForm {
  name?: string;
}

export interface ModalCategoriaProps {
  id?: string;
  nomeCat?: string;
  priority?: boolean;
  title: string;
  close: () => void;
  refetch?: () => void
}
