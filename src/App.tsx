import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Login from './pages/Login';
import Splash from './pages/Splash';
import Arquivamento from './pages/Etapas/Arquivamento';
import Recebidos from './pages/Etapas/Recebidos';
import Preparo from './pages/Etapas/Preparo';
import Catalogacao from './pages/Etapas/Catalogacao';
import Digitalizacao from './pages/Etapas/Digitalizacao';
import Upload from './pages/Etapas/Upload';
import Operador from './pages/Coordenador/Operador';
import Categoria from './pages/Coordenador/Categoria';
import Erro404 from './pages/Erros/404';
import Unauthorized from './pages/Erros/Unauthorized';
import Projetos from './pages/Projeto/projeto-home';
import CreateProjeto from './pages/Projeto/projeto-create';
import Atividade from './pages/Coordenador/Atividade/atividade-home';
import AtividadeCreate from './pages/Coordenador/Atividade/atividade-create';
import AtividadeEdit from './pages/Coordenador/Atividade/atividade-edit';
import Painel from './pages/Coordenador/Painel';
import Perfil from './pages/Perfil';
import LoteDetails from './components/LoteDetails';
import { EditModal } from './components/EditModal';
import Cadastro from './pages/Cadastro';
import RecuperarSenha from './pages/Recuperar';
import ChangePassword from './pages/ChangePassword';

const Home = lazy(() => import('./pages/Coordenador/Fase'));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Perfil/:id" element={<Perfil />} />
        <Route path="Painel/:id" element={<Painel />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-senha" element={<RecuperarSenha />} />
        <Route path="/recuperar-senha/:id" element={<ChangePassword />} />
        <Route path="/" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/Projetos" element={<Projetos />} />
        <Route path="/CriarProjeto" element={<CreateProjeto />} />
        <Route path="/Fase/:id" element={<Home />} />
        <Route path="/Atividades/:id" element={<Atividade />} />
        <Route path={`/Atividades/:id/CriarAtividade`} element={<AtividadeCreate />} />
        <Route path={`/Atividades/:id/Edit/:iday/:idatv`} element={<AtividadeEdit />} />
        <Route path="Fase/:id/Board/Arquivamento" element={<Arquivamento />} />
        <Route path="Fase/:id/Board/Recebidos" element={<Recebidos />} />
        <Route path="Fase/:id/Board/Preparo" element={<Preparo />} />
        <Route path="Fase/:id/Board/Catalogacao" element={<Catalogacao />} />
        <Route path="Fase/:id/Board/Digitalizacao" element={<Digitalizacao />} />
        <Route path="/Operadores/:id" element={<Operador />} />
        <Route path="/Categorias/:id" element={<Categoria />} />
        <Route path="Fase/:id/Board/Upload" element={<Upload />} />
        <Route path={`/Lote/:id`} element={<LoteDetails />} />
        <Route path={`/Lote/:id/Edit`} element={<EditModal />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </Suspense>
  );
};

export default App;
