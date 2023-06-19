import { v4 as uuidv4 } from 'uuid';
import FaseData from './FaseData';

const EtapaData = [

    // PREPARO
    {
        id: uuidv4(),
        titulo:'Em andamento',
        id_fase: FaseData[0].id,
        ultima: false,
    },
    {
        id: uuidv4(),
        titulo:'Em pausa',
        id_fase: FaseData[0].id,
        ultima: false,
    },
    {
        id: uuidv4(),
        titulo:'Concluídos',
        id_fase: FaseData[0].id,
        ultima: true,
    },

    // CATALOGAÇÃO
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
    },

    // DIGITALIZAÇÃO
    {
        id: uuidv4(),
        titulo:'Disponíveis',
        id_fase: FaseData[2].id,
    },
    {
        id: uuidv4(),
        titulo:'Em andamento',
        id_fase: FaseData[2].id,
    },
    {
        id: uuidv4(),
        titulo:'Em pausa',
        id_fase: FaseData[2].id,
    },
    {
        id: uuidv4(),
        titulo:'Concluídos',
        id_fase: FaseData[2].id,
    },

    // UPLOAD
    {
        id: uuidv4(),
        titulo:'Disponíveis',
        id_fase: FaseData[3].id,
    },
    {
        id: uuidv4(),
        titulo:'Em andamento',
        id_fase: FaseData[3].id,
    },
    {
        id: uuidv4(),
        titulo:'Em pausa',
        id_fase: FaseData[3].id,
    },
    {
        id: uuidv4(),
        titulo:'Concluídos',
        id_fase: FaseData[3].id,
    },

    // ARQUIVAMENTO
    {
        id: uuidv4(),
        titulo:'Disponíveis',
        id_fase: FaseData[4].id,
    },
    {
        id: uuidv4(),
        titulo:'Concluídos',
        id_fase: FaseData[4].id,
    },
]

export default EtapaData;