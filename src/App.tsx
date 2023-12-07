import { Routes, Route, useNavigate } from 'react-router-dom';
import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Login from './pages/Login';
import { SharedState } from './context/SharedContext';
import toast from 'react-hot-toast';
import Rotas from './routes';

const App = () => {
  const { user, setUser } = SharedState();
  const navigate = useNavigate();
  // const [interacao, setInteracao] = useState(Date.now()); // o valor inicial é a data atual em milisegundos
  const interacao = useRef(Date.now())
  const tempExpiracao = 60 * 60 * 1000; // 1 hora em milisegundos

  const handleUserActivity = () => {
    interacao.current = Date.now();
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('click', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const timeSinceLastInteraction = currentTime - interacao.current;
      const iSessionExpired = user && currentTime > user.exp * 1000;
      if (timeSinceLastInteraction >= tempExpiracao || iSessionExpired) {
        localStorage.clear();
        setUser(null);
        toast.error('Tempo de sessão expirado , por favor faça login novamente');
        navigate('/login');
      }
    }, 30 * 1000);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      clearInterval(interval);
    };
  }, [interacao, user]);

  return <Rotas />;
};

export default App;
