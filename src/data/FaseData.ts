import { v4 as uuidv4 } from 'uuid';

const FaseData = [
  {
    id: uuidv4(),
    url: 'preparo',
    titulo: 'Preparo',
  },
  {
    id: uuidv4(),
    url: 'catalogacao',
    titulo: 'Catalogação',
  },
  {
    id: uuidv4(),
    url: 'digitalizacao',
    titulo: 'Digitalização',
  },
  {
    id: uuidv4(),
    url: 'upload',
    titulo: 'Upload',
  },
  {
    id: uuidv4(),
    url: 'arquivamento',
    titulo: 'Arquivamento',
  },
];

export default FaseData;
