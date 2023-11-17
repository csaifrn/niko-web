import { Routes, Route, useNavigate } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import Login from './pages/Login';
import { SharedState } from './context/SharedContext';
//import TokenValidation from './components/TokenValidation';

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

const token = localStorage.getItem('token');

const App = () => {
  const { user } = SharedState();

  console.log(user);
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
        <Route path="/Perfil/:id" element={token == undefined ? <Login /> : <Perfil />} />
        <Route path="Painel/:id" element={token == undefined ? <Login /> : <Painel />} />
        <Route path="/Projetos" element={token == undefined ? <Login /> : <Projetos />} />
        <Route path="/CriarProjeto" element={token == undefined ? <Login /> : <CreateProjeto />} />
        <Route path="/Fase/:id" element={token == undefined ? <Login /> : <FasesHome />} />
        <Route path="/Atividades/:id" element={token == undefined ? <Login /> : <AtividadesHome />} />
        <Route path={`/Atividades/:id/CriarAtividade`} element={token == undefined ? <Login /> : <AtividadeCreate />} />
        <Route
          path={`/Atividades/:id/Edit/:iday/:idatv`}
          element={token == undefined ? <Login /> : <AtividadeEdit />}
        />
        <Route path="Fase/:id/Board/Arquivamento" element={token == undefined ? <Login /> : <Arquivamento />} />
        <Route path="Fase/:id/Board/Recebidos" element={token == undefined ? <Login /> : <Recepcao />} />
        <Route path="Fase/:id/Board/Preparo" element={token == undefined ? <Login /> : <Preparo />} />
        <Route path="Fase/:id/Board/Catalogacao" element={token == undefined ? <Login /> : <Catalogacao />} />
        <Route path="Fase/:id/Board/Digitalizacao" element={token == undefined ? <Login /> : <Digitalizacao />} />
        <Route path="/Operadores/:id" element={token == undefined ? <Login /> : <Operadores />} />
        <Route path="/Categorias/:id" element={token == undefined ? <Login /> : <Categorias />} />
        <Route path="Fase/:id/Board/Upload" element={token == undefined ? <Login /> : <Upload />} />
        <Route path={`/Lote/:id`} element={token == undefined ? <Login /> : <LoteDetails />} />
        <Route path={`/Lote/:id/Edit`} element={token == undefined ? <Login /> : <LoteEdit />} />
      </Routes>
    </Suspense>
  );
};

export default App;
