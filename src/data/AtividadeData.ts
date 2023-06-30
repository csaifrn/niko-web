import CategoriaData from './CategoriaData';
import FaseData from './FaseData';
import { LoteData } from './LoteData';
import { Projeto } from './ProjetoData';
import Users from './UserData';

const AtividadeData = [
  {
    id: '1',
    data: new Date(2023, 5, 19),
    id_projeto: Projeto[0].id,
    atividades: [
      {
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
    id: '1',
    data: new Date(2023, 5, 22),
    id_projeto: Projeto[0].id,
    atividades: [
      {
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
    id: '1',
    data: new Date(2023, 5, 29),
    id_projeto: Projeto[0].id,
    atividades: [
      {
        faseData: [
          {
            faseData: FaseData[2],
            categoriasTipologias: [CategoriaData[0], CategoriaData[1]],
            users: [
              {
                user: Users[0],
                Lotes: [
                  { check: true, lote: LoteData[0] },
                  { check: true, lote: LoteData[1] },
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
                  { check: true, lote: LoteData[0] },
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
