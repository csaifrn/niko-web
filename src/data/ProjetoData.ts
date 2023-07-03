export const Projeto = [
  {
    id: '4398f464-c1b0-4814-905a-b97adc207d5a',
    name: 'Incra',
    url: 'Incra.png',
  },
  {
    id: '3faccbe9-e18a-4df3-934c-c69d2d5a837f',
    name: 'Caern',
    url: 'Caern.png',
  },
];

export const Membros = [
  {
    id: '5bb5dd2a-1e7c-4449-a9ee-2bb7088c515f',
    id_Projeto: Projeto[1].id,
    email: 'pereira.luis@escolar.ifrn.edu.br',
    roleProjeto: 'Operador',
    creator: false,
  },
  {
    id: '04d7a1ed-bbd6-4cf4-b402-38982b0399c6',
    id_Projeto: Projeto[0].id,
    email: 'pedro@email.com.br',
    roleProjeto: 'Cliente',
    creator: true,
  },
  {
    id: '04d7a1ed-bbd6-4cf4-b402-38982b0399c6',
    id_Projeto: Projeto[0].id,
    email: 'pereira.luis@escolar.ifrn.edu.br',
    roleProjeto: 'Operador',
    creator: true,
  },
  {
    id: '024da199-ead8-45bd-b3b4-380406c78841',
    id_Projeto: Projeto[1].id,
    email: 'melquiades.sousa@gmail.com',
    roleProjeto: 'Operador',
    creator: false,
  },
];
