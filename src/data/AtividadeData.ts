import CategoriaData from './CategoriaData';
import FaseData from './FaseData';
import { LoteData } from './LoteData';
import { Projeto } from './ProjetoData';
import Users from './UserData';

const AtividadeData = [
  {
    id: '1',
    data: new Date(2023, 5, 19),
    id_projeto: Projeto[1].id,
    atividades: [
      {
        id: 'f4b30538-ccfa-47e4-aac5-17f7ae3507df',
        faseData: [
          {
            faseData: FaseData[2],
            categoriasTipologias: [CategoriaData[0], CategoriaData[1]],
            users: [
              {
                user: Users[0],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
          {
            faseData: FaseData[3],
            users: [
              {
                user: Users[3],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
              {
                user: Users[2],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'cb678c9c-c1ca-4f05-a066-b70fdbb9251d',
        faseData: [
          {
            faseData: FaseData[0],
            categoriasTipologias: [CategoriaData[0], CategoriaData[1]],
            users: [
              {
                user: Users[0],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
          {
            faseData: FaseData[2],
            users: [
              {
                user: Users[1],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
          {
            faseData: FaseData[4],
            users: [
              {
                user: Users[2],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '2',
    data: new Date(2023, 5, 22),
    id_projeto: Projeto[0].id,
    atividades: [
      {
        id: 'cca884f9-c26a-4d2b-8a6b-ded228c2004e',
        faseData: [
          {
            faseData: FaseData[2],
            categoriasTipologias: [CategoriaData[0], CategoriaData[1]],
            users: [
              {
                user: Users[0],
                Lotes: [
                  { check: false, lote: LoteData[4] },
                  { check: false, lote: LoteData[2] },
                ],
              },
            ],
          },
          {
            faseData: FaseData[3],
            users: [
              {
                user: Users[3],
                Lotes: [
                  { check: false, lote: LoteData[7] },
                  { check: false, lote: LoteData[2] },
                ],
              },
              {
                user: Users[2],
                Lotes: [
                  { check: false, lote: LoteData[3] },
                  { check: false, lote: LoteData[2] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'c3a7cffa-488a-49ea-ae8c-e3bd41f36f22',
        faseData: [
          {
            faseData: FaseData[0],
            categoriasTipologias: [CategoriaData[0], CategoriaData[1]],
            users: [
              {
                user: Users[0],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
          {
            faseData: FaseData[2],
            users: [
              {
                user: Users[1],
                Lotes: [
                  { check: true, lote: LoteData[4] },
                  { check: true, lote: LoteData[7] },
                ],
              },
            ],
          },
          {
            faseData: FaseData[4],
            users: [
              {
                user: Users[2],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '3',
    data: new Date(2023, 5, 29),
    id_projeto: Projeto[0].id,
    atividades: [
      {
        id: '45a46284-3676-4621-913a-0fce3769a49e',
        faseData: [
          {
            faseData: FaseData[2],
            categoriasTipologias: [CategoriaData[0], CategoriaData[1]],
            users: [
              {
                user: Users[0],
                Lotes: [
                  { check: true, lote: LoteData[9] },
                  { check: true, lote: LoteData[8] },
                ],
              },
            ],
          },
          {
            faseData: FaseData[3],
            users: [
              {
                user: Users[3],
                Lotes: [
                  { check: true, lote: LoteData[10] },
                  { check: false, lote: LoteData[2] },
                ],
              },
              {
                user: Users[2],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
        ],
      },
      {
        id: '6ea836ce-185c-4c5b-83fa-d560a78c9c08',
        faseData: [
          {
            faseData: FaseData[0],
            categoriasTipologias: [CategoriaData[0], CategoriaData[1]],
            users: [
              {
                user: Users[0],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
          {
            faseData: FaseData[2],
            users: [
              {
                user: Users[1],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
          {
            faseData: FaseData[4],
            users: [
              {
                user: Users[2],
                Lotes: [
                  { check: false, lote: LoteData[0] },
                  { check: false, lote: LoteData[1] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default AtividadeData;
