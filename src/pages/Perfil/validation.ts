import * as Yup from 'yup';

export const validationPerfilSchema = Yup.object().shape({
  name: Yup.string().min(3, "Nome precisa ter no minimo três caracters").required('Seu nome completo.'),
  email: Yup.string().email().required("Seu Email")
});
