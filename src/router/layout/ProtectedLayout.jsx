import { Outlet, useNavigate } from 'react-router-dom';
import { useAPPContext } from '../../context/AppContext';
import { useEffect } from 'react';
const ProtectedLayout = () => {
  const { user, setShowModel } = useAPPContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setShowModel(true);
      navigate('/');
      return;
    }
  }, [user, navigate, setShowModel]);

  return <> {user ? <Outlet /> : null} </>;
};

export default ProtectedLayout;
