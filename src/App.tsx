import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Splash } from "./pages/Splash";
import Login from "./pages/Login";

import initMyFirebase from "./config/firebase-config";

initMyFirebase();

const Home = lazy(() => import("./pages/Home"));

const App = () => {
  return (
    <Suspense fallback={<Splash/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default App;
