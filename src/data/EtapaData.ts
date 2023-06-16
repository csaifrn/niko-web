import { v4 as uuidv4 } from 'uuid';

const EtapaData = [
    {
        id: uuidv4(),
        titulo:'Disponíveis',
        id_fase: FaseData[0] ,
    },
    {
        id: uuidv4(),
        titulo:'Em andamento',
        id_fase: 0 ,
    },
    {
        id: uuidv4(),
        titulo:'Em pausa',
        id_fase: 0 ,
    },
    {
        id: uuidv4(),
        titulo:'Concluídos',
        id_fase: 0 ,
    }
]

export default EtapaData;