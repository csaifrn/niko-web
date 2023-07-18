import React, {useState } from "react";
import * as S from "./style";
import CategoriaData from "../../data/CategoriaData";
import mockData from "../../data/kanbanData";
//import { LoteData } from "../../data/LoteData";

interface ConfigModalProps {
  close: () => void;
  handlePrioridade: () => void;
  valor_prioridade: boolean;
  valor_compart: boolean;
  handleCompart: () => void;
}

export const ConfigModal = (props: ConfigModalProps) => {

  const [selectedCategoriaData, setCategoriaData] = useState<number[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");

  //Função para ativar e desativar o switch
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  const [Pchecked, setPChecked] = useState(props.valor_prioridade);
  const handlePrioridadeCheck = () => {
    setPChecked(!Pchecked);
    props.handlePrioridade()
  };


  const [compartChecked, setCompartChecked] = useState(props.valor_compart);
  const handlePCompartilhamentoCheck = () => {
    setCompartChecked(!compartChecked);
    props.handleCompart()
  };
  console.log(props.valor_compart)

  const handleLoteClick = (categId: number) => {
    if (selectedCategoriaData.includes(categId)) {
      setCategoriaData(selectedCategoriaData.filter((id) => id !== categId));
    } else {
      setCategoriaData([...selectedCategoriaData, categId]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategorias = CategoriaData.filter(
    (CategoriaData) =>
    CategoriaData.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredTitulo = mockData.filter(
    (mockData) =>
    mockData.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
    <S.ModalBackdrop >
      <S.ModalArea >
        <S.ModalContent id="modal-content">
          <S.NameClose>
            <h2>Configurações do lote</h2>
            <img
              onClick={props.close}
              src="/close.svg"
              alt="Botão com X ao centro para fechar as configurações do lote e voltar para o detalhamento"
              height={24}
              width={24}
              style={{
                padding: "5px 5px",
                backgroundColor: "#090E09",
                borderRadius: "5px",
              }}
            />
          </S.NameClose>

          <S.Compartilhamento>
            <p>Compartilhamento</p>
            <S.SwitchButton>
              <S.Input checked={compartChecked} onChange={handlePCompartilhamentoCheck} />
              <S.Slider />
            </S.SwitchButton>
          </S.Compartilhamento>

          <S.Prioridade>
            <p>Prioridade</p>
            <S.SwitchButton>
              <S.Input checked={Pchecked} onChange={handlePrioridadeCheck}/>
              <S.Slider />
            </S.SwitchButton>
          </S.Prioridade>
        </S.ModalContent>
      </S.ModalArea>
    </S.ModalBackdrop>
    </>

  );
};

export {};