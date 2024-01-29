import styled from 'styled-components';
import media from 'styled-media-query';
import Select from 'react-select';
import { UserRole } from '../../utils/userRole.enum';

export const BotaoCriarObservacao = styled.button`
  border-radius: 100%;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: transparent;
  position: relative;
  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const areaClick = styled.div`
  color: white;
  //padding: 2em;
  transition: transform 0.9s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 8em 2em;
  font-family: 'Rubik', Helvetica, sans-serif;
  width: 100%;
  max-width: 1140px;
  &::-webkit-scrollbar {
    width: 0.8em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['gray/900']};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors['gray/550']};
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
    margin: 0em;
  }

  @media screen and (min-width: 1140px) {
    justify-content: center;
    margin: 10em 0em 2em 0em;
  }
`;

export const Texto = styled.p`
  color: ${({ theme }) => theme.colors['gray/900']};
`;

export const Teste = styled.h1`
  color: white;
`;

export const Icons = styled.img``;

export const EnvolvAtual = styled.img``;

export const TituloLote = styled.h1``;

export const CloseFaseStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: '5px 5px';
  border-radius: '5px';
`;

export const FaseStatus = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const Exit = styled.button`
  height: 2em;
  width: 2em;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  position: relative;
  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const LoteInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LoteTitleEdit = styled.div`
  display: flex;
  gap: 1em;
`;

export const EditConfig = styled.div`
  display: flex;
  gap: 8px;
`;

export const Edit = styled.div`
  height: 2.25em;
  width: 2.25em;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const Config = styled.button`
  height: 2em;
  width: 2em;
  border-radius: 3px;
  margin-bottom: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  &:hover {
    background-color: ${({ theme }) => theme.colors['gray/400']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const DetalhesLote = styled.div`
  display: flex;
  gap: 24px;
`;

export const SubDetalhes = styled.div`
  display: flex;
  gap: 8px;
`;

export const Protocolo = styled.div`
  height: 2em;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 3px;
`;

export const Estante = styled.div`
  height: 2em;
  width: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 3px;
`;

export const ArquivFisicos = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  height: 2em;
  width: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
  position: relative;
  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

export const ArquivDigitais = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  height: 2em;
  width: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
  position: relative;
  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

export const DadosCriacaoLoteDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const BlockGray = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  padding: 0.5em;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 767px) {
  }
`;

export const BlockGrayBorder = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border: ${({ theme }) => theme.colors['gray/300']} solid 2px;
  height: 2em;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border-radius: 3px;
`;

export const PrioridadeDiv = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const PrioridadeTag = styled.div`
  width: 72px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors['red/700']};
  height: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
`;

export const Categoria = styled.div`
  padding: 5px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 3px;
`;

export const Tipologias = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
`;

export const Tipologia = styled.div`
  padding: 5px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors['gray/450']};
  border-radius: 3px;
`;

export const TextDiv = styled.div`
  height: 2em;
  display: flex;
  margin-left: 0em;
  align-items: center;
`;

export const Text = styled.p`
  padding: '0 0.5em';
  align-content: left;
`;

export const FaseAtualDiv = styled.div``;

export const IconTooltipFase = styled.div`
  //position: relative;
  height: 32px;
  :hover div {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

export const TituloFaseAtual = styled.h2``;

export const Status = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  padding: 0px 6px 0px 6px;
  border-radius: 3px;
  gap: 8px;
`;

export const Envolvidos = styled.div`
  display: flex;
  gap: 0px;
`;

interface Props {
  role: string | undefined;
}

export const ObservacaoBotoes = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 767px) {
    display: grid;
    grid-template-columns: ${({ role }) => (role === UserRole.OPERATOR ? '1fr' : '2fr 1fr')};
  }
`;

export const Botoes = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-row-start: ${({ role }) => (role === UserRole.OPERATOR ? '1' : '0')};
  @media screen and (min-width: 767px) {
    gap: 27px;
  }
`;

export const PendObservacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  @media screen and (min-width: 767px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const ObsTituloNumber = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  p {
    font-size: 16px;
  }
`;

export const ObservacaoTitulo = styled.p`
  font-size: 16px;
`;

export const Pendencias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  order: 0;
  flex-grow: 0;
  padding: 16px;
  @media screen and (min-width: 767px) {
    width: 100%;
  }
`;

export const Observações = styled.div`
  display: flex;
  flex-direction: column;
  transition: all;
  gap: 16px;
  background: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 5px;
  padding: 16px;
  max-height: 300px;
  @media screen and (min-width: 767px) {
    width: 100%;
  }
`;

export const ObsCardsDiv = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  // O caminho (barra de progresso) da barra de rolagem
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  // A barra arrastável de rolagem
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors['gray/400']};
    border-radius: 20px;
  }
`;

export const PendDivBlack = styled.div`
  background-color: ${({ theme }) => theme.colors['gray/900']};
  border-radius: 5px;
  gap: 10px;
  padding: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const PendenciaTextIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BotaoResolverPend = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors['yellow/300']};
  color: ${({ theme }) => theme.colors['gray/900']};
  padding: 1.5em;
  width: 100%;
  border: none;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow/200']};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors['yellow/200']};
    transform: translateY(-5%) translateX(2%);
  }
`;

export const PegarLote = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['gray/500']};
  border: none;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors['white']};
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.8);
  }
`;

export const ConcluirButton = styled.button`
  height: 44px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors['green/400']};
  border: none;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors['gray/700']};
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.8);
  }
`;

export const Botao = styled.button`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0em 15px;
  height: 44px;
  width: calc(100%-6em);
  border-radius: 5px;
  border: none;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
  transition: all 500ms;
  cursor: pointer;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.8);
  }
`;

export const BotaoDeletarLote = styled.button`
  background-color: ${({ theme }) => theme.colors['red/700']};
  display: flex;
  align-items: center;
  gap: 1em;
  padding: 0em 15px;
  height: 44px;
  width: calc(100%-6em);
  border-radius: 5px;
  border: none;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.8);
  }
`;

export const BotaoMudarFase = styled.div`
  display: flex;
  border: none;
  font-family: 'Rubik';
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  border-radius: 5px;
  &:hover #tool {
    visibility: visible;
    opacity: 1;
    display: block;
  }
`;

export const VoltarAvancar = styled.button`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0em 15px;
  height: 44px;
  width: calc(50%);
  border-radius: 5px 0px 0px 5px;
  border: none;
  font-family: 'Rubik';
  transition: all 500ms;
  &:hover {
    filter: brightness(0.8);
  }
  &:active {
    filter: brightness(0.8);
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.8;
    pointer-events: none;
  }
`;

export const VoltarAvancarDesativado = styled.button`
  background-color: ${({ theme }) => theme.colors['gray/700']};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0em 15px;
  height: 44px;
  width: calc(50%);
  border-radius: 5px 0px 0px 5px;
  border: none;
  font-family: 'Rubik';
`;

export const OptionFases = styled.option`
  background-color: ${({ theme }) => theme.colors['gray/500']};
  width: calc(50%);
  display: flex;
  padding: 2em;
`;

export const DetalFase = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetalhamentoTitulo = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const DetalhamentoGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(21rem, 1fr));
  @media screen and (min-width: 767px) {
    grid-template-columns: 2fr 2fr 2fr;
  }
`;

export const NomeDaFase = styled.h2``;

export const TodasAsPendencias = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 767px) {
    height: 20vh;
    overflow-y: scroll;
    scroll-behavior: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 0.3em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['gray/900']};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors['gray/550']};
      border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      margin: 0em 2em;
    }
  }
`;

export const TodasAsObservacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media screen and (min-width: 767px) {
    height: 20vh;
    overflow-y: scroll;
    scroll-behavior: auto;
    scrollbar-width: thin;
    &::-webkit-scrollbar {
      width: 0.3em;
      height: 0.5em;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors['gray/900']};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors['gray/550']};
      border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      margin: 0em 2em;
    }
  }
`;

export const Fase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: calc(100%-6em);
  background: ${({ theme }) => theme.colors['gray/500']};
  border-radius: 8px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const FaseIconDiv = styled.div`
  height: 2em;
  margin-top: 1em;
  display: flex;
  align-items: center;
  gap: 8px;
  h2 {
    color: 'white';
    margin-bottom: '0';
  }
`;

export const TimeBeginDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

export const TimeFinishDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-style: normal;
  line-height: 14px;
  font-weight: 400;
`;

export const EnvolvidosDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
`;

export const EscolherFaseSelect = styled(Select)`
  width: calc(50%);
  border-left: 1px solid ${({ theme }) => theme.colors['gray/150']};

  .react-select__control {
    cursor: pointer;
    border: none;
    border-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: ${({ theme }) => theme.colors['gray/500']} !important; /* Cor de fundo do controle */
    color: ${({ theme }) => theme.colors.white} !important;
    min-height: 44px;
  }

  .react-select__placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors['gray/500']} !important;
  }

  .react-select__option {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors['gray/500']};
    color: ${({ theme }) => theme.colors.white}; /* Cor do texto das opções */
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors['gray/500']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors['gray/700']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__indicator-separator {
    background-color: ${({ theme }) => theme.colors['gray/200']}; /* Cor do separador entre indicadores */
  }

  .react-select__value-container .react-select__input {
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

export const EscolherFaseSelectDesativado = styled(Select)`
  width: calc(50%);
  border-left: 1px solid ${({ theme }) => theme.colors['gray/150']};
  .react-select__control {
    border: none;
    background-color: ${({ theme }) => theme.colors['gray/500']} !important; /* Cor de fundo do controle */
    color: ${({ theme }) => theme.colors.white} !important;
    min-height: 44px;
  }

  .react-select__placeholder {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__single-value {
    color: ${({ theme }) => theme.colors.white};
  }

  .react-select__menu {
    background-color: ${({ theme }) => theme.colors['gray/500']} !important;
  }

  .react-select__option {
    background-color: ${({ theme }) => theme.colors['gray/500']};
    color: ${({ theme }) => theme.colors.white}; /* Cor do texto das opções */
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors['gray/500']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors['gray/700']}; /* Cor de fundo da opção selecionada */
  }

  .react-select__indicator-separator {
    background-color: ${({ theme }) => theme.colors['gray/200']}; /* Cor do separador entre indicadores */
  }

  .react-select__value-container .react-select__input {
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;
