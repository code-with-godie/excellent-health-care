import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const InitialProps = {
  user: null,
  showModel: false,
  isLogin: true,
  showDrawer: false,
  token: null,
  toastMessage: '',
  successToast: '',
  socket: null,
  notifications: [],
  showNotifications: false,
  setShowNotifications: () => {},
  setNotifications: () => {},
  setSuccessShowToast: () => {},
  setToastMesage: () => {},
  handleUser: () => {},
  setShowDrawer: () => {},
  setToken: () => {},
  setIsLogedIn: () => {},
  setShowModel: () => {},
};
const AppContext = createContext(InitialProps);
// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [token, setToken] = useState(null);
  const [socket, setSocket] = useState(null);
  const [showNotifications, setShowNotifications] = useState(true);
  const [toastMessage, setToastMesage] = useState(null);
  const [successToast, setSuccessShowToast] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDrawer, setShowDrawer] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [isLogin, setIsLogedIn] = useState(true);
  const handleUser = (user, token) => {
    localStorage.setItem('excellent-health-user', JSON.stringify(user));
    localStorage.setItem(
      'excellent-health-access-token',
      JSON.stringify(token)
    );
    setUser(user);
    setToken(token);
  };

  const share = {
    user,
    showModel,
    setShowModel,
    isLogin,
    setIsLogedIn,
    showDrawer,
    setShowDrawer,
    token,
    setToken,
    toastMessage,
    setToastMesage,
    handleUser,
    socket,
    successToast,
    setSuccessShowToast,
    notifications,
    setNotifications,
    showNotifications,
    setShowNotifications,
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('excellent-health-user'));
    const token = JSON.parse(
      localStorage.getItem('excellent-health-access-token')
    );
    setUser(user);
    setToken(token);
    setLoading(false);
  }, []);
  useEffect(() => {
    const socket = io(import.meta.env.VITE_SOCKET_URL);
    setSocket(socket);
  }, [setToken]);
  useEffect(() => {
    socket?.on('GET_NOTIFICATIONS', notifications => {
      setNotifications(notifications);
      console.log('notifications', notifications);
    });
  }, [socket]);
  return (
    <AppContext.Provider value={{ ...share }}>
      {' '}
      {loading ? 'loading' : children}{' '}
    </AppContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAPPContext = () => useContext(AppContext);

export default AppContextProvider;
