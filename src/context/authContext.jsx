import { useState, createContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [userProvider, setUserProvider] = useState({
    id: "",
    id_loja: "",
    name: "",
    email: "",
    phone: "",
    avatar: "",
    schedule: [],
    isLoggin: false,
  });
  return (
    <AuthContext.Provider value={{ userProvider, setUserProvider }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
