import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
  settlement_project: Yup.string().required('Preencha com um nome.'),
});
