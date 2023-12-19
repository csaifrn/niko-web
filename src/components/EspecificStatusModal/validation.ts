import * as Yup from 'yup';

export const validationShelfSchema = Yup.object().shape({
  shelf_number: Yup.string().min(3, 'A parteleira deve ter ao menos 3 caracteres.').required('Coloque o local.'),
});
