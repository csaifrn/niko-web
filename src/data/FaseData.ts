import { v4 as uuidv4 } from 'uuid';

const FaseData = [
    // {
    //     id: uuidv4(),
    //     titulo:'Recepção',
    //     icone: '/icon-page/Recepção_icon.png'
    // },
    {
        id: uuidv4(),
        titulo:'Preparo',
        icone: '/icon-page/Preparo_icon.png'
    },
    {
        id: uuidv4(),
        titulo:'Catalogação',
        icone: '/icon-page/Catalogação_icon.png'
    },
    {
        id: uuidv4(),
        titulo:'Digitalização',
        icone: '/icon-page/Digitalização_icon.png'
    },
    {
        id: uuidv4(),
        titulo:'Upload',
        icone: '/icon-page/Upload_icon.png'
    },
    {
        id: uuidv4(),
        titulo:'Arquivamento',
        icone: '/icon-page/Arquivamento_icon.png'
    },
]

export default FaseData;