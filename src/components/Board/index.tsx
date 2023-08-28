import { useEffect, useState } from 'react';
import * as S from './styles';
import Lote from '../Lote';
import EtapaData from '../../data/EtapaData';
import { LoteData } from '../../data/LoteData';

interface Fase {
  id: number;
  titulo: string;
}

interface BoardProps {
  titulo: string;
  fase: Fase;
}

export const Board = (props: BoardProps) => {
  // temos 1 fase
  // api
  //  - etapas por fase
  //  - lotes por etapa

  const fase = props.fase;
  const etapasTemp = EtapaData.filter((Etapa) => Etapa.id_fase === Number(fase.id));

  const [etapas, setEtapas] = useState<any[]>([]);
  const carregarLotes = (etapaid: string) =>
    LoteData.filter((lote) => {
      const etapa = lote.id_etapa;

      // etapas do meio
      if (etapa instanceof String || typeof etapa === 'string') {
        return etapa === etapaid;

        // etapas das pontas
      } else {
        return etapa[0] === etapaid || etapa[1] === etapaid;
      }
    });

  useEffect(() => {
    for (let index = 0; index < etapasTemp.length; index++) {
      const element = etapasTemp[index];
      const Items = { id: element.id, title: element.titulo, tasks: carregarLotes(element.id) };
      setEtapas((dataItens) => [...dataItens, Items]);
    }
  }, []);

  console.log(fase.titulo);

  return (
    <>
      <>
        <S.divImg>
          <img src={`/icon-medium/${fase.titulo}.png`} alt={`icone da fase ${fase.titulo}`} />
        </S.divImg>
      </>
      <S.kanban className="board">
        {etapas.map((section) => (
          <S.kanbanSection key={section.id}>
            <S.divTitulo>
              <h2 className="kanbanSectionTititle">{section.title}</h2>
              {section.title == 'Disponíveis' && (
                <h2
                  style={{
                    color: '#43DB6D',
                  }}
                >
                  {section.tasks ? section.tasks.length : 0}
                </h2>
              )}
              {section.title == 'Em pausa' && (
                <h2
                  style={{
                    color: '#F32D2D',
                  }}
                >
                  {section.tasks ? section.tasks.length : 0}
                </h2>
              )}
              {section.title == 'Em andamento' && (
                <h2
                  style={{
                    color: '#FCDE42',
                  }}
                >
                  {section.tasks ? section.tasks.length : 0}
                </h2>
              )}
              {section.title == 'Concluídos' && (
                <h2
                  style={{
                    color: '#43DB6D',
                  }}
                >
                  {section.tasks ? section.tasks.length : 0}
                </h2>
              )}
            </S.divTitulo>

            <S.kanbanSectionContent>
              {section.tasks.map((task: any) => (
                <a href={`/Lote/${task.id}`} key={task.id} style={{ textDecoration: 'none' }}>
                  <Lote
                    task={task}
                    value={`${task.titulo} ${task.numero}`}
                    pendencia={task.pendencias.length}
                    prioridade={task.prioridade}
                    categoria={task.categorias}
                    envolvidos={task.envolvidos}
                  ></Lote>
                </a>
              ))}
            </S.kanbanSectionContent>
          </S.kanbanSection>
        ))}
      </S.kanban>
    </>
  );
};

export default Board;
