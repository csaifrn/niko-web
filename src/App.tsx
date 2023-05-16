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

initMyFirebase();

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <Menu area="/"></Menu>
      <MenuCoord area="/" />
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/Fase" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Board/Arquivamento" element={<Arquivamento />} />
        <Route path="/Board/Recebidos" element={<Recebidos etapa='recebidos' />} />
        <Route path="/Board/Preparo" element={<Preparo />} />
        <Route path="/Board/Catalogacao" element={<Catalogacao />} />
        <Route path="/Board/Digitalizacao" element={<Digitalizacao />} />
        <Route path="/Operadores" element={<Operador />} />
        <Route path="/Categorias" element={<Categoria />} />
        <Route path="/Board/Upload" element={<Upload />} />
        <Route path={`/Lote/:id`} element={<LoteDetails/>} />
      </Routes>
    </Suspense>
  );
};

export default App;
