import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { Parser } from '@json2csv/plainjs';
import FileSaver from 'file-saver';
import { ErrorMessage, LabelField } from '../../../pages/Cadastro/styles';
import { ButtonGreen } from '../../AtribuirAlguemModal/style';
import { format } from 'date-fns';
import * as Yup from 'yup';

interface Props {
  close: () => void;
  refetch?: () => void;
  data: any;
  name: string;
}

interface Option {
  label: string;
  value: string;
}

interface ValidationErrors {
  title?: string;
  selectedOptions?: string;
}

export const ModalCSV = (props: Props) => {
  const [closing, setClosing] = useState(false);
  const [title, setTitle] = useState('');
  const [userInput, setUserInput] = useState('');

  const attributeNames = Object.keys(props.data[0] || {}); // Assume que há pelo menos um objeto no array de dados
  const options: Option[] = attributeNames
    .filter((attribute) => attribute === 'name' || attribute === 'created_at' || attribute === 'id')
    .map((attribute) => ({
      value: attribute,
      label: attribute === 'name' ? 'Nome' : attribute === 'created_at' ? 'Criado em' : 'Identificador',
    }));

  const [selectedOptions, setSelectedOptions] = useState<Option[]>(options);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validationSchema = Yup.object().shape({
    title: Yup.string().min(3, 'O título deve ter pelo menos 3 caracteres.').required('Preencha com um nome.'),
    selectedOptions: Yup.array().min(1, 'Selecione pelo menos uma opção.').required('Selecione pelo menos uma opção.'),
  });

  const handleExportCSV = () => {
    const selectedData = props.data.map((item: any) => {
      const selectedItem: Record<string, any> = {};

      selectedOptions.forEach((selectedOption) => {
        const { value, label } = selectedOption;

        if (value === 'created_at' && item[value]) {
          selectedItem[label] = format(new Date(item[value]), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
        } else if (value === 'name') {
          selectedItem[label] = item[value];
        }
      });

      return selectedItem;
    });

    const opts = { delimiter: ';' };
    const obj = Object(selectedData);
    const parser = new Parser(opts);
    const csv = parser.parse(obj);

    const encodedCsv = new TextEncoder().encode(csv); // Codificar como UTF-8
    const csvData = new Blob([encodedCsv], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(csvData, `${title}.csv`);
  };

  const handleSubmit = async () => {
    try {
      await validationSchema.validate({ title, selectedOptions }, { abortEarly: false });

      // Se a validação passar, você pode continuar com o processamento
      handleExportCSV();
    } catch (error) {
      // Se houver erros de validação, você pode tratar os erros aqui
      const errors: ValidationErrors = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach((err) => {
          errors[err.path as keyof ValidationErrors] = err.message;
        });
      }
      setValidationErrors(errors);
      console.error('Erro de validação:', errors);
      // Além disso, você pode exibir mensagens de erro para o usuário, se necessário
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const modal = document.getElementById('modal-scaling');
      if (closing === false && modal) {
        modal.style.transform = 'scale(1)';
      } else if (modal && closing) {
        modal.style.transform = 'scale(0)';
      }
    }, 10);

    return () => clearTimeout(timer);
  }, [closing]);

  const handleSucess = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  return (
    <>
      <S.ModalBackdrop>
        <S.ModalArea id="modal-scaling">
          <S.ModalContent>
            <S.NameClose>
              <h2>Baixar CSV</h2>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.NameClose>
            <S.FormCriar>
              <LabelField>Nome do arquivo</LabelField>

              <S.InputText
                placeholder="Nome do CSV"
                onChange={(e) => setTitle(e.currentTarget.value)}
                value={title}
                name="title"
                className="title"
              />
              {/* Exibindo mensagens de erro para o campo title */}
              {validationErrors.title && <ErrorMessage>{validationErrors.title}</ErrorMessage>}
              <LabelField>Colunas da Tabela</LabelField>
              <S.CustomSelect
                isMulti
                placeholder={'Escolha as colunas...'}
                name="colors"
                className="react-select-container"
                classNamePrefix="react-select"
                onInputChange={setUserInput}
                inputValue={userInput}
                onChange={(e: any) => {
                  setSelectedOptions(e);
                }}
                options={options}
                value={selectedOptions}
                required
              />
              {/* Exibindo mensagens de erro para o Select */}
              {validationErrors.selectedOptions && <ErrorMessage>{validationErrors.selectedOptions}</ErrorMessage>}
              <ButtonGreen onClick={(e) => handleSucess(e)}>Baixar</ButtonGreen>
            </S.FormCriar>
          </S.ModalContent>
        </S.ModalArea>
      </S.ModalBackdrop>
    </>
  );
};
