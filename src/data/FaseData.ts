import { v4 as uuidv4 } from 'uuid';

const FaseData = [
    {
        id: uuidv4(),
        titulo:'Preparo',
        icone: '/icon-page/Preparo'
    },
    {
        id: uuidv4(),
        titulo:'Catalogação',
        icone: '/icon-page/Catalogação'
    },
    {
        id: uuidv4(),
        titulo:'Digitalização',
        icone: '/icon-page/Digitalização'
    },
    {
        id: uuidv4(),
        titulo:'Upload',
        icone: '/icon-page/Upload'
    },
    {
        id: uuidv4(),
        titulo:'Arquivamento',
        icone: '/icon-page/Arquivamento'
    },
]

export default FaseData;