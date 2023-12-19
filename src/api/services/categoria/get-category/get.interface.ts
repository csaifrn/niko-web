export interface SeachCategoriaParams {
  name: string;
}

export interface SeachCategoriaResponseBatche {
  searchedText: string;
  categories: Categoria[];
}

export interface Categoria {
  id: string;
  name: string;
}
