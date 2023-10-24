import * as Yup from 'yup';

export const validationObservation = Yup.object().shape({
  observation: Yup.string()
    .required('Digite a observação na caixa acima ^^')
    .min(3, 'Insira 3 caracteres ou mais, por favor.'),
});
