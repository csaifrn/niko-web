import * as Yup from 'yup';

export const validationLoginSchema = Yup.object().shape({
  password: Yup.string()
    .required('Senha necessária.')
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .matches(/[A-Z]/, 'A senha deve conter pelo menos uma letra maiúscula')
    .matches(/[!@#$%^&*]/, 'A senha deve conter pelo menos um caractere especial'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'A senhas precisam ser iguais :/')
    .required('Confirmação necessária.'),
});
