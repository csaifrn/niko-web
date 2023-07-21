import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
  decision: Yup.boolean().required(
    'Marque X, que nega o pedido do operador ou V, o qual irá aceitar o pedido do operador.',
  ),
  comment: Yup.string(),
});