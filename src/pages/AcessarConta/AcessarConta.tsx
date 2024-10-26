import { useNavigate } from 'react-router-dom';
import './AcessarConta.css'; // Certifique-se de criar esse CSS se necessário

export default function AcessarConta() {
    const navigate = useNavigate(); // Hook para navegação

    const handleSubmit = (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Aqui você pode adicionar a lógica para processar a senha
        console.log('Senha enviada');
        // Navegar para uma página ou realizar outra ação após o envio
    };

    return (
        <>
            <header>
                <nav className="nav" role="navigation">
                    <a href="/login">
                        <img src="imgs/setaazul.png" alt="seta-azul" className="seta-azul" role="button" />
                    </a>
                    <img src="imgs/logodesktop.png" alt="logo Porto" className="logo" role="img" />
                </nav>
            </header>
            <main>
                <section>
                    <h1>ACESSAR CONTA</h1>
                    <article role="article">
                        <h2>Digite sua senha eletrônica.</h2>
                        <h2>A mesma cadastrada nos canais digitais da Porto.</h2>
                        <form role="form" onSubmit={handleSubmit}>
                            <input
                                type="password"
                                placeholder="Senha"
                                role="textbox"
                                aria-label="Esqueci minha senha"
                                className="input-senha"
                            />
                            <input
                                type="submit"
                                role="button"
                                aria-label="Enviar"
                                className="btn-enviar"
                            />
                        </form>
                    </article>
                    <div className="p-senha" role="button">
                        <p>Esqueci minha senha</p>
                    </div>
                </section>
            </main>
        </>
    );
}
