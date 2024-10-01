import { createContext, useContext, useState } from 'react';

const InitialProps = {
  user: null,
  showModel: false,
  isLogin: true,
  showDrawer: false,
  setShowDrawer: () => {},
  setIsLogedIn: () => {},
  setUser: () => {},
  setShowModel: () => {},
};
const AppContext = createContext(InitialProps);
// eslint-disable-next-line react/prop-types
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [showDrawer, setShowDrawer] = useState(null);
  const [showModel, setShowModel] = useState(false);
  const [isLogin, setIsLogedIn] = useState(true);

  const share = {
    user,
    setUser,
    showModel,
    setShowModel,
    isLogin,
    setIsLogedIn,
    showDrawer,
    setShowDrawer,
  };
  return (
    <AppContext.Provider value={{ ...share }}> {children} </AppContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useAPPContext = () => useContext(AppContext);

export default AppContextProvider;
