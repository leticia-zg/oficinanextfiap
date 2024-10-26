# Oficina Virtual Porto

Este projeto é uma aplicação em vite-react + Typescript. A aplicação permite aos usuários realizar o Auto Diagnóstico, ver Benefícios para Segurados, solitar Guincho, localizar Mecânicos Parceiros, Consultar Peças automotivas e seus valores, tirar Dúvidas e Avaliar.

## Índice
- [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)
- [Assista ao vídeo no YouTube](https://youtu.be/XTZqjdAt4Ac?si=JFhoF7fCZs0dZoA0)
- [Link do repositório](https://github.com/leticia-zg/challenge-porto-react.git)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/leticia-zg/challenge-porto-react.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd challenge-porto-react
   ```

3. Instale as dependências:

   ```bash
   npm i
   ```

4. Inicie o servidor:

   ```bash
   npm run dev
   ```

## Funcionalidades

### 1. **Navegação e Layout**
- **Navbar**: Inclui a barra de navegação no topo da página, permitindo a navegação para diferentes seções do site.
- **Footer**: Adiciona um rodapé consistente em todas as páginas.
- **WatsonChat**: Integra um chatbot para suporte em tempo real.

### 2. **Página Home**
Reune informações sobre todas as funcionalidades da nossa Oficina Virtual.
- **Botão de Ação**: Um botão "Confira" que redireciona para a seção de serviços.
- **Imagem e Texto**: Mostra uma imagem ilustrativa e uma descrição detalhada sobre a empresa e os serviços oferecidos, incluindo diagnóstico de veículos, guincho, revisão programada e mais.
- **Artigos de Benefícios**: Exibe os principais benefícios dos segurados Porto, como serviços de chaveiro, assistência a panes, descontos exclusivos e carro de reserva.
- **Links para Serviços**: Oferece links para páginas detalhadas sobre auto peças, guincho, mecânicos parceiros e auto diagnóstico.
- **Mecânicos Parceiros**: Exibe uma seção adicional com informações sobre oficinas próximas ao cep inserido, e link para a página da Porto com todas os parceiros.
- **Perguntas e Respostas**: Seção interativa com perguntas frequentes. Cada pergunta pode ser expandida para revelar a resposta correspondente.

### 2. **Página Auto Peças**
OBS: EM IMPLEMENTAÇÃO!
- **Barra de Pesquisa**: Permite ao usuário pesquisar peças pelo nome, número da peça ou descrição.
- **Detalhes da Peça**: Fornece informações completas sobre cada peça, incluindo: descrição completa, imagens detalhes sobre compatibilidade e recomendações.
- **Redirecionamento para Oficinas**: Um recurso para ajudar o usuário a encontrar oficinas próximas que podem fornecer a peça ou realizar a instalação.

## Como Usar

1. **Pesquise Peças**: Use o campo de busca e os filtros para encontrar peças específicas.
2. **Examine os Resultados**: Visualize a lista de peças e clique em qualquer item para ver mais detalhes.
3. **Verifique os Detalhes**: Revise as informações completas sobre cada peça na página de detalhes.
4. **Encontre Oficinas Próximas**: Utilize a funcionalidade de busca de oficinas para localizar estabelecimentos próximos que possam fornecer ou instalar a peça.

### 3. **Página Guincho**
- **Formulário de Solicitação**: Apresenta campos com preenchimento obrigatório para a solicitação do serviço.
- **Informações Importantes**: Apresenta informações necessárias e essenciais para o precedimento.

### 4. **Página Auto Diagnóstico**
A página de auto diagnóstico permite que os usuários realizem uma análise preliminar dos problemas de seus veículos fornecendo informações sobre o mesmo. O sistema também gera uma estimativa de preço para o serviço necessário com base nas informações fornecidas
- **Assistente Virtual**: O usuário insere informações sobre o que está acontecendo com o veículo.
- **Análise das Informações**: Baseado nas informações fornecidas pelo usuário, o sistema analisa os dados para identificar possíveis problemas no veículo.
- **Diagnóstico Preliminar**: Gera uma descrição do diagnóstico preliminar, destacando os problemas identificados e as possíveis causas.
-**Cálculo de Custo**: A partir do diagnóstico preliminar, o sistema fornece uma estimativa de custo para o serviço necessário.

## Como Usar
1. **Informe o problema**: Insira as informações solicitadas no formulário de diagnóstico.
2. **Envie**: Clique no botão "Enviar" para processar as informações.
3. **Solicite o orçamento**: Verifique o diagnóstico preliminar e a estimativa de preço fornecidos.

