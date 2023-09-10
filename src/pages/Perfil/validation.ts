import * as Yup from 'yup';

export const validationPerfilSchema = Yup.object().shape({
  name: Yup.string().required('Seu nome completo.'),
});
