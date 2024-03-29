import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

const TokenValidation = (props: Props) => {
  const token = localStorage.getItem('token');

  if (!token) {
    const navigate = useNavigate();
    navigate('/login');
  }
};

export default TokenValidation;
