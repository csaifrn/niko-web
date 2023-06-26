import { useEffect, useState } from 'react';
import * as S from './styles';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Lote from '../Lote';
import EtapaData from '../../data/EtapaData';
import { LoteData } from '../../data/LoteData';
import { v4 as uuidv4 } from 'uuid';

interface Fase {
  id: string;
  titulo: string;
}

interface BoardProps {
  titulo: string;
  fase: Fase
}

export const Board = (props: BoardProps) => {

  // temos 1 fase
  // api
  //  - etapas por fase
  //  - lotes por etapa

  const fase = props.fase
  const etapasTemp = EtapaData.filter((Etapa) => Etapa.id_fase === fase.id)
  // axios.get('projetos/incra/fases/preparo/etapas).then((datta) => data.json).then((json) => etapas.json)
  
  const [etapas, setEtapas] = useState<any[]>([])
  const carregarLotes = (etapaid: string) => LoteData.filter((lote) => {
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
      const Items = { id: element.id, title: element.titulo, tasks: carregarLotes(element.id) }  
      setEtapas((dataItens) => [...dataItens, Items]);
    }
  }, [])

//  const [data, setData] = useState(etapas);
// FIXME: remover o estado data e o onDragEnd
  const onDragEnd = (result: any) => {
//    if (!result.destination) return;
//    const { source, destination } = result;
//    if (source.droppableId !== destination.droppableId) {
      // console.log('Funcionando!');
      // const ColunmIndexSource = data.findIndex((e) => e.id === source.droppableId);
      // const ColunmIndexDestination = data.findIndex((e) => e.id === destination.droppableId);

      // const ColumnSource = data[ColunmIndexSource];
      // const ColumnDestination = data[ColunmIndexDestination];

      // const SourceTask = [...ColumnSource.tasks];
      // const DestinationTaks = [...ColumnDestination.tasks];

      // const [Removed] = SourceTask.splice(source.index, 1);
      // DestinationTaks.splice(destination.index, 0, Removed);

      // data[ColunmIndexSource].tasks = SourceTask;
      // data[ColunmIndexDestination].tasks = DestinationTaks;

      // setData(data);
//    }
  };

  return (
    <>
      <>
        <div style={{ margin: '0em 2em 0em 3em', display: 'flex', justifyContent: 'flex-end', gap: '0.5em' }}>
          <img src={`/icon-page/${fase.titulo}_icon.png`} alt={`icone da fase ${fase.titulo}`} />
        </div>
      </>
      <DragDropContext onDragEnd={onDragEnd}>
        <S.kanban className="board">
          {etapas.map((section: any) => (
            <Droppable key={uuidv4()} droppableId={section.id}>
              {(provided) => (
                <S.kanbanSection {...provided.droppableProps} ref={provided.innerRef}>
                  <div style={{ display: 'flex', gap: '1em', marginLeft: '1em' }}>
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
                  </div>

                  <S.kanbanSectionContent>
                    {section.tasks.map((task: any, index: any) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? '0.5' : '1',
                            }}
                          >
                            <a href={`/Lote/${task.id}`} style={{ textDecoration: 'none' }}>
                              <Lote
                                task={task}
                                value={`${task.titulo} ${task.numero}`}
                                pendencia={task.possui_pendencia}
                                prioridade={task.prioridade}
                                categoria={task.categorias}
                                envolvidos={task.envolvidos}
                              ></Lote>
                            </a>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </S.kanbanSectionContent>
                </S.kanbanSection>
              )}
            </Droppable>
          ))}
        </S.kanban>
      </DragDropContext>
    </>
  );
};

export default Board;