import './Home.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Local from '../../Components/Local/Local';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  useEffect(() => {
    const respostas = document.querySelectorAll<HTMLElement>(".seta-baixo");

    respostas.forEach((resposta) => {
      resposta.onclick = () => {
        const duvidas = resposta.closest("article")?.nextElementSibling as HTMLElement;
        if (duvidas) {
          duvidas.classList.toggle("teste");

          // Altere o caminho do arquivo de imagem conforme necessário
          (resposta as HTMLImageElement).src = duvidas.classList.contains("teste")
            ? "/imgs/seta-cima.png"
            : "/imgs/seta-para-baixo (2).png";
        }

        // Aqui você pode ter outras manipulações que resultem em números
        // Exemplo de manipulação que pode gerar erro
        const valorString: string = (resposta as HTMLElement).getAttribute("data-valor") || "0";
        const valorNumber: number = parseFloat(valorString); // Converte para número
      };
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-home">
        <span>Home/Seguro Auto</span>
        <section className="intro">
          <div className="seguro">
            <h1 className="h1-home">SEGURO AUTO</h1>
            <h3 className="h3-home">Conheça nosso <br /> Auto Diagnóstico</h3>
            <p className="p-home">Cada vez mais praticidade!</p>
            <Link to="https://chatoficinavirtual.netlify.app/">
              <button>Auto Diagnóstico</button>
            </Link>
          </div>
          <div className="pecas-intro">
            <img src="/imgs/fundo-servicos.png"
              alt="peças automotivas"
              className="pecas" />
          </div>
        </section>
        <div className="historia">
          <section className="sobre" role="group">
            <img src="/imgs/ferramentas.jpg"
              alt="ferramentas"
              className="ferramentas"
              role="img" />
            <div>
              <h3>Sobre</h3>
              <p>
                A <span>Oficina Virtual</span>surgiu da necessidade de fornecer para nossos clientes um diagnóstico
                do veículo de forma rápida, segura e eficaz! Além do serviço de autodiagnóstico, contamos também
                com: serviço de guincho, revisão programada, autopeças online, mecânicos parceiros...
              </p>
            </div>
          </section>
        </div>
        <p className="confira" id="segurado">Torne-se um segurado</p>
        <section className="segurado">
          <article className="primeiros-beneficios">
            <div className="beneficios">
              <img src="/imgs/chaveiro.png" alt="chaveiro" />
              <h3>Serviços de chaveiro</h3>
              <p>
                Perda de chaves. <br />
                Chave quebrada na fechadura. <br />
              </p>
            </div>
            <div className="beneficios">
              <img src="/imgs/assistencia.png" alt="assistência" />
              <h3>Assistência à panes</h3>
              <p>
                Problemas mecânicos, elétricos <br />
                ou outras emergências.
              </p>
            </div>
          </article>
          <article className="cont-beneficios">
            <div className="beneficios">
              <img src="/imgs/desconto.png" alt="descontos" />
              <h3>Descontos exclusivos</h3>
              <p>
                Incluso compras e serviços, lazer <br />
                entretenimento, educação.
              </p>
            </div>
            <div className="beneficios" id="servicos">
              <img src="/imgs/carrinho.png" alt="carro" />
              <h3>Carro de reserva</h3>
              <p>
                Utilização variada dependendo <br />do período
                estipulado na apólice.
              </p>
            </div>
          </article>
        </section>

        <p className="confira">Confira nossos serviços</p>
        <section className="servicos">
          <article className="primeiros-servicos">
            <div className="servico">
              <Link to="/pecas">
                <img src="/imgs/peças.jpg" alt="peças automotivas" />
              </Link>
              <h3>Auto Peças</h3>
              <p>Faça um orçamento.</p>
            </div>
            <div className="servico">
              <Link to="/guincho">
                <img src="/imgs/guincho.png" alt="guincho" />
              </Link>
              <h3>Guincho</h3>
              <p>Serviço de guincho 24horas.</p>
            </div>
          </article>
          <article className="cont-servicos">
            <div className="servico">
              <a href="#local-section">
                <img src="/imgs/mecanicos.jpg" alt="mecânicos parceiros" />
              </a>
              <h3>Mecânicos Parceiros</h3>
              <p>Confira nossos parceiros.</p>
            </div>
            <div className="servico">
              <a href="https://chatoficinavirtual.netlify.app/">
                <img src="/imgs/notediagnostico.jpg" alt="diagnóstico" />
              </a>
              <h3 id="local-section">Auto Diagnóstico</h3>
              <p>Realize o auto diagnóstico online.</p>
            </div>
          </article>
        </section>
        <Local />
        <p className="duvidafrequente">Dúvidas Frequentes</p>
        <section className="perguntas">
          <article role="article" className="article">
            <p className="p-pergunta">Segurado Porto possui desconto nos serviços?</p>
            <img src="/imgs/seta-para-baixo (2).png" className="seta-baixo" alt="seta para baixo" role="button"
              aria-expanded="false" />
          </article>
          <div className="div-resposta">
            <p className="respostas">Sim, o segurado da Porto Seguro possui descontos em diversos serviços automotivos,
              residenciais e em estabelecimentos parceiros.
              Esses benefícios incluem revisões de veículos, assistência técnica e descontos exclusivos.</p>
          </div>
          <article role="article" className="article">
            <p className="p-pergunta">Como faço para adquirir uma peça?</p>
            <img src="/imgs/seta-para-baixo (2).png" className="seta-baixo" alt="seta para baixo" role="button"
              aria-expanded="false" />
          </article>
          <div className="div-resposta">
            <p className="respostas">Basta acessar a página de Auto Peças, verificar a peça que precisa e entrar em
              contato com um de nossos mecânicos parceiros.</p>
          </div>
          <article role="article" className="article">
            <p className="p-pergunta">Quais serviços estão inclusos no seguro?</p>
            <img src="/imgs/seta-para-baixo (2).png" className="seta-baixo" alt="seta para baixo" role="button"
              aria-expanded="false" />
          </article>
          <div className="div-resposta">
            <p className="respostas">O seguro de automóvel inclui serviços de guincho, assistência em casos de pane e
              outros serviços disponíveis conforme a apólice.
            </p>
          </div>
          <article role="article" className="article">
            <p className="p-pergunta">Como posso me tornar um segurado?</p>
            <img src="/imgs/seta-para-baixo (2).png" className="seta-baixo" alt="seta para baixo" role="button"
              aria-expanded="false" />
          </article>
          <div className="div-resposta">
            <p className="respostas">Para se tornar um segurado da Porto Seguro, entre em contato conosco pelo
              WhatsApp ou pelo telefone.
              Nós ajudaremos a iniciar o seu processo de adesão.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
