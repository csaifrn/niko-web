import Users from './UserData';
import { Projeto } from './ProjetoData';

const EntradaData = [
  {
    id: 'cf0c81b8-494f-4b30-9886-7e2f710f2971',
    Observacao: 'As caixas vieram um pouco descoladas e alguns documentos estavam manchados',
    Qtd_caixa: 23,
    id_cliente: Users[0].id,
    id_projeto: Projeto[1].id,
  },
  {
    id: '185e6f88-d83c-48d9-b359-6d3b99d81e57',
    Observacao: 'As caixas vieram em bom estado',
    Qtd_caixa: 40,
    id_cliente: Users[0].id,
    id_projeto: Projeto[0].id,
  },
  {
    id: '00ee4e27-4d15-44ab-a453-bcb45921246c',
    Observacao: 'Incrivel meteorito',
    Qtd_caixa: 12,
    data: '24/02/2032',
    id_cliente: Users[0].id,
    id_projeto: Projeto[0].id,
  },
  {
    id: '185e63528-d83c-48d9-b359-6d3b99d81e57',
    Observacao: 'asdad',
    Qtd_caixa: 40,
    data: '24/02/2032',
    id_cliente: Users[0].id,
    id_projeto: Projeto[0].id,
  },
  {
    id: '00ee4e27-2d15-44ab-a453-bcb45921246c',
    Observacao: 'Tudo Ok',
    Qtd_caixa: 12,
    data: '24/02/2032',
    id_cliente: Users[0].id,
    id_projeto: Projeto[0].id,
  },
];

export default EntradaData;
