import { useState } from 'react';
import * as S from './styles';
import mockData from '../../data/kanbanData';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Lote from '../Lote';
interface BoardProps {
  fase: string;
}

export const Board = (props: BoardProps) => {
  const [data, setData] = useState(mockData);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      console.log('Funcionando!');
      const ColunmIndexSource = data.findIndex((e) => e.id === source.droppableId);
      const ColunmIndexDestination = data.findIndex((e) => e.id === destination.droppableId);

      const ColumnSource = data[ColunmIndexSource];
      const ColumnDestination = data[ColunmIndexDestination];

      const SourceTask = [...ColumnSource.tasks];
      const DestinationTaks = [...ColumnDestination.tasks];

      const [Removed] = SourceTask.splice(source.index, 1);
      DestinationTaks.splice(destination.index, 0, Removed);

      data[ColunmIndexSource].tasks = SourceTask;
      data[ColunmIndexDestination].tasks = DestinationTaks;

      setData(data);
    }
  };

  return (
    <>
      <>
        <div style={{ margin: '0em 3em 0em 3em', display: 'flex', justifyContent: 'flex-end', gap: '0.5em' }}>
          <img src={`/icon-page/${props.fase}.png`} alt={`icone da fase ${props.fase}`} />
        </div>
      </>
      <DragDropContext onDragEnd={onDragEnd}>
        <S.kanban className="board">
          {data.map((section: any) => (
            <Droppable key={section.id} droppableId={section.id}>
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
                          color: '#FCDE42',
                        }}
                      >
                        {section.tasks ? section.tasks.length : 0}
                      </h2>
                    )}
                    {section.title == 'Em andamento' && (
                      <h2
                        style={{
                          color: '#F32D2D',
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
                                value={task.title}
                                categoria={task.categoria}
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
