import * as Yup from 'yup';

export const validationObservationSchema = Yup.object().shape({
  observation: Yup.string().required('Insira seu email.').min(3, 'Insira 3 caracteres ou mais, por favor.'),
});
