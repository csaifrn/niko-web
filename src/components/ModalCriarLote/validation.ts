import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Projeto de assentamento deve ter ao menos 3 caracteres.')
    .required('Preencha com um nome.'),
});

export const validationSearch = Yup.object().shape({
  name: Yup.string().required('Digite o nome da categoria.').min(3, 'Categoria precisa de no mínimo 3 caracteres'),
});
