import * as Yup from 'yup';

export const validationCreateShipment = Yup.object().shape({
  description: Yup.string(),
  title: Yup.string().required('Insira um titulo.'),
  received_at: Yup.string()
    .required('Insira uma data!')
    .matches(/^(\d{2})\/(\d{2})\/(\d{4})$/, 'Insira uma data válida!'),
  count_boxes: Yup.number().required('Insirar um valor').min(1, 'O valor precisa ser maior que zero.'),
});

export interface ErrorsForm {
  description?: string;
  title?: string;
  received_at?: string;
  count_boxes?: string;
}

interface Params {
  description: string;
  title: string;
  received_at: string;
  count_boxes: number;

  setValidationFormError: (e: ErrorsForm) => void;
}

export const validateCreateShipment = async ({
  description,
  title,
  received_at,
  count_boxes,
  setValidationFormError,
}: Params): Promise<boolean> => {
  try {
    await validationCreateShipment.validate(
      {
        description,
        title,
        received_at,
        count_boxes,
      },
      {
        abortEarly: false,
      },
    );
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const validationErrors = error.inner.reduce<ErrorsForm>((errors, err) => {
        errors[err.path as keyof ErrorsForm] = err.message;
        return errors;
      }, {});
      setValidationFormError(validationErrors);
    }
    return false;
  }
  setValidationFormError({});
  return true;
};
