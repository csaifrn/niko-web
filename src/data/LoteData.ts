import { v4 as uuidv4 } from 'uuid';
import EtapaData from '../data/EtapaData';

export const LoteData = [
    //LOTE 1
    {
        id: 1,
        titulo: 'Lote',
        numero: 1,
        protocolo: '0001',
        id_etapa: EtapaData[0].id,
        prioridade: 0,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
            {
                envolvidoId: 1,
                foto: 'https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg',
            },
            {
                envolvidoId: 2,
                foto: 'https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c',
            }
        ]
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
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
            {
                envolvidoId: 1,
                foto: 'https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg',
            },
            {
                envolvidoId: 2,
                foto: 'https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c',
            }
        ] 
    },
    //LOTE 3
    {
        id: 3,
        titulo: 'Lote',
        numero: 3,
        protocolo: '0003',
        id_etapa: EtapaData[1].id,
        prioridade: 0,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
            {
                envolvidoId: 1,
                foto: 'https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg',
            },
            {
                envolvidoId: 2,
                foto: 'https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c',
            }
        ]
    },
    //LOTE 4
    {
        id: 4,
        titulo: 'Lote',
        numero: 4,
        protocolo: '0004' ,//´000${'2'}´
        id_etapa: EtapaData[1].id,
        prioridade: 0,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
            {
                envolvidoId: 1,
                foto: 'https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg',
            },
            {
                envolvidoId: 2,
                foto: 'https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c',
            }
        ]
    },

    //LOTE 5
    {
        id: 5,
        titulo: 'Lote',
        numero: 5,
        protocolo: '0005' ,//´000${'2'}´
        id_etapa: [EtapaData[2].id, EtapaData[3].id],
        prioridade: 0,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
            {
                envolvidoId: 1,
                foto: 'https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg',
            },
            {
                envolvidoId: 2,
                foto: 'https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c',
            }
        ]
    },

    //LOTE 6
    {
        id: 6,
        titulo: 'Lote',
        numero: 6,
        protocolo: '0006' ,//´000${'2'}´
        id_etapa: [EtapaData[2].id, EtapaData[3].id],
        prioridade: 0,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
            {
                envolvidoId: 1,
                foto: 'https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg',
            },
            {
                envolvidoId: 2,
                foto: 'https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c',
            }
        ]
    },

    //LOTE 7
    {
        id: 7,
        titulo: 'Lote',
        numero: 7,
        protocolo: '0007' ,
        id_etapa: [EtapaData[2].id, EtapaData[3].id],
        prioridade: 0,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
            {
                envolvidoId: 1,
                foto: 'https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg',
            },
            {
                envolvidoId: 2,
                foto: 'https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c',
            }
        ]
    },

]