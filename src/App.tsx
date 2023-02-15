import { Routes, Route } from "react-router-dom";
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


initMyFirebase();

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<Splash/>}>
      <Routes>
        <Route path="/splash" element={<Splash />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Arquivamento" element={<Arquivamento />} />
        <Route path="/Recebidos" element={<Recebidos />} />
        <Route path="/Preparo" element={<Preparo />} />
        <Route path="/Catalogacao" element={<Catalogacao />} />
        <Route path="/Digitalizacao" element={<Digitalizacao />} />
        <Route path="/Upload" element={<Upload />} />
      </Routes>
    </Suspense>
  );
};

export default App;
