import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
  settlement_project: Yup.string()
    .min(3, 'Projeto de assentamento deve ter ao menos 3 caracteres.')
    .required('Preencha com um nome.'),
});
