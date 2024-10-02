import { Outlet, useNavigate } from 'react-router-dom';
import { useAPPContext } from '../../context/AppContext';
import { useEffect } from 'react';
const ProtectedLayout = () => {
  const { user } = useAPPContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role !== 'admin') {
      navigate('/');
      return;
    }
  }, [user, navigate]);

  return <> {user ? <Outlet /> : null} </>;
};

export default ProtectedLayout;
