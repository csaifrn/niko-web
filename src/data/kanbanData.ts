import { v4 as uuidv4 } from "uuid";

const mockData = [
  //DISPONÍVEIS
  {
    id: uuidv4(),
    title: "Disponíveis",
    tasks: [
      //LOTE 11
      {
        id: "1",
        title: "Lote 11",
        categoria: [
          {
            nome: "Administrativo",
            id: 1,
          },
        ],
      },
      //LOTE 10
      {
        id: "2",
        title: "Lote 10",
        categoria: [
          {
            nome: "Administrativo",
            id: 1,
          },
        ],
      },
      //LOTE 09
      {
        id: "3",
        title: "Lote 09",
        categoria: [
          {
            nome: "Administrativo",
            id: 1,
          },
        ],
      },
    ],
  },
  //EM ANDAMENTO
  {
    id: uuidv4(),
    title: "Em andamento",
    tasks: [
      //LOTE 05
      {
        id: "8",
        title: "Lote 05",
        categoria: [
          {
            nome: "Jurídico",
            id: 3,
          },
          {
            nome: "Administrativo",
            id: 1,
          },
        ],
        envolvidos: [
          {
            envolvidoId: uuidv4(),
            foto: "https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg",
          },
          {
            envolvidoId: uuidv4(),
            foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
          },
          {
            envolvidoId: uuidv4(),
            foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
          },
          {
            envolvidoId: uuidv4(),
            foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
          },
        ],
      },
      //LOTE 04
      {
        id: "9",
        title: "Lote 04",
        categoria: [
          {
            nome: "Jurídico",
            id: 3,
          },
        ],
        envolvidos: [
          {
            envolvidoId: uuidv4(),
            foto: "https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg",
          },
        ],
      },
      //LOTE 03
      {
        id: "10",
        title: "Lote 03",
        categoria: [
          {
            nome: "Jurídico",
            id: 3,
          },
        ],
        envolvidos: [
          {
            envolvidoId: uuidv4(),
            foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
          },
        ],
      },
      //LOTE 02
      {
        id: "11",
        title: "Lote 02",
        categoria: [
          {
            nome: "Jurídico",
            id: 3,
          },
        ],
        envolvidos: [
          {
            envolvidoId: uuidv4(),
            foto: "https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg",
          },
        ],
      },
    ],
  },
  //EM PAUSA
  {
    id: uuidv4(),
    title: "Em pausa",
    number: "10",
    tasks: [
      //LOTE 08
      {
        id: "5",
        title: "Lote 08",
        categoria: [
          {
            nome: "RH",
            id: 2,
          },
        ],
        envolvidos: [
          {
            envolvidoId: uuidv4(),
            foto: "https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg",
          },
        ],
      },
      //LOTE 07
      {
        id: "6",
        title: "Lote 07",
        categoria: [
          {
            nome: "RH",
            id: 2,
          },
        ],
        envolvidos: [
          {
            envolvidoId: uuidv4(),
            foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
          },
        ],
      },
      //LOTE 06
      {
        id: "7",
        title: "Lote 06",
        categoria: [
          {
            nome: "RH",
            id: 2,
          },
        ],
        envolvidos: [
          {
            envolvidoId: uuidv4(),
            foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
          },
        ],
      },
    ],
  },
  // CONCLUÍDOS
  {
    id: uuidv4(),
    title: "Concluídos",
    tasks: [
      //LOTE 01
      {
        id: "12",
        title: "Lote 01",
        protocolo: "000209",
        categoria: [
          {
            nome: "Financeiro",
            id: 4,
          },
        ],
        fase: [
          {
            nome: "catalogacao",
            id: 1,
          },
        ],
        envolvidos: [
          {
            envolvidoId: uuidv4(),
            foto: "https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg",
          },
          {
            envolvidoId: uuidv4(),
            foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
          },
        ],

        etapas: [
          {
            id: 1,

            recepçao: [
              {
                id: uuidv4(),
                title: "Recepção",
                icone: "/Recebimento_Icon.svg",
                time: "/time.svg",
                account:"/Account.svg" ,
                start: "02/04/2023 - 13:12",
                end: "02/04/2023 - 15:00",
                envolvidos: [
                  {
                    envolvidoId: uuidv4(),
                    foto: "https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg",
                  },
                  {
                    envolvidoId: uuidv4(),
                    foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
                  },
                ],
              },
            ],

            preparo: [
              {
                id: uuidv4(),
                title: "Preparo",
                icone: "/Preparo_Icon.svg",
                time: "/time.svg",
                account:"/Account.svg",
                start: "03/04/2023 - 13:10",
                end: "03/04/2023 - 16:00",
                envolvidos: [
                  {
                    envolvidoId: uuidv4(),
                    foto: "https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg",
                  },
                  {
                    envolvidoId: uuidv4(),
                    foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
                  },
                ],
              },
            ],

            catalogacao: [
              {
                id: uuidv4(),
                title: "Catalogação",
                icone: "/Catalogacao_icon.svg",
                time: "/time.svg",
                account:"/Account.svg",
                start: "04/04/2023 - 13:15",
                end: "04/04/2023 - 15:32",
                envolvidos: [
                  {
                    envolvidoId: uuidv4(),
                    foto: "https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg",
                  },
                  {
                    envolvidoId: uuidv4(),
                    foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
                  },
                ],
              },
            ],

            digitalizacao: [
              {
                id: uuidv4(),
                title: "Digitalização",
                icone: "/Digitalizacao_icon.svg",
                time: "/time.svg",
                account:"/Account.svg",
                start: "05/04/2023 - 13:05",
                end: "05/04/2023 - 17:00",
                envolvidos: [
                  {
                    envolvidoId: uuidv4(),
                    foto: "https://i.pinimg.com/474x/38/a7/f1/38a7f176c4783fd6f91a572057f5e2e8--figure-painting-the-high.jpg",
                  },
                  {
                    envolvidoId: uuidv4(),
                    foto: "https://lh3.googleusercontent.com/a/AEdFTp4rZn-tIHMtcekPx2eo7A21IruNxrGHBlQfzpkh=s96-c",
                  },
                ],
              },
            ],

          }
        ]

      },
    ],
  },
];

export default mockData;

const DataS = [
  {
    recepçao: mockData,
    preparo: mockData,
    catalogacao: mockData,        
    digitalizacao: mockData,
    upload: mockData,
    arquivamento: mockData,
  },
];
