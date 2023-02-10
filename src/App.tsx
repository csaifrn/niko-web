import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Login from "./pages/Login";

import initMyFirebase from "./config/firebase-config";
import Splash from "./pages/Splash";
import Arquivamento from "./pages/Etapas/Arquivamento";

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
      </Routes>
    </Suspense>
  );
};

export default App;
