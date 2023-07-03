import { v4 as uuidv4 } from 'uuid';
import EtapaData from '../data/EtapaData';
import UserData from './UserData';
import CategoriaData from './CategoriaData';

export const LoteData = [
  //LOTE 1
  {
    id: 1,
    titulo: 'Lote',
    numero: 1,
    protocolo: '0001',
    id_etapa: EtapaData[0].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },
  //LOTE 2
  {
    id: 2,
    titulo: 'Lote',
    numero: 2,
    protocolo: '0002',
    id_etapa: EtapaData[1].id,
    prioridade: 0,
    pendencias: [
      {
        titulo: 'Há 3 processos sem número',
        PendId: uuidv4(),
      },
    ],
    observacoes: [
      {
        titulo: 'Há 3 processos no SEI',
        ObsId: uuidv4(),
      },
    ],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },
  //LOTE 3
  {
    id: 3,
    titulo: 'Lote',
    numero: 3,
    protocolo: '0003',
    id_etapa: EtapaData[1].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },
  //LOTE 4
  {
    id: 4,
    titulo: 'Lote',
    numero: 4,
    protocolo: '0004', //´000${'2'}´
    id_etapa: EtapaData[1].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 5
  {
    id: 5,
    titulo: 'Lote',
    numero: 5,
    protocolo: '0005', //´000${'2'}´
    id_etapa: [EtapaData[2].id, EtapaData[3].id],
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 6
  {
    id: 6,
    titulo: 'Lote',
    numero: 6,
    protocolo: '0006', //´000${'2'}´
    id_etapa: [EtapaData[2].id, EtapaData[3].id],
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 7
  {
    id: 7,
    titulo: 'Lote',
    numero: 7,
    protocolo: '0007',
    id_etapa: [EtapaData[2].id, EtapaData[3].id],
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 8
  {
    id: 8,
    titulo: 'Lote',
    numero: 8,
    protocolo: '0008',
    id_etapa: EtapaData[4].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 9
  {
    id: 9,
    titulo: 'Lote',
    numero: 9,
    protocolo: '0009',
    id_etapa: EtapaData[5].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 10
  {
    id: 10,
    titulo: 'Lote',
    numero: 10,
    protocolo: '00010',
    id_etapa: [EtapaData[6].id, EtapaData[7].id],
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 11
  {
    id: 11,
    titulo: 'Lote',
    numero: 11,
    protocolo: '00011',
    id_etapa: [EtapaData[6].id, EtapaData[7].id],
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 12
  {
    id: 12,
    titulo: 'Lote',
    numero: 12,
    protocolo: '00012',
    id_etapa: EtapaData[8].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 13
  {
    id: 13,
    titulo: 'Lote',
    numero: 13,
    protocolo: '00013',
    id_etapa: EtapaData[9].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [CategoriaData[0], CategoriaData[1], CategoriaData[2]],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 14
  {
    id: 14,
    titulo: 'Lote',
    numero: 14,
    protocolo: '00014',
    id_etapa: [EtapaData[10].id, EtapaData[11].id],
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 15
  {
    id: 15,
    titulo: 'Lote',
    numero: 15,
    protocolo: '00015',
    id_etapa: [EtapaData[10].id, EtapaData[11].id],
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [CategoriaData[0], CategoriaData[1], CategoriaData[2]],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 16
  {
    id: 16,
    titulo: 'Lote',
    numero: 16,
    protocolo: '00016',
    id_etapa: EtapaData[12].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 17
  {
    id: 17,
    titulo: 'Lote',
    numero: 17,
    protocolo: '00016',
    id_etapa: EtapaData[13].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 15
  {
    id: 18,
    titulo: 'Lote',
    numero: 18,
    protocolo: '00018',
    id_etapa: [EtapaData[14].id, EtapaData[15].id],
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },

  //LOTE 19
  {
    id: 19,
    titulo: 'Lote',
    numero: 19,
    protocolo: '00019',
    id_etapa: [EtapaData[14].id, EtapaData[15].id],
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },
  //LOTE 20
  {
    id: 20,
    titulo: 'Lote',
    numero: 20,
    protocolo: '00020',
    id_etapa: EtapaData[16].id,
    prioridade: 0,
    pendencias: [],
    observacoes: [],
    categorias: [],
    tipologias: [],
    envolvidos: [
      {
        id: UserData[0].id,
        foto: UserData[0].url,
      },
      {
        id: UserData[1].id,
        foto: UserData[1].url,
      },
    ],
  },
];
