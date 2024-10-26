import './Pecas.css';
import Navbar from '../../Components/Navbar/Navbar';

export default function Pecas() {

    return (
        <>
            <Navbar />
            <main className="main-pecas">
                <div className="pesquisa">
                    <p className="p-pesquisa">Qual peça está procurando?</p>
                    <div className="container">
                        <input
                            type="search"
                            id="search-input"
                            className="buscar"
                            placeholder="nome, número da peça ou descrição"
                            aria-label="Buscar peça"
                        />
                        <img
                            className="search-icon"
                            src="/imgs/lupa.png"
                            alt="Ícone de lupa para buscar"
                        />
                    </div>
                </div>
                <section className="pecas-auto">
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/bombadagua.png" alt="Imagem de uma Bomba d'água" />
                        <div className="text-container">
                        <h3 className="nome-peca">Bomba d'água</h3>
                            <p className="pecas-p">
                                Função: Circula o fluido de arrefecimento pelo motor.<br />
                                Detalhamento: Essencial para manter a temperatura adequada do motor, prevenindo, assim o superaquecimento.
                            </p>
                        </div>
                    </article>
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/filtroar.png" alt="Imagem de um Filtro de ar" />
                        <div className="text-container">
                            <h3 className="nome-peca">Filtro de Ar</h3>
                            <p className="pecas-p">
                                Função: Filtra o ar que entra no motor.<br />
                                Detalhamento: Impede que sujeira e partículas entrem no motor, garantindo melhor combustão e eficiência.
                            </p>
                        </div>
                    </article>
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/cabosdevela.png" alt="Imagem de Cabos de vela" />
                        <div className="text-container">
                        <h3 className="nome-peca">Cabos de Vela</h3>
                            <p className="pecas-p">
                                Função: Conduzem a corrente elétrica para as velas de ignição.<br />
                                Detalhamento: Responsáveis por fornecer a energia necessária para a ignição do motor.
                            </p>
                        </div>
                    </article>
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/discosdefreio.png" alt="Imagem de Discos de freio" />
                        <div className="text-container">
                        <h3 className="nome-peca">Discos de Freio</h3>
                            <p className="pecas-p">
                                Função: Permitem a frenagem através do atrito com as pastilhas.<br />
                                Detalhamento: Crucial para reduzir a velocidade do veículo de forma segura e eficiente.
                            </p>
                        </div>
                    </article>
                </section>
                <section className="cont-pecas">
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/buchasuspensao.png" alt="Imagem de Buchas de suspensão" />
                        <div className="text-container">
                        <h3 className="nome-peca">Buchas de Suspensão</h3>
                            <p className="pecas-p">
                                Função: Absorvem impactos e vibrações na suspensão.<br />
                                Detalhamento: Contribuem para o conforto ao dirigir, isolando o chassi de impactos diretos.
                            </p>
                        </div>
                    </article>
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/bateria.png" alt="Imagem de uma Bateria" />
                        <div className="text-container">
                        <h3 className="nome-peca">Bateria</h3>
                            <p className="pecas-p">
                                Função: Armazena e fornece energia elétrica ao veículo.<br />
                                Detalhamento: Alimenta o motor de partida e os sistemas elétricos do veículo.
                            </p>
                        </div>
                    </article>
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/cilindromestre.png" alt="Imagem de um Cilindro mestre" />
                        <div className="text-container">
                        <h3 className="nome-peca">Cilindro Mestre</h3>
                            <p className="pecas-p">
                                Função: Controla a pressão hidráulica no sistema de freios.<br />
                                Detalhamento: Distribui a pressão do pedal para as pinças de freio, permitindo a frenagem.
                            </p>
                        </div>
                    </article>
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/pastilha.png" alt="Imagem de uma Pastilha de freio" />
                        <div className="text-container">
                        <h3 className="nome-peca">Pastilhas de Freio</h3>
                            <p className="pecas-p">
                                Função: Criam atrito nos discos para parar o veículo.<br />
                                Detalhamento: São componentes essenciais do sistema de freios a disco, garantindo desaceleração segura.
                            </p>
                        </div>
                    </article>
                </section>
                <section className="maispecas">
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/tensionador.png" alt="Imagem de um Tensionador" />
                        <div className="text-container">
                        <h3 className="nome-peca">Tensionador</h3>
                            <p className="pecas-p">
                                Função: Mantém a tensão adequada da correia do motor.<br />
                                Detalhamento: Garante que a correia do motor funcione de forma suave e sem folga, prevenindo falhas.
                            </p>
                        </div>
                    </article>
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/radiador.png" alt="Imagem de um Radiador" />
                        <div className="text-container">
                        <h3 className="nome-peca">Radiador</h3>
                            <p className="pecas-p">
                                Função: Dissipa o calor do fluido de arrefecimento do motor.<br />
                                Detalhamento: Essencial para evitar o superaquecimento do motor, mantendo a temperatura ideal de operação.
                            </p>
                        </div>
                    </article>
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/rolamentos.png" alt="Imagem de Rolamentos" />
                        <div className="text-container">
                        <h3 className="nome-peca">Rolamentos</h3>
                            <p className="pecas-p">
                                Função: Reduzem o atrito entre as partes móveis.<br />
                                Detalhamento: Garantem o movimento suave das rodas e de outras partes giratórias do veículo.
                            </p>
                        </div>
                    </article>
                    <article className="pecas-article">
                        <img className="pecas-img" src="/imgs/terminaldirecao.png" alt="Imagem de um Terminal de direção" />
                        <div className="text-container">
                        <h3 className="nome-peca">Terminal de Direção</h3>
                            <p className="pecas-p">
                                Função: Liga o sistema de direção às rodas.<br />
                                Detalhamento: Responsável por transferir o movimento do volante para as rodas, permitindo o controle da direção.
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        </>
    );
}
