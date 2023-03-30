import { useRef, useState } from 'react';
import * as S from "./styles"
import mockData from '../../data/kanbanData';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import Lote from '../Lote';

export const Board = () => {

    const [data, setData] = useState(mockData)
    const [prioridade, setPrioridade] = useState("");

    const getPrioridade = useRef<HTMLInputElement>(null);

    function handlePrioridade() {
        if (getPrioridade.current !== null && getPrioridade.current !== undefined) {
            setPrioridade(getPrioridade.current.value.toString());
        }
    }

    const onDragEnd = (result: any) => {
        if (!result.destination) return
        const { source, destination } = result
        if (source.droppableId !== destination.droppableId) {
            console.log("Funcionando!")
            const ColunmIndexSource = data.findIndex(e => e.id === source.droppableId)
            const ColunmIndexDestination = data.findIndex(e => e.id === destination.droppableId)

            const ColumnSource = data[ColunmIndexSource]
            const ColumnDestination = data[ColunmIndexDestination]

            const SourceTask = [...ColumnSource.tasks]
            const DestinationTaks = [...ColumnDestination.tasks]

            const [Removed] = SourceTask.splice(source.index, 1)
            DestinationTaks.splice(destination.index, 0, Removed)

            data[ColunmIndexSource].tasks = SourceTask
            data[ColunmIndexDestination].tasks = DestinationTaks

            setData(data)
        }
    }

    function uuidv4() {
        throw new Error('Function not implemented.');
    }

    return (
        <>
            <>
                <div style={{ margin: "0em 1em 1em 1em", display: 'flex', gap: '0.5em' }}>
                    <S.inputPrioridade type="text" className="form-control" placeholder="Prioridade" aria-label="Username" aria-describedby="basic-addon1" ref={getPrioridade} />
                    <S.btnPrioridade onClick={handlePrioridade}>Enviar</S.btnPrioridade>
                </div>
            </>
            <DragDropContext onDragEnd={onDragEnd}>
                <S.kanban className='board'>
                    {
                        data.map((section: any) => (
                            <Droppable
                                key={section.id}
                                droppableId={section.id}
                            >
                                {(provided) => (
                                    <S.kanbanSection
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                    >
                                        <div style={{ display: 'flex', gap: '2em' }}>
                                            <div className="kanbanSectionTititle">
                                                {section.title}
                                            </div>
                                            <p>{section.tasks ? section.tasks.length : 0}</p>
                                        </div>

                                        <S.kanbanSectionContent>
                                            {
                                                section.tasks.map((task: any, index: any) => (
                                                    <Draggable
                                                        key={task.id}
                                                        draggableId={task.id}
                                                        index={index}

                                                    >
                                                        {(provided, snapshot) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                style={{
                                                                    ...provided.draggableProps.style,
                                                                    opacity: snapshot.isDragging ? "0.5" : "1"
                                                                }}
                                                            >
                                                                <Lote task={task} prioridade={prioridade}>
                                                                </Lote>
                                                            </div>
                                                        )}

                                                    </Draggable>
                                                ))
                                            }
                                            {provided.placeholder}
                                        </S.kanbanSectionContent>
                                    </S.kanbanSection>

                                )}
                            </Droppable>
                        ))
                    }
                </S.kanban>
            </DragDropContext >

        </>
    )
}

export default Board;