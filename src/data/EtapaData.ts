import { v4 as uuidv4 } from 'uuid';
import FaseData from './FaseData';

const EtapaData = [
  // PREPARO
  {
    id: '19f7e58c-4e4d-40c4-8b73-3711e8d9e215',
    titulo: 'Em andamento',
    id_fase: FaseData[0].id,
    ultima: false,
  },
  {
    id: '2aa7d36e-3ce7-4682-a356-1d7c8843709b',
    titulo: 'Em pausa',
    id_fase: FaseData[0].id,
    ultima: false,
  },
  {
    id: 'ce9b11dd-f981-4ec0-9d30-d3cf5c3b4283',
    titulo: 'Concluídos',
    id_fase: FaseData[0].id,
    ultima: true,
  },

  // CATALOGAÇÃO
  {
    id: 'b01c6523-a1dc-479e-b8b0-5d73202295ee',
    titulo: 'Disponíveis',
    id_fase: FaseData[1].id,
  },
  {
    id: '11501491-8406-43e8-8800-99a99843d051',
    titulo: 'Em andamento',
    id_fase: FaseData[1].id,
  },
  {
    id: 'f5ac0f72-34e1-474c-b27a-8cc31b76536a',
    titulo: 'Em pausa',
    id_fase: FaseData[1].id,
  },
  {
    id: '2ed2be79-c811-4462-b3a4-c1e4abcec404',
    titulo: 'Concluídos',
    id_fase: FaseData[1].id,
  },

  // DIGITALIZAÇÃO
  {
    id: '2ed2be79-c811-4462-b3a4-c1e4abcec404',
    titulo: 'Disponíveis',
    id_fase: FaseData[2].id,
  },
  {
    id: '97ba0de2-9f79-404e-ab07-6e1fdf8fe85c',
    titulo: 'Em andamento',
    id_fase: FaseData[2].id,
  },
  {
    id: '8532679d-769d-4996-a211-ed24049a9882',
    titulo: 'Em pausa',
    id_fase: FaseData[2].id,
  },
  {
    id: 'd6e18502-bccc-4b85-8680-029f0aeb6ec9',
    titulo: 'Concluídos',
    id_fase: FaseData[2].id,
  },

  // UPLOAD
  {
    id: '3ed36543-9207-4484-8747-4e26c6a89586',
    titulo: 'Disponíveis',
    id_fase: FaseData[3].id,
  },
  {
    id: '50cce204-0440-4545-974e-4565afcd8179',
    titulo: 'Em andamento',
    id_fase: FaseData[3].id,
  },
  {
    id: '3d3df507-b4e3-4fb4-bf9f-77cdfea526e2',
    titulo: 'Em pausa',
    id_fase: FaseData[3].id,
  },
  {
    id: '51186aab-282b-4332-bb94-29bbd400ac4d',
    titulo: 'Concluídos',
    id_fase: FaseData[3].id,
  },

  // ARQUIVAMENTO
  {
    id: 'eb0c5be8-5a6b-4df5-ada0-fcc66c1a747d',
    titulo: 'Disponíveis',
    id_fase: FaseData[4].id,
  },
  {
    id: '8fe48aee-5b8b-42e5-81d2-b2947fef756e',
    titulo: 'Concluídos',
    id_fase: FaseData[4].id,
  },
];

export default EtapaData;
