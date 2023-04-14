import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: " 📃 To do",
    number: "340",
    tasks: [
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
  {
    id: uuidv4(),
    title: " 📃 Paused",
    number: "10",
    tasks: [
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
  {
    id: uuidv4(),
    title: " ✏️ In progress",
    number: "4",
    tasks: [
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
        ],
      },
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
  {
    id: uuidv4(),
    title: " ✔️ Completed",
    number: "243",
    tasks: [
      {
        id: "12",
        title: "Lote 01",
        categoria: [
          {
            nome: "Financeiro",
            id: 4,
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
        catalogacao: [
          {
            id: uuidv4(),
            title: "Catalogação",
            start: "04/12/2023",
            end: "04/12/2023",
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
      },
    ],
  },
];

export default mockData;

const DataS = [
  {
    arquivamento: mockData,
    catalogacao: mockData,
    digitalizacao: mockData,
    preparo: mockData,
    upload: mockData,
  },
];
