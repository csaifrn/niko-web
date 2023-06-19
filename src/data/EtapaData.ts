import { v4 as uuidv4 } from 'uuid';
import FaseData from './FaseData';

const EtapaData = [
    {
        id: uuidv4(),
        titulo:'Em andamento',
        id_fase: FaseData[0].id,
    },
    {
        id: uuidv4(),
        titulo:'Em pausa',
        id_fase: FaseData[0].id,
    },
    {
        id: uuidv4(),
        titulo:'Concluídos',
        id_fase: FaseData[0].id,
    },
    {
        id: uuidv4(),
        titulo:'Disponíveis',
        id_fase: FaseData[1].id,
    },
    {
        id: uuidv4(),
        titulo:'Em andamento',
        id_fase: FaseData[1].id,
    },
    {
        id: uuidv4(),
        titulo:'Em pausa',
        id_fase: FaseData[1].id,
    },
    {
        id: uuidv4(),
        titulo:'Concluídos',
        id_fase: FaseData[1].id,
    }
]

export default EtapaData;