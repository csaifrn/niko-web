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
import LoteDetails from './components/LoteDetails';
import Operador from './pages/Coordenador/Operador';
import Categoria from './pages/Coordenador/Categoria';
import { RequireAuth } from 'react-auth-kit';
import Erro404 from './pages/Erros/404';
import Unauthorized from './pages/Erros/Unauthorized';
import Projetos from './pages/Projeto/HomeUser';
import CreateProjeto from './pages/Projeto/CreateProjeto';
import Users from './data/UserData';
import Auth from './config/Auth';
import { EditModal } from './components/EditModal';

const Home = lazy(() => import('./pages/Home'));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route
          path="/splash"
          element={
            <RequireAuth loginPath={'/login'}>
              <Splash />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />

        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route
          path="/Projetos"
          element={
            <RequireAuth loginPath={'/login'}>
              <Projetos />
            </RequireAuth>
          }
        />
        <Route
          path="/CriarProjeto"
          element={
            <RequireAuth loginPath={'/login'}>
              <CreateProjeto users={Users} />
            </RequireAuth>
          }
        />
        <Route element={<Auth allowedRoles={['Coordenador']} />}>
          <Route path="/Fase/:id" element={<Home />} />

          <Route
            path="Fase/:id/Board/Arquivamento"
            element={
              <RequireAuth loginPath={'/login'}>
                <Arquivamento />
              </RequireAuth>
            }
          />
          <Route
            path="Fase/:id/Board/Recebidos"
            element={
              <RequireAuth loginPath={'/login'}>
                <Recebidos etapa="recebidos" />
              </RequireAuth>
            }
          />
          <Route
            path="Fase/:id/Board/Preparo"
            element={
              // <RequireAuth loginPath={'/login'}>
                <Preparo />
              // </RequireAuth>
            }
          />
          <Route
            path="Fase/:id/Board/Catalogacao"
            element={
              <RequireAuth loginPath={'/login'}>
                <Catalogacao />
              </RequireAuth>
            }
          />
          <Route
            path="Fase/:id/Board/Digitalizacao"
            element={
              <RequireAuth loginPath={'/login'}>
                <Digitalizacao />
              </RequireAuth>
            }
          />
          <Route
            path="/Operadores/:id"
            element={
              <RequireAuth loginPath={'/login'}>
                <Operador />
              </RequireAuth>
            }
          />
          <Route
            path="/Categorias/:id"
            element={
              <RequireAuth loginPath={'/login'}>
                <Categoria />
              </RequireAuth>
            }
          />
          <Route
            path="Fase/:id/Board/Upload"
            element={
              <RequireAuth loginPath={'/login'}>
                <Upload />
              </RequireAuth>
            }
          />
          <Route
            path={`/Lote/:id`}
            element={
              <RequireAuth loginPath={'/login'}>
                <LoteDetails />
              </RequireAuth>
            }
          />

          <Route
            path={`/Lote/:id/Edit`}
            element={
              <RequireAuth loginPath={'/login'}>
                <EditModal/>
              </RequireAuth>
            }
          />

        {/* </Route> */}

        </Route>
        <Route path="*" element={<Erro404 />} />

        {/* <Route
          path="/Fase"
          element={
            <RequireAuth loginPath={'/login'}>
              <Home />
            </RequireAuth>
          }
        /> */}
      </Routes>
    </Suspense>
  );
};

export default App;

