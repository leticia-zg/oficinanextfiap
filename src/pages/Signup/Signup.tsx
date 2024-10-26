import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import './Signup.css';

export default function SignupPage() {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const passwordRequirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /\d/.test(password),
        specialChar: /[@$!%*?&]/.test(password),
    };

    const allRequirementsMet = Object.values(passwordRequirements).every(Boolean);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true); // Start loading

        if (!email || !password || !confirmPassword) {
            setError('Por favor, preencha todos os campos.');
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            setLoading(false);
            return;
        }

        if (!allRequirementsMet) {
            setError('A senha deve atender a todos os requisitos.');
            setLoading(false);
            return;
        }

        try {
            const res = await signup(email, password); // Handle async signup
            if (res) {
                setError(res);
                setLoading(false);
                return;
            }

            alert('Usuário cadastrado com sucesso!');
            navigate('/login');
        } catch (err) {
            setError('Ocorreu um erro ao cadastrar. Tente novamente.');
            setLoading(false);
        }
    };

    return (
        <>
            <nav className="navbar">
                <img src="/imgs/logodesktop.png" alt="Logo Porto" className="logo-porto" />
            </nav>
            <main className="main-signup">
                <h1>CRIAR CONTA</h1>
                <section className="section-criarconta" role="group">
                    <h2>Preencha seus dados para criar uma conta.</h2>
                    <form role="form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="E-mail"
                            role="textbox"
                            aria-label="E-mail"
                            className="input-email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            role="textbox"
                            aria-label="Senha"
                            className="input-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <ul className="password-requirements" style={{ listStyle: 'none', padding: 0, marginTop: '3px' }}>
                            <li style={{ color: passwordRequirements.length ? 'green' : 'red', fontSize: '14px', padding: '2px' }}>
                                Pelo menos 8 caracteres
                            </li>
                            <li style={{ color: passwordRequirements.uppercase ? 'green' : 'red', fontSize: '14px', padding: '2px' }}>
                                Pelo menos 1 letra maiúscula
                            </li>
                            <li style={{ color: passwordRequirements.lowercase ? 'green' : 'red', fontSize: '14px', padding: '2px' }}>
                                Pelo menos 1 letra minúscula
                            </li>
                            <li style={{ color: passwordRequirements.number ? 'green' : 'red', fontSize: '14px', padding: '2px' }}>
                                Pelo menos 1 número
                            </li>
                            <li style={{ color: passwordRequirements.specialChar ? 'green' : 'red', fontSize: '14px', padding: '2px' }}>
                                Pelo menos 1 caractere especial
                            </li>
                        </ul>
                        <input
                            type="password"
                            placeholder="Confirme a Senha"
                            role="textbox"
                            aria-label="Confirmação de Senha"
                            className="input-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {error && <p className="error-message">{error}</p>}
                        <input
                            type="submit"
                            value={loading ? "Criando Conta..." : "Criar Conta"} // Show loading text
                            role="button"
                            aria-label="Criar Conta"
                            className="btn-enviar"
                            disabled={loading} // Disable button while loading
                        />
                    </form>
                </section>
                <section className="lembrete" role="group">
                    <p>Já tem uma conta?</p>
                    <p className="p-login" role="link">
                        <Link to="/login">Entre agora mesmo :)</Link>
                    </p>
                </section>
            </main>
        </>
    );
}
