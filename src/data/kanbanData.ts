import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: " 📃 To do",
    number: "340",
    tasks: [
      {
        id: "1",
        title: "Lote 01",
        pa: [
          {
            nome: "Espinheiros",
            id: 1,
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
        id: "2",
        title: "Lote 02",
      },
      {
        id: "3",
        title: "Lote 12",
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
        title: "Lote 01",
      },
      {
        id: "6",
        title: "Lote 02",
      },
      {
        id: "7",
        title: "Lote 12",
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
        title: "Lote 15",
        pa: [
          {
            nome: "Maisa",
            id: 1,
          },
          {
            nome: "Espinheiros",
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
        title: "Lote 314",
      },
      {
        id: "10",
        title: "Lote 15",
      },
      {
        id: "11",
        title: "Lote 314",
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
        title: "Lote 300",
      },
    ],
  },
];

export default mockData;
