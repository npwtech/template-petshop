# Seu Petshop — Template de Landing Page para Petshop

Template de landing page para petshop (React + Vite + GSAP + WebGL/Three.js),
pensado para ser usado como modelo de vendas ao apresentar o serviço para
petshops de pequeno e médio porte.

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior instalado.

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (geralmente `http://localhost:5173`).

Para gerar a versão de produção (arquivos otimizados prontos para publicar):

```bash
npm run build
```

Os arquivos finais aparecem na pasta `dist/` — é só subir essa pasta em
qualquer hospedagem (Vercel, Netlify, Hostinger, etc).

## Como trocar o conteúdo (texto, produtos, fotos, WhatsApp)

Tudo o que é texto, preço, imagem e link fica em um único arquivo:

```
src/data/content.js
```

Edite ali o nome da marca, número de WhatsApp, endereço, horários,
serviços, produtos, diferenciais, depoimentos e fotos da galeria.
As imagens usadas no template vêm do Unsplash (banco de imagens de uso
livre) — para o site final do cliente, troque pelas fotos reais do
petshop (pode colocar os arquivos em `public/images/` e trocar os
caminhos no `content.js`).

## Como trocar a paleta de cores

Toda a cor do site vem de variáveis CSS em um único arquivo:

```
src/styles/theme.css
```

Basta editar os valores de `--color-bg`, `--color-accent`,
`--color-accent-2`, etc. no bloco `:root` para repintar o site inteiro.
O arquivo já vem com duas paletas alternativas prontas para teste
(`theme-clay` e `theme-sea`) — para testá-las, adicione a classe no
`<body>` dentro de `src/main.jsx` (ex: `document.body.className = 'theme-clay'`).

## Estrutura das seções

1. **Hero** — tela cheia com efeito WebGL de distorção líquida reativo ao mouse
2. **Marquee** — faixa animada com os serviços
3. **Manifesto** — declaração de posicionamento + números
4. **Serviços** — grid assimétrico (Banho & Tosa em destaque)
5. **Produtos** — vitrine com scroll horizontal fixado (sem carrinho — fechamento pelo WhatsApp)
6. **Banho & Tosa** — seção de destaque com imagem em parallax
7. **Por que escolher a gente** — lista de diferenciais
8. **Galeria** — grid de fotos
9. **Depoimentos** — carrossel arrastável
10. **Sobre a loja** — história + foto
11. **Localização** — endereço, horário e mapa incorporado
12. **Rodapé** — CTA final
13. **Barra inferior fixa (mobile)** + botão flutuante de WhatsApp

## Tecnologias

- React 18 + Vite
- GSAP + ScrollTrigger (animações de rolagem, scroll horizontal fixado, reveals)
- Three.js (shader WebGL customizado no hero)
- CSS puro com variáveis (sem framework de UI)

## Observações

- O site é 100% responsivo (mobile, tablet e desktop) e respeita a
  preferência do sistema por "reduzir movimento" (`prefers-reduced-motion`).
- O número de WhatsApp, endereço e fotos são placeholders — troque antes
  de apresentar para o cliente final.
- Este é um template de demonstração/venda: não possui carrinho de compras
  nem backend — o fechamento de pedidos acontece via WhatsApp, como é comum
  para petshops de pequeno/médio porte.
