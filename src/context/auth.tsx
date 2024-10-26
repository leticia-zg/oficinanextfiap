import { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem('user_token');
    const usersStorage = localStorage.getItem('users_bd');

    if (userToken && usersStorage) {
      const hasUser = JSON.parse(usersStorage)?.find(
        (user) => user.email === JSON.parse(userToken).email
      );
      if (hasUser) setUser(hasUser);
    }
  }, []);

  const signin = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd'));
    const hasUser = usersStorage?.find(user => user.email === email);

    if (hasUser) {
      if (hasUser.password === password) {
        const token = Math.random().toString(36).substring(2);
        localStorage.setItem('user_token', JSON.stringify({ email, token }));
        setUser(hasUser);
        return null; // Sucesso
      } else {
        return 'Email ou senha incorretos';
      }
    } else {
      return 'Usuário não cadastrado';
    }
  };

  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd')) || [];
    const existingUser = usersStorage.find(user => user.email === email);

    if (existingUser) {
      return 'Email já cadastrado';
    }

    const newUser = { email, password }; // Adapte conforme necessário
    usersStorage.push(newUser);
    localStorage.setItem('users_bd', JSON.stringify(usersStorage));

    return null; // Sucesso
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('user_token');
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
