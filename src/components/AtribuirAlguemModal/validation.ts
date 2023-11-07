import * as Yup from 'yup';

export const validationSearch = Yup.object().shape({
  name: Yup.string().required('Digite o nome da categoria.').min(3, 'Categoria precisa de no mínimo 3 caracteres'),
});
