// src/pages/Guincho/Guincho.tsx
import { useState } from 'react';
import './Guincho.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';

interface FormData {
    origem: string;
    destino: string;
    placa: string;
    cor: string;
    ano: string;
    telefone: string;
}

export default function Guincho() {
    const [formData, setFormData] = useState<FormData>({
        origem: '',
        destino: '',
        placa: '',
        cor: '',
        ano: '',
        telefone: '',
    });
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [confirmationMessage, setConfirmationMessage] = useState<string>('');
    const [successModalVisible, setSuccessModalVisible] = useState<boolean>(false); // Modal de sucesso

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = (): boolean => {
        const { origem, destino, placa, ano, telefone } = formData;
        const phonePattern = /^\(\d{2}\)\s?\d{5}-\d{4}$/; // Exemplo: (11) 91234-5678
        const yearPattern = /^(19|20)\d{2}$/; // Aceita anos de 1900 até 2099

        if (!phonePattern.test(telefone)) {
            alert("Número de telefone deve estar no formato (DD) 9XXXX-XXXX.");
            return false;
        }

        if (origem === destino) {
            alert("O endereço de destino deve ser diferente do endereço de origem.");
            return false;
        }

        if (!placa.match(/^[A-Z]{3}[0-9][A-Z][0-9]{2}$/) && !placa.match(/^[A-Z]{3}-[0-9]{4}$/)) {
            alert("Placa deve estar no formato antigo (AAA-0A00) ou novo (AAA0A00).");
            return false;
        }

        if (!ano.match(yearPattern)) {
            alert("O ano do veículo deve ser um ano válido.");
            return false;
        }

        return true;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            setConfirmationMessage(`Endereço de origem: ${formData.origem}
                                    Endereço de destino: ${formData.destino}
                                    Placa: ${formData.placa}
                                    Cor: ${formData.cor}
                                    Ano do veículo: ${formData.ano}
                                    Telefone: ${formData.telefone}`);
            setModalVisible(true);
        }
    };

    const confirmRequest = () => {
        // Aqui você pode adicionar lógica para enviar a solicitação
        setSuccessModalVisible(true); // Abre o modal de sucesso
        setModalVisible(false); // Fecha o modal de confirmação
    };

    const closeSuccessModal = () => {
        window.location.reload(); // Recarrega a página
    };

    return (
        <>
            <Navbar />
            <main className="main-guincho">
                <h1 className="h1-guincho">Solicitar Guincho</h1>
                <h2 className="h2-guincho">Precisando de guincho?</h2>
                <h3 className="descricao-guincho">Deixe que a Porto cuida disso!</h3>
                <div className="preco-guincho">
                    <span>R$ 349,90 em até 10x sem juros</span>
                </div>
                <div className="imagem-container-guincho">
                    <img src="/imgs/guincho.png" alt="Imagem de um guincho" className="imagem-guincho" />
                </div>
                <form id="form-guincho" aria-labelledby="form-guincho-heading" onSubmit={handleSubmit}>
                    <h2 id="form-guincho-heading" className="visually-hidden">Formulário de Solicitação de Guincho</h2>
                    <div className="form-div-guincho">
                        <input type="text" id="origem" name="origem" className="form-input-guincho" required value={formData.origem} onChange={handleChange} aria-label="Endereço de origem" />
                        <label htmlFor="origem" className="form-label-guincho">Endereço de origem:<span className="campo-guincho">*</span></label>
                    </div>
                    <div className="form-div-guincho">
                        <input type="text" id="destino" name="destino" className="form-input-guincho" required value={formData.destino} onChange={handleChange} aria-label="Endereço de destino" />
                        <label htmlFor="destino" className="form-label-guincho">Endereço de destino:<span className="campo-guincho">*</span></label>
                    </div>
                    <div className="form-div-guincho">
                        <input type="text" id="placa" name="placa" className="form-input-guincho" required value={formData.placa} onChange={handleChange} aria-label="Qual a placa?" />
                        <label htmlFor="placa" className="form-label-guincho">Qual a placa?:<span className="campo-guincho">*</span></label>
                    </div>
                    <div className="form-div-guincho">
                        <input type="text" id="cor" name="cor" className="form-input-guincho" required value={formData.cor} onChange={handleChange} aria-label="Qual a cor?" />
                        <label htmlFor="cor" className="form-label-guincho">Qual a cor?:<span className="campo-guincho">*</span></label>
                    </div>
                    <div className="form-div-guincho">
                        <input type="text" id="ano" name="ano" className="form-input-guincho" required value={formData.ano} onChange={handleChange} aria-label="Qual o ano do veículo?" />
                        <label htmlFor="ano" className="form-label-guincho">Qual o ano do veículo?:<span className="campo-guincho">*</span></label>
                    </div>
                    <div className="form-div-guincho">
                        <input type="text" id="telefone" name="telefone" className="form-input-guincho" required value={formData.telefone} onChange={handleChange} aria-label="Número de telefone" />
                        <label htmlFor="telefone" className="form-label-guincho">Número de telefone:<span className="campo-guincho">*</span></label>
                    </div>
                    <p className="info-guincho">Incluso: Atendimento em todo o território nacional, remoção do veículo e transporte até o local desejado.</p>
                    <span className="importante-info-guincho">Importante! Na hora de contratar o serviço, informe o endereço exato do local onde o veículo se encontra.</span>
                    <div className="submit-container-guincho">
                        <button type="submit" className="submit-btn-guincho">Enviar</button>
                    </div>
                </form>
                <ul className="info-list-guincho">
                    <li>É necessário a presença de um responsável maior de 18 anos, tanto no local de retirada quanto no local de destino; caso contrário, o serviço não será realizado e será cobrado o valor integral do serviço.</li>
                    <li>É importante que você retire todos os seus objetos pessoais e de valor do interior do automóvel ou do compartimento da moto para evitar a perda de algum objeto durante o trajeto.</li>
                    <li>No momento da remoção, deverá ser apresentado o documento do veículo e documento do responsável.</li>
                    <li>É importante avisar o prestador caso o veículo possua algum sistema de travas, segredos, alarmes, sensores de presença, rastreadores, bloqueadores ou similares.</li>
                    <li>Em casos de acidentes de trânsito com vítimas, o guincho só poderá ser acionado após a chegada da polícia, a qual deve ser informada de forma imediata.</li>
                </ul>

                {/* Modal de Confirmação */}
                {modalVisible && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Confirmação de Solicitação</h2>
                            <p>{confirmationMessage}</p>
                            <button onClick={confirmRequest} className="confirm-btn">Confirmar</button>
                            <button onClick={() => setModalVisible(false)} className="cancel-btn">Cancelar</button>
                        </div>
                    </div>
                )}

                {/* Modal de Sucesso */}
                {successModalVisible && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2>Solicitação Enviada!</h2>
                            <p>Guincho solicitado! Entraremos em contato para mais informações em breve!</p>
                            <button onClick={closeSuccessModal} className="confirm-btn">Fechar</button>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}
