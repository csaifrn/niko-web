import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Login from './pages/Login';
import TokenValidation from './components/TokenValidation';

const Projetos = lazy(() => import('./pages/Projeto/projeto-home'));
const CreateProjeto = lazy(() => import('./pages/Projeto/projeto-create'));
const Painel = lazy(() => import('./pages/Coordenador/Painel'));
const AtividadesHome = lazy(() => import('./pages/Coordenador/Atividade/atividade-home'));
const AtividadeCreate = lazy(() => import('./pages/Coordenador/Atividade/atividade-create'));
const AtividadeEdit = lazy(() => import('./pages/Coordenador/Atividade/atividade-edit'));
const FasesHome = lazy(() => import('./pages/Coordenador/Fase'));
const LoteDetails = lazy(() => import('./components/LoteDetails'));
const LoteEdit = lazy(() => import('./components/LoteEdit'));
const Recepcao = lazy(() => import('./pages/Etapas/Recebidos'));
const Preparo = lazy(() => import('./pages/Etapas/Preparo'));
const Catalogacao = lazy(() => import('./pages/Etapas/Catalogacao'));
const Digitalizacao = lazy(() => import('./pages/Etapas/Digitalizacao'));
const Upload = lazy(() => import('./pages/Etapas/Upload'));
const Arquivamento = lazy(() => import('./pages/Etapas/Arquivamento'));
const Categorias = lazy(() => import('./pages/Coordenador/Categoria'));
const Operadores = lazy(() => import('./pages/Coordenador/Operador'));
const Perfil = lazy(() => import('./pages/Perfil'));
const Cadastro = lazy(() => import('./pages/Cadastro'));
const RecuperarSenha = lazy(() => import('./pages/Recuperar'));
const EscolherNovaSenha = lazy(() => import('./pages/ChangePassword'));
const Erro404 = lazy(() => import('./pages/Erros/404'));
const Unauthorized = lazy(() => import('./pages/Erros/Unauthorized'));
const Splash = lazy(() => import('./pages/Splash'));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/recuperar-senha/:id" element={<EscolherNovaSenha />} />
        <Route path="/" element={<Login />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="*" element={<Erro404 />} />

        <Route
          element={
            <TokenValidation>
              <Route path="/Perfil/:id" element={<Perfil />} />
              <Route path="Painel/:id" element={<Painel />} />
              <Route path="/Projetos" element={<Projetos />} />
              <Route path="/CriarProjeto" element={<CreateProjeto />} />
              <Route path="/Fase/:id" element={<FasesHome />} />
              <Route path="/Atividades/:id" element={<AtividadesHome />} />
              <Route path={`/Atividades/:id/CriarAtividade`} element={<AtividadeCreate />} />
              <Route path={`/Atividades/:id/Edit/:iday/:idatv`} element={<AtividadeEdit />} />
              <Route path="Fase/:id/Board/Arquivamento" element={<Arquivamento />} />
              <Route path="Fase/:id/Board/Recebidos" element={<Recepcao />} />
              <Route path="Fase/:id/Board/Preparo" element={<Preparo />} />
              <Route path="Fase/:id/Board/Catalogacao" element={<Catalogacao />} />
              <Route path="Fase/:id/Board/Digitalizacao" element={<Digitalizacao />} />
              <Route path="/Operadores/:id" element={<Operadores />} />
              <Route path="/Categorias/:id" element={<Categorias />} />
              <Route path="Fase/:id/Board/Upload" element={<Upload />} />
              <Route path={`/Lote/:id`} element={<LoteDetails />} />
              <Route path={`/Lote/:id/Edit`} element={<LoteEdit />} />
            </TokenValidation>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
