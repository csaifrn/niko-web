export interface ErrorsForm {
  name?: string;
}

export interface ModalCategoriaProps {
  id?: string;
  nomeCat?: string;
  title: string;
  close: () => void;
}
