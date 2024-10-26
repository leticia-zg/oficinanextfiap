import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import './Login.css';

export default function Login() {
    const { signin } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        // Validação de e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setError('Por favor, preencha o e-mail.');
            return;
        }

        if (!emailPattern.test(email)) {
            setError('Por favor, insira um e-mail válido.');
            return;
        }

        if (!password) {
            setError('Por favor, preencha a senha.');
            return;
        }

        // Chame a função de login com o e-mail e a senha
        const res = signin(email, password); // Ajuste conforme necessário

        if (res) {
            setError(res);
            return;
        }

        // Redireciona para a página de agendamentos
        navigate('/');
    };

    return (
        <>
            <nav className="navbar">
                <img src="/imgs/logodesktop.png" alt="Logo Porto" className="logo-porto" />
            </nav>
            <main className="main-login">
                <Link to="/"><img src="/imgs/setaazul.png" alt="seta azul" className="seta" /></Link>
                
                <h1>ACESSAR CONTA</h1>
                <section className="section-acessarconta" role="group">
                    <h2>Preencha seus dados de acesso para <br />continuar.</h2>
                    <form role="form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="E-mail"
                            role="textbox"
                            aria-label="email"
                            className="input-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            role="textbox"
                            aria-label="senha"
                            className="input-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="error-message">{error}</p>}
                        <input
                            type="submit"
                            value="Entrar"
                            role="button"
                            aria-label="Entrar"
                            className="btn-enviar"
                        />
                    </form>
                </section>
                <section className="lembrete" role="group">
                    <p>Ainda não tem conta Porto Seguro?</p>
                    <p className="p-criar" role="link">
                        <Link to="/signup">Crie uma agora mesmo :)</Link>
                    </p>
                </section>
            </main>
        </>
    );
}
