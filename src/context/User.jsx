import { createContext, useState } from "react";
import { postLogin, postLogout, postRegister } from "../services/api/auth";

export const UserContext = createContext({
  user: {},
  login: () => {},
  logout: () => {},
  register: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const login = (email, password) => {
    postLogin(email, password).then((data) => {
      setUser(data.user);
    });
  };

  const logout = () => {
    postLogout().then(() => {
      setUser({});
    });
  };

  const register = (username, email, password) => {
    postRegister(username, email, password).then(() => {
      login(email, password);
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};
