import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

// const AtividadesHome = lazy(() => import('./pages/Coordenador/Atividade/atividade-home'));
// const AtividadeCreate = lazy(() => import('./pages/Coordenador/Atividade/atividade-create'));
// const AtividadeEdit = lazy(() => import('./pages/Coordenador/Atividade/atividade-edit'));
// const Projetos = lazy(() => import('./pages/Projeto/projeto-home'));
// const Recepcao = lazy(() => import('./pages/FasesEspecificsPages/Recepção'));

const CreateProjeto = lazy(() => import('./pages/Projeto/projeto-create'));
const Painel = lazy(() => import('./pages/Coordenador/Painel'));
const FasesHome = lazy(() => import('./pages/FasesHome'));
const LoteDetails = lazy(() => import('./pages/LoteDetails'));
const LoteEdit = lazy(() => import('./pages/LoteEdit'));
const Preparo = lazy(() => import('./pages/FasesEspecificsPages/Preparo'));
const Catalogacao = lazy(() => import('./pages/FasesEspecificsPages/Catalogacao'));
const Digitalizacao = lazy(() => import('./pages/FasesEspecificsPages/Digitalizacao'));
const Upload = lazy(() => import('./pages/FasesEspecificsPages/Upload'));
const Arquivamento = lazy(() => import('./pages/FasesEspecificsPages/Arquivamento'));
const Categorias = lazy(() => import('./pages/Coordenador/Categoria'));
const OperadoresPage = lazy(() => import('./pages/Coordenador/Operador'));
const Perfil = lazy(() => import('./pages/Perfil'));
const Cadastro = lazy(() => import('./pages/Cadastro'));
const RecuperarSenha = lazy(() => import('./pages/Recuperar'));
const EscolherNovaSenha = lazy(() => import('./pages/ChangePassword'));
const Erro404 = lazy(() => import('./pages/Erros/404'));
const Unauthorized = lazy(() => import('./pages/Erros/Unauthorized'));
const Splash = lazy(() => import('./pages/Splash'));

const Rotas = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        {/* Páginas que não precisam de token */}
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/recuperar-senha/:id" element={<EscolherNovaSenha />} />
        <Route path="/" element={<Login />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Erro404 />} />

        {/* Páginas que precisam de token */}
        <Route path="/Perfil/:id" element={<Perfil />} />
        <Route path="Painel/:id" element={<Painel />} />
        {/* <Route path="/Projetos" element={<Projetos />} /> */}
        <Route path="/CriarProjeto" element={<CreateProjeto />} />
        <Route path="/Fase/:id" element={<FasesHome />} />
        {/* <Route path="/Atividades/:id" element={<AtividadesHome />} />
        <Route path={`/Atividades/:id/CriarAtividade`} element={<AtividadeCreate />} />
        <Route path={`/Atividades/:id/Edit/:iday/:idatv`} element={<AtividadeEdit />} /> */}
        <Route path="Fase/:id/Board/Arquivamento" element={<Arquivamento />} />
        {/* <Route path="Fase/:id/Board/Recebidos" element={<Recepcao />} /> */}
        <Route path="Fase/:id/Board/Preparo" element={<Preparo />} />
        <Route path="Fase/:id/Board/Catalogação" element={<Catalogacao />} />
        <Route path="Fase/:id/Board/Digitalização" element={<Digitalizacao />} />
        <Route path="/Operadores/:id" element={<OperadoresPage />} />
        <Route path="/Categorias/:id" element={<Categorias />} />
        <Route path="Fase/:id/Board/Upload" element={<Upload />} />
        <Route path={`/Lote/:id`} element={<LoteDetails />} />
        <Route path={`/Lote/:id/Edit`} element={<LoteEdit  />} />
      </Routes>
    </Suspense>
  );
};

export default Rotas;
