import { useEffect, useState } from 'react';
import * as S from './styles';
import Lote from '../Lote';
import EtapaData from '../../data/EtapaData';
import { LoteData } from '../../data/LoteData';
import { useParams } from 'react-router-dom';

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

  const { id } = useParams();
  
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
        <div style={{ margin: '0em 2em 0em 3em', display: 'flex', justifyContent: 'flex-end', gap: '0.5em' }}>
          <img src={`/icon-medium/${fase.titulo}.png`} alt={`icone da fase ${fase.titulo}`} />
        </div>
      </>
      <S.kanban className="board">
        {etapas.map((section) => (
          <S.kanbanSection key={section.id}>
            <div style={{ display: 'flex', gap: '1em', marginLeft: '1em' }}>
              <h2 className="kanbanSectionTititle">{section.title}</h2>
              {section.title == 'Disponíveis' && (
                <h2
                  style={{
                    color: '#43DB6D',
                  }}
                >
                  {section.tasks.filter((lote:any) => lote.id_projeto === id) ? section.tasks.filter((lote:any) => lote.id_projeto === id).length : 0}
                </h2>
              )}
              {section.title == 'Em pausa' && (
                <h2
                  style={{
                    color: '#F32D2D',
                  }}
                >
                  {section.tasks.filter((lote:any) => lote.id_projeto === id) ? section.tasks.filter((lote:any) => lote.id_projeto === id).length : 0}
                </h2>
              )}
              {section.title == 'Em andamento' && (
                <h2
                  style={{
                    color: '#FCDE42',
                  }}
                >
                  {section.tasks.filter((lote:any) => lote.id_projeto === id) ? section.tasks.filter((lote:any) => lote.id_projeto === id).length : 0}
                </h2>
              )}
              {section.title == 'Concluídos' && (
                <h2
                  style={{
                    color: '#43DB6D',
                  }}
                >
                  {section.tasks.filter((lote:any) => lote.id_projeto === id) ? section.tasks.filter((lote:any) => lote.id_projeto === id).length : 0}
                </h2>
              )}
            </div>

            <S.kanbanSectionContent>
              {section.tasks.map((task: any) => (
                task.id_projeto === id &&
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
