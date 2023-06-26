import { v4 as uuidv4 } from 'uuid';
import EtapaData from '../data/EtapaData';
import UserData from './UserData';
import CategoriaData from './CategoriaData';
import { Tipologia } from '../components/LoteDetails/styles';
import { TipologiaData } from './TipologiaData';
import FaseData from './FaseData';

export const LoteData = [
    //LOTE 1
    {
        id: '1',
        titulo: 'Lote',
        numero: 1,
        estante: '',
        protocolo: '0001',
        arquiv_fisicos: 0,
        arquiv_digitais: 0,
        id_etapa: EtapaData[0].id,
        fase_atual: 'Preparo',
        prioridade: false,
        possui_pendencia: true,
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
                id: UserData[0].id,
                foto:  UserData[0].url,
                andamento: UserData[0].andamento
            },
            {
                id: UserData[1].id,
                foto:  UserData[1].url,
                andamento: UserData[1].andamento
            }
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            }
        ]
    },
    //LOTE 2
    {
        id: '2',
        titulo: 'Lote',
        numero: 2,
        estante: '',
        protocolo: '0002',
        arquiv_fisicos: 0,
        arquiv_digitais: 0,
        id_etapa: EtapaData[1].id,
        fase_atual: 'Preparo',
        prioridade: false,
        possui_pendencia: true,
        pendencias: [
            {
                pend_icon:'/warning.svg',
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
                id: UserData[0].id,
                foto:  UserData[0].url,
                andamento: UserData[0].andamento
            },
            {
                id: UserData[1].id,
                foto:  UserData[1].url,
                andamento: UserData[1].andamento
            }
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            }
        ]
    },
    //LOTE 3
    {
        id: '3',
        titulo: 'Lote',
        numero: 3,
        estante: '',
        protocolo: '0003',
        arquiv_fisicos: 0,
        arquiv_digitais: 0,
        id_etapa: EtapaData[1].id,
        fase_atual: 'Preparo',
        prioridade: false,
        possui_pendencia: true,
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
                id: UserData[0].id,
                foto:  UserData[0].url,
                andamento: UserData[0].andamento
            },
            {
                id: UserData[1].id,
                foto:  UserData[1].url,
                andamento: UserData[1].andamento
            }
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            }
        ]
    },
    //LOTE 4
    {
        id: '4',
        titulo: 'Lote',
        numero: 4,
        estante: '',
        protocolo: '0004',
        arquiv_fisicos: 0,
        arquiv_digitais: 0,
        id_etapa: EtapaData[1].id,
        fase_atual: 'Preparo',
        prioridade: false,
        possui_pendencia: true,
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
                id: UserData[0].id,
                foto:  UserData[0].url,
                andamento: UserData[0].andamento
            },
            {
                id: UserData[1].id,
                foto:  UserData[1].url,
                andamento: UserData[1].andamento
            }
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            }
        ]
    },

    //LOTE 5
    {
        id: '5',
        titulo: 'Lote',
        numero: 5,
        estante: '',
        protocolo: '0005',
        arquiv_fisicos: 0,
        arquiv_digitais: 0,
        id_etapa: [EtapaData[2].id, EtapaData[3].id],
        prioridade: false,
        fase_atual: 'Catalogação',
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:45',
                tempo: '3:30 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    }
                ]
                
            },
        ]
    },

    //LOTE 6
    {
        id: '6',
        titulo: 'Lote',
        numero: 6,
        estante: '',
        protocolo: '0006',
        arquiv_fisicos: 0,
        arquiv_digitais: 0,
        id_etapa: [EtapaData[2].id, EtapaData[3].id],
        fase_atual: 'Catalogação',
        prioridade: false,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:45',
                tempo: '3:30 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    }
                ]
                
            },
        ]
    },

    //LOTE 7
    {
        id: '7',
        titulo: 'Lote',
        numero: 7,
        estante: '',
        protocolo: '0007',
        arquiv_fisicos: 0,
        arquiv_digitais: 0,
        id_etapa: [EtapaData[2].id, EtapaData[3].id],
        fase_atual: 'Catalogação',
        prioridade: false,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
        ],
        tipologias: [
        ],
        envolvidos: [
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:45',
                tempo: '3:30 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    }
                ]
                
            },
        ]
    },

    //LOTE 8
    {
        id: '8',
        titulo: 'Lote',
        numero: 8,
        estante: '',
        protocolo: '0008',
        arquiv_fisicos: 0,
        arquiv_digitais: 0,
        id_etapa: EtapaData[4].id,
        fase_atual: 'Catalogação',
        prioridade: false,
        possui_pendencia: true,
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
                id: UserData[0].id,
                foto:  UserData[0].url,
                andamento: UserData[0].andamento
            },
            {
                id: UserData[1].id,
                foto:  UserData[1].url,
                andamento: UserData[1].andamento
            }
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:45',
                tempo: '3:30 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
        ]
    },

    //LOTE 9
    {
        id: '9',
        titulo: 'Lote',
        numero: 9,
        estante: '',
        protocolo: '0009',
        arquiv_fisicos: 0,
        arquiv_digitais: 0,
        id_etapa: EtapaData[5].id,
        fase_atual: 'Catalogação',
        prioridade: false,
        possui_pendencia: true,
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
                id: UserData[0].id,
                foto:  UserData[0].url,
                andamento: UserData[0].andamento
            },
            {
                id: UserData[1].id,
                foto:  UserData[1].url,
                andamento: UserData[1].andamento
            }
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:45',
                tempo: '3:30 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
        ]
    },

    //LOTE 10
    {
        id: '10',
        titulo: 'Lote',
        numero: 10,
        estante: '',
        protocolo: '00010',
        arquiv_fisicos: 20,
        arquiv_digitais: 0,
        id_etapa: [EtapaData[6].id, EtapaData[7].id],
        fase_atual: 'Digitalização',
        prioridade: true,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //ADMINISTRATIVO
                id: CategoriaData[1].id,
                titulo: CategoriaData[1].name,
                prioridade: CategoriaData[0].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
            //SOLICITAÇÃO
            {
                id: TipologiaData[1].id,
                titulo: TipologiaData[1].nome
            }
        ],
        envolvidos: [
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
        ]
    },

    //LOTE 11
    {
        id: '11',
        titulo: 'Lote',
        numero: 11,
        estante: '',
        protocolo: '00011',
        arquiv_fisicos: 24,
        arquiv_digitais: 0,
        id_etapa: [EtapaData[6].id, EtapaData[7].id],
        fase_atual: 'Digitalização',
        prioridade: true,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //ADMINISTRATIVO
                id: CategoriaData[1].id,
                titulo: CategoriaData[1].name,
                prioridade: CategoriaData[0].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
            //SOLICITAÇÃO
            {
                id: TipologiaData[1].id,
                titulo: TipologiaData[1].nome
            }
        ],
        envolvidos: [
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
        ]
    },

    //LOTE 12
    {
        id: '12',
        titulo: 'Lote',
        numero: 12,
        estante: '',
        protocolo: '00012',
        arquiv_fisicos: 15,
        arquiv_digitais: 0,
        id_etapa: EtapaData[8].id,
        fase_atual: 'Digitalização',
        prioridade: false,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //ADMINISTRATIVO
                id: CategoriaData[1].id,
                titulo: CategoriaData[1].name,
                prioridade: CategoriaData[0].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
            //SOLICITAÇÃO
            {
                id: TipologiaData[1].id,
                titulo: TipologiaData[1].nome
            }
        ],
        envolvidos: [
            {
                id: UserData[0].id,
                foto:  UserData[0].url,
                andamento: UserData[0].andamento
            },
            {
                id: UserData[1].id,
                foto:  UserData[1].url,
                andamento: UserData[1].andamento
            }
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // DIGITALIZAÇÃO
            {
                id: FaseData[2].id,
                nome: FaseData[2].titulo,
                icone: FaseData[2].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
            },
        ]
    },

    //LOTE 13
    {
        id: '13',
        titulo: 'Lote',
        numero: 13,
        estante: '',
        protocolo: '00013',
        arquiv_fisicos: 18,
        arquiv_digitais: 0,
        id_etapa: EtapaData[9].id,
        fase_atual: 'Digitalização',
        prioridade: true,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //ADMINISTRATIVO
                id: CategoriaData[1].id,
                titulo: CategoriaData[1].name,
                prioridade: CategoriaData[1].prioridade
            }
        ],
        tipologias: [
            //SOLICITAÇÃO
            {
                id: TipologiaData[1].id,
                titulo: TipologiaData[1].nome
            }
        ],
        envolvidos: [
            {
                id: UserData[0].id,
                foto:  UserData[0].url,
                andamento: UserData[0].andamento
            },
            {
                id: UserData[1].id,
                foto:  UserData[1].url,
                andamento: UserData[1].andamento
            }
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // DIGITALIZAÇÃO
            {
                id: FaseData[2].id,
                nome: FaseData[2].titulo,
                icone: FaseData[2].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
            },
        ]
    },

    //LOTE 14
    {
        id: '14',
        titulo: 'Lote',
        numero: 14,
        estante: '',
        protocolo: '00014',
        arquiv_fisicos: 20,
        arquiv_digitais: 20,
        id_etapa: [EtapaData[10].id, EtapaData[11].id],
        fase_atual: 'Upload',
        prioridade: false,
        possui_pendencia: true,
        pendencias: [
            {
                pend_icon:'/warning.svg',
                titulo: 'Há 3 processos que não possuem verso das páginas',
                PendId: uuidv4(),
            },
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //ADMINISTRATIVO
                id: CategoriaData[1].id,
                titulo: CategoriaData[1].name,
                prioridade: CategoriaData[1].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
        ],
        envolvidos: [
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // DIGITALIZAÇÃO
            {
                id: FaseData[2].id,
                nome: FaseData[2].titulo,
                icone: FaseData[2].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
            },
        ]
    },

    //LOTE 15
    {
        id: '15',
        titulo: 'Lote',
        numero: 15,
        estante: '',
        protocolo: '00015',
        arquiv_fisicos: 20,
        arquiv_digitais: 19,
        id_etapa: [EtapaData[10].id, EtapaData[11].id],
        fase_atual: 'Upload',
        prioridade: true,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //ADMINISTRATIVO
                id: CategoriaData[1].id,
                titulo: CategoriaData[1].name,
                prioridade: CategoriaData[1].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
        ],
        envolvidos: [
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[0].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[0].url
                    }
                ]
                
            },
            // DIGITALIZAÇÃO
            {
                id: FaseData[2].id,
                nome: FaseData[2].titulo,
                icone: FaseData[2].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[1].url
                    }
                ]
            },
        ]
    },

    //LOTE 16
    {
        id: '16',
        titulo: 'Lote',
        numero: 16,
        estante: '',
        protocolo: '00016',
        arquiv_fisicos: 23,
        arquiv_digitais: 23,
        id_etapa: EtapaData[12].id,
        fase_atual: 'Upload',
        prioridade: false,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //ADMINISTRATIVO
                id: CategoriaData[1].id,
                titulo: CategoriaData[1].name,
                prioridade: CategoriaData[1].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
            //SOLICITAÇÃO
            {
                id: TipologiaData[1].id,
                titulo: TipologiaData[1].nome
            }
        ],
        envolvidos: [
            {
                id: UserData[0].id,
                foto:  UserData[0].url,
                andamento: UserData[0].andamento
            },
            {
                id: UserData[1].id,
                foto:  UserData[1].url,
                andamento: UserData[1].andamento
            }
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[0].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[0].url
                    }
                ]
                
            },
            // DIGITALIZAÇÃO
            {
                id: FaseData[2].id,
                nome: FaseData[2].titulo,
                icone: FaseData[2].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[1].url
                    }
                ]
            },
            // UPLOAD
            {
                id: FaseData[3].id,
                nome: FaseData[3].titulo,
                icone: FaseData[3].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
            },
        ]
    },

    //LOTE 17
    {
        id: '17',
        titulo: 'Lote',
        numero: 17,
        estante: '',
        protocolo: '00017',
        arquiv_fisicos: 25,
        arquiv_digitais: 25,
        id_etapa: EtapaData[13].id,
        fase_atual: 'Upload',
        prioridade: false,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //RH
                id: CategoriaData[2].id,
                titulo: CategoriaData[2].name,
                prioridade: CategoriaData[2].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
            //SOLICITAÇÃO
            {
                id: TipologiaData[1].id,
                titulo: TipologiaData[1].nome
            }
        ],
        envolvidos: [
            {
                id: UserData[3].id,
                foto:  UserData[3].url,
                andamento: UserData[3].andamento
            },
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[0].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[0].url
                    }
                ]
                
            },
            // DIGITALIZAÇÃO
            {
                id: FaseData[2].id,
                nome: FaseData[2].titulo,
                icone: FaseData[2].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[1].url
                    }
                ]
            },
            // UPLOAD
            {
                id: FaseData[3].id,
                nome: FaseData[3].titulo,
                icone: FaseData[3].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: null,
                hora_conclusao: null,
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
            },
        ]
    },

    //LOTE 18
    {
        id: "18",
        titulo: 'Lote',
        numero: 18,
        estante: '',
        protocolo: '00018',
        arquiv_fisicos: 32,
        arquiv_digitais: 32,
        id_etapa: [EtapaData[14].id, EtapaData[15].id],
        fase_atual: 'Arquivamento',
        prioridade: false,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //RH
                id: CategoriaData[2].id,
                titulo: CategoriaData[2].name,
                prioridade: CategoriaData[2].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
            //SOLICITAÇÃO
            {
                id: TipologiaData[1].id,
                titulo: TipologiaData[1].nome
            }
        ],
        envolvidos: [
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // DIGITALIZAÇÃO
            {
                id: FaseData[2].id,
                nome: FaseData[2].titulo,
                icone: FaseData[2].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
            },
            // UPLOAD
            {
                id: FaseData[3].id,
                nome: FaseData[3].titulo,
                icone: FaseData[3].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
            },
        ]
    },

    //LOTE 19
    {
        id: "19",
        titulo: 'Lote',
        numero: 19,
        estante: '',
        protocolo: '00019',
        arquiv_fisicos: 31,
        arquiv_digitais: 28,
        id_etapa: [EtapaData[14].id, EtapaData[15].id],
        fase_atual: 'Arquivamento',
        prioridade: true,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //RH
                id: CategoriaData[2].id,
                titulo: CategoriaData[2].name,
                prioridade: CategoriaData[2].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
            //SOLICITAÇÃO
            {
                id: TipologiaData[1].id,
                titulo: TipologiaData[1].nome
            }
        ],
        envolvidos: [
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
                
            },
            // DIGITALIZAÇÃO
            {
                id: FaseData[2].id,
                nome: FaseData[2].titulo,
                icone: FaseData[2].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
            },
            // UPLOAD
            {
                id: FaseData[3].id,
                nome: FaseData[3].titulo,
                icone: FaseData[3].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: UserData[0].id,
                        nome: UserData[0].name,
                        foto: UserData[0].url
                    },
                    {
                        id: UserData[1].id,
                        nome: UserData[1].name,
                        foto: UserData[1].url
                    }
                ]
            },
        ]
    },
    //LOTE 20
    {
        id: "20",
        titulo: 'Lote',
        numero: 20,
        protocolo: '00020',
        estante: '23-A',
        arquiv_fisicos: 28,
        arquiv_digitais: 27,
        id_etapa: EtapaData[16].id,
        fase_atual: 'Arquivamento',
        prioridade: true,
        possui_pendencia: true,
        pendencias: [
        ],
        observacoes: [
        ],
        categorias: [
            {
                //FINANCEIRO
                id: CategoriaData[0].id,
                titulo: CategoriaData[0].name,
                prioridade: CategoriaData[0].prioridade
            },
            {
                //RH
                id: CategoriaData[2].id,
                titulo: CategoriaData[2].name,
                prioridade: CategoriaData[2].prioridade
            }
        ],
        tipologias: [
            //CRÉDITO
            {
                id: TipologiaData[0].id,
                titulo: TipologiaData[0].nome
            },
            //SOLICITAÇÃO
            {
                id: TipologiaData[1].id,
                titulo: TipologiaData[1].nome
            }
        ],
        envolvidos: [
            {
                id: UserData[4].id,
                foto:  UserData[4].url,
                andamento: UserData[4].andamento
            },       
        ],
        detalhamento_por_fase: [
            // PREPARO
            {
                id: FaseData[0].id,
                nome: FaseData[0].titulo,
                icone: FaseData[0].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:42',
                tempo: '3:27 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[0].url
                    }
                ]
                
            },
            // CATALOGAÇÃO
            {
                id: FaseData[1].id,
                nome: FaseData[1].titulo,
                icone: FaseData[1].icone,
                inicio: '01/06/23',
                hora_inicio: '13:15',
                conclusao: '01/06/23',
                hora_conclusao:'16:15',
                tempo: '3:00 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[0].url
                    }
                ]
                
            },
            // DIGITALIZAÇÃO
            {
                id: FaseData[2].id,
                nome: FaseData[2].titulo,
                icone: FaseData[2].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[1].url
                    }
                ]
            },
            // UPLOAD
            {
                id: FaseData[3].id,
                nome: FaseData[3].titulo,
                icone: FaseData[3].icone,
                inicio: '03/06/23',
                hora_inicio: '13:20',
                conclusao: '03/06/23',
                hora_conclusao: '16:15',
                tempo: '2:55 horas',
                envolvidos: [
                    {
                        id: 1,
                        nome: 'Zé Lucas',
                        foto: UserData[3].url
                    }
                ]
            },
            //ARQUIVAMENTO
            {
                id: FaseData[4].id,
                nome: FaseData[4].titulo,
                icone: FaseData[4].icone,
                inicio: null,
                hora_inicio: null,
                conclusao: '04/06/23',
                hora_conclusao: '13:35',
                tempo: null,
                envolvidos: [
                    {
                        id: UserData[4].id,
                        nome: UserData[4].name,
                        foto: UserData[4].url
                    },
                ]
            },
        ]
    },
]