import './Duvidas.css';
import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

export default function Duvidas() {
  const [duvida, setDuvida] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');
  const [modalVisivel, setModalVisivel] = useState<boolean>(false);

  useEffect(() => {
    const respostas = document.querySelectorAll<HTMLImageElement>('.seta-baixo');

    respostas.forEach((resposta) => {
      resposta.onclick = () => {
        const duvidas = (resposta.closest('article')?.nextElementSibling as HTMLElement);
        if (duvidas) {
          duvidas.classList.toggle('teste');

          // Asserção de tipo para 'resposta' como HTMLImageElement
          const img = resposta as HTMLImageElement;
          if (duvidas.classList.contains('teste')) {
            img.src = '/imgs/seta-cima.png';
          } else {
            img.src = '/imgs/seta-para-baixo (2).png';
          }
        }
      };
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (duvida.length < 10) {
      setMensagem('A pergunta deve conter pelo menos 10 caracteres.');
      setModalVisivel(true);
    } else {
      setMensagem('Obrigada! Caso sua dúvida possua urgência, acesse nosso chat pelo ícone no canto inferior da tela.');
      setDuvida(''); // Limpa o campo de entrada após o envio
      setModalVisivel(true);
    }
  };

  const fecharModal = () => {
    setModalVisivel(false);
  };

  return (
    <>
      <Navbar />
      <main className="main-duvidas">
        <h1 className="h1">Dúvidas Frequentes</h1>
        
        <section className="perguntas">
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Segurado Porto possui desconto nos serviços?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div tabIndex={0} className="div-resposta">
            <p className="respostas">Sim, o segurado da Porto Seguro possui descontos em diversos serviços automotivos, residenciais e em estabelecimentos parceiros. Esses benefícios incluem revisões de veículos, assistência técnica e descontos exclusivos.</p>
          </div>
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Como faço para adquirir uma peça?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div tabIndex={0} className="div-resposta">
            <p className="respostas">Basta acessar a página de Auto Peças, verificar a peça que precisa e entrar em contato com um de nossos mecânicos parceiros.</p>
          </div>
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Como faço para realizar o auto diagnóstico?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div tabIndex={0} className="div-resposta">
            <p className="respostas">Para realizar o auto diagnóstico, acesse a página de serviços e vá para a página de auto diagnósticos. Insira os problemas notados no seu veículo e receba de imediato um diagnóstico prévio.</p>
          </div>
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Como faço para me tornar um segurado?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div tabIndex={0} className="div-resposta">
            <p className="respostas">Para se tornar um segurado Porto, basta entrar em contato com um corretor autorizado ou ligar para a central de atendimento. Eles irão orientá-lo sobre os planos disponíveis e o processo de contratação.</p>
          </div>
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Quais são as oficinas parceiras?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div tabIndex={0} className="div-resposta">
            <p className="respostas">Confira as oficinas parceiras acessando a página de serviços, mecânicos parceiros.</p>
          </div>
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Como faço para agendar uma revisão?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div tabIndex={0} className="div-resposta">
            <p className="respostas">Para agendar uma revisão na Porto Seguro, acesse o site oficial, use o aplicativo da Porto Seguro ou ligue para a central de atendimento. Siga as instruções para escolher o melhor horário e local para o serviço.</p>
          </div>
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Tem algum desconto no valor das peças?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div tabIndex={0} className="div-resposta">
            <p className="respostas">Caso você seja segurado Porto, algumas das peças possuem descontos exclusivos!</p>
          </div>
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Quanto tempo demora para o guincho chegar?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div tabIndex={0} className="div-resposta">
            <p className="respostas">O tempo de espera pode variar conforme a localização e o tráfego, mas a empresa se esforça para atender os clientes dentro de 30 a 60 minutos.</p>
          </div>
        </section>
        <section className="cont-perguntas">
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Como faço para agendar um serviço com um mecânico parceiro?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div className="div-resposta">
            <p className="respostas">Para agendar um serviço, basta acessar a aba "Mecânicos Parceiros", indicar sua região, selecionar a oficina de sua escolha e realizar um agendamento.</p>
          </div>
          <article role="article" tabIndex={0} className="article">
            <p className="p-pergunta">Qual a documentação necessária para realizar um seguro?</p>
            <img 
              src="/imgs/seta-para-baixo (2).png" 
              aria-expanded="false"
              className="seta-baixo" 
              alt="seta para baixo" 
              role="button" 
              tabIndex={0} 
            />
          </article>
          <div tabIndex={0} className="div-resposta">
            <p className="respostas">Para realizar a contratação do seguro, geralmente são necessários documentos como CPF, RG, comprovante de residência e documentos do veículo.</p>
          </div>
        </section>
        <section className="cont-perguntas">
          <div className="div-contato">
            <p className="p-contato">Caso tenha mais dúvidas, você pode acessar a área de "Assistência 24 horas" no site da Porto Seguro e seguir as instruções fornecidas.</p>
          </div>
        </section>

        <h2 className="h2-duvidas">Sua dúvida ainda não foi respondida?</h2>

        {/* Formulário de Feedback */}
        <form role="form" id="feedbackForm" onSubmit={handleSubmit}>
          <div className="div-chat">
            <label htmlFor="duvida" className="label-duvida">
              Escreva abaixo para que possamos aprimorar nossas dúvidas frequentes ou ligue no Fale Conosco para ser respondido(a) de imediato!
            </label>
            <img src="/imgs/chat.png" alt="chat" className="chat" role="img" />
          </div>
          <div className="btn">
            <input
              type="text"
              id="duvida"
              className="duvida"
              role="textbox"
              placeholder="Digite aqui"
              autoComplete="off"
              value={duvida}
              onChange={(e) => setDuvida(e.target.value)}
            />
            <input type="submit" className="btn-submit" role="button" value="Enviar" />
          </div>
        </form>

        {/* Modal customizado para mensagens */}
        {modalVisivel && (
          <div className="modal-overlay">
            <div className="modal-content">
              <p>{mensagem}</p>
              <button onClick={fecharModal}>Fechar</button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
