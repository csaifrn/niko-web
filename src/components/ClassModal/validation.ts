import * as Yup from 'yup';

export const validationCreateCatSchema = Yup.object().shape({
  name: Yup.string().min(3, 'A categoria deve ter ao menos 3 caracteres.'),
});
