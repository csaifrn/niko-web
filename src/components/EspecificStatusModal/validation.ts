import * as Yup from 'yup';

export const validationShelfSchema = Yup.object().shape({
  storage_location: Yup.string().min(3, 'O número da estante deve ter ao menos 3 caracteres.').required('Coloque o local.'),
});

export const validationDigital = Yup.object().shape({
  digital_files_count: Yup.number().min(1, 'Coloque um valor maior que zero.').required('Coloque o valor.'),
});
