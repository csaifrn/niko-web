import { ArrowCircleLeft, ArrowCircleRight, CheckCircle, Warning, XCircle } from '@phosphor-icons/react';
import * as S from './styles';
import theme from '../../global/theme';
import { useEffect, useRef, useState } from 'react';
import { validationLoginSchema } from './validation';
import * as Yup from 'yup';
import { ErrorsForm } from './modalresolver.interface';
//import { Pend } from '../PendenciasCoord';

interface ModalPendencia {
  close: () => void;
  pendencia: any;
}

export const ModalResolverPendencia = (props: ModalPendencia) => {
  const [closing, setClosing] = useState(false);
  const [selected, setSelected] = useState('ok');
  const commentInputRef = useRef<HTMLInputElement>(null);
  const decisionInputRef = useRef<HTMLInputElement>(null);
  const [validationFormError, setValidationFormError] = useState<ErrorsForm>({ comment: '', decision: '' });

  useEffect(() => {
    // Ao renderizar o modal, aplicar um escalonamento gradual para exibi-lo
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

  const validateForm = async (): Promise<boolean> => {
    try {
      await validationLoginSchema.validate(
        {
          decision: decisionInputRef.current?.value,
          comment: commentInputRef.current?.value,
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

  function selectedA(s: string) {
    setSelected(s);
  }

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      props.close();
    }, 300);
  };

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = await validateForm();

    if (isValid) {
      handleClose();
    }
  };

  return (
    <S.ModalBackdrop>
      <S.Wrapper id="modal-scaling">
        <S.ContainerDataDependencias onSubmit={handleSave}>
          <S.ContainerData>
            <S.ContainerNumber>
              <S.QtdLotes>Resolver Pêndencia</S.QtdLotes>
              <S.Exit type="button" onClick={handleClose}>
                <img src="/close.svg" alt="" height={18} width={18} />
              </S.Exit>
            </S.ContainerNumber>
            <S.DataAcao>
              {props.pendencia.fase_final && props.pendencia.fase_final.length > 0 ? (
                <S.DataAcao>
                  <S.ContainerImg src={`/icon-page/${props.pendencia.fase_atual}_icon.png`} />
                  {props.pendencia.voltar ? (
                    <ArrowCircleLeft size={32} weight="fill" color={theme.colors['red/500']} />
                  ) : (
                    <ArrowCircleRight size={32} weight="fill" color={theme.colors['green/400']} />
                  )}
                  <S.ContainerImg src={`/icon-page/${props.pendencia.fase_final}_icon.png`} />
                </S.DataAcao>
              ) : (
                <S.Fase>
                  <S.ContainerImg src={`/icon-page/${props.pendencia.fase_atual}_icon.png`} />
                </S.Fase>
              )}
              {props.pendencia.fase_final && props.pendencia.fase_final.length > 0 && (
                <S.DataOkX>
                  <S.LabelRadio>
                    <S.InputRadio
                      ref={decisionInputRef}
                      type="radio"
                      name="decision"
                      value={'true'}
                      checked={selected === 'ok'}
                    />
                    <CheckCircle
                      size={32}
                      weight="fill"
                      color={selected === 'ok' ? theme.colors['green/400'] : theme.colors['gray/700']}
                      onClick={() => selectedA('ok')}
                      style={{ transition: 'all 0.2s' }}
                    />
                  </S.LabelRadio>
                  <S.LabelRadio>
                    <S.InputRadio
                      ref={decisionInputRef}
                      type="radio"
                      name="decision"
                      value={'false'}
                      checked={selected === 'x'}
                    />
                    <XCircle
                      size={32}
                      weight="fill"
                      color={selected === 'x' ? theme.colors['red/500'] : theme.colors['gray/700']}
                      onClick={() => selectedA('x')}
                      style={{ transition: 'all 0.2s' }}
                    />
                  </S.LabelRadio>
                </S.DataOkX>
              )}
            </S.DataAcao>
            <S.TextComment>
              <S.PendIconText>
                <Warning size={24} color={theme.colors['yellow/300']} weight="fill" />
                <S.DataFaseTxt>{props.pendencia.comment}</S.DataFaseTxt>
              </S.PendIconText>
            </S.TextComment>
            <S.ErrorMessage>{validationFormError.comment}</S.ErrorMessage>
            <S.TextAlerta placeholder="comment" id="comment" name="comment" maxLength={100} />
            <S.ErrorMessage>{validationFormError.decision}</S.ErrorMessage>
            <S.YelloButton type="submit">Resolver Pendencia</S.YelloButton>
          </S.ContainerData>
        </S.ContainerDataDependencias>
      </S.Wrapper>
    </S.ModalBackdrop>
  );
};
