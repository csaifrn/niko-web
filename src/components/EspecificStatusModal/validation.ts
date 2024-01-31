import * as Yup from 'yup';

export const validationShelfSchema = Yup.object().shape({
  shelf_number: Yup.string().min(3, 'A parteleira deve ter ao menos 3 caracteres.').required('Coloque o local.'),
});

export const validationDigital = Yup.object().shape({
  digital_files_count: Yup.number().min(1, 'Coloque um valor maior que zero.').required('Coloque o valor.'),
});

export const validationFisical = Yup.object().shape({
  fisical_files_count: Yup.number().min(1, 'Coloque um valor maior que zero.').required('Coloque o valor.'),
});
