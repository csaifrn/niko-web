import * as Yup from 'yup';

export const validationSearch = Yup.object().shape({
  name: Yup.string().required('Digite o nome da categoria.').min(3, 'Categoria precisa de no mínimo 3 caracteres'),
});

export const validationPatch = Yup.object().shape({
  title: Yup.string().required('Digite o nome da categoria.').min(3, 'Categoria precisa de no mínimo 3 caracteres'),
  digital_files_count: Yup.number(),
  physical_files_count: Yup.number(),
});
