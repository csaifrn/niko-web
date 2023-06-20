import { v4 as uuidv4 } from 'uuid';
import Users from './UserData';

const EntradaData = [
    {
        id: uuidv4(),
        Observacao:'As caixas vieram um pouco descoladas e alguns documentos estavam manchados',
        Qtd_caixa: 23,
        id_cliente: Users[0].id,
    },
    {
        id: uuidv4(),
        Observacao:'',
        Qtd_caixa: 40,
        id_cliente: Users[0].id,
    },
      {
        id: uuidv4(),
        Observacao:'Tudo Ok',
        Qtd_caixa: 12,
        id_cliente: Users[0].id,
    },
]

export default EntradaData;