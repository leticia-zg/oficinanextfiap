import './Footer.css';
 
const Footer = () => {
    return (
        <footer role="contentinfo">
            <div className="footer-content">
                <img src="/imgs/logobranca.png" alt="Logo Porto" className="logo-branca" role="img" />
                <section className="contatos" role="group">
                    <h3>Acompanhe a Porto nas Redes Sociais</h3>
                    <ul role="navigation">
                        <li>
                            <a href="https://www.facebook.com/porto" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <img src="/imgs/facebook.png" alt="Logo do Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/porto/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <img src="/imgs/instagram.png" alt="Logo do Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/porto/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <img src="/imgs/linkedin.png" alt="Logo do LinkedIn" className="linkedin" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/portoseguro" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <img src="/imgs/youtube.png" alt="Logo do YouTube" className="youtube" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/portoseguro" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <img src="/imgs/twitter.png" alt="Logo do Twitter" className="twitter" />
                            </a>
                        </li>
                    </ul>
                </section>
                <section role="group">
                    <h3 className="h3-app">Baixe o App da Porto</h3>
                    <a href="https://apps.apple.com/us/app/porto-seguros-cart%C3%A3o-e/id1511026277" target="_blank" rel="noopener noreferrer" aria-label="Baixar na App Store">
                        <img src="/imgs/app store.png" alt="App Store" className="appstore" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=br.com.portoseguro.experienciacliente.mundoporto&referrer=utm_source%3Dhub-vendas%26utm_medium%3Dcta-download%26utm_campaign%3Dhub-vendas-rodape&pli=1"
                        target="_blank" rel="noopener noreferrer" aria-label="Baixar no Google Play">
                        <img src="/imgs/google play.png" alt="Google Play" className="googleplay" />
                    </a>
                </section>
                <section role="group" className="fac">
                    <h3 className="h3-app">Fale conosco</h3>
                    <h4>0800 727 2766 - Atendimento 24h.</h4>
                </section>
                <div className="div-footer" role="contentinfo">
                    <hr />
                    <ul>
                        <li><a href="https://www.portoseguro.com.br/privacidade" aria-label="Política de Privacidade">Privacidade</a></li>
                        <li><a href="https://www.portoseguro.com.br/institucional/politica-de-seguranca-da-informacao" aria-label="Política de Segurança da Informação">Segurança da Informação</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
 
export default Footer;