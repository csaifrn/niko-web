import { Routes, Route, useParams } from "react-router-dom";
import { Suspense, lazy } from "react";
import Login from "./pages/Login";

import initMyFirebase from "./config/firebase-config";
import Splash from "./pages/Splash";

import Arquivamento from "./pages/Etapas/Arquivamento";
import Recebidos from "./pages/Etapas/Recebidos";
import Preparo from "./pages/Etapas/Preparo";
import Catalogacao from "./pages/Etapas/Catalogacao";
import Digitalizacao from "./pages/Etapas/Digitalizacao";
import Upload from "./pages/Etapas/Upload";
import LoteDetails from "./components/LoteDetails";
import MenuCoord from "./components/MenuCoord";
import Operador from "./pages/Coordenador/Operador";
import Categoria from "./pages/Coordenador/Categoria";
import { Menu } from "./components/Menu";
import { RequireAuth } from "react-auth-kit";
import { param } from "jquery";

initMyFirebase();

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Routes>
        <Route path="/splash" element={<RequireAuth loginPath={'/login'}><Splash /></RequireAuth>} />
        <Route path="/Fase" element={<RequireAuth loginPath={'/login'}><Home /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/Board/Arquivamento" element={<RequireAuth loginPath={'/login'}><Arquivamento /></RequireAuth>} />
        <Route path="/Board/Recebidos" element={<RequireAuth loginPath={'/login'}><Recebidos etapa='recebidos' /></RequireAuth>} />
        <Route path="/Board/Preparo" element={<RequireAuth loginPath={'/login'}><Preparo /></RequireAuth>} />
        <Route path="/Board/Catalogacao" element={<RequireAuth loginPath={'/login'}><Catalogacao /></RequireAuth>} />
        <Route path="/Board/Digitalizacao" element={<RequireAuth loginPath={'/login'}><Digitalizacao /></RequireAuth>} />
        <Route path="/Operadores" element={<RequireAuth loginPath={'/login'}><Operador /></RequireAuth>} />
        <Route path="/Categorias" element={<RequireAuth loginPath={'/login'}><Categoria /></RequireAuth>} />
        <Route path="/Board/Upload" element={<RequireAuth loginPath={'/login'}><Upload /></RequireAuth>} />
        <Route path={`/Lote/:id`} element={<RequireAuth loginPath={'/login'}><LoteDetails/></RequireAuth>} />
      </Routes>
    </Suspense>
  );
};

export default App;
