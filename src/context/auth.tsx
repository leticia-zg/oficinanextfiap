// src/context/auth.tsx
import { createContext, useContext, useEffect, useState } from 'react';

// Definindo as interfaces para o contexto e o usuário
interface User {
    email: string;
    password: string;
}

interface AuthContextType {
    user: User | null;
    signed: boolean;
    signin: (email: string, password: string) => string | null;
    signup: (email: string, password: string) => string | null;
    signout: () => void;
}

// Criando o contexto com um valor padrão
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const userToken = localStorage.getItem('user_token');
        const usersStorage = localStorage.getItem('users_bd');

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.find(
                (user: User) => user.email === JSON.parse(userToken).email
            );
            if (hasUser) setUser(hasUser);
        }
    }, []);

    const signin = (email: string, password: string): string | null => {
        const usersStorage: User[] = JSON.parse(localStorage.getItem('users_bd') || '[]');
        const hasUser = usersStorage.find(user => user.email === email);

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

    const signup = (email: string, password: string): string | null => {
        const usersStorage: User[] = JSON.parse(localStorage.getItem('users_bd') || '[]');
        const existingUser = usersStorage.find(user => user.email === email);

        if (existingUser) {
            return 'Email já cadastrado';
        }

        const newUser: User = { email, password }; // Adapte conforme necessário
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
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
